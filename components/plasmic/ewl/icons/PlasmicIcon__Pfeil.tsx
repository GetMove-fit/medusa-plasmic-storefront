// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PfeilIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PfeilIcon(props: PfeilIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 10"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8.943 9.724a2.657 2.657 0 01-1.886-.78L0 1.885 1.885 0l7.058 7.057L16 0l1.885 1.885-7.057 7.058a2.658 2.658 0 01-1.885.781z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PfeilIcon;
/* prettier-ignore-end */
