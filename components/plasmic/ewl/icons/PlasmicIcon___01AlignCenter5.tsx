// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _01AlignCenter5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _01AlignCenter5Icon(props: _01AlignCenter5IconProps) {
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
          "M24 3H4.242L4.2 2.649A3 3 0 001.222 0H0v2h1.222a1 1 0 01.993.883L3.8 16.351A3 3 0 006.778 19H20v-2H6.778a1 1 0 01-.993-.884L5.654 15h16.182L24 3zm-3.836 10H5.419l-.941-8h17.129l-1.443 8zM7 24.001a2 2 0 100-4 2 2 0 000 4zm10 0a2 2 0 100-4 2 2 0 000 4z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _01AlignCenter5Icon;
/* prettier-ignore-end */
