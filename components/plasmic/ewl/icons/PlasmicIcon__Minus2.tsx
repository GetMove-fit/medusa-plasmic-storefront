// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Minus2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Minus2Icon(props: Minus2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 10 2"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M9.792 0C9.93 0 10 .111 10 .333v1.334c0 .222-.07.333-.208.333H.208C.07 2 0 1.889 0 1.667V.333C0 .111.07 0 .208 0h9.584z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Minus2Icon;
/* prettier-ignore-end */
