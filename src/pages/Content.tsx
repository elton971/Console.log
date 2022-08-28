import { CircularProgress, Rating, Stack } from "@mui/material";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import request from "graphql-request";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


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
  
  useEffect(() => {
    setIsLoading(true)
    const fetchProducts = async () => {
      
      const  results  = await request(
        'https://api-us-west-2.hygraph.com/v2/cl7aqqsoz38nx01uhhqo5cbnn/master',
        `
        query data {
        
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
      );
      setIsLoading(false)

      setPost(results.post);
      setDate(format(new Date(results.post.createdAt), "EEE' - 'd' de 'MMMM'", {locale: ptBR,}))

    };

    fetchProducts();
  }, []);
    
  
    return(
        <main className="max-w-7xl mx-auto p-10">
            {
                
                 isLoading ? (
                    <div className="flex justify-center items-center m-[15rem]">
                      <CircularProgress/>
                    </div>
                  ):(
                    <div className="border-b-4 ">
                        <div className="flex justify-center">
                          <h1 className="font-bold text-[1.8rem]">{post.title}</h1>
                        </div>
                        <div
                            className="content "
                            dangerouslySetInnerHTML={{ __html: post.content.html }}>
                        </div>
                         <div>
                            
                          <span className="text-red-600 font-bold">{date}</span>
                          <p className="font-bold">Publicando por: <span className="text-red-900 font-mono">{post.autor}</span></p>
                        </div>
                        <div className="mt-10">
                            <p className="text-lg">Classifique</p>
                        </div>
                        <div className="mb-5">    
                            <Stack spacing={1}>
                                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                            </Stack>
                        </div>
                        
                    </div>
                  )
            }
            
        </main>
    )
}