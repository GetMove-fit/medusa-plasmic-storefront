// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _01AlignCenter6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _01AlignCenter6Icon(props: _01AlignCenter6IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 7"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M14 6.586H0L6.293.293a1 1 0 011.414 0L14 6.586z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _01AlignCenter6Icon;
/* prettier-ignore-end */
