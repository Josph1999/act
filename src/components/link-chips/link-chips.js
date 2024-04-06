import * as React from "react";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import { TextField, Tooltip } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useState } from "react";

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function LinkChips({ chipData, setChipData }) {
  const [newLink, setNewLink] = useState("");

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip !== chipToDelete));
  };

  return (
    <>
      <Paper
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          listStyle: "none",
          width: "500px",
          p: 0.5,
          m: 0,
        }}
        component="ul"
      >
        {chipData.map((data) => {
          return (
            <ListItem key={data}>
              <Tooltip title={data} placement="top-start">
                <Chip
                  label={data}
                  onDelete={handleDelete(data)}
                  sx={{ width: "150px" }}
                />
              </Tooltip>
            </ListItem>
          );
        })}
      </Paper>
      <Paper
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="ლინკების დამატება"
          onChange={(e) => setNewLink(e.target.value)}
          value={newLink}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton
          color="primary"
          sx={{ p: "10px" }}
          aria-label="directions"
          onClick={() => {
            if (newLink === "" || chipData.find((item) => item === newLink)) {
              return;
            }
            setChipData([...chipData, newLink]);
            setNewLink("");
          }}
        >
          <AddCircleIcon />
        </IconButton>
      </Paper>
    </>
  );
}
