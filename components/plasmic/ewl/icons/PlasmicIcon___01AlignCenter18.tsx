// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _01AlignCenter18IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _01AlignCenter18Icon(props: _01AlignCenter18IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 19"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M14.587 0a5.334 5.334 0 00-4.583 2.75A5.333 5.333 0 005.421 0 5.667 5.667 0 00.004 5.875c0 5.646 9.13 12.167 9.518 12.443l.482.341.482-.34c.388-.276 9.518-6.798 9.518-12.444A5.666 5.666 0 0014.587 0zm-4.583 16.608c-2.71-2.026-8.333-7-8.333-10.733a4 4 0 013.75-4.208 4 4 0 013.75 4.208h1.666a4 4 0 013.75-4.208 4 4 0 013.75 4.208c0 3.734-5.622 8.707-8.333 10.733z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _01AlignCenter18Icon;
/* prettier-ignore-end */
