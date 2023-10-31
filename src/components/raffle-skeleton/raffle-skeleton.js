import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function RaffleSkeleton() {
  return (
    <Stack spacing={1}>
      {/* For variant="text", adjust the height via font-size */}
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />

      <Skeleton variant="rectangular" width={274} height={274} />
      <Skeleton variant="rectangular" width={274} height={60} />
    </Stack>
  );
}
