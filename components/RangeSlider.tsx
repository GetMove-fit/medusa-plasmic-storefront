import * as React from "react";
import { getTrackBackground, Range } from "react-range";
import { CodeComponentMeta } from "@plasmicapp/host";

interface SliderValues {
  von: number;
  bis: number;
}

interface RangeSliderProps {
  min: number;
  max: number;
  initValues: SliderValues;
  values: SliderValues;
  onChange: (values: SliderValues) => void;
  onFinalChange: (values: SliderValues) => void;
}

export default function RangeSlider(props: RangeSliderProps) {
  console.log(props.values)

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        width: "100%",
      }}
    >
      <Range
        values={[props.values?.von ?? 0, props.values?.bis ?? 100]}
        step={0.1}
        min={props.min}
        max={props.max}
        onChange={(values) =>
          props.onChange({ von: values[0], bis: values[1] })
        }
        onFinalChange={(values) => {
          if (typeof props.onFinalChange === "function")
            props.onFinalChange({ von: values[0], bis: values[1] })
          }
        }
        renderTrack={({ props: initProps, children }) => (
          <div
            onMouseDown={initProps.onMouseDown}
            onTouchStart={initProps.onTouchStart}
            style={{
              ...initProps.style,
              height: "24px",
              display: "flex",
              width: "100%",
            }}
          >
            <div
              ref={initProps.ref}
              style={{
                height: "4px",
                width: "100%",
                background: getTrackBackground({
                  values: [props.values?.von ?? 0, props.values?.bis ?? 100],
                  colors: ["#CFCFCF", "#2E2E2E", "#CFCFCF"],
                  min: props.min,
                  max: props.max,
                }),
                alignSelf: "center",
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div
            {...props}
            key={props.key}
            style={{
              ...props.style,
              height: "24px",
              width: "8px",
              backgroundColor: "#2E2E2E",
              outlineStyle: "none",
            }}
          />
        )}
      />
    </div>
  );
}

export const rangeSliderMeta: CodeComponentMeta<RangeSliderProps> = {
  name: "RangeSlider",
  importPath: "./components/RangeSlider",
  props: {
    min: "number",
    max: "number",
    initValues: "object",
    values: "object",
    onChange: {
      type: 'eventHandler',
      argTypes: [{ name: 'values', type: 'object' }]
    },
    onFinalChange: {
      type: 'eventHandler',
      argTypes: [{ name: 'values', type: 'object' }]
    }
  },
  states: {
    values: {
      type: 'writable',
      variableType: 'object',
      valueProp: 'values',
      onChangeProp: 'onChange'
    }
  }
};
