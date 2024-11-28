// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _01AlignCenter8IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _01AlignCenter8Icon(props: _01AlignCenter8IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M20.164 13H5.419l-.941-8H14V3H4.242L4.2 2.648A3 3 0 001.222 0H0v2h1.222a1 1 0 01.993.883L3.8 16.351A3 3 0 006.778 19H20v-2H6.778a1 1 0 01-.993-.884L5.654 15h16.182l.9-5h-2.031l-.541 3zM7 24.001a2 2 0 100-4 2 2 0 000 4zm10 0a2 2 0 100-4 2 2 0 000 4z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={"M21 3V0h-2v3h-3v2h3v3h2V5h3V3h-3z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _01AlignCenter8Icon;
/* prettier-ignore-end */
