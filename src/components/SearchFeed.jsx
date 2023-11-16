import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Vidoes from "./Videos";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";

function SearchFeed() {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, []);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={2}
        sx={{
          color: "white",
        }}
      >
        Search Results for: <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
        </Typography>
      <Vidoes videos={videos} />
    </Box>
  );
}

export default SearchFeed;
