import React from "react";
import Header from "./components/Header";
import { Divider } from "@mui/material";
import CardsRow from "./components/CardsRow";
import NewsCard from "./components/NewsCard";
import NewsRow from "./components/NewsRow";
import TweetsSection from "./components/TweetsSection";

function Homepage() {
  return (
    <div>
      <Header></Header>
      <Divider></Divider>
      <TweetsSection></TweetsSection>
      <CardsRow></CardsRow>
        <NewsRow></NewsRow>
    </div>
  );
}

export default Homepage;
