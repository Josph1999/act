import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export default function NewsLinks({ data }) {
  return (
    <Chip
      label={data}
      component="a"
      href={data}
      target="_blank"
      variant="outlined"
      clickable
      sx={{ width: "200px" }}
    />
  );
}
