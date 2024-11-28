// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _01AlignCenter19IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _01AlignCenter19Icon(props: _01AlignCenter19IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M16.133 12.223a3.883 3.883 0 00-3.2 1.686L7.51 11.46c.385-.93.386-1.975.004-2.906l5.417-2.462a3.883 3.883 0 10-.69-2.203c.004.22.026.44.067.655L6.55 7.161a3.89 3.89 0 10-.013 5.69l5.773 2.606c-.04.216-.062.434-.065.654a3.89 3.89 0 103.888-3.888zm0-10.556a2.222 2.222 0 11.002 4.444 2.222 2.222 0 01-.002-4.444zM3.911 12.223a2.222 2.222 0 11-.002-4.445 2.222 2.222 0 01.002 4.445zm12.222 6.11a2.223 2.223 0 110-4.445 2.223 2.223 0 010 4.446z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _01AlignCenter19Icon;
/* prettier-ignore-end */
