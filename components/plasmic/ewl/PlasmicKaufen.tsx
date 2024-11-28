// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: o7C61dL2AAD7uCRtgHRJ1p
// Component: yXUARw7mv_M0

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import {
  executePlasmicDataOp,
  usePlasmicDataOp,
  usePlasmicInvalidate
} from "@plasmicapp/react-web/lib/data-sources";

import Header from "../../Header"; // plasmic-import: flZbWZPtlB4m/component
import ProdukteListe from "../../ProdukteListe"; // plasmic-import: t7czxYlbZr62/component
import Footer from "../../Footer"; // plasmic-import: xGg6X7hlsmRZ/component
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: o7C61dL2AAD7uCRtgHRJ1p/projectcss
import sty from "./PlasmicKaufen.module.css"; // plasmic-import: yXUARw7mv_M0/css

createPlasmicElementProxy;

export type PlasmicKaufen__VariantMembers = {};
export type PlasmicKaufen__VariantsArgs = {};
type VariantPropType = keyof PlasmicKaufen__VariantsArgs;
export const PlasmicKaufen__VariantProps = new Array<VariantPropType>();

export type PlasmicKaufen__ArgsType = {};
type ArgPropType = keyof PlasmicKaufen__ArgsType;
export const PlasmicKaufen__ArgProps = new Array<ArgPropType>();

export type PlasmicKaufen__OverridesType = {
  root?: Flex__<"div">;
  header?: Flex__<typeof Header>;
  produkteListe?: Flex__<typeof ProdukteListe>;
  footer?: Flex__<typeof Footer>;
};

export interface DefaultKaufenProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicKaufen__RenderFunc(props: {
  variants: PlasmicKaufen__VariantsArgs;
  args: PlasmicKaufen__ArgsType;
  overrides: PlasmicKaufen__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  let [$queries, setDollarQueries] = React.useState<
    Record<string, ReturnType<typeof usePlasmicDataOp>>
  >({});
  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "produkteListe.auswahl",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: $queries,
    $refs
  });

  const new$Queries: Record<string, ReturnType<typeof usePlasmicDataOp>> = {
    produkte: usePlasmicDataOp(() => {
      return {
        sourceId: "myV3btqAbPcYeVBRQWDUmc",
        opId: "1e1b809e-c6ba-4671-814e-b4fd11c4a922",
        userArgs: {
          params: [
            $ctx.query.suchen,
            JSON.stringify(["categories.lvl0", "categories.lvl1"]),
            (() => {
              const filters = [];
              return JSON.stringify(filters);
            })()
          ]
        },
        cacheKey: `plasmic.$.1e1b809e-c6ba-4671-814e-b4fd11c4a922.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    })
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);

    $queries = new$Queries;
  }

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <Stack__
          as={"div"}
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          hasGap={true}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <Header
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames("__wab_instance", sty.header)}
          />

          <ProdukteListe
            data-plasmic-name={"produkteListe"}
            data-plasmic-override={overrides.produkteListe}
            className={classNames("__wab_instance", sty.produkteListe)}
            onAuswahlChange={generateStateOnChangeProp($state, [
              "produkteListe",
              "auswahl"
            ])}
          />

          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </Stack__>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "header", "produkteListe", "footer"],
  header: ["header"],
  produkteListe: ["produkteListe"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  produkteListe: typeof ProdukteListe;
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicKaufen__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicKaufen__VariantsArgs;
    args?: PlasmicKaufen__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicKaufen__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicKaufen__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicKaufen__ArgProps,
          internalVariantPropNames: PlasmicKaufen__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicKaufen__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicKaufen";
  } else {
    func.displayName = `PlasmicKaufen.${nodeName}`;
  }
  return func;
}

export const PlasmicKaufen = Object.assign(
  // Top-level PlasmicKaufen renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    produkteListe: makeNodeComponent("produkteListe"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicKaufen
    internalVariantProps: PlasmicKaufen__VariantProps,
    internalArgProps: PlasmicKaufen__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicKaufen;
/* prettier-ignore-end */
