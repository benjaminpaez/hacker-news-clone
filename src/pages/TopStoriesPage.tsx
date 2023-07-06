import useSWRInfinite from 'swr/infinite'
import {useEffect} from 'react'
import { getTopStories } from '../services/hacker-news'
import { Story } from '../components/Story'

export default function TopStoriesPage() {

  const { data, size, setSize } = useSWRInfinite(
    (index) => `stories/${index + 1}`,
    (key) => {
      const [, page] = key.split('/')
      return getTopStories(Number(page), 5)
    }
  )
  
  const stories = data?.flat()

  useEffect(() => {
    document.title = 'Hacker News - Clone'
  }, [])

  return (
    <>
      <ul style={{ listStyle: 'none'}}>
        {stories?.map((id: number, index: number) => (
          <li key={id}>
            <Story id={id} index={index} />
          </li>
        ))} 
      </ul>
      <button 
        onClick={() => { setSize(size + 1) }} 
        style={{margin: '16px', border: '2px solid orange', borderRadius: '5px'}}>
        Load more
      </button>
    </>
  )
}
