import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Box } from "@mui/system";

function CardComponent() {
  const imgUrl = "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/1200";

  return (
    <Card sx={{  maxWidth: 420, marginBottom: 5, borderRadius: 3, boxShadow: 6, transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={imgUrl}
          alt="bird"
          sx={{ borderRadius: '8px 8px 0 0' }}
        />
        <CardContent sx={{ backgroundColor: '#f5f5f5' }}>
          <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold', color: '#333' }}>
            Research 1
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ color: '#555' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardComponent;
