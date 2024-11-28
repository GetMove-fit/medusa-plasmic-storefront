// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _01AlignCenter17IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _01AlignCenter17Icon(props: _01AlignCenter17IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 8"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M6.707 7.293a1.993 1.993 0 01-1.414-.585L0 1.414 1.414 0l5.293 5.293L12 0l1.414 1.414-5.293 5.293a1.993 1.993 0 01-1.414.586z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _01AlignCenter17Icon;
/* prettier-ignore-end */
