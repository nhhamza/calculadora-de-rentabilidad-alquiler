// src/theme.ts
import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    accent: Palette["primary"];
  }
  interface PaletteOptions {
    accent?: PaletteOptions["primary"];
  }
}

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#006C84",
      light: "#32A7C4",
      dark: "#00465A",
    },
    secondary: {
      main: "#00A99D",
      light: "#45D1C7",
      dark: "#00786E",
    },
    accent: {
      main: "#FFB547",
      light: "#FFD27F",
      dark: "#CC8C24",
    },
    background: {
      default: "#F3F6FB",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#1F2933",
      secondary: "#6B7280",
    },
  },
  typography: {
    fontFamily:
      "'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    h1: { fontSize: "2.6rem", fontWeight: 700, letterSpacing: "-0.03em" },
    h2: { fontSize: "2.1rem", fontWeight: 600, letterSpacing: "-0.02em" },
    h3: { fontSize: "1.8rem", fontWeight: 600 },
    h4: { fontSize: "1.6rem", fontWeight: 600 },
    body1: { fontSize: "0.98rem" },
    body2: { fontSize: "0.9rem" },
  },
  shape: {
    borderRadius: 16,
  },
  shadows: [
    "none",
    "0 4px 12px rgba(15, 23, 42, 0.06)",
    "0 6px 18px rgba(15, 23, 42, 0.08)",
    "0 10px 30px rgba(15, 23, 42, 0.12)",
    ...Array(22).fill("none"),
  ] as any,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background:
            "radial-gradient(circle at top, #e0f2fe 0, #f3f6fb 45%, #eef2ff 100%)",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          // Header gris clarito, casi blanco
          backgroundColor: "rgba(248, 250, 252, 0.96)", // gris muy claro
          color: "#111827",
          backdropFilter: "blur(10px)",
          boxShadow: "0 1px 0 rgba(15, 23, 42, 0.06)", // línea sutil inferior
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          boxShadow: "0 8px 24px rgba(15,23,42,0.08)",
          transition: "transform 0.18s ease-out, box-shadow 0.18s ease-out",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 12px 32px rgba(15,23,42,0.16)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 18,
          boxShadow: "0 6px 18px rgba(15,23,42,0.06)",
          transition: "transform 0.18s ease-out, box-shadow 0.18s ease-out",
          "&:hover": {
            transform: "translateY(-3px)",
            boxShadow: "0 12px 32px rgba(15,23,42,0.16)",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          textTransform: "none",
          fontWeight: 600,
          paddingInline: 20,
          paddingBlock: 10,
          boxShadow: "0 6px 18px rgba(0,108,132,0.25)",
          transition:
            "background-color 0.18s ease-out, transform 0.15s ease-out, box-shadow 0.18s ease-out",
          "&:hover": {
            transform: "translateY(-1px)",
            boxShadow: "0 10px 26px rgba(0,108,132,0.35)",
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textUnderlineOffset: "3px",
          "&:hover": {
            textDecoration: "underline",
          },
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
      },
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 14,
            backgroundColor: "rgba(255,255,255,0.9)",
            "& fieldset": {
              borderColor: "rgba(148,163,184,0.4)",
            },
            "&:hover fieldset": {
              borderColor: "#0ea5e9",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#0284c7",
              boxShadow: "0 0 0 1px rgba(56,189,248,0.6)",
            },
          },
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: 18,
        },
      },
    },
  },
});
