import React from "react";
import { Container, Typography, Box, Grid, Fade } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import BookIcon from "@mui/icons-material/Book";

function Education() {
  return (
    <Container maxWidth="xl" sx={{ mt: "15vh", mb: 4, height: "70vh", padding:{md:'0 10vw',lg:'0 0'} }}>
      <Fade in timeout={1000}>
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            mb: 4,
            color: "#510648",
          }}
        >
          Education
        </Typography>
      </Fade>
      <Grid container direction="column" spacing={4}>
        <Fade in timeout={1000}>
          <Grid item xs={12} md={6}>
            <Box display="flex" alignItems="center" mb={2}>
              <SchoolIcon sx={{ fontSize: 40, color: "#510648", mr: 2 }} />
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", color: "#333" }}
              >
                Teaching Courses
              </Typography>
            </Box>
            <Typography
              variant="body1"
              sx={{ fontSize: "1.4rem", color: "#555", lineHeight: 1.6 }}
            >
              The members of the group are involved in teaching courses for the
              (under)graduate Artificial Intelligence program at Radboud
              University. For a full overview of the programs, check out the
              <a
                href="https://www.ru.nl/en/education/masters/artificial-intelligence"
                target="_blank"
              >
                Masters AI program overview
              </a>
              , as well as the
              <a
                href="https://www.ru.nl/en/education/masters/artificial-intelligence"
                target="_blank"
              >
                Bachelor AI program overview
              </a>
              .
            </Typography>
          </Grid>
        </Fade>
        <Fade in timeout={1000}>
          <Grid item xs={12} md={6}>
            <Box display="flex" alignItems="center" mb={2}>
              <WorkIcon sx={{ fontSize: 40, color: "#510648", mr: 2 }} />
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", color: "#333" }}
              >
                Internships
              </Typography>
            </Box>
            <Typography
              variant="body1"
              sx={{ fontSize: "1.4rem", color: "#555", lineHeight: 1.6 }}
            >
              Students are welcome to join us on cutting-edge AI internships at
              the intersection between machine learning and natural computing if
              space permits. We occasionally have paid research assistantships
              available for internal students either via our regular research
              program or via the ELLIS excellence program.
            </Typography>
          </Grid>
        </Fade>
      </Grid>
    </Container>
  );
}

export default Education;
