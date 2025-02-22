import axios from "axios";

export const fetchGeneratedContent = async (prompt) => {
  const response = await axios.post("http://localhost:5000/api/generate", {
    prompt,
  });
  return response.data;
};
