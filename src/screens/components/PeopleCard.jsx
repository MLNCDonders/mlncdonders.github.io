import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

function PeopleCard({person}) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        mx: "auto",
        borderRadius: 3,
        mb: "5vh",
        mt: "5vh",
        boxShadow: 6,
        transition: "transform 0.3s",
        "&:hover": { transform: "scale(1.05)" },
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={person.image}
        alt={person.name}
        sx={{
          borderRadius: "50%",
          width: "150px",
          height: "150px",
          mx: "auto",
          mt: 2,
        }}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ textAlign: "center", fontWeight: "bold" }}
        >
         {person.name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ textAlign: "center" }}
        >
          {person.title}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default PeopleCard;
