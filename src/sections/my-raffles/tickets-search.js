import MagnifyingGlassIcon from "@heroicons/react/24/solid/MagnifyingGlassIcon";
import { Card, InputAdornment, OutlinedInput, SvgIcon } from "@mui/material";

export const TicketsSearch = ({ onChange, value, text }) => (
  <OutlinedInput
    defaultValue=""
    fullWidth
    placeholder={text}
    onChange={(e) => onChange(e.target.value)}
    startAdornment={
      <InputAdornment position="start">
        <SvgIcon color="action" fontSize="small">
          <MagnifyingGlassIcon />
        </SvgIcon>
      </InputAdornment>
    }
  />
);
