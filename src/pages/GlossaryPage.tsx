import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { Layout } from "../layout/Layout";

const terms = [
  {
    term: "Rentabilidad bruta",
    description:
      "Porcentaje que resulta de dividir la renta anual entre el precio de compra, sin descontar gastos ni impuestos.",
  },
  {
    term: "Rentabilidad neta",
    description:
      "Rentabilidad de la inversión tras descontar gastos recurrentes como impuestos, comunidad, seguros y mantenimiento.",
  },
  {
    term: "Cash flow",
    description:
      "Flujo de caja. Diferencia entre los ingresos mensuales por alquiler y todos los gastos mensuales asociados al inmueble.",
  },
  {
    term: "Cash-on-Cash",
    description:
      "Relación entre el cash flow anual y el dinero que has aportado de tu bolsillo (entrada, gastos y reforma).",
  },
  {
    term: "Cap Rate",
    description:
      "Tasa de capitalización. Relación entre el NOI anual (ingresos netos de explotación) y el precio de compra.",
  },
  {
    term: "DSCR",
    description:
      "Debt Service Coverage Ratio. Mide cuántas veces el NOI cubre el pago anual de la deuda. Valores superiores a 1,25 suelen considerarse sanos.",
  },
  {
    term: "NOI",
    description:
      "Net Operating Income. Ingresos anuales brutos menos los gastos de explotación, sin incluir la deuda.",
  },
  {
    term: "IBI",
    description:
      "Impuesto sobre Bienes Inmuebles. Impuesto municipal anual que grava la propiedad del inmueble.",
  },
  {
    term: "Comunidad de propietarios",
    description:
      "Cuota que se paga periódicamente para cubrir los gastos comunes del edificio (ascensor, limpieza, mantenimiento, etc.).",
  },
];

export function GlossaryPage() {
  return (
    <Layout>
      <Helmet>
        <title>
          Glosario de rentabilidad inmobiliaria | Rentabilidad inmueble
        </title>
        <meta
          name="description"
          content="Glosario de términos clave sobre rentabilidad de inmuebles en alquiler: cash flow, cash-on-cash, Cap Rate, DSCR, NOI, IBI y más."
        />
      </Helmet>

      <Typography variant="h4" gutterBottom>
        Glosario de rentabilidad inmobiliaria
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Aquí tienes una explicación sencilla de los principales conceptos que
        aparecen al analizar la rentabilidad de un inmueble en alquiler.
      </Typography>

      <Box sx={{ mt: 2 }}>
        <Grid container spacing={2}>
          {terms.map((item) => (
            <Grid item xs={12} md={6} key={item.term}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {item.term}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Layout>
  );
}
