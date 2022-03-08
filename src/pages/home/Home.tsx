// ./components/home/Home

import React, { ReactElement, ReactNode, useEffect, useState } from "react";

import { getAllNews } from "../../api/MediaStackAPI";
import sample from "../../helpers/api_sample.json";
import { Box, Card, CardContent, Typography } from "@mui/material";

const Home = (): ReactElement => {
  const [news, setNews] = useState<any[]>([]);
  useEffect(() => {
    // const fetchNews = async () => {
    //   const result = await getAllNews()
    //   setNews(result.articles)

    // }
    // fetchNews()

    setNews(sample);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {news.map((article) => (
        <Card sx={{ flexGrow: 3, maxWidth: 250, m: 1 }}>
          <CardContent>
            <Typography component="h2" sx={{ fontWeight: 'bold'}}>{article.title}</Typography>
            <Typography component="h3">{article.author}</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default Home;
