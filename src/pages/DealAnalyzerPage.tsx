import { Grid, Typography, Box, Alert, Link } from "@mui/material";
import { Layout } from "../layout/Layout";
import { DealInputsForm } from "../components/calculator/DealInputsForm";
import { DealResultsPanel } from "../components/calculator/DealResultsPanel";
import { useDealAnalyzer } from "../components/calculator/useDealAnalyzer";
import { SEO, structuredDataTemplates } from "../utils/seo";
import DashboardIcon from "@mui/icons-material/Dashboard";

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
      <SEO
        title="Calculadora Rentabilidad Alquiler Inmueble Gratis"
        description="Calculadora gratuita de rentabilidad de inmuebles en alquiler. Introduce precio, hipoteca, gastos e ingresos y obtén al instante: cash flow, ROI, TIR, Cap Rate, Cash-on-Cash y DSCR. Herramienta online para inversores inmobiliarios en España."
        keywords="calculadora rentabilidad alquiler, simulador inversión inmobiliaria, calcular ROI inmueble, cash flow alquiler, calculadora hipoteca inversión, TIR inmobiliaria, cap rate España, cash on cash return, DSCR calculadora"
        canonical="https://calculadora-de-rentabilidad.vercel.app/calculadora-rentabilidad-inmueble"
        structuredData={structuredDataTemplates.calculator}
      />

      <Typography variant="h1" sx={{ fontSize: "1.75rem" }} gutterBottom>
        Calculadora de Rentabilidad de Alquiler Gratuita
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Introduce los datos de tu inversión inmobiliaria para calcular gratis el
        flujo de caja y los principales ratios de rentabilidad (ROI, TIR, Cap
        Rate, Cash-on-Cash). Los resultados son orientativos.
      </Typography>

      <Alert
        severity="info"
        icon={<DashboardIcon />}
        sx={{ mb: 3 }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexWrap: "wrap" }}>
          <Typography variant="body2">
            También puedes probar nuestra
          </Typography>
          <Link
            href="https://capex-two.vercel.app/dashboard"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ fontWeight: 600, textDecoration: "none" }}
          >
            aplicación de gestión inmobiliaria para propietarios
          </Link>
        </Box>
      </Alert>

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
