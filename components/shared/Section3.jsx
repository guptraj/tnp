"use client";

import { Container, Grid, Stack, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";

import Title from "@/components/Title";

import OutlinedButton from "@/components/Buttons/OutlinedButton";
import Link from "next/link";

const section4Content = {
  top: {
    title: "Students ",
    subtitle:
      "This section is an exclusive online portal meticulously designed to be students' ultimate gateway to success. Exclusively tailored for students, this dynamic platform serves as a comprehensive hub where they can hone their skills, refine their resume, connect with peers, and embark on a journey of endless opportunities.",
  },
  center: {
    title: "Teaching Staff",
    subtitle:
      "This section stands as a dedicated online portal meticulously crafted for educators, offering an unparalleled platform tailored to streamline the teaching process. Exclusively designed for teachers, this intuitive interface serves as a central hub where you teachers can effortlessly manage student data, track attendance, record academic progress, and engage in a seamless collaboration with fellow educators.",
  },
  bottom: {
    title: "Training and Placement Cell",
    subtitle:
      "This section takes a leading role in advancing careers, functioning as a meticulously designed online portal exclusively dedicated to training and placement cells. Customized to cater to the requirements of students and employers alike, this platform serves as a central hub where impactful opportunities effortlessly intersect with aspiring talent, fostering transformative career connections.",
  },
};

const { top, bottom, center } = section4Content;

const Section4 = () => {
  return (
    <Container sx={{ mt: { xs: 15, md: 5, lg: 5 } }}>
      {/* TOP */}
      <Grid container spacing={10} flexWrap="wrap-reverse" alignItems="center">
        {/* Left */}
        <Grid item xs={12} md={6}>
          <Stack spacing={2} sx={{ maxWidth: 480 }}>
            <Title variant={{ xs: "h3", md: "h2" }}>{top.title}</Title>

            <Typography variant="body2" color="text.secondary" sx={{ pb: 2 }}>
              {top.subtitle}
            </Typography>

            <Link href="/">
            <OutlinedButton arrow fit >
              
              Students' Access
            </OutlinedButton>
            </Link>
          </Stack>
        </Grid>

        {/* Right */}
        <Grid item xs={12} md={6}>
          <img
            src="/assets/student.png"
            style={{ width: "100%", objectFit: "contain" }}
          />
        </Grid>
      </Grid>

      {/* Center */}
      <Grid
        container
        spacing={15}
        flexWrap="wrap-reverse"
        alignItems="center"
        sx={{ mt: { xs: 5, md: -10 } }}
      >
        {/* Left */}
        <Grid item xs={12} md={6}>
          <img
            src="/assets/teacher.png"
            style={{ width: "100%", objectFit: "contain" }}
          />
        </Grid>

        {/* Right */}
        <Grid item xs={12} md={6}>
          <Stack spacing={2} sx={{ maxWidth: 480 }}>
            <Title variant={{ xs: "h3", md: "h2" }}>{center.title}</Title>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ pb: 2, minHeight: 70 }}
            >
                {center.subtitle}
            </Typography>

            <Link href="/">
            <OutlinedButton arrow fit >
              Teachers' Access
            </OutlinedButton>
            </Link>
          </Stack>
        </Grid>
      </Grid>

      {/* BOTTOM */}
      <Grid
        container
        spacing={10}
        flexWrap="wrap-reverse"
        alignItems="center"
        sx={{ mt: { xs: 5, md: -5 } }}
        
      >
        {/* Left */}
        <Grid item xs={12} md={6}>
          <Stack spacing={2} sx={{ maxWidth: 480 }}>
            <Title variant={{ xs: "h3", md: "h2" }}>{bottom.title}</Title>

            <Typography variant="body2" color="text.secondary" sx={{ pb: 2 }}>
              {bottom.subtitle}
            </Typography>

            <Link href="/tnp">
            <OutlinedButton arrow fit >
              TnP Cell
            </OutlinedButton>
            </Link>
          </Stack>
        </Grid>

        {/* Right */}
        <Grid item xs={12} md={6}>
          <img
            src="/assets/tnp.png"
            style={{ width: "100%", objectFit: "contain" }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Section4;
