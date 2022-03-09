// ./pages/favorites/Favorites

import React, { ReactElement, useEffect, useState } from "react";

import { Box } from "@mui/material";
import { getAllNews } from "../../api/MediaStackAPI";
import sample from "../../helpers/api_sample.json";
import ArticleItem from '../../components/article/ArticleItem'

const Favorites = () => {
    const [favorites, setFavorites] = useState<any[]>([]);
    useEffect(() => {
        const favoritesInLocalStorage: string[] = JSON.parse(localStorage.getItem('favorites') || '[]')
        const favorites = sample.filter((element => favoritesInLocalStorage.includes(element.title)))
      // const fetchNews = async () => {
      //   const result = await getAllNews()
      //   setFavorites(result.articles)

      // }
      // fetchNews()

      setFavorites(favorites);
    }, []);

    return (
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {favorites.map((article) => (
          <ArticleItem article={ article } />
        ))}
      </Box>
    )
}

export default Favorites