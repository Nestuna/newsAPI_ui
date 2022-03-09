// ./components/home/Home

import React, { ReactElement, useEffect, useState } from "react";
import { Box } from "@mui/material";

import { getAllNews } from "../../api/NewsAPI";
import sample from "../../helpers/api_sample.json";
import ArticleItem from '../../components/article/ArticleItem'

const Home = (): ReactElement => {
  const [news, setNews] = useState<any[]>([]);
  useEffect(() => {
    const fetchNews = async () => {
      const result = await getAllNews()
      setNews(result.articles)

    }
    fetchNews()
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
        <ArticleItem key={ article.title } article={ article } />
      ))}
    </Box>
  );
};

export default Home;
