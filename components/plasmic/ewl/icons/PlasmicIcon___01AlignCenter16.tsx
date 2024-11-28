// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _01AlignCenter16IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _01AlignCenter16Icon(props: _01AlignCenter16IconProps) {
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
          "M8 16a8 8 0 118-8 8.009 8.009 0 01-8 8zM8 1.333A6.667 6.667 0 1014.667 8 6.674 6.674 0 008 1.333z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={"M5.298 10.399l-.707-1.131L7.334 7.55V4h1.333v4.289l-3.369 2.11z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _01AlignCenter16Icon;
/* prettier-ignore-end */
