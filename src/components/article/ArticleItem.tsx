// ./components/article/ArticleItem

import React, { ReactElement, useEffect, useState, useContext } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import newsTemplateImage from "../../assets/images/news_template.jpg";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LaunchIcon from "@mui/icons-material/Launch";
import Article from "../../types/article";
import { DarkModeProvider, DarkModeContext } from "../../DarkModeProvider";

interface ArticleItemProps {
  article: Article;
  onRemove?: any;
}

const ArticleItem = ({ article, onRemove }: ArticleItemProps) => {
  const darkMode = useContext(DarkModeContext);

  const [articleContent, setArticleContent] = useState<Record<string, string>>({
    title: article.title,
    author: article.author,
    description: article.description,
    imageUrl: article.urlToImage,
  });
  useEffect(() => {
    for (const prop in articleContent) {
      const articleCorrected = articleContent;
      if (articleContent[prop] === null) {
        if (prop === "imageUrl") {
          articleCorrected[prop] = newsTemplateImage;
        } else {
          articleCorrected[prop] = `No ${prop}`;
        }
        setArticleContent(articleCorrected);
      }
    }
  }, [articleContent]);

  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  useEffect(() => {
    const favoritesStrResponse = localStorage.getItem("favorites")
    if (favoritesStrResponse) {
      const favorites: string[] = JSON.parse(favoritesStrResponse)
      const isInLocalStorage = favorites.includes(articleContent.title);
      setIsFavorite(isInLocalStorage);
    }

  }, [articleContent.title]);

  const displayFavoriteButton = (): ReactElement => {
    if (isFavorite) {
      return (
        <Button
          onClick={() => removeFromLocalFavorites()}
          size="small"
          startIcon={<FavoriteIcon />}
        >
          Remove from favorites
        </Button>
      );
    }

    return (
      <Button
        onClick={() => addToLocalFavorites()}
        size="small"
        startIcon={<FavoriteBorderIcon />}
      >
        Add to favorites
      </Button>
    );
  };

  const addToLocalFavorites = (): void => {
    setIsFavorite(true);
    update_localStorage(false);
  };

  const removeFromLocalFavorites = (): void => {
    setIsFavorite(false);
    update_localStorage(true);
    emitRemoveEventToParent();
  };

  const update_localStorage = (remove: boolean): void => {
    const favoritesStr: string = localStorage.getItem("favorites") || "";
    let favorites: string[] = [];
    if (favoritesStr) favorites = JSON.parse(favoritesStr);

    let newFavorites: string[];
    if (remove) {
      newFavorites = favorites.filter((item) => item !== articleContent.title);
    } else {
      newFavorites = [articleContent.title, ...favorites];
    }
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  const emitRemoveEventToParent = () => {
    onRemove(articleContent.title);
  };

  return (
    <DarkModeProvider>
      <Card
        className={darkMode ? "card-container-dark" : "card-container-light"}
        sx={{ flexGrow: 3, maxWidth: 350, m: 1, backgroundColor: 'dark' }}
      >
        <CardMedia
          component="img"
          height="200"
          image={articleContent.imageUrl}
          alt="article image"
        />
        <CardContent>
          <h2>
            {articleContent.title}
          </h2>
          <h3>
            {articleContent.author}
          </h3>
          <p>{articleContent.description}</p>
        </CardContent>
        <CardActions>
          <Button size="small" href={article.url} startIcon={<LaunchIcon />}>
            Go to article
          </Button>
          {displayFavoriteButton()}
        </CardActions>
      </Card>
    </DarkModeProvider>

  );
};

export default ArticleItem;
