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
import DonateModal from "../donate/donate";

export default function MainAppBar() {
  const windowWidth = useWindowWidth();
  const { language, changeLanguage, renderLanguage, renderFontFamily } =
    useLanguage();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuAnchorEl, setMenuAnchorEl] = React.useState(null);

  const [openDonate, setOpenDonate] = useState(false);

  const openMenu = Boolean(menuAnchorEl);
  const handleClick = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

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
        padding:
          router.pathname === "/projects/[id]" ||
          router.pathname === "/news/[id]"
            ? "0px 256px"
            : "0px 128px",
        transition: "0.5s",
        "@media (max-width: 980px)": {
          padding: "24px",
        },
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          paddingLeft: "0px !important",
          paddingRight: "0px !important",
        }}
      >
        {windowWidth < 980 ? null : (
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
          {windowWidth < 980 ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <IconButton onClick={() => setOpenDrawer(true)}>
                <MenuIcon />
              </IconButton>
              <Link href={"/"}>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  <MainLogo width={"32px"} height={"32px"} />
                </IconButton>
              </Link>
            </Box>
          ) : (
            <Box sx={{ display: "flex" }}>
              {HeaderLinks.map(({ name_ka, name_eng, url }) =>
                name_ka !== "ფონდის შესახებ" ? (
                  <Link href={url} key={name_ka}>
                    <Button
                      sx={{
                        color: "black",
                        cursor: "pointer",
                        fontFeatureSettings: "'case' on",
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
                      fontFeatureSettings: "'case' on",
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
              |
              <Box>
                <Button
                  onClick={handleOpenMenu}
                  startIcon={<LanguageIcon />}
                  endIcon={<ArrowDropDownIcon />}
                ></Button>

                <Button
                  variant="contained"
                  sx={{ fontFeatureSettings: "'case' on" }}
                  // onClick={() => router.push('/donate')}
                >
                  {renderLanguage("დონაცია", "Donate")}
                </Button>
              </Box>
            </Box>
          )}
        </Box>
        {windowWidth < 980 ? (
          <Box>
            <Button
              onClick={handleOpenMenu}
              startIcon={<LanguageIcon />}
              endIcon={<ArrowDropDownIcon />}
            ></Button>

            <Button
              variant="contained"
              sx={{ fontFeatureSettings: "'case' on" }}
              // onClick={() => router.push('/donate')}
            >
              {renderLanguage("დონაცია", "Donate")}
            </Button>
          </Box>
        ) : null}
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
              // onClick={() => handleOpenPage(item.path)}
              sx={{ fontFeatureSettings: "'case' on" }}
            >
              {renderLanguage(item.title_ka, item.title_eng)}
            </MenuItem>
          ))}
        </Menu>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleCloseMenu}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          sx={{ padding: "10px" }}
        >
          <FormControl sx={{ padding: "10px" }}>
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
