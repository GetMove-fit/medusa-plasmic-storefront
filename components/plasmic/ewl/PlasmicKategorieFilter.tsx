// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: o7C61dL2AAD7uCRtgHRJ1p
// Component: BS2N7MBtUEMD

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

import FilterZeile from "../../FilterZeile"; // plasmic-import: Pd7_9MA2ajnP/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: o7C61dL2AAD7uCRtgHRJ1p/projectcss
import sty from "./PlasmicKategorieFilter.module.css"; // plasmic-import: BS2N7MBtUEMD/css

createPlasmicElementProxy;

export type PlasmicKategorieFilter__VariantMembers = {
  offen: "offen";
};
export type PlasmicKategorieFilter__VariantsArgs = {
  offen?: SingleBooleanChoiceArg<"offen">;
};
type VariantPropType = keyof PlasmicKategorieFilter__VariantsArgs;
export const PlasmicKategorieFilter__VariantProps = new Array<VariantPropType>(
  "offen"
);

export type PlasmicKategorieFilter__ArgsType = {
  kategorie?: any;
};
type ArgPropType = keyof PlasmicKategorieFilter__ArgsType;
export const PlasmicKategorieFilter__ArgProps = new Array<ArgPropType>(
  "kategorie"
);

export type PlasmicKategorieFilter__OverridesType = {
  content3?: Flex__<"div">;
  content4?: Flex__<"div">;
  content5?: Flex__<"div">;
};

export interface DefaultKategorieFilterProps {
  kategorie?: any;
  offen?: SingleBooleanChoiceArg<"offen">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicKategorieFilter__RenderFunc(props: {
  variants: PlasmicKategorieFilter__VariantsArgs;
  args: PlasmicKategorieFilter__ArgsType;
  overrides: PlasmicKategorieFilter__OverridesType;
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

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "offen",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.offen
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  return (
    <div
      data-plasmic-name={"content3"}
      data-plasmic-override={overrides.content3}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.content3
      )}
    >
      <Stack__
        as={"div"}
        data-plasmic-name={"content4"}
        data-plasmic-override={overrides.content4}
        hasGap={true}
        className={classNames(projectcss.all, sty.content4, {
          [sty.content4offen]: hasVariant($state, "offen", "offen")
        })}
        onClick={async event => {
          const $steps = {};

          $steps["updateOffen"] = true
            ? (() => {
                const actionArgs = {
                  vgroup: "offen",
                  operation: 2,
                  value: "offen"
                };
                return (({ vgroup, value }) => {
                  if (typeof value === "string") {
                    value = [value];
                  }

                  const oldValue = $stateGet($state, vgroup);
                  $stateSet($state, vgroup, !oldValue);
                  return !oldValue;
                })?.apply(null, [actionArgs]);
              })()
            : undefined;
          if (
            $steps["updateOffen"] != null &&
            typeof $steps["updateOffen"] === "object" &&
            typeof $steps["updateOffen"].then === "function"
          ) {
            $steps["updateOffen"] = await $steps["updateOffen"];
          }
        }}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__cIsKt
          )}
        >
          <React.Fragment>
            {(() => {
              try {
                return $props.kategorie.Name;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return "Kategorie";
                }
                throw e;
              }
            })()}
          </React.Fragment>
        </div>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__baIu5,
            {
              [sty.textoffen__baIu5NS0Vq]: hasVariant($state, "offen", "offen")
            }
          )}
        >
          <React.Fragment>
            {(() => {
              try {
                return $props.kategorie.Anzahl;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return "0";
                }
                throw e;
              }
            })()}
          </React.Fragment>
        </div>
      </Stack__>
      <Stack__
        as={"div"}
        data-plasmic-name={"content5"}
        data-plasmic-override={overrides.content5}
        hasGap={true}
        className={classNames(projectcss.all, sty.content5, {
          [sty.content5offen]: hasVariant($state, "offen", "offen")
        })}
      >
        <FilterZeile
          className={classNames("__wab_instance", sty.filterZeile__mAwdu)}
          indikator={(() => {
            try {
              return $props.kategorie.Anzahl;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return undefined;
              }
              throw e;
            }
          })()}
          name={"Alle"}
          selected={(() => {
            try {
              return (
                $props.kategorie.Name === $ctx.params.kategorie &&
                $ctx.pageRoute === "/kaufen/[kategorie]"
              );
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return [];
              }
              throw e;
            }
          })()}
        />

        {(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
          (() => {
            try {
              return $props.kategorie.Unterkategorien;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return [];
              }
              throw e;
            }
          })()
        ).map((__plasmic_item_0, __plasmic_idx_0) => {
          const unterKategorie = __plasmic_item_0;
          const currentIndex = __plasmic_idx_0;
          return (
            <FilterZeile
              className={classNames("__wab_instance", sty.filterZeile__eWd3, {
                [sty.filterZeileoffen__eWd3NS0Vq]: hasVariant(
                  $state,
                  "offen",
                  "offen"
                )
              })}
              indikator={(() => {
                try {
                  return unterKategorie.Anzahl;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return undefined;
                  }
                  throw e;
                }
              })()}
              key={currentIndex}
              name={(() => {
                try {
                  return unterKategorie.Name;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return undefined;
                  }
                  throw e;
                }
              })()}
              selected={(() => {
                try {
                  return (
                    (!$ctx.params.unterkategorie &&
                      unterKategorie.Name === "Alle") ||
                    $ctx.params.unterkategorie === unterKategorie.Name
                  );
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return [];
                  }
                  throw e;
                }
              })()}
            />
          );
        })}
      </Stack__>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  content3: ["content3", "content4", "content5"],
  content4: ["content4"],
  content5: ["content5"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  content3: "div";
  content4: "div";
  content5: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicKategorieFilter__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicKategorieFilter__VariantsArgs;
    args?: PlasmicKategorieFilter__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicKategorieFilter__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicKategorieFilter__ArgsType,
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
          internalArgPropNames: PlasmicKategorieFilter__ArgProps,
          internalVariantPropNames: PlasmicKategorieFilter__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicKategorieFilter__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "content3") {
    func.displayName = "PlasmicKategorieFilter";
  } else {
    func.displayName = `PlasmicKategorieFilter.${nodeName}`;
  }
  return func;
}

export const PlasmicKategorieFilter = Object.assign(
  // Top-level PlasmicKategorieFilter renders the root element
  makeNodeComponent("content3"),
  {
    // Helper components rendering sub-elements
    content4: makeNodeComponent("content4"),
    content5: makeNodeComponent("content5"),

    // Metadata about props expected for PlasmicKategorieFilter
    internalVariantProps: PlasmicKategorieFilter__VariantProps,
    internalArgProps: PlasmicKategorieFilter__ArgProps
  }
);

export default PlasmicKategorieFilter;
/* prettier-ignore-end */