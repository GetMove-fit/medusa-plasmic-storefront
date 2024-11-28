// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame9676IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame9676Icon(props: Frame9676IconProps) {
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
        d={
          "M23 9.716c-.21.013-.422.013-.632 0a7.24 7.24 0 01-3.267-.77 6.704 6.704 0 01-2.479-2.132V16.7a6.966 6.966 0 01-1.316 4.056 7.722 7.722 0 01-3.506 2.688 8.32 8.32 0 01-4.513.416 7.994 7.994 0 01-4-1.998 7.165 7.165 0 01-2.137-3.738 6.857 6.857 0 01.445-4.217A7.43 7.43 0 014.47 10.63 8.205 8.205 0 018.81 9.4h.478v3.597a2.8 2.8 0 00-.478 0 4.136 4.136 0 00-2.82 1.093 3.61 3.61 0 00-1.169 2.637c0 .988.42 1.937 1.169 2.636a4.136 4.136 0 002.821 1.092 4.249 4.249 0 002.878-1.054 3.714 3.714 0 001.266-2.635V0h3.681c.17 1.495.896 2.887 2.051 3.933 1.155 1.046 2.667 1.68 4.27 1.791v3.939"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame9676Icon;
/* prettier-ignore-end */
