import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <p>
        Building a great online presence is essential to the success of your restaurant. A well-designed restaurant website is the cornerstone of this online presence and can serve to both attract new customers and build loyalty in existing customers. That’s the holy grail of restaurant marketing. But how do you create an inspiring restaurant website? What should you include and what should you leave out?

        There are so many options for website creation these days that it can seem like an overwhelming, difficult, and time-consuming task. But you don’t have to reinvent the wheel.

        Instead, why not get inspiration from businesses that are already doing it right? We’ve put together a list of restaurant websites, and the specific features they do well, so that you can generate ideas for your own online presence.
        </p>
        <br />
        <p>
        Whether you’re joining us for a family gathering, a special celebration, or a cozy night out, we strive to make each visit unique. Our team is devoted to providing attentive service in a comfortable atmosphere that feels like a home away from home.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
