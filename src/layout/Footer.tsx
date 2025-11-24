import { Box, Container, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{ mt: 6, py: 3, borderTop: "1px solid", borderColor: "divider" }}
    >
      <Container
        maxWidth="lg"
        sx={{ display: "flex", flexDirection: "column", gap: 1 }}
      >
        <Typography variant="body2" color="text.secondary">
          Esta herramienta es orientativa y no constituye asesoramiento
          financiero ni legal.
        </Typography>
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          <Link
            component={RouterLink}
            to="/glosario-rentabilidad-inmueble"
            underline="hover"
          >
            Glosario
          </Link>
          <Link
            component={RouterLink}
            to="/preguntas-frecuentes-rentabilidad-inmuebles"
            underline="hover"
          >
            Preguntas frecuentes
          </Link>
          <Link
            component={RouterLink}
            to="/sobre-esta-herramienta"
            underline="hover"
          >
            Sobre esta herramienta
          </Link>
        </Box>
        <Typography variant="caption" color="text.disabled">
          © {new Date().getFullYear()} Rentabilidad inmueble
        </Typography>
      </Container>
    </Box>
  );
}
