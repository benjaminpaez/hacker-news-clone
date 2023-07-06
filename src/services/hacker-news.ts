export const getTopStories = async (page:number, limit: number) => {
    const res = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
    const json = await res.json() 
    
    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit

    const ids = json.slice(startIndex, endIndex)

    return ids 
}

export const getItemInfo = async (id:number) => {
    const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json` )
    return await res.json()
}