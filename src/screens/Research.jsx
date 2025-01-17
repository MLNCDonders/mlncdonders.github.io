import React, { useState } from 'react';
import { Container, Grid, Typography, Fade, Pagination, Box } from '@mui/material';
import CardComponent from './components/CardComponent';

const researchCards = Array.from({ length: 20 }, (_, index) => ({
  id: index + 1,
  title: `Research ${index + 1}`,
  description: 'This is a brief description of the research. It provides a summary of the content to entice readers to click and read more.',
  image: 'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/1200',
}));

function Research() {
  const [page, setPage] = useState(1);
  const cardsPerPage = 9;
  const handleChange = (event, value) => {
    setPage(value);
  };

  const displayedCards = researchCards.slice((page - 1) * cardsPerPage, page * cardsPerPage);

  return (
    <Fade in timeout={1000}>
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 , minHeight:'70vh'}}>
      {/* <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center', mb: 4 }}>
        Research
      </Typography> */}
      <Grid container spacing={4}>
        {displayedCards.map((card) => (
          <Grid item xs={12} sm={6} md={4} key={card.id}>
            <CardComponent title={card.title} description={card.description} image={card.image} />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Pagination
          count={Math.ceil(researchCards.length / cardsPerPage)}
          page={page}
          onChange={handleChange}
          color="primary"
        />
      </Box>
    </Container>
    </Fade>
  );
}

export default Research;
