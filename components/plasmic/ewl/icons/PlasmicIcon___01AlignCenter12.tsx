// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _01AlignCenter12IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _01AlignCenter12Icon(props: _01AlignCenter12IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 14"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M10.014 3.717l.224-1.36A2.03 2.03 0 007.433.165a2.093 2.093 0 00-1.045 1.036L5.145 3.717H2a2 2 0 00-2 2v6a2 2 0 002 2h12.679L16 6.36l.01-2.642h-5.996zm-8.68 8v-6A.667.667 0 012 5.051h2.667v7.333H2a.667.667 0 01-.667-.667zm13.333-5.533l-1.114 6.2H6V4.99l1.613-3.267a.713.713 0 011.148-.139.683.683 0 01.155.56l-.48 2.907h6.23v1.133z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _01AlignCenter12Icon;
/* prettier-ignore-end */
