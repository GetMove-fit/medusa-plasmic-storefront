// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PlayIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PlayIcon(props: PlayIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 40 40"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M5 37.128V2.872L34.974 20 5 37.128z"}
        fill={"currentColor"}
        stroke={"currentColor"}
        strokeWidth={"3.333"}
      ></path>
    </svg>
  );
}

export default PlayIcon;
/* prettier-ignore-end */
