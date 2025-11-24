import {
  Alert,
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import CalculateIcon from "@mui/icons-material/Calculate";
import { DealResults } from "./useDealAnalyzer";
import { KpiCard } from "./KpiCard";

interface DealResultsPanelProps {
  results: DealResults | null;
  formatCurrency: (value: number) => string;
  formatPercent: (value: number) => string;
}

export function DealResultsPanel({
  results,
  formatCurrency,
  formatPercent,
}: DealResultsPanelProps) {
  if (!results) {
    return (
      <Paper sx={{ p: 4, textAlign: "center" }}>
        <CalculateIcon sx={{ fontSize: 80, color: "text.disabled" }} />
        <Typography variant="h6" color="text.secondary" sx={{ mt: 2 }}>
          Introduce los datos y haz clic en "Calcular rentabilidad"
        </Typography>
      </Paper>
    );
  }

  const {
    totalInvestment,
    downPayment,
    loanAmount,
    monthlyMortgage,
    effectiveMonthlyIncome,
    totalMonthlyExpenses,
    monthlyCashFlow,
    annualCashFlow,
    capRate,
    cashOnCash,
    dscr,
    breakEven,
  } = results;

  const cashOnCashColor =
    cashOnCash > 8 ? "success" : cashOnCash > 6 ? "warning" : "error";
  const capRateColor =
    capRate > 6 ? "success" : capRate > 4 ? "warning" : "error";
  const dscrColor = dscr > 1.25 ? "success" : dscr > 1 ? "warning" : "error";
  const breakEvenColor =
    breakEven < 80 ? "success" : breakEven < 90 ? "warning" : "error";

  return (
    <Stack spacing={2}>
      <Alert
        severity={results.isProfitable ? "success" : "warning"}
        icon={results.isProfitable ? <TrendingUpIcon /> : <TrendingDownIcon />}
      >
        <Typography variant="h6">
          {results.isProfitable
            ? "✓ Inversión rentable"
            : "⚠ Inversión de riesgo"}
        </Typography>
        <Typography variant="body2">
          {results.isProfitable
            ? "Esta propiedad cumple con los criterios de rentabilidad (Cash-on-Cash > 6%)."
            : "Esta propiedad no alcanza los criterios mínimos de rentabilidad. Revisa la renta, el precio o los gastos."}
        </Typography>
      </Alert>

      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Inversión inicial
          </Typography>
          <Stack spacing={1}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography color="text.secondary">Entrada</Typography>
              <Typography fontWeight={600}>
                {formatCurrency(downPayment)}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography color="text.secondary">Gastos + reforma</Typography>
              <Typography fontWeight={600}>
                {formatCurrency(totalInvestment - downPayment)}
              </Typography>
            </Box>
            <Divider />
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography fontWeight={700}>Total inversión</Typography>
              <Typography fontWeight={700} color="primary.main">
                {formatCurrency(totalInvestment)}
              </Typography>
            </Box>
          </Stack>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Flujo de caja mensual
          </Typography>
          <Stack spacing={1}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography color="text.secondary">Ingreso efectivo</Typography>
              <Typography>{formatCurrency(effectiveMonthlyIncome)}</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography color="text.secondary">Gastos totales</Typography>
              <Typography>-{formatCurrency(totalMonthlyExpenses)}</Typography>
            </Box>
            <Divider />
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography fontWeight={700}>Cash flow mensual</Typography>
              <Typography
                fontWeight={700}
                color={monthlyCashFlow > 0 ? "success.main" : "error.main"}
              >
                {formatCurrency(monthlyCashFlow)}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography color="text.secondary">Cash flow anual</Typography>
              <Typography fontWeight={600}>
                {formatCurrency(annualCashFlow)}
              </Typography>
            </Box>
          </Stack>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Métricas clave
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <KpiCard
                label="Cash-on-Cash"
                value={formatPercent(cashOnCash)}
                color={cashOnCashColor}
                helperText="Rendimiento anual del capital que has aportado de tu bolsillo."
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <KpiCard
                label="Cap Rate"
                value={formatPercent(capRate)}
                color={capRateColor}
                helperText="Rentabilidad neta antes de deuda respecto al precio de compra."
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <KpiCard
                label="DSCR"
                value={dscr.toFixed(2)}
                color={dscrColor}
                helperText="Capacidad de la renta para cubrir la deuda. Ideal por encima de 1,25."
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <KpiCard
                label="Break-even"
                value={formatPercent(breakEven)}
                color={breakEvenColor}
                helperText="Ocupación necesaria para cubrir todos los gastos del inmueble."
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Detalles del préstamo
          </Typography>
          <Stack spacing={1}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography color="text.secondary">Cantidad prestada</Typography>
              <Typography fontWeight={600}>
                {formatCurrency(loanAmount)}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography color="text.secondary">Pago mensual (P&I)</Typography>
              <Typography fontWeight={600}>
                {formatCurrency(monthlyMortgage)}
              </Typography>
            </Box>
          </Stack>
        </CardContent>
      </Card>

      <Paper sx={{ p: 2, bgcolor: "info.lighter" }}>
        <Typography variant="subtitle2" gutterBottom>
          💡 Criterios de inversión orientativos
        </Typography>
        <Typography variant="body2" color="text.secondary">
          • Cash-on-Cash: mínimo 6%, óptimo &gt; 8%
          <br />
          • Cap Rate: mínimo 4%, óptimo &gt; 6%
          <br />
          • DSCR: mínimo 1,0, óptimo &gt; 1,25
          <br />• Break-even: máximo 90%, óptimo &lt; 80%
        </Typography>
      </Paper>
    </Stack>
  );
}
