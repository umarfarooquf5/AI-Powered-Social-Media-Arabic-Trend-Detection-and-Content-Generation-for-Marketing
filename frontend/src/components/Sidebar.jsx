import React from "react";
import PropTypes from "prop-types";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  Box,
} from "@mui/material";

const Sidebar = ({ onTrendClick }) => {
  const trends = [
    {
      category: "Saudi Arabia",
      trends: ["#SaudiTrend1", "#SaudiTrend2", "#SaudiTrend3"],
    },
  ];

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 240,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
          backgroundColor: "#f9f9f9",
          borderRight: "none",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        },
      }}
    >
      <Box
        p={2}
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          align="center"
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: "#2a885c",
            mb: 2,
            pb: 1,
            borderBottom: "1px solid #e0e0e0",
          }}
        >
          Location-Based Trends
        </Typography>
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            textAlign: "center",
          }}
        >
          {trends.map((region) => (
            <Box key={region.category} sx={{ mb: 2 }}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: "bold",
                  color: "#2a885c",
                  textTransform: "uppercase",
                  fontSize: "0.9rem",
                  letterSpacing: "0.05em",
                  mb: 1,
                }}
              >
                {region.category}
              </Typography>
              {region.trends.map((trend) => (
                <ListItem
                  button
                  key={trend}
                  onClick={() => onTrendClick(trend)}
                  sx={{
                    px: 2,
                    py: 1,
                    textAlign: "center",
                    borderRadius: "8px",
                    transition: "all 0.2s",
                    "&:hover": {
                      backgroundColor: "#eafcf1",
                      transform: "scale(1.02)",
                    },
                  }}
                >
                  <ListItemText
                    primary={trend}
                    primaryTypographyProps={{
                      fontSize: "0.9rem",
                      color: "#4a4a4a",
                      textTransform: "capitalize",
                    }}
                  />
                </ListItem>
              ))}
            </Box>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

Sidebar.propTypes = {
  onTrendClick: PropTypes.func.isRequired,
};

export default Sidebar;
