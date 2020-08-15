import { useState, useEffect } from "react";
import youtube from "../apis/youtube";

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    const results = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        type: "video",
        key: KEY,
      },
    });
    setVideos(results.data.items);
  };

  return [videos, search];
};

const KEY = "AIzaSyDiFc7YibtpUFKMr-5YjS5v6khT0WmWoME";
export default useVideos;
