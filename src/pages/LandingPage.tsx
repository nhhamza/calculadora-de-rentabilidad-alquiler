import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SavingsIcon from "@mui/icons-material/Savings";
import HomeIcon from "@mui/icons-material/Home";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link as RouterLink } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { SEO, structuredDataTemplates } from "../utils/seo";

export function LandingPage() {
  return (
    <Layout>
      <SEO
        title="Calculadora de Rentabilidad Alquiler Gratuita"
        description="Calculadora de rentabilidad de alquiler gratuita para inversiones inmobiliarias en España. Analiza tu inmueble en alquiler con hipoteca, gastos, impuestos y obtén ROI, TIR y cash flow al instante. 100% gratis."
        keywords="calculadora rentabilidad alquiler gratuita, calculadora rentabilidad inmueble, calculadora alquiler gratis, ROI inmobiliario, rentabilidad inversión inmobiliaria España, calculadora hipoteca alquiler, cash flow inmuebles, TIR inmobiliaria, simulador inversión inmobiliaria"
        canonical="https://calculadora-de-rentabilidad.vercel.app/"
        structuredData={structuredDataTemplates.website}
      />

      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Stack spacing={2}>
            <Typography
              variant="h1"
              sx={{ fontSize: { xs: "2rem", md: "2.6rem" } }}
            >
              Calculadora de Rentabilidad Alquiler Gratuita
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Calcula gratis la rentabilidad de tu inversión inmobiliaria en
              alquiler. Evalúa en minutos si un inmueble es una buena inversión
              teniendo en cuenta hipoteca, gastos, impuestos y renta mensual.
              Herramienta 100% gratuita para España.
            </Typography>
            <Button
              component={RouterLink}
              to="/calculadora-rentabilidad-inmueble"
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{ alignSelf: { xs: "stretch", sm: "flex-start" }, mt: 1 }}
            >
              Calcular gratis ahora
            </Button>
          </Stack>
        </Grid>

        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <Card>
                <CardContent sx={{ textAlign: "center" }}>
                  <TrendingUpIcon
                    color="primary"
                    sx={{ fontSize: 40, mb: 1 }}
                  />
                  <Typography variant="subtitle1" fontWeight={600}>
                    Calcula tu rentabilidad
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Descubre el rendimiento aproximado de tu inversión
                    inmobiliaria.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card>
                <CardContent sx={{ textAlign: "center" }}>
                  <SavingsIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />
                  <Typography variant="subtitle1" fontWeight={600}>
                    Incluye todos los gastos
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Tiene en cuenta hipoteca, impuestos, comunidad, seguros y
                    más.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card>
                <CardContent sx={{ textAlign: "center" }}>
                  <HomeIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />
                  <Typography variant="subtitle1" fontWeight={600}>
                    Pensado para España
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Diseñado para el mercado del alquiler residencial en España.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Box sx={{ mt: 6 }}>
        <Typography variant="h2" sx={{ fontSize: "1.75rem", mb: 2 }}>
          ¿Por qué usar nuestra calculadora de rentabilidad gratuita?
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Nuestra herramienta gratuita de análisis de inversiones inmobiliarias
          te permite calcular la rentabilidad real de un inmueble en alquiler en
          España. A diferencia de otras calculadoras, incluimos todos los
          gastos: hipoteca, impuestos (IBI, ITP), comunidad, seguros,
          mantenimiento y vacacional. Obtén métricas clave como ROI, TIR, cash
          flow y ratio de capitalización al instante.
        </Typography>
      </Box>

      <Box sx={{ mt: 6 }}>
        <Typography variant="h5" gutterBottom>
          ¿Cómo funciona la calculadora?
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="subtitle1" fontWeight={600}>
                  1. Introduce los datos del inmueble
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Precio de compra, hipoteca, gastos e ingresos por alquiler.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="subtitle1" fontWeight={600}>
                  2. Calcula la rentabilidad
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  La calculadora genera el flujo de caja, rentabilidad y otros
                  ratios.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="subtitle1" fontWeight={600}>
                  3. Decide con más información
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Usa los resultados como apoyo para comparar operaciones y
                  tomar decisiones.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
}
