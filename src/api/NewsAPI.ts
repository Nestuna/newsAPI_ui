// ./api/NewsAPI

import config from '../config.json'
const apiKey = config.apiKey

const getAllNews = async () => {
    const result = await fetch(`https://newsapi.org/v2/top-headlines?apiKey=${apiKey}&country=fr&page=1`, {
        method: 'GET',
    })

    return await result.json();
}

const searchArticle = async (title: string) => {
    const result = await fetch(`https://newsapi.org/v2/top-headlines?apiKey=${apiKey}&country=fr
    &q=${title}`, {
        method: 'GET',
    })

    return await result.json();
}

export { getAllNews, searchArticle }