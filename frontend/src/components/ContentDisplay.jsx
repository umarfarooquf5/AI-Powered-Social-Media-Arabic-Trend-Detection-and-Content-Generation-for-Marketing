import PropTypes from "prop-types";
import { useState } from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

const ContentDisplay = ({ selectedTrend }) => {
  const [generatedContent, setGeneratedContent] = useState("");

  const handleGenerateContent = () => {
    setGeneratedContent(`Generated content for ${selectedTrend}`);
  };

  return (
    <Card
      sx={{
        mt: 5,
        mx: "auto",
        width: "80%",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        borderRadius: 2,
        padding: 2,
      }}
    >
      <CardContent>
        <Typography
          variant="h5"
          align="center"
          sx={{ mb: 2, fontWeight: "bold" }}
        >
          Selected Trend: {selectedTrend}
        </Typography>
        <Button
          variant="contained"
          fullWidth
          onClick={handleGenerateContent}
          sx={{
            backgroundColor: "#8e24aa",
            color: "#fff",
            "&:hover": { backgroundColor: "#5e35b1" },
          }}
        >
          Generate Content
        </Button>
        {generatedContent && (
          <Typography
            variant="body1"
            align="center"
            sx={{
              mt: 3,
              p: 2,
              border: "1px solid #ccc",
              borderRadius: "8px",
              backgroundColor: "#f9f9f9",
            }}
          >
            {generatedContent}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

ContentDisplay.propTypes = {
  selectedTrend: PropTypes.string.isRequired,
};

export default ContentDisplay;
