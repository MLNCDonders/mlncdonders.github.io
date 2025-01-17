import React from "react";
import { Container, Typography, Box } from "@mui/material";

function TweetsSection() {
  const twitterHandle = "artcogsys"; // Replace with the desired Twitter handle

    return (
      <Container
        maxWidth="xl"
        sx={{
          mt: 4,
          mb: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* <Typography
          variant="h4"
          sx={{ fontWeight: "bold", color: "#510648", mb: 2 }}
        >
          {twitterHandle} Tweets
        </Typography> */}
        <Box sx={{ width: "85vw", overflow: "hidden" }}>
          {/* <TwitterTimelineEmbed
            sourceType="profile"
            screenName={twitterHandle}
             options={{ height: "500%", width: "100%" }}
             noHeader
          //   noBorders
             noFooter
            theme="light"
          /> */}
        </Box>
      </Container>
    );
  
}

export default TweetsSection;
