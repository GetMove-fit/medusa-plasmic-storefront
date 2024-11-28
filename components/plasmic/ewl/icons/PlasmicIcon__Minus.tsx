// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MinusIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MinusIcon(props: MinusIconProps) {
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
    </svg>
  );
}

export default MinusIcon;
/* prettier-ignore-end */
