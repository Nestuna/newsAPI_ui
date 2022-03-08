// ./api/MediaStackAPI

const api_key = '8ec830c1cead4997944e1a723961ea5e'

const getAllNews = async () => {
    const result = await fetch(`https://newsapi.org/v2/top-headlines?apiKey=8ec830c1cead4997944e1a723961ea5e&country=fr&page=1`, {
        method: 'GET',
    })

    return await result.json();
}

export { getAllNews }