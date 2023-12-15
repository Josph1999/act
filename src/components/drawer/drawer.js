import {
  Box,
  Button,
  Divider,
  Drawer,
  Link,
  Menu,
  MenuItem,
} from "@mui/material";
import Links from "src/constants/header-links";
import NextLink from "next/link";
import { Logo } from "../logo";
import { useLanguage } from "src/contexts/language-context";
import MainLogo from "../icons/MainLogo";
import { aboutData } from "../about/data";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { useState } from "react";
import { useRouter } from "next/router";

export default function ResponsiveDrawer({ open, onClose }) {
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const openMenu = Boolean(menuAnchorEl);
  const handleClick = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const router = useRouter();

  const { renderLanguage, renderFontFamily } = useLanguage();

  const handleOpenPage = (page) => {
    router.push(page);
    setMenuAnchorEl(null);
    onClose();
  };

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: "white",
          color: "common.white",
          width: 280,
        },
      }}
      variant="temporary"
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          gap: "20px",
          padding: "24px",
        }}
      >
        <Box
          component={NextLink}
          href="/"
          sx={{
            display: "inline-flex",
            height: 32,
            width: 32,
          }}
          onClick={() => onClose()}
        >
          <MainLogo />
        </Box>
        <Divider sx={{ borderColor: "neutral.700" }} />
        <Box display="flex" flexDirection="column" alignItems="flex-start">
          {Links.map(({ name_ka, name_eng, url }) =>
            name_ka !== "ფონდის შესახებ" ? (
              <Button
                sx={{
                  color: "black",
                  cursor: "pointer",
                  fontFeatureSettings: "'case' on",
                }}
                fontWeight={500}
                onClick={() => {
                  router.push(url);
                  onClose();
                }}
              >
                {renderLanguage(name_ka, name_eng)}
              </Button>
            ) : (
              <Button
                id="basic-button"
                aria-controls={openMenu ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={openMenu ? "true" : undefined}
                onClick={handleClick}
                variant="h6"
                sx={{
                  color: "black",
                  cursor: "pointer",
                  fontFeatureSettings: "'case' on",
                  paddingLeft: "15px",
                }}
                fontWeight={500}
                endIcon={openMenu ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
              >
                {renderLanguage(name_ka, name_eng)}
              </Button>
            )
          )}
        </Box>
      </Box>
      <Menu
        id="basic-menu"
        anchorEl={menuAnchorEl}
        open={openMenu}
        onClose={() => setMenuAnchorEl(null)}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {aboutData.map((item) => (
          <MenuItem
            onClick={() => handleOpenPage(item.path)}
            sx={{ fontFeatureSettings: "'case' on" }}
          >
            {renderLanguage(item.title_ka, item.title_eng)}
          </MenuItem>
        ))}
      </Menu>
    </Drawer>
  );
}
