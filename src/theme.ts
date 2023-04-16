import type { GrommetProps } from "grommet";

const theme: GrommetProps["theme"] = {
  global: {
    colors: {
      darkRed: "#993535",
      red: "#DB4C4C",
      lightRed: "#E58181",
    },
    control: {
      border: {
        radius: "12px",
      },
    },
    focus: {
      border: {
        color: "darkRed",
      },
    },
  },
};

export default theme;
