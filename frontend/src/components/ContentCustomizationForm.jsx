// ContentCustomizationForm.jsx
import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Button,
} from "@mui/material";

const ContentCustomizationForm = ({ onGenerate, selectedTrend }) => {
  const [category, setCategory] = useState(selectedTrend || "");
  const [dialects, setDialects] = useState([]);
  const [contentType, setContentType] = useState("");
  const [ageGroups, setAgeGroups] = useState([]);
  const [customCategory, setCustomCategory] = useState("");
  const [customDialect, setCustomDialect] = useState("");
  const [customContentType, setCustomContentType] = useState("");

  const handleSubmit = () => {
    const finalCategory = category === "Others" ? customCategory : category;
    const finalDialect =
      dialects.includes("Others") && customDialect
        ? [...dialects.filter((d) => d !== "Others"), customDialect]
        : dialects;
    const finalContentType =
      contentType === "Others" ? customContentType : contentType;

    onGenerate({
      category: finalCategory,
      dialects: finalDialect,
      contentType: finalContentType,
      ageGroups,
    });
  };

  return (
    <Box
      sx={{
        backgroundColor: "#f9f9f9",
        borderRadius: "12px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        p: 3,
        mb: 3,
      }}
    >
      <FormControl fullWidth margin="normal">
        <InputLabel>Category</InputLabel>
        <Select value={category} onChange={(e) => setCategory(e.target.value)}>
          <MenuItem value="Fashion">Fashion</MenuItem>
          <MenuItem value="Electronics">Electronics</MenuItem>
          <MenuItem value="Education">Education</MenuItem>
          <MenuItem value="Others">Others</MenuItem>
        </Select>
        {category === "Others" && (
          <TextField
            fullWidth
            margin="normal"
            placeholder="Enter Custom Category"
            value={customCategory}
            onChange={(e) => setCustomCategory(e.target.value)}
          />
        )}
      </FormControl>

      <FormControl fullWidth margin="normal">
        <InputLabel>Dialects</InputLabel>
        <Select
          multiple
          value={dialects}
          onChange={(e) => setDialects(e.target.value)}
          renderValue={(selected) => selected.join(", ")}
        >
          <MenuItem value="Egyptian">Egyptian</MenuItem>
          <MenuItem value="Gulf">Gulf</MenuItem>
          <MenuItem value="Levantine">Levantine</MenuItem>
          <MenuItem value="Others">Others</MenuItem>
        </Select>
        {dialects.includes("Others") && (
          <TextField
            fullWidth
            margin="normal"
            placeholder="Enter Custom Dialect"
            value={customDialect}
            onChange={(e) => setCustomDialect(e.target.value)}
          />
        )}
      </FormControl>

      <FormControl fullWidth margin="normal">
        <InputLabel>Content Type</InputLabel>
        <Select
          value={contentType}
          onChange={(e) => setContentType(e.target.value)}
        >
          <MenuItem value="Articles">Articles</MenuItem>
          <MenuItem value="Blogs">Blogs</MenuItem>
          <MenuItem value="Posts">Posts</MenuItem>
          <MenuItem value="Others">Others</MenuItem>
        </Select>
        {contentType === "Others" && (
          <TextField
            fullWidth
            margin="normal"
            placeholder="Enter Custom Content Type"
            value={customContentType}
            onChange={(e) => setCustomContentType(e.target.value)}
          />
        )}
      </FormControl>

      <FormControl component="fieldset" margin="normal">
        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox
                checked={ageGroups.includes("Teens")}
                onChange={(e) =>
                  setAgeGroups((prev) =>
                    e.target.checked
                      ? [...prev, "Teens"]
                      : prev.filter((age) => age !== "Teens")
                  )
                }
              />
            }
            label="Teens"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={ageGroups.includes("Adults")}
                onChange={(e) =>
                  setAgeGroups((prev) =>
                    e.target.checked
                      ? [...prev, "Adults"]
                      : prev.filter((age) => age !== "Adults")
                  )
                }
              />
            }
            label="Adults"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={ageGroups.includes("Seniors")}
                onChange={(e) =>
                  setAgeGroups((prev) =>
                    e.target.checked
                      ? [...prev, "Seniors"]
                      : prev.filter((age) => age !== "Seniors")
                  )
                }
              />
            }
            label="Seniors"
          />
        </FormGroup>
      </FormControl>

      <Button
        variant="contained"
        sx={{
          backgroundColor: "#2a885c",
          color: "#fff",
          fontWeight: "bold",
          mt: 2,
        }}
        onClick={handleSubmit}
        fullWidth
      >
        Generate Content
      </Button>
    </Box>
  );
};

ContentCustomizationForm.propTypes = {
  onGenerate: PropTypes.func.isRequired,
  selectedTrend: PropTypes.string,
};

export default ContentCustomizationForm;
