// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _01AlignCenter15IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _01AlignCenter15Icon(props: _01AlignCenter15IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 15"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M14 0H2a2 2 0 00-2 2v12.667h16V2a2 2 0 00-2-2zM2 1.333h12a.667.667 0 01.667.667v.445L9.415 7.697a2.005 2.005 0 01-2.83 0L1.333 2.445V2A.667.667 0 012 1.333zm-.667 12v-9l4.31 4.307a3.338 3.338 0 004.714 0l4.31-4.307v9H1.333z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _01AlignCenter15Icon;
/* prettier-ignore-end */
