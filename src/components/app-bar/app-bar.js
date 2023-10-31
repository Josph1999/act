import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Logo } from "../logo";
import Link from "next/link";
import HeaderLinks from "../../constants/header-links";
import { useWindowWidth } from "../helpers/useWindowWidth";
import {
  FormControl,
  FormControlLabel,
  Menu,
  MenuItem,
  Radio,
  RadioGroup,
  SvgIcon,
  Tooltip,
} from "@mui/material";
import { useState } from "react";
import ResponsiveDrawer from "../drawer/drawer";
import { useAuth } from "src/hooks/use-auth";
import { useLanguage } from "src/contexts/language-context";
import LanguageIcon from "@mui/icons-material/Language";
import { aboutData } from "../about/data";
import { useRouter } from "next/router";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import MainLogo from "../icons/MainLogo";

export default function MainAppBar() {
  const windowWidth = useWindowWidth();
  const { language, changeLanguage } = useLanguage();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuAnchorEl, setMenuAnchorEl] = React.useState(null);
  const openMenu = Boolean(menuAnchorEl);
  const handleClick = (event) => {
    console.log("THIS WORKS:");
    setMenuAnchorEl(event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const { renderLanguage, renderFontFamily } = useLanguage();

  const router = useRouter();
  const handleOpenPage = (page) => {
    router.push(page);
    setMenuAnchorEl(null);
  };
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#fff",
        zIndex: "99",
        padding: "0px 128px",
        "@media (max-width: 800px)": {
          padding: "20px",
        },
      }}
    >
      <Toolbar
        sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
      >
        {windowWidth < 800 ? null : (
          <Link href={"/"}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MainLogo />
            </IconButton>
          </Link>
        )}
        <Box>
          {windowWidth < 800 ? (
            <IconButton onClick={() => setOpenDrawer(true)}>
              <MenuIcon />
            </IconButton>
          ) : (
            <Box marginLeft="-320px">
              {HeaderLinks.map(({ name_ka, name_eng, url }) =>
                name_ka !== "ფონდის შესახებ" ? (
                  <Link href={url} key={name_ka}>
                    <Button
                      sx={{
                        color: "black",
                        cursor: "pointer",
                        fontFamily: renderFontFamily(),
                      }}
                      fontWeight={500}
                    >
                      {renderLanguage(name_ka, name_eng)}
                    </Button>
                  </Link>
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
                      fontFamily: renderFontFamily(),
                    }}
                    fontWeight={500}
                    endIcon={
                      openMenu ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />
                    }
                  >
                    {renderLanguage(name_ka, name_eng)}
                  </Button>
                )
              )}
            </Box>
          )}
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
            <MenuItem onClick={() => handleOpenPage(item.path)}>
              {renderLanguage(item.title_ka, item.title_eng)}
            </MenuItem>
          ))}
        </Menu>
        <Box>
          <Tooltip title="Language">
            <IconButton onClick={handleOpenMenu}>
              <SvgIcon fontSize="small">
                <LanguageIcon />
              </SvgIcon>
            </IconButton>
          </Tooltip>

          <Button variant="contained" sx={{}}>
            {renderLanguage("დონაცია", "Donate")}
          </Button>
        </Box>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleCloseMenu}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
              value={language}
              onChange={(e) => changeLanguage(e.target.value)}
            >
              <FormControlLabel
                value="KA"
                control={<Radio />}
                label="ქართული"
              />
              <FormControlLabel
                value="ENG"
                control={<Radio />}
                label="English"
              />
            </RadioGroup>
          </FormControl>
        </Menu>
      </Toolbar>
      <ResponsiveDrawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      />
    </AppBar>
  );
}
