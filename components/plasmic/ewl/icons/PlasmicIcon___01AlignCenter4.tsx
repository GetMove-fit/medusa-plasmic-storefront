// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _01AlignCenter4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _01AlignCenter4Icon(props: _01AlignCenter4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M18 24.001h-2v-5.043a2.96 2.96 0 00-2.957-2.957H4.957A2.96 2.96 0 002 18.958v5.043H0v-5.043a4.963 4.963 0 014.957-4.957h8.086A4.963 4.963 0 0118 18.958v5.043zM9 12A6 6 0 119 0a6 6 0 010 12zM9 2a4 4 0 100 8 4 4 0 000-8z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _01AlignCenter4Icon;
/* prettier-ignore-end */
