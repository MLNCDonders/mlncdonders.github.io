import React from "react";
import { Container, Box, Typography, Grid, Paper, Avatar, Fade } from "@mui/material";

function Contact() {
  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
        <Fade in timeout={1000}>
      <Paper
        elevation={0}
        sx={{
          p: 4,
          borderRadius: 2,
          height: "70vh",
          backgroundColor: "#f5f5f5",
        }}
      >
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={4}>
            <Avatar
              src="https://www.artcogsys.com/general/marcel.png"
              alt="Contact"
              sx={{ width: 300, height: 300, mx: "auto", borderRadius: "50%", boxShadow: 3 }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography
              variant="h3"
              gutterBottom
              sx={{ fontWeight: "bold", color: "#333" }}
            >
              Contact Information
            </Typography>

            <Typography variant="h5" gutterBottom sx={{ color: "#555" }}>
              Marcel van Gerven
            </Typography>
            <Typography variant="h5" gutterBottom sx={{ color: "#555" }}>
              marcel.vangerven@donders.ru.nl
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ fontSize: "1.2rem", color: "#777" }}>
              <strong>Visiting Address</strong>
              <br />
              Thomas van Aquinostraat 4
              <br />
              6525 GD NIJMEGEN
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ fontSize: "1.2rem", color: "#777" }}>
              <strong>Postal Address</strong>
              <br />
              Postbus 9104
              <br />
              6500 HE NIJMEGEN
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      </Fade>
    </Container>
  );
}

export default Contact;