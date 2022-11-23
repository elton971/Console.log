import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import { CircularProgress} from "@mui/material";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { NavBar } from '../components/NavBar'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {Footer} from "../components/Footer";

const client = new ApolloClient({
  uri:'https://api-us-west-2.hygraph.com/v2/cl7aqqsoz38nx01uhhqo5cbnn/master',
  cache: new InMemoryCache()
})

export const Content=()=>{
  const [isLoading, setIsLoading] = useState(false)
  const [date,setDate]=useState<any>()

  const [post,setPost]=useState({
    autor:"",
    content:{
      html:""
    },
    createdAt:"",
    title: ""
  });
  const { name } = useParams()


const GET_POSTS_QUERY=gql`
query dados{
  post(where: {slug: "${name}"}) {
    autor
    content {
      html
    }
    createdAt
    title
    
  }
}
`
  
  useEffect(() => {
    setIsLoading(true)
    const fetchProducts = async () => {
    const  data  = await client.query({
        query: GET_POSTS_QUERY,
      });
      setIsLoading(false)
      console.log(data.data.post)
      setPost(data.data.post)
    	setDate(format(new Date(data.data.post.createdAt), "EEE' - 'd' de 'MMMM'", {locale: ptBR,}))

    }
    fetchProducts();
  }, []);
  
    
  
    return(
      <div className="bg-[#ffffff] h-full min-h-screen">
        <NavBar/>
        <main className="max-w-7xl md:flex  md:justify-center ">
            {
                
                isLoading ? (
                    <div className="flex justify-center items-center m-[15rem]">
                      <CircularProgress/>
                    </div>
                  ):(
                    <div className=" w-[95%] md:w-[80%] pl-5">
                        <div className="flex justify-center">
                          <h1 className="font-bold text-[1.8rem]">{post.title}</h1>
                        </div>
                        <div className="flex justify-center items-center">
                          <div
                              className="content  md:w-[80%]  "
                              dangerouslySetInnerHTML={{ __html: post.content.html }}>

                          </div>
                        </div>

                        <div  className="md:mx-[6.5rem]">
                            <div>
                              <span className="text-red-600 font-bold">{date}</span>
                              <p className="font-bold">Publicando por: <span className="text-red-900 font-mono">{post.autor}</span></p>
                            </div>
                        </div>

                    </div>
                  )
            }
            
        </main>
        <Footer/>
      </div>
    )
}