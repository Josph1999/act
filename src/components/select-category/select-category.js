import { Box, Tab, Tabs } from "@mui/material";
import categories from "src/constants/categories";

export default function SelectCategory({ changeCategory, category }) {
  return (
    <Box sx={{ width: '100%', maxWidth: '100%', bgcolor: "background.paper" }}>
      <Tabs
        value={category}
        onChange={(e, newValue) => changeCategory(newValue)}
        variant="scrollable"
        scrollButtons={true}
        aria-label="scrollable auto tabs example"
        sx={{
          ".MuiTab-textColorPrimary.Mui-selected": {
            color: "white",
            backgroundColor: "#6366F1",
          },
        }}
      >
        {categories.map(({ name, value }) => (
          <Tab
            label={name}
            value={value}
            sx={{
              border: "1px solid #6366F1",
              padding: "10px",
              borderRadius: "4px",
              color: "#6366F1",
            }}
          />
        ))}
      </Tabs>
    </Box>
  );
}
