// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CompareIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CompareIcon(props: CompareIconProps) {
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
        d={"M0 18c1.727 0 10.364 0 10.364-6.5S17.273 5 19 5"}
        stroke={"currentColor"}
        strokeWidth={"2"}
      ></path>

      <path
        d={"M0 5c1.727 0 10.364 0 10.364 6.5S17.273 18 19 18"}
        stroke={"currentColor"}
        strokeWidth={"2"}
      ></path>

      <path
        d={"M19 2v7l5-3.5L19 2zm0 19v-7l5 3.5-5 3.5z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CompareIcon;
/* prettier-ignore-end */
