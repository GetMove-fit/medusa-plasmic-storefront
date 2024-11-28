// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group8117IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group8117Icon(props: Group8117IconProps) {
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
          "M18.667 7.929a5.53 5.53 0 01-1.57.424 2.713 2.713 0 001.202-1.49 5.546 5.546 0 01-1.738.654 2.747 2.747 0 00-1.996-.851c-1.511 0-2.735 1.207-2.735 2.693 0 .211.024.416.07.614a7.806 7.806 0 01-5.637-2.814c-.243.41-.371.877-.37 1.354 0 .933.484 1.76 1.217 2.241a2.767 2.767 0 01-1.24-.337v.033a2.707 2.707 0 002.195 2.64 2.811 2.811 0 01-1.236.045 2.732 2.732 0 002.554 1.871 5.541 5.541 0 01-3.397 1.152c-.22 0-.437-.013-.652-.037a7.817 7.817 0 004.192 1.212c5.032 0 7.783-4.104 7.783-7.664l-.01-.35c.537-.377 1-.848 1.368-1.39z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M12 21.6a9.6 9.6 0 100-19.2 9.6 9.6 0 000 19.2zm0 2.4C5.372 24 0 18.628 0 12S5.372 0 12 0s12 5.372 12 12-5.372 12-12 12z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group8117Icon;
/* prettier-ignore-end */
