"use client";

import {
  AppBar,
  Container,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { Children } from "react";
import { NAVBAR_HEIGHT } from "../../constants";
import useScrollPosition from "@/components/hooks/useScrollPosition";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CallMadeIcon from "@mui/icons-material/CallMade";
import LanguageIcon from "@mui/icons-material/Language";
import LaunchButton from "@/components/Buttons/LaunchButton";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

const LinkButton = ({ children, ...props }) => (
  <Stack
    direction="row"
    alignItems="center"
    spacing={0.2}
    sx={{
      cursor: "pointer",
      color: "text.secondary",
      "&:hover": { color: "text.primary" },
    }}
    {...props}
  >
    {children}
  </Stack>
);

const Navbar = () => {
  const scrollPosition = useScrollPosition();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <AppBar
      elevation={0}
      sx={{
        py: 1,
        height: NAVBAR_HEIGHT,
        bgcolor: scrollPosition > 10 ? "rgba(7,7,16,.7)" : "transparent",
        backdropFilter: scrollPosition > 10 && "blur(60px)",
      }}
    >
      <Container
        sx={{
          [theme.breakpoints.up("lg")]: {
            maxWidth: "1380px!important",
          },
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          flexWrap="wrap"
        >
          {/* Logo */}
          <img src="/assets/logo6.png" style={{ width: "7%" }} />

          {/* Links */}
          {!isMobile && (
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={6}
              sx={{ flex: 1 }}
              flexWrap="wrap"
            >
              <LinkButton>
                <Typography variant="body2">Home</Typography>
                <KeyboardArrowDownIcon fontSize="small" />
              </LinkButton>

              <LinkButton>
                <Typography variant="body2">TnP</Typography>
                <KeyboardArrowDownIcon fontSize="small" />
              </LinkButton>

              <LinkButton>
                <Typography variant="body2">Employers</Typography>
                <KeyboardArrowDownIcon fontSize="small" />
              </LinkButton>

              <LinkButton>
                <Typography variant="body2">About Us</Typography>
                <KeyboardArrowDownIcon fontSize="small" />
              </LinkButton>

              <LinkButton spacing={0.5}>
                <Typography variant="body2">Blog</Typography>
                <CallMadeIcon sx={{ fontSize: 12 }} />
              </LinkButton>
            </Stack>
          )}

          {/* Action Buttons */}
          {isMobile ? (
            <IconButton>
              <MenuIcon sx={{ color: "text.secondary" }} />
            </IconButton>
          ) : (
            <Stack direction="row" spacing={5} alignItems="center">
              <LinkButton spacing={1}>
                <LanguageIcon fontSize="small" />
                <Typography variant="body2">EN</Typography>
              </LinkButton>
                <Link href="/sign-in">

              <LaunchButton sx={{ borderRadius: 3 }} />
                </Link>
            </Stack>
          )}
        </Stack>
      </Container> 
    </AppBar>
  );
};

export default Navbar;
