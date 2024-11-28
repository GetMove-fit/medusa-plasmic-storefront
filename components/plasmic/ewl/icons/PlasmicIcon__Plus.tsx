// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PlusIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PlusIcon(props: PlusIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 18"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M13.792 8c.139 0 .208.111.208.333v1.334c0 .222-.07.333-.208.333H4.208C4.07 10 4 9.889 4 9.667V8.333C4 8.111 4.07 8 4.208 8h9.584z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M10 13.792c0 .139-.111.208-.333.208H8.333C8.111 14 8 13.93 8 13.792V4.208C8 4.07 8.111 4 8.333 4h1.334c.222 0 .333.07.333.208v9.584z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PlusIcon;
/* prettier-ignore-end */
