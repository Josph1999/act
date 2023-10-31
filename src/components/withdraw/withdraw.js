import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";

export default function WithdrawForm() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "80px",
      }}
    >
      <Box sx={{ width: "450px" }}>
        <Typography variant="h2">თანხის გატანა</Typography>
        <TextField
          InputProps={{
            startAdornment: <InputAdornment position="start">₾</InputAdornment>,
          }}
          variant="outlined"
          label="თანხა"
          margin="normal"
          fullWidth
        />

        <TextField
          label="ანგარიშის ნომერი"
          fullWidth
          margin="normal"
        />
        <Button variant="contained" fullWidth>გატანა</Button>
      </Box>
    </Box>
  );
}
