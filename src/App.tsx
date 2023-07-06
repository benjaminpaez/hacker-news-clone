import {lazy, Suspense} from 'react'
import { Header } from "./components/Header";
import { Route } from 'wouter'


const TopStoriesPage = lazy(() => import ('./pages/TopStoriesPage'))
const DetailPage = lazy(() => import ('./pages/DetailPage'))

export default function App() {
  
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={null}>
          <Route path="/" component={TopStoriesPage} />
          <Route path="/article/:id" component={DetailPage} />
        </Suspense>
      </main>
      
    </>
  ) 
}


