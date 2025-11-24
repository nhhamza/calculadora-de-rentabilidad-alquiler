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
import { Helmet } from "react-helmet-async";
import { Layout } from "../layout/Layout";

export function LandingPage() {
  return (
    <Layout>
      <Helmet>
        <title>
          Calculadora de rentabilidad de un inmueble | Inversión inmobiliaria en
          España
        </title>
        <meta
          name="description"
          content="Calcula la rentabilidad de tu inmueble en alquiler en España teniendo en cuenta hipoteca, gastos e ingresos. Simulador inmobiliario sencillo y visual."
        />
      </Helmet>

      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Stack spacing={2}>
            <Typography
              variant="h1"
              sx={{ fontSize: { xs: "2rem", md: "2.6rem" } }}
            >
              Calculadora de rentabilidad de un inmueble
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Evalúa en minutos si un inmueble en alquiler es una buena
              inversión. Ten en cuenta la hipoteca, los gastos y la renta
              mensual de forma sencilla.
            </Typography>
            <Button
              component={RouterLink}
              to="/calculadora-rentabilidad-inmueble"
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{ alignSelf: { xs: "stretch", sm: "flex-start" }, mt: 1 }}
            >
              Empezar a calcular
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
        <Typography variant="h5" gutterBottom>
          ¿Cómo funciona?
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
