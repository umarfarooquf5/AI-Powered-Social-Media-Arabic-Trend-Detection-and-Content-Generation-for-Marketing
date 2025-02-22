// Home.jsx
import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import Sidebar from "../components/Sidebar";
import ContentCustomizationForm from "../components/ContentCustomizationForm";
import ContentPreview from "../components/ContentPreview";

const Home = () => {
  const [selectedTrend, setSelectedTrend] = useState("");
  const [generatedContent, setGeneratedContent] = useState("");
  const [error, setError] = useState("");

  const handleTrendClick = (trend) => {
    setSelectedTrend(trend);
    setGeneratedContent("");
    setError("");
  };

  const handleContentGeneration = (inputs) => {
    fetch(`http://127.0.0.1:5000/api/generate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...inputs, trend: selectedTrend }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
          setGeneratedContent("");
        } else {
          setGeneratedContent(data.generatedContent);
          setError("");
        }
      })
      .catch((err) => {
        setError("Failed to generate content. Please try again later.");
      });
  };

  return (
    <Box display="flex">
      <Sidebar onTrendClick={handleTrendClick} />
      <Box
        flexGrow={1}
        p={3}
        sx={{ overflowY: "scroll", scrollBehavior: "smooth" }}
      >
        <Typography
          variant="h4"
          align="center"
          sx={{
            fontWeight: "bold",
            color: "#2a885c",
            textTransform: "uppercase",
            mb: 3,
            lineHeight: 1.4,
          }}
        >
          AI Powered Social Media
          <br />
          Arabic Trend Detection and Content Generation
        </Typography>
        <ContentCustomizationForm
          onGenerate={handleContentGeneration}
          selectedTrend={selectedTrend}
        />
        <ContentPreview content={generatedContent} error={error} />
      </Box>
    </Box>
  );
};

export default Home;
