// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type VectorIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function VectorIcon(props: VectorIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 10 10"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M9.792 4c.139 0 .208.111.208.333v1.334c0 .222-.07.333-.208.333H.208C.07 6 0 5.889 0 5.667V4.333C0 4.111.07 4 .208 4h9.584z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M6 9.792c0 .139-.111.208-.333.208H4.333C4.111 10 4 9.93 4 9.792V.208C4 .07 4.111 0 4.333 0h1.334C5.889 0 6 .07 6 .208v9.584z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default VectorIcon;
/* prettier-ignore-end */
