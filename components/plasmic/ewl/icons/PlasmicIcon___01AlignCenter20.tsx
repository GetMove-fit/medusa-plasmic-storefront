// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _01AlignCenter20IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _01AlignCenter20Icon(props: _01AlignCenter20IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 32"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M31.999 14.666H17.333V0h-2.667v14.666H0v2.667h14.666v14.666h2.667V17.333h14.666v-2.667z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _01AlignCenter20Icon;
/* prettier-ignore-end */
