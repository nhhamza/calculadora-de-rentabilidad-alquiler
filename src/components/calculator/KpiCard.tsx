// src/components/calculator/KpiCard.tsx
import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";

interface KpiCardProps {
  label: string;
  value: string;
  helperText?: string;
  color?: "success" | "warning" | "error" | "primary";
  icon?: ReactNode;
}

export function KpiCard({
  label,
  value,
  helperText,
  color = "primary",
  icon,
}: KpiCardProps) {
  return (
    <Box
      sx={{
        textAlign: "center",
        p: 2.2,
        bgcolor: "rgba(15,23,42,0.02)",
        borderRadius: 3,
        border: "1px solid",
        borderColor: "rgba(148,163,184,0.35)",
        minHeight: 130,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          opacity: 0,
          background:
            "radial-gradient(circle at top, rgba(56,189,248,0.12), transparent 55%)",
          transition: "opacity 0.2s ease-out",
        },
        "&:hover::before": {
          opacity: 1,
        },
      }}
    >
      {icon && <Box sx={{ mb: 0.5, zIndex: 1 }}>{icon}</Box>}
      <Typography
        variant="h4"
        sx={{
          zIndex: 1,
          color:
            color === "success"
              ? "success.main"
              : color === "warning"
              ? "warning.main"
              : color === "error"
              ? "error.main"
              : "primary.main",
        }}
      >
        {value}
      </Typography>
      <Typography
        variant="caption"
        color="text.secondary"
        sx={{ zIndex: 1, mt: 0.5 }}
      >
        {label}
      </Typography>
      {helperText && (
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ zIndex: 1, mt: 0.5, opacity: 0.9 }}
        >
          {helperText}
        </Typography>
      )}
    </Box>
  );
}
