// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: nhXBd3CNNLYZW2Pj52bSRa

import * as React from "react";
import { hasVariant, ensureGlobalVariants } from "@plasmicapp/react-web";
import { MedusaProvider } from "../../medusa/MedusaProvider"; // plasmic-import: qloh6Lb69vKl/codeComponent
import { AntdConfigProvider } from "@plasmicpkgs/antd5/skinny/registerConfigProvider";

export interface GlobalContextsProviderProps {
  children?: React.ReactElement;
  medusaProviderProps?: Partial<
    Omit<React.ComponentProps<typeof MedusaProvider>, "children">
  >;

  antdConfigProviderProps?: Partial<
    Omit<React.ComponentProps<typeof AntdConfigProvider>, "children">
  >;
}

export default function GlobalContextsProvider(
  props: GlobalContextsProviderProps
) {
  const { children, medusaProviderProps, antdConfigProviderProps } = props;

  return (
    <MedusaProvider {...medusaProviderProps}>
      {children}
    </MedusaProvider>
  );
}