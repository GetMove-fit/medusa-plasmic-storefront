// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: o7C61dL2AAD7uCRtgHRJ1p
// Component: Pd7_9MA2ajnP

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

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: o7C61dL2AAD7uCRtgHRJ1p/projectcss
import sty from "./PlasmicFilterZeile.module.css"; // plasmic-import: Pd7_9MA2ajnP/css

createPlasmicElementProxy;

export type PlasmicFilterZeile__VariantMembers = {
  selected: "selected";
};
export type PlasmicFilterZeile__VariantsArgs = {
  selected?: SingleBooleanChoiceArg<"selected">;
};
type VariantPropType = keyof PlasmicFilterZeile__VariantsArgs;
export const PlasmicFilterZeile__VariantProps = new Array<VariantPropType>(
  "selected"
);

export type PlasmicFilterZeile__ArgsType = {
  indikator?: number;
  name?: string;
  onSelected?: () => void;
};
type ArgPropType = keyof PlasmicFilterZeile__ArgsType;
export const PlasmicFilterZeile__ArgProps = new Array<ArgPropType>(
  "indikator",
  "name",
  "onSelected"
);

export type PlasmicFilterZeile__OverridesType = {
  content7?: Flex__<"button">;
};

export interface DefaultFilterZeileProps {
  indikator?: number;
  name?: string;
  onSelected?: () => void;
  selected?: SingleBooleanChoiceArg<"selected">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicFilterZeile__RenderFunc(props: {
  variants: PlasmicFilterZeile__VariantsArgs;
  args: PlasmicFilterZeile__ArgsType;
  overrides: PlasmicFilterZeile__OverridesType;
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
        path: "selected",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.selected
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
    <button
      data-plasmic-name={"content7"}
      data-plasmic-override={overrides.content7}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.button,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.content7,
        { [sty.content7selected]: hasVariant($state, "selected", "selected") }
      )}
      onClick={async event => {
        const $steps = {};

        $steps["runOnSelected"] = true
          ? (() => {
              const actionArgs = { eventRef: $props["onSelected"] };
              return (({ eventRef, args }) => {
                return eventRef?.(...(args ?? []));
              })?.apply(null, [actionArgs]);
            })()
          : undefined;
        if (
          $steps["runOnSelected"] != null &&
          typeof $steps["runOnSelected"] === "object" &&
          typeof $steps["runOnSelected"].then === "function"
        ) {
          $steps["runOnSelected"] = await $steps["runOnSelected"];
        }
      }}
      ref={ref => {
        $refs["content7"] = ref;
      }}
    >
      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text___5ZiS2,
          {
            [sty.textselected___5ZiS2Iisep]: hasVariant(
              $state,
              "selected",
              "selected"
            )
          }
        )}
      >
        <React.Fragment>
          {(() => {
            try {
              return $props.name;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return "Name";
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
          sty.text__yY0G6,
          {
            [sty.textselected__yY0G6Iisep]: hasVariant(
              $state,
              "selected",
              "selected"
            )
          }
        )}
      >
        <React.Fragment>
          {(() => {
            try {
              return $props.indikator;
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
    </button>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  content7: ["content7"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  content7: "button";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFilterZeile__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFilterZeile__VariantsArgs;
    args?: PlasmicFilterZeile__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFilterZeile__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicFilterZeile__ArgsType,
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
          internalArgPropNames: PlasmicFilterZeile__ArgProps,
          internalVariantPropNames: PlasmicFilterZeile__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicFilterZeile__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "content7") {
    func.displayName = "PlasmicFilterZeile";
  } else {
    func.displayName = `PlasmicFilterZeile.${nodeName}`;
  }
  return func;
}

export const PlasmicFilterZeile = Object.assign(
  // Top-level PlasmicFilterZeile renders the root element
  makeNodeComponent("content7"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicFilterZeile
    internalVariantProps: PlasmicFilterZeile__VariantProps,
    internalArgProps: PlasmicFilterZeile__ArgProps
  }
);

export default PlasmicFilterZeile;
/* prettier-ignore-end */