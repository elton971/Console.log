
import { CircularProgress } from '@mui/material';
import request from 'graphql-request';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar'
import { NewCard } from './components/NewCard';
import { Content } from './pages/Content';
import { ApolloClient, gql, InMemoryCache } from "@apollo/client"

interface inpost{
  id: string
  slug:string
  title: string
  createdAt:string
  description:{
    text: string
  }
  autor:string
}

const client = new ApolloClient({
  uri:'https://api-us-west-2.hygraph.com/v2/cl7aqqsoz38nx01uhhqo5cbnn/master',
  cache: new InMemoryCache()
})

const GET_POSTS_QUERY=gql`
query dados{
  posts(orderBy: publishedAt_DESC) {
    createdAt
    id
    slug
    title
    createdAt
    description
    {
      text
    }
    autor
  }
}

`

function App() {

  const [posts, setPosts] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    const fetchProducts = async () => {
    const  data  = await client.query({
        query: GET_POSTS_QUERY,
      });
      setIsLoading(false)
      setPosts(data.data.posts)
    }
    

    fetchProducts();
  }, []);
  
  return (
    
    <div className="bg-[#ffffff] h-full min-h-screen">
      <NavBar/>
      <Routes>
      <Route path="/" element={
          isLoading ? (
            <div className="flex justify-center items-center m-[15rem]">
              <CircularProgress/>
            </div>
          ):(
            <div className="max-w-4xl mx-auto md:p-0 p-10 flex flex-col gap-10">
            {
              posts.map((post:inpost)=>{
                return (
                  <NewCard
                    key={post.id}
                    title={post.title}
                    slug={post.slug}
                    publishedDate={post.createdAt}
                    description={post.description.text}
                    autor={post.autor}
                    />
                )
              })
            }
          </div>
          )
        } />
         <Route path="/post/:name" element={<Content/>} />
       
      </Routes>  
    </div>
  )
}

export default App
