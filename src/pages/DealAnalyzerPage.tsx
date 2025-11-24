import { Grid, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { Layout } from "../layout/Layout";
import { DealInputsForm } from "../components/calculator/DealInputsForm";
import { DealResultsPanel } from "../components/calculator/DealResultsPanel";
import { useDealAnalyzer } from "../components/calculator/useDealAnalyzer";

export function DealAnalyzerPage() {
  const {
    inputs,
    results,
    setInput,
    calculate,
    formatCurrency,
    formatPercent,
  } = useDealAnalyzer();

  return (
    <Layout>
      <Helmet>
        <title>
          Calcular rentabilidad alquiler inmueble | Simulador inmobiliario
          España
        </title>
        <meta
          name="description"
          content="Calcula la rentabilidad de un inmueble en alquiler introduciendo precio, hipoteca, gastos e ingresos. Obtén cash flow, Cap Rate, Cash-on-Cash, DSCR y más."
        />
      </Helmet>

      <Typography variant="h4" gutterBottom>
        Calculadora de rentabilidad
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Introduce los datos de tu inversión para estimar el flujo de caja y los
        principales ratios de rentabilidad. Los resultados son orientativos.
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} lg={6}>
          <DealInputsForm
            inputs={inputs}
            onChange={setInput}
            onSubmit={calculate}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <DealResultsPanel
            results={results}
            formatCurrency={formatCurrency}
            formatPercent={formatPercent}
          />
        </Grid>
      </Grid>
    </Layout>
  );
}
