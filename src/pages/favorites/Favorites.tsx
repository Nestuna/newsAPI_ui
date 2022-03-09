// ./pages/favorites/Favorites

import React, { useEffect, useState } from "react";

import { Box } from "@mui/material";
import { searchArticle } from "../../api/NewsAPI";
import sample from "../../helpers/api_sample.json";
import ArticleItem from "../../components/article/ArticleItem";
import { TitleSharp } from "@mui/icons-material";

const Favorites = () => {
  const [favorites, setFavorites] = useState<any[]>([]);
  useEffect(() => {
    const favoritesInLocalStorage: string[] = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    let favorites: any[];
    const searchNews = async () => {
      for(const title of favoritesInLocalStorage) {
        const result = await searchArticle(title)
        favorites.push(result)
      }
      setFavorites(favorites)
    }
    searchNews()

  }, []);

  const handleRemove = (articleTitle: string) => {
    const newFavorites = favorites.filter(
      (element) => element.title !== articleTitle
    );
    setFavorites(newFavorites);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {favorites.map((article) => (
        <ArticleItem
          key={article.title}
          article={article}
          onRemove={handleRemove}
        />
      ))}
    </Box>
  );
};

export default Favorites;
