import { rgba } from "polished";

const brandColor = "#7D4CDB";
const accentColors = ["#6FFFB0", "#FD6FFF", "#81FCED", "#FFCA58"];
const neutralColors = ["#00873D", "#3D138D", "#00739D", "#A2423D"];
const statusColors = {
  critical: "#FF4040",
  error: "#FF4040",
  warning: "#FFAA15",
  ok: "#00C781",
  unknown: "#CCCCCC",
  disabled: "#CCCCCC"
};
const darkColors = [
  "#333333",
  "#555555",
  "#777777",
  "#999999",
  "#999999",
  "#999999"
];
const lightColors = [
  "#F8F8F8",
  "#F2F2F2",
  "#EDEDED",
  "#DADADA",
  "#DADADA",
  "#DADADA"
];
const focusColor = accentColors[0];

const baseSpacing = 24;
const scale = 6;
const baseFontSize = baseSpacing * 0.75; // 18
const fontScale = baseSpacing / scale; // 4

const fontSizing = (factor: number) => ({
  size: `${baseFontSize + factor * fontScale}px`,
  height: `${baseSpacing + factor * fontScale}px`,
  // maxWidth chosen to be ~50 characters wide
  // see: https://ux.stackexchange.com/a/34125
  maxWidth: `${baseSpacing * (baseFontSize + factor * fontScale)}px`
});

const borderWidth = 2;

const colors = {
  active: rgba(221, 221, 221, 0.5),
  black: "#000000",
  border: {
    dark: rgba(255, 255, 255, 0.33),
    light: rgba(0, 0, 0, 0.33)
  },
  brand: brandColor,
  control: {
    dark: "accent-1",
    light: "brand"
  },
  focus: focusColor,
  // "graph-0": 'accent-1',
  // "graph-1": 'neutral-1',
  // "graph-2": 'accent-2',
  // "graph-3": 'neutral-2',
  placeholder: "#AAAAAA",
  selected: "brand",
  text: {
    dark: "#f8f8f8",
    light: "#444444"
  },
  icon: {
    dark: "#f8f8f8",
    light: "#666666"
  },
  white: "#FFFFFF"
};

export default {
  global: {
    active: {
      background: {
        color: "active",
        opacity: "medium"
      },
      color: {
        dark: "white",
        light: "black"
      }
    },
    animation: {
      duration: "1s",
      jiggle: {
        duration: "0.1s"
      }
    },
    borderSize: {
      xsmall: "1px",
      small: "2px",
      medium: `${baseSpacing / 6}px`, // 4
      large: `${baseSpacing / 2}px`, // 12
      xlarge: `${baseSpacing}px` // 24
    },
    breakpoints: {
      small: {
        value: baseSpacing * 32, // 768
        borderSize: {
          xsmall: "1px",
          small: "2px",
          medium: `${baseSpacing / 6}px`, // 4
          large: `${baseSpacing / 4}px`, // 6
          xlarge: `${baseSpacing / 2}px` // 12
        },
        edgeSize: {
          none: "0px",
          hair: "1px", // for Chart
          xxsmall: "2px",
          xsmall: `${baseSpacing / 8}px`, // 3
          small: `${baseSpacing / 4}px`, // 6
          medium: `${baseSpacing / 2}px`, // 12
          large: `${baseSpacing}px`, // 24
          xlarge: `${baseSpacing * 2}px` // 48
        },
        size: {
          xxsmall: `${baseSpacing}px`, // 24
          xsmall: `${baseSpacing * 2}px`, // 48
          small: `${baseSpacing * 4}px`, // 96
          medium: `${baseSpacing * 8}px`, // 192
          large: `${baseSpacing * 16}px`, // 384
          xlarge: `${baseSpacing * 32}px`, // 768
          full: "100%"
        }
      },
      medium: {
        value: baseSpacing * 64 // 1536
      },
      large: {} // anything above 'medium'
    },
    // Breakpoints used at Server Side Rendering for the initial rendering
    // These values correspond to the theme breakpoints
    deviceBreakpoints: {
      phone: "small",
      tablet: "medium",
      computer: "large"
    },
    colors,
    control: {
      border: {
        width: "1px",
        radius: "4px",
        color: "border"
      },
      disabled: {
        opacity: 0.3
      }
    },
    // The time to wait after the user stopped typing, measured in ms.
    debounceDelay: 300,
    drop: {
      background: "#ffffff",
      border: {
        radius: "0px"
      },
      shadowSize: "small",
      zIndex: "20"
    },
    edgeSize: {
      none: "0px",
      hair: "1px", // for Chart
      xxsmall: `${baseSpacing / 8}px`, // 3
      xsmall: `${baseSpacing / 4}px`, // 6
      small: `${baseSpacing / 2}px`, // 12
      medium: `${baseSpacing}px`, // 24
      large: `${baseSpacing * 2}px`, // 48
      xlarge: `${baseSpacing * 4}px`, // 96
      responsiveBreakpoint: "small"
    },
    elevation: {
      light: {
        none: "none",
        xsmall: "0px 1px 2px rgba(0, 0, 0, 0.20)",
        small: "0px 2px 4px rgba(0, 0, 0, 0.20)",
        medium: "0px 4px 8px rgba(0, 0, 0, 0.20)",
        large: "0px 8px 16px rgba(0, 0, 0, 0.20)",
        xlarge: "0px 12px 24px rgba(0, 0, 0, 0.20)"
      },
      dark: {
        none: "none",
        xsmall: "0px 2px 2px rgba(255, 255, 255, 0.40)",
        small: "0px 4px 4px rgba(255, 255, 255, 0.40)",
        medium: "0px 6px 8px rgba(255, 255, 255, 0.40)",
        large: "0px 8px 16px rgba(255, 255, 255, 0.40)",
        xlarge: "0px 12px 24px rgba(255, 255, 255, 0.40)"
      }
    },
    focus: {
      border: {
        color: "focus"
      }
    },
    font: {
      ...fontSizing(0)
      // face: undefined,
      // family: undefined,
    },
    hover: {
      background: {
        color: "active",
        opacity: "medium"
      },
      color: {
        dark: "white",
        light: "black"
      }
    },
    input: {
      padding: `${baseSpacing / 2}px`,
      weight: 600
    },
    opacity: {
      strong: 0.8,
      medium: 0.4,
      weak: 0.1
    },
    selected: {
      background: "selected",
      color: "white"
    },
    spacing: `${baseSpacing}px`,
    size: {
      xxsmall: `${baseSpacing * 2}px`, // 48
      xsmall: `${baseSpacing * 4}px`, // 96
      small: `${baseSpacing * 8}px`, // 192
      medium: `${baseSpacing * 16}px`, // 384
      large: `${baseSpacing * 32}px`, // 768
      xlarge: `${baseSpacing * 48}px`, // 1152
      xxlarge: `${baseSpacing * 64}px`, // 1536
      full: "100%"
    }
  },
  icon: {
    size: {
      small: "12px",
      medium: "24px",
      large: "48px",
      xlarge: "96px"
    }
  }
};
