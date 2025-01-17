import React from "react";
import { Card, CardContent, CardMedia, Typography, CardActionArea } from "@mui/material";

function NewsCard() {
  const imgUrl = "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/1200";

  return (
    
    <Card sx={{ maxWidth: 420, marginBottom: 5, borderRadius: 3, boxShadow: 6, transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={imgUrl}
          alt="News Image"
          sx={{ borderRadius: '3px 3px 0 0' }}
        />
        <CardContent sx={{ backgroundColor: '#000000bb',  }}>
          <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold', color: 'gainsboro' }}>
            News Title
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ color: 'gainsboro' }}>
            This is a brief description of the news. It provides a summary of the content to entice readers to click and read more.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default NewsCard;
