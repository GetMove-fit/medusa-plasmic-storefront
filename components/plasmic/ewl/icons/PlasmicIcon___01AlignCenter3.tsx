// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _01AlignCenter3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _01AlignCenter3Icon(props: _01AlignCenter3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 23"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M17.505 0a6.4 6.4 0 00-5.5 3.3 6.4 6.4 0 00-5.5-3.3 6.8 6.8 0 00-6.5 7.05c0 6.775 10.956 14.6 11.422 14.932l.578.409.578-.409c.466-.33 11.422-8.157 11.422-14.932a6.8 6.8 0 00-6.5-7.05zm-5.5 19.929c-3.253-2.43-10-8.4-10-12.879A4.8 4.8 0 016.505 2a4.8 4.8 0 014.5 5.05h2a4.8 4.8 0 014.5-5.05 4.8 4.8 0 014.5 5.05c0 4.481-6.747 10.449-10 12.879z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _01AlignCenter3Icon;
/* prettier-ignore-end */
