/** @type {import('tailwindcss').Config} */
function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgba(var(${variableName}))`;
  };
}

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      inter: ["inter"],
    },
    fontSize: {
      xs: "10px",
      sm: "12px",
      base: "14px",
      md: "16px",
      lg: "20px",
      xl: "26px",
      "2xl": "30px",
      "3xl": "34px",
    },
    extend: {
      colors: {
        primary: {
          100: withOpacity("--color-primary-hover"),
          DEFAULT: withOpacity("--color-primary"),
        },
        secondary: withOpacity("--color-secondary"),
        danger: withOpacity("--color-danger"),
        divider: "var(--color-divider)",
        orange: "var(--color-orange)",
      },
      backgroundImage: {
        "auth-gradient": "var(--gradient-blue)",
      },
      backgroundColor: (theme) => ({
        hover: "var(--color-bg-hover)", // could not set the opacity with the common one. will check later
        primary: withOpacity("--color-bg-primary"),
        secondary: withOpacity("--color-bg-secondary"),
        sidebar: withOpacity("--color-bg-side"),
        loader: "var(--color-bg-loader)",
        list: "var(--color-bg-list)",
        gray: {
          500: withOpacity("--color-border"),
        },
      }),
      boxShadow: {
        dropdown:
          "0px 0px 2px 0px #00000040, 0px 2.2100000381469727px 2.2138051986694336px 2.2100000381469727px #00000005, 0px 5.320000171661377px 5.32008171081543px 5.320000171661377px #00000008, 0px 10.020000457763672px 10.017241477966309px 10.020000457763672px #0000000a;",
        DEFAULT: `0px 0px 3px 0px #00000040`,
        "bottom": `0px 3px 3px 0px #00000040`,
      },
      borderRadius: { DEFAULT: "6px", "3xl": "20px" },
      borderColor: {
        primary: withOpacity("--color-primary"),
        secondary: withOpacity("--color-secondary"),
        DEFAULT: withOpacity("--color-border"),
        list: withOpacity("--color-bg-secondary"),
      },
      spacing: {
        8: "30px",
        15: "60px",
        headerHeight: "74px",
        sidebarWidth: "var(--sidebar-width)",
      },
      maxWidth: {
        sm: "450px",
      },
      animation: {
        loader: "loader 0.6s infinite alternate",
      },
      keyframes: {
        loader: {
          from: {
            opacity: 1,
            transform: "translate3d(0, 0.3rem, 0)",
          },
          to: {
            opacity: 0.1,
            transform: "translate3d(0, -0.3rem, 0)",
          },
        },
      },
    },
  },
  plugins: [],
};
