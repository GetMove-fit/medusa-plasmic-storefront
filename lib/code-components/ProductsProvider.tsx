import { CodeComponentMeta, DataProvider } from "@plasmicapp/host";
import { ReactNode, useEffect, useMemo, useState } from "react";

const algoliaUrl = "https://L4JXGWTOTH.algolia.net/1/indexes/*/queries";
const indexName = "ewl-test.default-channel.USD.products";
const headers: HeadersInit = {
  "Content-Type": "application/json",
  "x-algolia-api-key": "126cd3b826e79c43e0a66664ce55e352",
  "x-algolia-application-id": "L4JXGWTOTH"
}

interface ProductsProviderProps {
  children?: ReactNode,
  className?: string,
  kategorie?: string,
  unterkategorie?: string,
  params: {
    suchen?: string,
    von?: number,
    bis?: number
  } & Record<string, string>
}

export default function ProductsProvider(props: ProductsProviderProps) {
  const { children, className, kategorie, unterkategorie, params } = props;
  const { suchen, von, bis, ...attributeParams } = params; 
  
  const [data, setData] = useState<any>(null);

  const categoryFilters = useMemo(() => {
    const filters: Record<string, string> = {};
    
    if (kategorie) {
      filters["categories.lvl0"] = kategorie;
    }
    if (unterkategorie) {
      filters["categories.lvl1"] = unterkategorie;
    }
  
    return filters;
  }, [kategorie, unterkategorie]);

  const attributeFilters = useMemo(() => {
    const notAttributes = ["suchen", "kategorie", "unterkategorie", "von", "bis"];
    return Object.fromEntries(
      Object.entries(attributeParams).filter(([p, v]) => !notAttributes.includes(p))
        .map(([p, v]) => [`attributes.${p}`, v]));
  }, [attributeParams]);
  
  const numericFilters = useMemo(() => {
    const filters: string[] = [];
    
    if (von) {
      filters.push("productPricing.priceRange.start.gross >= " + von);
    }
    if (bis) {
      filters.push("productPricing.priceRange.stop.gross <= " + bis);
    }
    
    return filters;
  }, [bis, von]);
  
  useEffect(() => {
    
    const fetchProducts = async () => {
      const req = {
        indexName,
        query: attributeParams.suchen,
        numericFilters
      };

      const facetFilters = [
        ...Object.entries(categoryFilters),
        ...Object.entries(attributeFilters),
      ];

      let facetRequests = Object.keys(attributeFilters).map(facet => ({
        ...req,
        type: "facet",
        facet,
        facetFilters: facetFilters.filter(([f, v]) => f !== facet).map(([f, v]) => `${f}:${v}`),
      }));

      if (kategorie && Object.entries(attributeFilters).length > 0) {
        const facetFilters = Object.entries(attributeFilters).map(([f, v]) => `${f}:${v}`);
        facetRequests.push({
          ...req,
          type: "facet",
          facet: "categories.lvl0",
          facetFilters
        },
        {
          ...req,
          type: "facet",
          facet: "categories.lvl1",
          facetFilters
        });
      }
      console.log(JSON.stringify(facetRequests))

      const resp = await fetch(algoliaUrl, {
        method: "POST",
        headers,
        body: JSON.stringify({
          requests: [
            {
              ...req,
              facetFilters,
              facets: "*"
            },
            ...facetRequests
          ]
        })
      });
      if (!resp.ok) return;

      const [results, ...facets] = (await resp.json()).results as any[];
      facetFilters.forEach(([filter], i) => 
        results.facets[filter] = Object.fromEntries((facets[i].facetHits as any[]).map((fh: {
          value: string,
          count: number
        }) => ([fh.value, fh.count])))
      );

      console.log(results.facets)
      
      const lvl1 = Object.entries(results.facets["categories.lvl1"]).map(uk => {
        const lvls = uk[0].split(" > ");
        return {
          Hauptkategorie: lvls[0],
          Name: lvls[1],
          Anzahl: uk[1]
        };
      });
      const kategorien = Object.entries(results.facets["categories.lvl0"]).map(k => ({
        Name: k[0],
        Anzahl: k[1],
        Unterkategorien: lvl1.filter(uk => uk.Hauptkategorie === k[0])
      }));

      setData({
        results,
        kategorien
      });
    };

    fetchProducts();
  }, [attributeFilters, categoryFilters, kategorie, numericFilters, attributeParams, unterkategorie])

  return (
    <div className={className}>
      <DataProvider name="suche" data={data}>
        {children}
      </DataProvider>
    </div>
  );
}

export const productsProviderMeta: CodeComponentMeta<ProductsProviderProps> = {
  name: "ProductsProvider",
  importPath: "./components/ProductsProvider",
  providesData: true,
  props: {
    children: "slot",
    suchBegriff: "string",
    kategorie: "string",
    unterkategorie: "string",
    attributeParams: "object"
  }
};