// src/layout/Header.tsx
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";

const navItems = [
  { label: "Inicio", to: "/" },
  { label: "Calculadora", to: "/calculadora-rentabilidad-inmueble" },
  { label: "Glosario", to: "/glosario-rentabilidad-inmueble" },
  { label: "FAQ", to: "/preguntas-frecuentes-rentabilidad-inmuebles" },
];

export function Header() {
  const location = useLocation();

  return (
    <AppBar position="sticky" elevation={0} color="transparent">
      <Toolbar
        sx={{
          maxWidth: 1200,
          mx: "auto",
          width: "100%",
          py: 1.2,
        }}
      >
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{
            flexGrow: 1,
            fontWeight: 800,
            color: "text.primary",
            letterSpacing: "-0.03em",
            textDecoration: "none",
          }}
        >
          Rentabilidad&nbsp;Piso
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 0.5,
            bgcolor: "rgba(148,163,184,0.12)", // gris suave
            p: 0.5,
            borderRadius: 999,
            border: "1px solid rgba(148,163,184,0.35)",
          }}
        >
          {navItems.map((item) => {
            const active = location.pathname === item.to;
            return (
              <Button
                key={item.to}
                component={RouterLink}
                to={item.to}
                size="small"
                sx={{
                  borderRadius: 999,
                  px: 2.2,
                  py: 0.7,
                  fontSize: 13,
                  fontWeight: 600,
                  color: active ? "primary.main" : "text.secondary",
                  bgcolor: active ? "background.paper" : "transparent",
                  boxShadow: active ? "0 4px 12px rgba(15,23,42,0.12)" : "none",
                  "&:hover": {
                    bgcolor: active
                      ? "background.paper"
                      : "rgba(148,163,184,0.16)",
                    transform: "translateY(-1px)",
                  },
                  transition: "all 0.15s ease-out",
                }}
              >
                {item.label}
              </Button>
            );
          })}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
