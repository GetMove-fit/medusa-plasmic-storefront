// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _01AlignCenter7IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _01AlignCenter7Icon(props: _01AlignCenter7IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 9 5"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M4.471 4.862a1.329 1.329 0 01-.942-.39L0 .942.943 0 4.47 3.529 8 0l.943.943L5.414 4.47a1.329 1.329 0 01-.943.391z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _01AlignCenter7Icon;
/* prettier-ignore-end */
