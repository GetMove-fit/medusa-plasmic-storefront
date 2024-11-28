// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _01AlignCenter11IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _01AlignCenter11Icon(props: _01AlignCenter11IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M12 16h-1.333v-3.36a1.974 1.974 0 00-1.972-1.972h-5.39a1.973 1.973 0 00-1.972 1.972V16H0v-3.362a3.309 3.309 0 013.305-3.305h5.39A3.309 3.309 0 0112 12.639V16zM6 8a4 4 0 110-8 4 4 0 010 8zm0-6.667a2.667 2.667 0 100 5.334 2.667 2.667 0 000-5.334z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _01AlignCenter11Icon;
/* prettier-ignore-end */
