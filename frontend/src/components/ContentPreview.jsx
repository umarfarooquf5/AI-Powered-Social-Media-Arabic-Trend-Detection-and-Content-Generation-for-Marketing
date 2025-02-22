import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Card, CardContent } from "@mui/material";

const ContentPreview = ({ content, error, contentType }) => {
  // Function to dynamically render content based on type
  const renderContent = () => {
    switch (contentType) {
      case "Articles":
        return (
          <Card>
            <CardContent>
              <Typography variant="h5" align="left" gutterBottom>
                Article
              </Typography>
              <Typography variant="body1" align="justify">
                {content}
              </Typography>
            </CardContent>
          </Card>
        );

      case "Blogs":
        return (
          <Card>
            <CardContent>
              <Typography variant="h5" align="center" gutterBottom>
                Blog
              </Typography>
              <Typography variant="body2" align="justify">
                {content}
              </Typography>
            </CardContent>
          </Card>
        );

      case "Posts":
        return (
          <Box
            sx={{
              backgroundColor: "#eafcf1",
              borderRadius: "8px",
              padding: "10px",
              textAlign: "center",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Typography variant="body1">{content}</Typography>
          </Box>
        );

      default:
        // "Others" or fallback
        return (
          <Typography variant="body1" align="center">
            {content}
          </Typography>
        );
    }
  };

  return (
    <Box mt={3} p={2} sx={{ backgroundColor: "#f9f9f9", borderRadius: "12px" }}>
      {error ? (
        <Typography color="error" align="center">
          {error}
        </Typography>
      ) : (
        renderContent()
      )}
    </Box>
  );
};

ContentPreview.propTypes = {
  content: PropTypes.string,
  error: PropTypes.string,
  contentType: PropTypes.string, // New prop for content type
};

export default ContentPreview;
