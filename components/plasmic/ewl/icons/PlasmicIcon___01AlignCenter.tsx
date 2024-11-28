// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _01AlignCenterIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _01AlignCenterIcon(props: _01AlignCenterIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 14"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M24.001 7.707v-2l-21.445.031 4.322-4.324L5.464 0 .878 4.586a3 3 0 000 4.242l4.586 4.586L6.878 12 2.616 7.738l21.385-.031z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _01AlignCenterIcon;
/* prettier-ignore-end */
