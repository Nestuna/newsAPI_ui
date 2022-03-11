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
    //  les requêtes ne marche par sur Netlmify (erreur 426),
    // car pour l'utilisation gratuite,
    // des requêtes peuvent seulement être émises depuis localhost
    // Décommenter la ligne qui suit si tu es sur localhost, pour avoir les dernières news
    // fetchNews()

    // j'utilise un helper json à la place pour avoir au moins un affichage sur Netlify
    // Comment la ligne qui suit si tu requêtes l'API
    setNews(sample)

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
