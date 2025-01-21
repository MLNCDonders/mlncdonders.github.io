import React from "react";
import {
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Fade,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const publications = [
  {
    title: "ElGazzar, A., & Gerven, M. (2024). Universal Differential Equations as a Common Modeling Language for Neuroscience. arXiv preprint arXiv:2403.14510, ",
    abstract:
      "The unprecedented availability of large-scale datasets in neuroscience has spurred the exploration of artificial deep neural networks (DNNs) both as empirical tools and as models of natural neural systems. Their appeal lies in their ability to approximate arbitrary functions directly from observations, circumventing the need for cumbersome mechanistic modeling. However, without appropriate constraints, DNNs risk producing implausible models, diminishing their scientific value. Moreover, the interpretability of DNNs poses a significant challenge, particularly with the adoption of more complex expressive architectures. In this perspective, we argue for universal differential equations (UDEs) as a unifying approach for model development and validation in neuroscience. UDEs view differential equations as parameterizable, differentiable mathematical objects that can be augmented and trained with scalable deep learning techniques. This synergy facilitates the integration of decades of extensive literature in calculus, numerical analysis, and neural modeling with emerging advancements in AI into a potent framework. We provide a primer on this burgeoning topic in scientific machine learning and demonstrate how UDEs fill in a critical gap between mechanistic, phenomenological, and data-driven models in neuroscience. We outline a flexible recipe for modeling neural systems with UDEs and discuss how they can offer principled solutions to inherent challenges across diverse neuroscience applications such as understanding neural computation, controlling neural systems, neural decoding, and normative modeling.",
  },
  {
    title: "Publication 2",
    abstract:
      "This is the abstract for publication 2. It provides a brief summary of the research and findings..",
  },
  {
    title: "Publication 3",
    abstract:
      "This is the abstract for publication 3. It provides a brief summary of the research and findings.",
  },
  {
    title: "Publication 4",
    abstract:
      "This is the abstract for publication 1. It provides a brief summary of the research and findings.",
  },
  {
    title: "Publication 5",
    abstract:
      "This is the abstract for publication 2. It provides a brief summary of the research and findings.",
  },
  {
    title: "Publication 6",
    abstract:
      "This is the abstract for publication 3. It provides a brief summary of the research and findings.",
  },
  {
    title: "Publication 7",
    abstract:
      "This is the abstract for publication 1. It provides a brief summary of the research and findings.",
  },
  {
    title: "Publication 8",
    abstract:
      "This is the abstract for publication 2. It provides a brief summary of the research and findings.",
  },
  {
    title: "Publication 9",
    abstract:
      "This is the abstract for publication 3. It provides a brief summary of the research and findings.",
  },
  {
    title: "Publication 10",
    abstract:
      "This is the abstract for publication 3. It provides a brief summary of the research and findings.",
  },
];

function Publications() {
  return (
    <Fade in timeout={1000}>
    <Container
      maxWidth="xl"
      sx={{
        mt: "15vh",
        // height: "70vh",
        mb: 4,
        padding: { md: "0 10vw", lg: "0 0" },
      }}
    >
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h3" sx={{ fontWeight: "bold", color: "#510648" }}>
          Publications
        </Typography>
        <Typography variant="h6" sx={{ color: "#555" }}>
          Explore our latest research and findings
        </Typography>
      </Box>
      {publications.map((publication, index) => (
        <Accordion
          key={index}
          sx={{
            // mb: 2,
            // borderRadius: 2,
            // boxShadow: 3,
            "&:before": { display: "none" },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#510648" }} />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
            sx={{
              backgroundColor: "#f5f5f5",
              //borderRadius: 2,
              "&:hover": { backgroundColor: "#e0e0e0" },
            }}
          >
            <Typography variant="h7" sx={{ fontWeight: "w200", color: "#333" }}>
              {publication.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{ backgroundColor: "#fafafa", borderRadius: 2 }}
          >
            <Typography variant="body1" sx={{ color: "#555" }}>
              {publication.abstract}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
    </Fade>
  );
}

export default Publications;
