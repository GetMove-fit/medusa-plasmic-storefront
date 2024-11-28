// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _01AlignCenter13IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _01AlignCenter13Icon(props: _01AlignCenter13IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 12"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M15.88 5.454C15.296 4.174 13 0 8 0S.705 4.174.12 5.454a1.313 1.313 0 000 1.093C.704 7.826 3 12 8 12s7.295-4.174 7.88-5.454a1.312 1.312 0 000-1.092zM8 10.667c-4.205 0-6.167-3.578-6.667-4.66.5-1.096 2.462-4.674 6.667-4.674 4.195 0 6.157 3.562 6.667 4.667-.51 1.105-2.472 4.667-6.667 4.667z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M8 2.667a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zM8 8a2 2 0 110-4 2 2 0 010 4z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _01AlignCenter13Icon;
/* prettier-ignore-end */
