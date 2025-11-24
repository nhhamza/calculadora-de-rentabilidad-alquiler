import { Tooltip, IconButton } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

interface InfoTooltipProps {
  title: string;
}

export function InfoTooltip({ title }: InfoTooltipProps) {
  return (
    <Tooltip title={title} arrow>
      <IconButton size="small" sx={{ ml: 0.5 }}>
        <HelpOutlineIcon fontSize="inherit" />
      </IconButton>
    </Tooltip>
  );
}
