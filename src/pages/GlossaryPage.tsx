import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { Layout } from "../layout/Layout";
import { SEO } from "../utils/seo";

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
    term: "Cash flow (Flujo de caja)",
    description:
      "Flujo de caja. Diferencia entre los ingresos mensuales por alquiler y todos los gastos mensuales asociados al inmueble.",
  },
  {
    term: "Cash-on-Cash Return",
    description:
      "Relación entre el cash flow anual y el dinero que has aportado de tu bolsillo (entrada, gastos y reforma). Mide el retorno sobre tu inversión inicial.",
  },
  {
    term: "Cap Rate (Tasa de Capitalización)",
    description:
      "Tasa de capitalización. Relación entre el NOI anual (ingresos netos de explotación) y el precio de compra. Indica la rentabilidad sin financiación.",
  },
  {
    term: "ROI (Retorno de Inversión)",
    description:
      "Return on Investment. Mide el beneficio total obtenido en relación con la inversión inicial. Es una métrica fundamental para evaluar la rentabilidad.",
  },
  {
    term: "TIR (Tasa Interna de Retorno)",
    description:
      "Tasa de rentabilidad que iguala el valor presente de los flujos de caja futuros con la inversión inicial. Es una métrica avanzada para comparar inversiones.",
  },
  {
    term: "DSCR",
    description:
      "Debt Service Coverage Ratio. Mide cuántas veces el NOI cubre el pago anual de la deuda. Valores superiores a 1,25 suelen considerarse sanos.",
  },
  {
    term: "NOI (Net Operating Income)",
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
      <SEO
        title="Glosario Rentabilidad Inmobiliaria - Términos Clave Alquiler"
        description="Glosario completo de términos sobre rentabilidad de inmuebles en alquiler: ROI, TIR, cash flow, cash-on-cash, Cap Rate, DSCR, NOI, IBI y más. Aprende a calcular la rentabilidad con nuestra calculadora gratuita."
        keywords="glosario rentabilidad inmobiliaria, ROI inmueble, TIR inversión, cash flow alquiler, cash on cash, cap rate, DSCR, NOI, rentabilidad bruta neta, términos inversión inmobiliaria"
        canonical="https://calculadora-de-rentabilidad.vercel.app/glosario-rentabilidad-inmueble"
      />

      <Typography variant="h1" sx={{ fontSize: "1.75rem" }} gutterBottom>
        Glosario de Rentabilidad Inmobiliaria
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Explicación sencilla de los principales conceptos y términos que
        necesitas conocer para analizar la rentabilidad de un inmueble en
        alquiler con nuestra calculadora gratuita.
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
