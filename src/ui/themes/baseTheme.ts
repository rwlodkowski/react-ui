const baseTheme = {
  defaults: {
    fontFamily: "Campton-Book, Arial, Helvetica, sans-serif",
    backgroundColor: "black",
    transition: "all 100ms ease-in-out"
  },
  breakpoints: [
    { mediaQuery: "@media (max-width: 768px)", vars: [] },
    { mediaQuery: "@media (min-width: 768px)", vars: [] }
  ]
};

export default baseTheme;
