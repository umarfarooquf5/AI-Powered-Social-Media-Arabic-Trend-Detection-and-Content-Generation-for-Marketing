import axios from "axios";

export const fetchTrends = async () => {
  const response = await axios.get("http://localhost:5000/api/trends");
  return response.data;
};
