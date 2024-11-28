// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type StarIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function StarIcon(props: StarIconProps) {
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
          "M10 0l2.704 6.279 6.807.63-5.136 4.513 1.503 6.668L10 14.6l-5.878 3.49 1.503-6.668L.49 6.91l6.807-.631L10 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default StarIcon;
/* prettier-ignore-end */
