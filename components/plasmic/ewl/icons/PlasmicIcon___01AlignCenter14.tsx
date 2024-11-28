// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _01AlignCenter14IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _01AlignCenter14Icon(props: _01AlignCenter14IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M6.7 16l-.465-.4C5.594 15.065 0 10.234 0 6.7a6.7 6.7 0 0113.399 0c0 3.533-5.594 8.364-6.232 8.904l-.468.395zm0-14.551a5.257 5.257 0 00-5.251 5.25c0 2.22 3.441 5.767 5.25 7.39 1.81-1.624 5.251-5.172 5.251-7.39A5.257 5.257 0 006.7 1.45z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M6.7 9.355a2.656 2.656 0 110-5.311 2.656 2.656 0 010 5.31zm0-3.984a1.328 1.328 0 100 2.656 1.328 1.328 0 000-2.656z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _01AlignCenter14Icon;
/* prettier-ignore-end */
