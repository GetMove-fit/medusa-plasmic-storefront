// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: o7C61dL2AAD7uCRtgHRJ1p
// Component: flZbWZPtlB4m

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
import sty from "./PlasmicHeader.module.css"; // plasmic-import: flZbWZPtlB4m/css

import _01AlignCenterIcon from "./icons/PlasmicIcon___01AlignCenter"; // plasmic-import: sZfxtVLCjI7y/icon
import _01AlignCenter2Icon from "./icons/PlasmicIcon___01AlignCenter2"; // plasmic-import: XqkEer7LRrIL/icon
import _01AlignCenter3Icon from "./icons/PlasmicIcon___01AlignCenter3"; // plasmic-import: MBs4hU4IhJYq/icon
import _01AlignCenter4Icon from "./icons/PlasmicIcon___01AlignCenter4"; // plasmic-import: 4Hyt8R0GvUS4/icon
import _01AlignCenter5Icon from "./icons/PlasmicIcon___01AlignCenter5"; // plasmic-import: 1s85xrupSWK9/icon
import _01AlignCenter6Icon from "./icons/PlasmicIcon___01AlignCenter6"; // plasmic-import: jrSsWMyaBccd/icon
import _01AlignCenter7Icon from "./icons/PlasmicIcon___01AlignCenter7"; // plasmic-import: nWgH7WS6W6K7/icon

createPlasmicElementProxy;

export type PlasmicHeader__VariantMembers = {};
export type PlasmicHeader__VariantsArgs = {};
type VariantPropType = keyof PlasmicHeader__VariantsArgs;
export const PlasmicHeader__VariantProps = new Array<VariantPropType>();

export type PlasmicHeader__ArgsType = {};
type ArgPropType = keyof PlasmicHeader__ArgsType;
export const PlasmicHeader__ArgProps = new Array<ArgPropType>();

export type PlasmicHeader__OverridesType = {
  root?: Flex__<"div">;
  header?: Flex__<"div">;
  arrowLarge?: Flex__<"div">;
  header2?: Flex__<"div">;
  header3?: Flex__<"div">;
  header4?: Flex__<"div">;
  image1?: Flex__<"div">;
  freeShipping?: Flex__<"div">;
  icon?: Flex__<"div">;
  freeShipping2?: Flex__<"div">;
  searchBar?: Flex__<"form">;
  search?: Flex__<"button">;
  search2?: Flex__<"div">;
  searchBar2?: Flex__<"input">;
  iconHeader?: Flex__<"div">;
  icon2?: Flex__<"div">;
  heart?: Flex__<"div">;
  user?: Flex__<"div">;
  cart?: Flex__<"div">;
  icon3?: Flex__<"div">;
  austriaAt?: Flex__<"div">;
  img?: Flex__<typeof PlasmicImg__>;
  caret?: Flex__<"div">;
  navigationBar?: Flex__<"div">;
  navigation?: Flex__<"div">;
  product?: Flex__<"div">;
  angleSmall?: Flex__<"div">;
  navigation2?: Flex__<"div">;
  product2?: Flex__<"div">;
  navigation3?: Flex__<"div">;
  product3?: Flex__<"div">;
  navigation4?: Flex__<"div">;
  product4?: Flex__<"div">;
  navigation5?: Flex__<"div">;
  product5?: Flex__<"div">;
  navigation6?: Flex__<"div">;
  product6?: Flex__<"div">;
  navigation7?: Flex__<"div">;
  product7?: Flex__<"div">;
};

export interface DefaultHeaderProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHeader__RenderFunc(props: {
  variants: PlasmicHeader__VariantsArgs;
  args: PlasmicHeader__ArgsType;
  overrides: PlasmicHeader__OverridesType;
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
        path: "suchen",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
            try {
              return $ctx.query.suchen;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return undefined;
              }
              throw e;
            }
          })()
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
      <Stack__
        as={"div"}
        data-plasmic-name={"header"}
        data-plasmic-override={overrides.header}
        hasGap={true}
        className={classNames(projectcss.all, sty.header)}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__pgtWt
          )}
        >
          {"Fr\u00fchlingserwachen-Angebote"}
        </div>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__jYnZb
          )}
        >
          {"Bis zu 20% Rabatt auf alles!"}
        </div>
        <div className={classNames(projectcss.all, sty.freeBox___7In6I)}>
          <div
            data-plasmic-name={"arrowLarge"}
            data-plasmic-override={overrides.arrowLarge}
            className={classNames(projectcss.all, sty.arrowLarge)}
          >
            <_01AlignCenterIcon
              className={classNames(projectcss.all, sty.svg___3Ptfc)}
              role={"img"}
            />
          </div>
        </div>
      </Stack__>
      <Stack__
        as={"div"}
        data-plasmic-name={"header2"}
        data-plasmic-override={overrides.header2}
        hasGap={true}
        className={classNames(projectcss.all, sty.header2)}
      >
        <div
          data-plasmic-name={"header3"}
          data-plasmic-override={overrides.header3}
          className={classNames(projectcss.all, sty.header3)}
        >
          <Stack__
            as={"div"}
            data-plasmic-name={"header4"}
            data-plasmic-override={overrides.header4}
            hasGap={true}
            className={classNames(projectcss.all, sty.header4)}
          >
            <div
              data-plasmic-name={"image1"}
              data-plasmic-override={overrides.image1}
              className={classNames(projectcss.all, sty.image1)}
            />

            <Stack__
              as={"div"}
              data-plasmic-name={"freeShipping"}
              data-plasmic-override={overrides.freeShipping}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeShipping)}
            >
              <div
                data-plasmic-name={"icon"}
                data-plasmic-override={overrides.icon}
                className={classNames(projectcss.all, sty.icon)}
              />

              <div
                data-plasmic-name={"freeShipping2"}
                data-plasmic-override={overrides.freeShipping2}
                className={classNames(projectcss.all, sty.freeShipping2)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__woBUd
                  )}
                >
                  {"Shoppe Online"}
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___5HXHz
                  )}
                >
                  {"Jederzeit \u00fcberall"}
                </div>
              </div>
            </Stack__>
          </Stack__>
          <form
            data-plasmic-name={"searchBar"}
            data-plasmic-override={overrides.searchBar}
            className={classNames(projectcss.all, sty.searchBar)}
            onSubmit={async event => {
              const $steps = {};

              $steps["goToPage"] = true
                ? (() => {
                    const actionArgs = {
                      destination: (() => {
                        try {
                          return (() => {
                            event.preventDefault();
                            const suche = encodeURIComponent($state.suchen);
                            if (!$ctx.pagePath.startsWith("/kaufen")) {
                              return "/kaufen?suchen=" + suche;
                            }
                            let { catchall, ...query } = $ctx.query;
                            query.suchen = suche;
                            return (
                              $ctx.pagePath +
                              "?" +
                              Object.keys(query)
                                .map(
                                  key =>
                                    `${encodeURIComponent(
                                      key
                                    )}=${encodeURIComponent(query[key])}`
                                )
                                .join("&")
                            );
                          })();
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return undefined;
                          }
                          throw e;
                        }
                      })()
                    };
                    return (({ destination }) => {
                      if (
                        typeof destination === "string" &&
                        destination.startsWith("#")
                      ) {
                        document
                          .getElementById(destination.substr(1))
                          .scrollIntoView({ behavior: "smooth" });
                      } else {
                        __nextRouter?.push(destination);
                      }
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                $steps["goToPage"] != null &&
                typeof $steps["goToPage"] === "object" &&
                typeof $steps["goToPage"].then === "function"
              ) {
                $steps["goToPage"] = await $steps["goToPage"];
              }
            }}
          >
            <Stack__
              as={"button"}
              data-plasmic-name={"search"}
              data-plasmic-override={overrides.search}
              hasGap={true}
              className={classNames(
                projectcss.all,
                projectcss.button,
                sty.search
              )}
              ref={ref => {
                $refs["search"] = ref;
              }}
            >
              <div
                data-plasmic-name={"search2"}
                data-plasmic-override={overrides.search2}
                className={classNames(projectcss.all, sty.search2)}
              >
                <_01AlignCenter2Icon
                  className={classNames(projectcss.all, sty.svg__qTqrs)}
                  role={"img"}
                />
              </div>
            </Stack__>
            <Stack__
              as={"input"}
              data-plasmic-name={"searchBar2"}
              data-plasmic-override={overrides.searchBar2}
              hasGap={true}
              className={classNames(
                projectcss.all,
                projectcss.input,
                sty.searchBar2
              )}
              onChange={async event => {
                const $steps = {};

                $steps["updateSuchen"] = true
                  ? (() => {
                      const actionArgs = {
                        variable: {
                          objRoot: $state,
                          variablePath: ["suchen"]
                        },
                        operation: 0,
                        value: event.target.value
                      };
                      return (({
                        variable,
                        value,
                        startIndex,
                        deleteCount
                      }) => {
                        if (!variable) {
                          return;
                        }
                        const { objRoot, variablePath } = variable;

                        $stateSet(objRoot, variablePath, value);
                        return value;
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["updateSuchen"] != null &&
                  typeof $steps["updateSuchen"] === "object" &&
                  typeof $steps["updateSuchen"].then === "function"
                ) {
                  $steps["updateSuchen"] = await $steps["updateSuchen"];
                }
              }}
              placeholder={"Ich suche nach..."}
              ref={ref => {
                $refs["searchBar2"] = ref;
              }}
              type={"text"}
              value={(() => {
                try {
                  return $state.suchen;
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
            />
          </form>
          <Stack__
            as={"div"}
            data-plasmic-name={"iconHeader"}
            data-plasmic-override={overrides.iconHeader}
            hasGap={true}
            className={classNames(projectcss.all, sty.iconHeader)}
          >
            <Stack__
              as={"div"}
              data-plasmic-name={"icon2"}
              data-plasmic-override={overrides.icon2}
              hasGap={true}
              className={classNames(projectcss.all, sty.icon2)}
            >
              <Stack__
                as={"div"}
                data-plasmic-name={"heart"}
                data-plasmic-override={overrides.heart}
                hasGap={true}
                className={classNames(projectcss.all, sty.heart)}
              >
                <_01AlignCenter3Icon
                  className={classNames(projectcss.all, sty.svg__j5PG)}
                  role={"img"}
                />
              </Stack__>
              <Stack__
                as={"div"}
                data-plasmic-name={"user"}
                data-plasmic-override={overrides.user}
                hasGap={true}
                className={classNames(projectcss.all, sty.user)}
              >
                <_01AlignCenter4Icon
                  className={classNames(projectcss.all, sty.svg__tX85Z)}
                  role={"img"}
                />
              </Stack__>
              <Stack__
                as={"div"}
                data-plasmic-name={"cart"}
                data-plasmic-override={overrides.cart}
                hasGap={true}
                className={classNames(projectcss.all, sty.cart)}
              >
                <div className={classNames(projectcss.all, sty.freeBox__suCyy)}>
                  <_01AlignCenter5Icon
                    className={classNames(projectcss.all, sty.svg__rTsIx)}
                    role={"img"}
                  />
                </div>
              </Stack__>
            </Stack__>
            <Stack__
              as={"div"}
              data-plasmic-name={"icon3"}
              data-plasmic-override={overrides.icon3}
              hasGap={true}
              className={classNames(projectcss.all, sty.icon3)}
            >
              <div
                data-plasmic-name={"austriaAt"}
                data-plasmic-override={overrides.austriaAt}
                className={classNames(projectcss.all, sty.austriaAt)}
              >
                <PlasmicImg__
                  data-plasmic-name={"img"}
                  data-plasmic-override={overrides.img}
                  alt={""}
                  className={classNames(sty.img)}
                  displayHeight={"18px"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"24px"}
                  loading={"lazy"}
                  src={{
                    src: "/plasmic/ewl/images/group.svg",
                    fullWidth: 24,
                    fullHeight: 18,
                    aspectRatio: 1.333333
                  }}
                />
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__bHwmk)}>
                <div
                  data-plasmic-name={"caret"}
                  data-plasmic-override={overrides.caret}
                  className={classNames(projectcss.all, sty.caret)}
                >
                  <_01AlignCenter6Icon
                    className={classNames(projectcss.all, sty.svg__bThP)}
                    role={"img"}
                  />
                </div>
              </div>
            </Stack__>
          </Stack__>
        </div>
        <Stack__
          as={"div"}
          data-plasmic-name={"navigationBar"}
          data-plasmic-override={overrides.navigationBar}
          hasGap={true}
          className={classNames(projectcss.all, sty.navigationBar)}
        >
          <Stack__
            as={"div"}
            data-plasmic-name={"navigation"}
            data-plasmic-override={overrides.navigation}
            hasGap={true}
            className={classNames(projectcss.all, sty.navigation)}
          >
            <div
              data-plasmic-name={"product"}
              data-plasmic-override={overrides.product}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.product
              )}
            >
              {"Kategorien"}
            </div>
            <div
              data-plasmic-name={"angleSmall"}
              data-plasmic-override={overrides.angleSmall}
              className={classNames(projectcss.all, sty.angleSmall)}
            >
              <_01AlignCenter7Icon
                className={classNames(projectcss.all, sty.svg__lYyNt)}
                role={"img"}
              />
            </div>
          </Stack__>
          <Stack__
            as={"div"}
            data-plasmic-name={"navigation2"}
            data-plasmic-override={overrides.navigation2}
            hasGap={true}
            className={classNames(projectcss.all, sty.navigation2)}
          >
            <div
              data-plasmic-name={"product2"}
              data-plasmic-override={overrides.product2}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.product2
              )}
            >
              {"Meistverkauft"}
            </div>
          </Stack__>
          <Stack__
            as={"div"}
            data-plasmic-name={"navigation3"}
            data-plasmic-override={overrides.navigation3}
            hasGap={true}
            className={classNames(projectcss.all, sty.navigation3)}
          >
            <div
              data-plasmic-name={"product3"}
              data-plasmic-override={overrides.product3}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.product3
              )}
            >
              {"Blog"}
            </div>
          </Stack__>
          <Stack__
            as={"div"}
            data-plasmic-name={"navigation4"}
            data-plasmic-override={overrides.navigation4}
            hasGap={true}
            className={classNames(projectcss.all, sty.navigation4)}
          >
            <div
              data-plasmic-name={"product4"}
              data-plasmic-override={overrides.product4}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.product4
              )}
            >
              {"\u00dcber uns"}
            </div>
          </Stack__>
          <Stack__
            as={"div"}
            data-plasmic-name={"navigation5"}
            data-plasmic-override={overrides.navigation5}
            hasGap={true}
            className={classNames(projectcss.all, sty.navigation5)}
          >
            <div
              data-plasmic-name={"product5"}
              data-plasmic-override={overrides.product5}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.product5
              )}
            >
              {"Kontakt"}
            </div>
          </Stack__>
          <Stack__
            as={"div"}
            data-plasmic-name={"navigation6"}
            data-plasmic-override={overrides.navigation6}
            hasGap={true}
            className={classNames(projectcss.all, sty.navigation6)}
          >
            <div
              data-plasmic-name={"product6"}
              data-plasmic-override={overrides.product6}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.product6
              )}
            >
              {"Angebote"}
            </div>
          </Stack__>
          <Stack__
            as={"div"}
            data-plasmic-name={"navigation7"}
            data-plasmic-override={overrides.navigation7}
            hasGap={true}
            className={classNames(projectcss.all, sty.navigation7)}
          >
            <div
              data-plasmic-name={"product7"}
              data-plasmic-override={overrides.product7}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.product7
              )}
            >
              {"Bewertungen"}
            </div>
          </Stack__>
        </Stack__>
      </Stack__>
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "header",
    "arrowLarge",
    "header2",
    "header3",
    "header4",
    "image1",
    "freeShipping",
    "icon",
    "freeShipping2",
    "searchBar",
    "search",
    "search2",
    "searchBar2",
    "iconHeader",
    "icon2",
    "heart",
    "user",
    "cart",
    "icon3",
    "austriaAt",
    "img",
    "caret",
    "navigationBar",
    "navigation",
    "product",
    "angleSmall",
    "navigation2",
    "product2",
    "navigation3",
    "product3",
    "navigation4",
    "product4",
    "navigation5",
    "product5",
    "navigation6",
    "product6",
    "navigation7",
    "product7"
  ],
  header: ["header", "arrowLarge"],
  arrowLarge: ["arrowLarge"],
  header2: [
    "header2",
    "header3",
    "header4",
    "image1",
    "freeShipping",
    "icon",
    "freeShipping2",
    "searchBar",
    "search",
    "search2",
    "searchBar2",
    "iconHeader",
    "icon2",
    "heart",
    "user",
    "cart",
    "icon3",
    "austriaAt",
    "img",
    "caret",
    "navigationBar",
    "navigation",
    "product",
    "angleSmall",
    "navigation2",
    "product2",
    "navigation3",
    "product3",
    "navigation4",
    "product4",
    "navigation5",
    "product5",
    "navigation6",
    "product6",
    "navigation7",
    "product7"
  ],
  header3: [
    "header3",
    "header4",
    "image1",
    "freeShipping",
    "icon",
    "freeShipping2",
    "searchBar",
    "search",
    "search2",
    "searchBar2",
    "iconHeader",
    "icon2",
    "heart",
    "user",
    "cart",
    "icon3",
    "austriaAt",
    "img",
    "caret"
  ],
  header4: ["header4", "image1", "freeShipping", "icon", "freeShipping2"],
  image1: ["image1"],
  freeShipping: ["freeShipping", "icon", "freeShipping2"],
  icon: ["icon"],
  freeShipping2: ["freeShipping2"],
  searchBar: ["searchBar", "search", "search2", "searchBar2"],
  search: ["search", "search2"],
  search2: ["search2"],
  searchBar2: ["searchBar2"],
  iconHeader: [
    "iconHeader",
    "icon2",
    "heart",
    "user",
    "cart",
    "icon3",
    "austriaAt",
    "img",
    "caret"
  ],
  icon2: ["icon2", "heart", "user", "cart"],
  heart: ["heart"],
  user: ["user"],
  cart: ["cart"],
  icon3: ["icon3", "austriaAt", "img", "caret"],
  austriaAt: ["austriaAt", "img"],
  img: ["img"],
  caret: ["caret"],
  navigationBar: [
    "navigationBar",
    "navigation",
    "product",
    "angleSmall",
    "navigation2",
    "product2",
    "navigation3",
    "product3",
    "navigation4",
    "product4",
    "navigation5",
    "product5",
    "navigation6",
    "product6",
    "navigation7",
    "product7"
  ],
  navigation: ["navigation", "product", "angleSmall"],
  product: ["product"],
  angleSmall: ["angleSmall"],
  navigation2: ["navigation2", "product2"],
  product2: ["product2"],
  navigation3: ["navigation3", "product3"],
  product3: ["product3"],
  navigation4: ["navigation4", "product4"],
  product4: ["product4"],
  navigation5: ["navigation5", "product5"],
  product5: ["product5"],
  navigation6: ["navigation6", "product6"],
  product6: ["product6"],
  navigation7: ["navigation7", "product7"],
  product7: ["product7"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: "div";
  arrowLarge: "div";
  header2: "div";
  header3: "div";
  header4: "div";
  image1: "div";
  freeShipping: "div";
  icon: "div";
  freeShipping2: "div";
  searchBar: "form";
  search: "button";
  search2: "div";
  searchBar2: "input";
  iconHeader: "div";
  icon2: "div";
  heart: "div";
  user: "div";
  cart: "div";
  icon3: "div";
  austriaAt: "div";
  img: typeof PlasmicImg__;
  caret: "div";
  navigationBar: "div";
  navigation: "div";
  product: "div";
  angleSmall: "div";
  navigation2: "div";
  product2: "div";
  navigation3: "div";
  product3: "div";
  navigation4: "div";
  product4: "div";
  navigation5: "div";
  product5: "div";
  navigation6: "div";
  product6: "div";
  navigation7: "div";
  product7: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHeader__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHeader__VariantsArgs;
    args?: PlasmicHeader__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHeader__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHeader__ArgsType,
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
          internalArgPropNames: PlasmicHeader__ArgProps,
          internalVariantPropNames: PlasmicHeader__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHeader__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeader";
  } else {
    func.displayName = `PlasmicHeader.${nodeName}`;
  }
  return func;
}

export const PlasmicHeader = Object.assign(
  // Top-level PlasmicHeader renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    arrowLarge: makeNodeComponent("arrowLarge"),
    header2: makeNodeComponent("header2"),
    header3: makeNodeComponent("header3"),
    header4: makeNodeComponent("header4"),
    image1: makeNodeComponent("image1"),
    freeShipping: makeNodeComponent("freeShipping"),
    icon: makeNodeComponent("icon"),
    freeShipping2: makeNodeComponent("freeShipping2"),
    searchBar: makeNodeComponent("searchBar"),
    search: makeNodeComponent("search"),
    search2: makeNodeComponent("search2"),
    searchBar2: makeNodeComponent("searchBar2"),
    iconHeader: makeNodeComponent("iconHeader"),
    icon2: makeNodeComponent("icon2"),
    heart: makeNodeComponent("heart"),
    user: makeNodeComponent("user"),
    cart: makeNodeComponent("cart"),
    icon3: makeNodeComponent("icon3"),
    austriaAt: makeNodeComponent("austriaAt"),
    img: makeNodeComponent("img"),
    caret: makeNodeComponent("caret"),
    navigationBar: makeNodeComponent("navigationBar"),
    navigation: makeNodeComponent("navigation"),
    product: makeNodeComponent("product"),
    angleSmall: makeNodeComponent("angleSmall"),
    navigation2: makeNodeComponent("navigation2"),
    product2: makeNodeComponent("product2"),
    navigation3: makeNodeComponent("navigation3"),
    product3: makeNodeComponent("product3"),
    navigation4: makeNodeComponent("navigation4"),
    product4: makeNodeComponent("product4"),
    navigation5: makeNodeComponent("navigation5"),
    product5: makeNodeComponent("product5"),
    navigation6: makeNodeComponent("navigation6"),
    product6: makeNodeComponent("product6"),
    navigation7: makeNodeComponent("navigation7"),
    product7: makeNodeComponent("product7"),

    // Metadata about props expected for PlasmicHeader
    internalVariantProps: PlasmicHeader__VariantProps,
    internalArgProps: PlasmicHeader__ArgProps
  }
);

export default PlasmicHeader;
/* prettier-ignore-end */