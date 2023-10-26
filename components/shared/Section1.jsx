'use client';

import {
    Box,
    Button,
    Container,
    Hidden,
    Stack,
    Typography,
    useMediaQuery,
    useTheme,
  } from "@mui/material";
  import React from "react";
  import LaunchButton from "@/components/Buttons/LaunchButton";
  import {section1Content} from "@/constants/content";
  import AppleIcon from "@mui/icons-material/Apple";
  import GoogleIcon from "@mui/icons-material/Google";
  import useMeasure from "react-use-measure";
  import Title from "@/components/Title";
 
  
  const {
    MainBG,
    TreesImage,
    CliffImage,
    HorseImage,
    ShootingStarImage,
    title,
    subtitle,
  } = section1Content;
  
  const CustomButton = ({ children, ...props }) => (
    <Button
      variant="outlined"
      sx={{
        borderRadius: 4,
        color: "text.primary",
        borderColor: "text.primary",
        height: 58,
        px: 2,
      }}
      {...props}
    >
      {children}
    </Button>
  );
  
  const Section1 = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  
    const [ref, { height }] = useMeasure();
  
    return (
      <Box sx={{ width: "100%" }}>
        {/* Main Background */}
        <Box sx={{ position: "fixed", zIndex: -10, top: 0, left: 0, right: 0 }}>
          <img src="/assets/main-bg-0_1.webp" style={{ width: "100%" }} />
        </Box>
  
        {/* backgrounds elements */}
        <Box
          ref={ref}
          sx={{
            position: "absolute",
            width: "100%",
            zIndex: -1,
            top: 0,
            left: 0,
            right: 0,
          }}
        >
          <img src="/assets/main-bg-0_1.webp" style={{ width: "100%", opacity: 0 }} />
  
          {/* Star */}
          <img
            src="/assets/main-bg-0-0.png"
            style={{
              position: "absolute",
              top: "30px",
              right: "15%",
              width: "500px",
            }}
          />
  
          {/* Trees */}
          <Hidden mdDown>
            <img
              src="/assets/main-bg-1_1.webp"
              style={{
                position: "absolute",
                width: "100%",
                right: 0,
                left: 0,
                bottom: "13%",
              }}
            />
          </Hidden>
  
          {/* Cliff */}
          <img
            src="/assets/main-bg-2_1.webp"
            style={{
              height: "100%",
              position: "absolute",
              right: 0,
              top: 0,
              backgroundSize: "cover",
            }}
          />
  
          {/* Horse */}
          <img
            src="/assets/main-bg-3.png"
            style={{
              position: "absolute",
              height: "38%",
              right: "14%",
              bottom: "45%",
              transform: "rotate(7deg)",
            }}
          />
  
          <Box
            sx={{
              bgcolor: "background.default",
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "800px",
              top: `calc(${height}px - 13%)`,
            }}
          ></Box>
        </Box>
  
        {/* Content */}
        <Container
          sx={{
            height: "80vh",
            mt: 8,
            [theme.breakpoints.up("md")]: { mt: 6 },
          }}
        >
          <Stack sx={{ height: "100%" }} justifyContent="center">
  
            <Title
              variant={{ xs: "h5", sm: "h4", md: "h3" }}
              sx={{ fontWeight: 500, letterSpacing: "0.05em", mb: 0.5 }}
            >
              {title}
            </Title>
  
            <Title
              variant={{ xs: "h3", sm: "h2", md: "h1" }}
              sx={{ letterSpacing: "0.05em", mb: 1}}
            >
              {subtitle}
            </Title>
            
          </Stack>
        </Container>
      </Box>
    );
  };
  
  export default Section1;
  