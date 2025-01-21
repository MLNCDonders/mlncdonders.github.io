import React from "react";
import { Container, Grid, Typography, Fade } from "@mui/material";
import PeopleCard from "./components/PeopleCard";
import {
  assistProfs,
  phdStudent,
  postDoctoralResearcher,
  principal,
  researchFellow,
} from "./helpers/people";

function People() {
  return (
    <Fade in timeout={1000}>
      <Container maxWidth="xl" sx={{ mt: '15vh', mb: 4, padding:{md:'0 10vw',lg:'0 0'} }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: "bold", textAlign: "center", mb: 4, mr: "2vw" }}
        >
          Principal Investigator
        </Typography>
        <Grid item spacing={4} sx={{ mr: "2vw" }}>
          <PeopleCard person={principal}></PeopleCard>
        </Grid>
        <Grid container spacing={4} direction="column">
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontWeight: "bold", textAlign: "center", mb: 4, mt: 4 }}
          >
            Assistant Professor
          </Typography>
          <Grid container spacing={4}>
            {assistProfs.map((person, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <PeopleCard person={person}></PeopleCard>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: "bold", textAlign: "center", mb: 4 }}
        >
          Research Fellow
        </Typography>
        <Grid container spacing={4} display="flex" justifyContent="center">
          {researchFellow.map((person, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <PeopleCard person={person}></PeopleCard>
            </Grid>
          ))}
        </Grid>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: "bold", textAlign: "center", mb: 4 }}
        >
          Postdoctoral Researcher
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {postDoctoralResearcher.map((person, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <PeopleCard person={person}></PeopleCard>
            </Grid>
          ))}
        </Grid>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: "bold", textAlign: "center", mb: 4 }}
        >
          PhD Student
        </Typography>
        <Grid container spacing={4}>
          {phdStudent.map((person, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <PeopleCard person={person}></PeopleCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Fade>
  );
}

export default People;
