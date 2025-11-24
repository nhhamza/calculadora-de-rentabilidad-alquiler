import {
  Box,
  Paper,
  Typography,
  Grid,
  TextField,
  InputAdornment,
  Button
} from "@mui/material";
import CalculateIcon from "@mui/icons-material/Calculate";
import { DealInputs } from "./useDealAnalyzer";
import { InfoTooltip } from "../common/InfoTooltip";

interface DealInputsFormProps {
  inputs: DealInputs;
  onChange: (field: keyof DealInputs, value: number) => void;
  onSubmit: () => void;
}

export function DealInputsForm({ inputs, onChange, onSubmit }: DealInputsFormProps) {
  const handleChange =
    (field: keyof DealInputs) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = parseFloat(event.target.value);
      onChange(field, value);
    };

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Datos de la propiedad
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Precio de compra"
            type="number"
            value={inputs.purchasePrice}
            onChange={handleChange("purchasePrice")}
            InputProps={{
              startAdornment: <InputAdornment position="start">€</InputAdornment>
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Entrada (%)"
            type="number"
            value={inputs.downPaymentPercent}
            onChange={handleChange("downPaymentPercent")}
            InputProps={{
              endAdornment: <InputAdornment position="end">%</InputAdornment>
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <TextField
              fullWidth
              label="Interés anual"
              type="number"
              value={inputs.interestRate}
              onChange={handleChange("interestRate")}
              InputProps={{
                endAdornment: <InputAdornment position="end">%</InputAdornment>
              }}
            />
            <InfoTooltip title="Tipo de interés nominal anual de la hipoteca." />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Plazo hipoteca (años)"
            type="number"
            value={inputs.loanTerm}
            onChange={handleChange("loanTerm")}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <TextField
              fullWidth
              label="Gastos de compra"
              type="number"
              value={inputs.closingCosts}
              onChange={handleChange("closingCosts")}
              InputProps={{
                startAdornment: <InputAdornment position="start">€</InputAdornment>
              }}
            />
            <InfoTooltip title="Impuestos, notaría, registro y otros gastos de compra." />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Reforma"
            type="number"
            value={inputs.renovationCosts}
            onChange={handleChange("renovationCosts")}
            InputProps={{
              startAdornment: <InputAdornment position="start">€</InputAdornment>
            }}
          />
        </Grid>
      </Grid>

      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Ingresos
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Renta mensual"
            type="number"
            value={inputs.monthlyRent}
            onChange={handleChange("monthlyRent")}
            InputProps={{
              startAdornment: <InputAdornment position="start">€</InputAdornment>
            }}
          />
        </Grid>
      </Grid>

      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Gastos anuales
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <TextField
              fullWidth
              label="IBI anual"
              type="number"
              value={inputs.propertyTax}
              onChange={handleChange("propertyTax")}
              InputProps={{
                startAdornment: <InputAdornment position="start">€</InputAdornment>
              }}
            />
            <InfoTooltip title="Impuesto sobre Bienes Inmuebles (IBI) anual." />
          </Box>
        </Grid>
      </Grid>

      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Gastos mensuales
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Seguro"
            type="number"
            value={inputs.insurance}
            onChange={handleChange("insurance")}
            InputProps={{
              startAdornment: <InputAdornment position="start">€</InputAdornment>
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Comunidad"
            type="number"
            value={inputs.hoa}
            onChange={handleChange("hoa")}
            InputProps={{
              startAdornment: <InputAdornment position="start">€</InputAdornment>
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Mantenimiento"
            type="number"
            value={inputs.maintenance}
            onChange={handleChange("maintenance")}
            InputProps={{
              startAdornment: <InputAdornment position="start">€</InputAdornment>
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <TextField
              fullWidth
              label="Gestión"
              type="number"
              value={inputs.propertyManagement}
              onChange={handleChange("propertyManagement")}
              InputProps={{
                endAdornment: <InputAdornment position="end">%</InputAdornment>
              }}
            />
            <InfoTooltip title="Porcentaje que pagas a la agencia de gestión sobre la renta." />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Suministros"
            type="number"
            value={inputs.utilities}
            onChange={handleChange("utilities")}
            InputProps={{
              startAdornment: <InputAdornment position="start">€</InputAdornment>
            }}
          />
        </Grid>
      </Grid>

      <Button
        variant="contained"
        size="large"
        fullWidth
        onClick={onSubmit}
        startIcon={<CalculateIcon />}
        sx={{ mt: 3 }}
      >
        Calcular rentabilidad
      </Button>
    </Paper>
  );
}
