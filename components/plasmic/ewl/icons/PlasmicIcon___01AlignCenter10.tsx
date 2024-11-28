// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _01AlignCenter10IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _01AlignCenter10Icon(props: _01AlignCenter10IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M14 1.333h-2V0h-1.333v1.333H5.333V0H4v1.333H2a2 2 0 00-2 2V16h16V3.333a2 2 0 00-2-2zm-12.667 2A.667.667 0 012 2.667h12a.667.667 0 01.667.666v2H1.333v-2zm0 11.334v-8h13.334v8H1.333z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M11.333 8.667H10V10h1.333V8.667zm-2.666 0H7.333V10h1.334V8.667zM6 8.667H4.667V10H6V8.667zm5.333 2.666H10v1.334h1.333v-1.334zm-2.666 0H7.333v1.334h1.334v-1.334zm-2.667 0H4.667v1.334H6v-1.334z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _01AlignCenter10Icon;
/* prettier-ignore-end */
