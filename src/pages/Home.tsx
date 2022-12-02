
import { CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import { NewCard } from '../components/NewCard';
import { ApolloClient, gql, InMemoryCache } from "@apollo/client"
import {Slide} from "../components/Slide";
import {Footer} from "../components/Footer";
import AppBarComponent from "../components/AppBar";
import {Client} from "../service/ApolloService";

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





export function Home() {
  
  
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
  const [posts, setPosts] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    const fetchProducts = async () => {
    const  data  = await Client.query({
        query: GET_POSTS_QUERY,
      });
      setIsLoading(false)
      setPosts(data.data.posts)
    }
    fetchProducts();
  }, []);

    return(
      <div className=" h-full min-h-screen ">
        <AppBarComponent/>
        {
          isLoading ? (
            <div className="flex justify-center items-center m-[15rem]">
              <CircularProgress/>
            </div>
          ):(
            <div className="max-w-4xl mx-auto md:p-0 p-5 flex flex-col gap-10 mt-[2.5rem] md:mt-[5rem]">
            {
              posts.map((post:inpost,index:number)=>{
                return (
                  <NewCard
                    key={index}
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


