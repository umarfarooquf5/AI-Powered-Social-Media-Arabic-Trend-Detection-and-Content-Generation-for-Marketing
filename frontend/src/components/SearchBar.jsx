import PropTypes from "prop-types";
import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" my={3}>
      <TextField
        label="Search Trends"
        variant="outlined"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        sx={{ width: "60%", backgroundColor: "white" }}
      />
      <Button
        variant="contained"
        onClick={handleSearch}
        sx={{
          ml: 2,
          backgroundColor: "#6200ea",
          color: "#fff",
          "&:hover": { backgroundColor: "#3700b3" },
        }}
      >
        Search
      </Button>
    </Box>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
