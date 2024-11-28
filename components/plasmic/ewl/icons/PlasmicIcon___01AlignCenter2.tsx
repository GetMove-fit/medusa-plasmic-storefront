// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _01AlignCenter2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _01AlignCenter2Icon(props: _01AlignCenter2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 25 25"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M24.032 22.618l-6.262-6.262a10.016 10.016 0 10-1.414 1.414l6.262 6.262 1.414-1.414zm-14-4.586a8 8 0 118-8 8.009 8.009 0 01-8 8z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _01AlignCenter2Icon;
/* prettier-ignore-end */
