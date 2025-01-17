import React from "react";
import NewsCard from "./NewsCard";
import { Container, Fade, Grid, Typography } from "@mui/material";

function NewsRow() {
  return (
    <Fade in timeout={1000}>
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          backgroundColor: "#de6843aa",
          padding: "2vh 10vw",
          color: "white",
          textAlign: "center",
          fontWeight: "bold",
          borderRadius: 2,
        }}
      >
        NEWS
      </Typography>
      <Grid container spacing={6} sx={{ mt: 2 }}>
        <Grid item xs={12} sm={6} md={4} display="flex" justifyContent="center">
          <NewsCard></NewsCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4} display="flex" justifyContent="center">
          <NewsCard></NewsCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4} display="flex" justifyContent="center">
          <NewsCard></NewsCard>
        </Grid>
      </Grid>
    </Container>
    </Fade>
  );
}

export default NewsRow;
