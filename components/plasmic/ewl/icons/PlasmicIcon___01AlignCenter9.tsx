// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _01AlignCenter9IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _01AlignCenter9Icon(props: _01AlignCenter9IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 18"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M23.82 8.181C22.944 6.261 19.5 0 12 0S1.057 6.261.179 8.181a1.969 1.969 0 000 1.64C1.057 11.739 4.499 18 11.999 18s10.944-6.261 11.822-8.181a1.968 1.968 0 000-1.638zM12 16c-6.307 0-9.25-5.366-10-6.989C2.75 7.366 5.693 2 12 2c6.292 0 9.236 5.343 10 7-.764 1.657-3.708 7-10 7z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M12 4a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-5.999A3 3 0 0112 12z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _01AlignCenter9Icon;
/* prettier-ignore-end */
