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
      const rawValue = event.target.value;

      // If empty or just whitespace, set to 0
      if (!rawValue || rawValue.trim() === '') {
        onChange(field, 0);
        return;
      }

      // Parse the value and handle NaN
      const value = parseFloat(rawValue);
      if (!isNaN(value)) {
        onChange(field, value);
      }
    };

  // Helper to display empty string for zero values
  const displayValue = (value: number) => value === 0 ? '' : value;

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
            value={displayValue(inputs.purchasePrice)}
            onChange={handleChange("purchasePrice")}
            InputProps={{
              startAdornment: <InputAdornment position="start">€</InputAdornment>
            }}
            inputProps={{
              min: 0,
              step: 1000
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Entrada (%)"
            type="number"
            value={displayValue(inputs.downPaymentPercent)}
            onChange={handleChange("downPaymentPercent")}
            InputProps={{
              endAdornment: <InputAdornment position="end">%</InputAdornment>
            }}
            inputProps={{
              min: 0,
              max: 100,
              step: 1
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <TextField
              fullWidth
              label="Interés anual"
              type="number"
              value={displayValue(inputs.interestRate)}
              onChange={handleChange("interestRate")}
              InputProps={{
                endAdornment: <InputAdornment position="end">%</InputAdornment>
              }}
              inputProps={{
                min: 0,
                max: 20,
                step: 0.1
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
            value={displayValue(inputs.loanTerm)}
            onChange={handleChange("loanTerm")}
            inputProps={{
              min: 1,
              max: 50,
              step: 1
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <TextField
              fullWidth
              label="Gastos de compra"
              type="number"
              value={displayValue(inputs.closingCosts)}
              onChange={handleChange("closingCosts")}
              InputProps={{
                startAdornment: <InputAdornment position="start">€</InputAdornment>
              }}
              inputProps={{
                min: 0,
                step: 100
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
            value={displayValue(inputs.renovationCosts)}
            onChange={handleChange("renovationCosts")}
            InputProps={{
              startAdornment: <InputAdornment position="start">€</InputAdornment>
            }}
            inputProps={{
              min: 0,
              step: 100
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
            value={displayValue(inputs.monthlyRent)}
            onChange={handleChange("monthlyRent")}
            InputProps={{
              startAdornment: <InputAdornment position="start">€</InputAdornment>
            }}
            inputProps={{
              min: 0,
              step: 10
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
              value={displayValue(inputs.propertyTax)}
              onChange={handleChange("propertyTax")}
              InputProps={{
                startAdornment: <InputAdornment position="start">€</InputAdornment>
              }}
              inputProps={{
                min: 0,
                step: 10
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
            value={displayValue(inputs.insurance)}
            onChange={handleChange("insurance")}
            InputProps={{
              startAdornment: <InputAdornment position="start">€</InputAdornment>
            }}
            inputProps={{
              min: 0,
              step: 1
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Comunidad"
            type="number"
            value={displayValue(inputs.hoa)}
            onChange={handleChange("hoa")}
            InputProps={{
              startAdornment: <InputAdornment position="start">€</InputAdornment>
            }}
            inputProps={{
              min: 0,
              step: 1
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Mantenimiento"
            type="number"
            value={displayValue(inputs.maintenance)}
            onChange={handleChange("maintenance")}
            InputProps={{
              startAdornment: <InputAdornment position="start">€</InputAdornment>
            }}
            inputProps={{
              min: 0,
              step: 1
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <TextField
              fullWidth
              label="Gestión"
              type="number"
              value={displayValue(inputs.propertyManagement)}
              onChange={handleChange("propertyManagement")}
              InputProps={{
                endAdornment: <InputAdornment position="end">%</InputAdornment>
              }}
              inputProps={{
                min: 0,
                max: 100,
                step: 0.5
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
            value={displayValue(inputs.utilities)}
            onChange={handleChange("utilities")}
            InputProps={{
              startAdornment: <InputAdornment position="start">€</InputAdornment>
            }}
            inputProps={{
              min: 0,
              step: 1
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
