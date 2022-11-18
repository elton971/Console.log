
import { CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import { NavBar } from '../components/NavBar'
import { NewCard } from '../components/NewCard';
import { ApolloClient, gql, InMemoryCache } from "@apollo/client"
import {Slide} from "../components/Slide";
import {Footer} from "../components/Footer";

interface inpost{
  id: string
  slug:string
  title: string
  createdAt:string
  description:{
    text: string
  }
  autor:string
  ima:string
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
    ima
  }
}

`

export function Home() {

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

    return(
      <div className=" h-full min-h-screen ">
        <NavBar/>
        {
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
                    imagem={post.ima}
                    />
                )
              })
            }
          </div>
          )
        }
        <Footer/>
      </div>
    )
}


