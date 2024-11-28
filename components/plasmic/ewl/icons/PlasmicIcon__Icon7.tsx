// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon7IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon7Icon(props: Icon7IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M0 15c1.44 0 8.636 0 8.636-5.417 0-5.416 5.758-5.416 7.197-5.416"}
        stroke={"currentColor"}
        strokeWidth={"1.667"}
      ></path>

      <path
        d={"M0 4.167c1.44 0 8.636 0 8.636 5.417C8.636 15 14.394 15 15.833 15"}
        stroke={"currentColor"}
        strokeWidth={"1.667"}
      ></path>

      <path
        d={
          "M15.834 1.667V7.5l4.167-2.917-4.167-2.916zm0 15.833v-5.833l4.167 2.917-4.167 2.916z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon7Icon;
/* prettier-ignore-end */
