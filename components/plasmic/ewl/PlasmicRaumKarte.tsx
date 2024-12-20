// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: o7C61dL2AAD7uCRtgHRJ1p
// Component: MlgArckP-xFn

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
import sty from "./PlasmicRaumKarte.module.css"; // plasmic-import: MlgArckP-xFn/css

createPlasmicElementProxy;

export type PlasmicRaumKarte__VariantMembers = {
  primary: "primary";
  top: "top";
};
export type PlasmicRaumKarte__VariantsArgs = {
  primary?: SingleBooleanChoiceArg<"primary">;
  top?: SingleBooleanChoiceArg<"top">;
};
type VariantPropType = keyof PlasmicRaumKarte__VariantsArgs;
export const PlasmicRaumKarte__VariantProps = new Array<VariantPropType>(
  "primary",
  "top"
);

export type PlasmicRaumKarte__ArgsType = {
  name?: string;
  bild?: React.ComponentProps<typeof PlasmicImg__>["src"];
};
type ArgPropType = keyof PlasmicRaumKarte__ArgsType;
export const PlasmicRaumKarte__ArgProps = new Array<ArgPropType>(
  "name",
  "bild"
);

export type PlasmicRaumKarte__OverridesType = {
  root?: Flex__<"div">;
  img?: Flex__<typeof PlasmicImg__>;
  content?: Flex__<"div">;
};

export interface DefaultRaumKarteProps {
  name?: string;
  bild?: React.ComponentProps<typeof PlasmicImg__>["src"];
  primary?: SingleBooleanChoiceArg<"primary">;
  top?: SingleBooleanChoiceArg<"top">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicRaumKarte__RenderFunc(props: {
  variants: PlasmicRaumKarte__VariantsArgs;
  args: PlasmicRaumKarte__ArgsType;
  overrides: PlasmicRaumKarte__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          name: "Raum"
        },
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
        path: "primary",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.primary
      },
      {
        path: "top",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.top
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
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
        {
          [sty.rootprimary]: hasVariant($state, "primary", "primary"),
          [sty.roottop]: hasVariant($state, "top", "top")
        }
      )}
    >
      <PlasmicImg__
        data-plasmic-name={"img"}
        data-plasmic-override={overrides.img}
        alt={""}
        className={classNames(sty.img, {
          [sty.imgtop]: hasVariant($state, "top", "top")
        })}
        displayHeight={"250px"}
        displayMaxHeight={"none"}
        displayMaxWidth={"none"}
        displayMinHeight={"0"}
        displayMinWidth={"0"}
        displayWidth={"100%"}
        loading={"lazy"}
        src={args.bild}
      />

      <Stack__
        as={"div"}
        data-plasmic-name={"content"}
        data-plasmic-override={overrides.content}
        hasGap={true}
        className={classNames(projectcss.all, sty.content, {
          [sty.contentprimary]: hasVariant($state, "primary", "primary"),
          [sty.contenttop]: hasVariant($state, "top", "top")
        })}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text___8NwlM,
            {
              [sty.textprimary___8NwlMu49Kb]: hasVariant(
                $state,
                "primary",
                "primary"
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
                  return "Sofa";
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
            sty.text__hoa5P,
            {
              [sty.textprimary__hoa5Pu49Kb]: hasVariant(
                $state,
                "primary",
                "primary"
              )
            }
          )}
        >
          {"24 Produkte"}
        </div>
      </Stack__>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "img", "content"],
  img: ["img"],
  content: ["content"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  img: typeof PlasmicImg__;
  content: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicRaumKarte__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicRaumKarte__VariantsArgs;
    args?: PlasmicRaumKarte__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicRaumKarte__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicRaumKarte__ArgsType,
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
          internalArgPropNames: PlasmicRaumKarte__ArgProps,
          internalVariantPropNames: PlasmicRaumKarte__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicRaumKarte__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicRaumKarte";
  } else {
    func.displayName = `PlasmicRaumKarte.${nodeName}`;
  }
  return func;
}

export const PlasmicRaumKarte = Object.assign(
  // Top-level PlasmicRaumKarte renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    content: makeNodeComponent("content"),

    // Metadata about props expected for PlasmicRaumKarte
    internalVariantProps: PlasmicRaumKarte__VariantProps,
    internalArgProps: PlasmicRaumKarte__ArgProps
  }
);

export default PlasmicRaumKarte;
/* prettier-ignore-end */
