// ./components/article/ArticleItem

import React, { ReactElement, useEffect, useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";
import newsTemplateImage from "../../assets/images/news_template.jpg";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LaunchIcon from "@mui/icons-material/Launch";

const ArticleItem = (props: any) => {
  const [articleContent, setArticleContent] = useState<Record<string, string>>({
    title: props.article.title,
    author: props.article.author,
    description: props.article.description,
    imageUrl: props.article.urlToImage,
  });
  useEffect(() => {
    for (const prop in articleContent) {
      const articleCorrected = articleContent;
      const value: string = articleContent[prop];
      if (value === null) {
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
    const favorites: string[] = JSON.parse(localStorage.getItem('favorites') || ''),
          isInLocalStorage = favorites.includes(articleContent.title)
    setIsFavorite(isInLocalStorage)
  }, [articleContent.title])
  const displayFavoriteButton = ():ReactElement => {
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

  const addToLocalFavorites = ():void => {
    setIsFavorite(true)
    update_localStorage(false)
  }

  const removeFromLocalFavorites = ():void => {
    setIsFavorite(false)
    update_localStorage(true)
  }

  const update_localStorage = (remove:boolean):void => {
    const favoritesStr: string = localStorage.getItem('favorites') || ''
    let favorites: string[] = []
    if (favoritesStr) favorites = JSON.parse(favoritesStr)

    let newFavorites: string[]
    if (remove) {
      newFavorites = favorites.filter((item) => item !== articleContent.title )
      console.log(newFavorites);

    } else {
      newFavorites = [articleContent.title, ...favorites]
    }
    localStorage.setItem('favorites', JSON.stringify(newFavorites))
  }

  return (
    <Card sx={{ flexGrow: 3, maxWidth: 350, m: 1 }}>
      <CardMedia
        component="img"
        height="140"
        image={articleContent.imageUrl}
        alt="article image"
      />
      <CardContent>
        <Typography component="h2" sx={{ fontWeight: "bold" }}>
          {articleContent.title}
        </Typography>
        <Typography component="h3" sx={{ fontStyle: "italic " }}>
          {articleContent.author}
        </Typography>
        <Typography component="p">{articleContent.description}</Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          href={props.article.url}
          startIcon={<LaunchIcon />}
        >
          Go to article
        </Button>
        {displayFavoriteButton()}
      </CardActions>
    </Card>
  );
};

export default ArticleItem;
