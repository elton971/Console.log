import { Link } from "react-router-dom"
import { format } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"



interface BlogCardProps {
    title: string
    slug: string
    publishedDate: string
    description: string
    autor:string
    imagem:string
    
}

const limit=300
export const NewCard=( { title, publishedDate, description, slug,autor,imagem }:BlogCardProps )=>{
    const aboveLimit = description.length > limit
    const dotsOrEmpty = aboveLimit ? "..." : ""

    var publishedDateFormatted = format(new Date(publishedDate), "EEE' - 'd' de 'MMMM'", {
        locale: ptBR,
    })
    return(
        <div className=" border-b-4 flex flex-col gap-2 mt-2">
            <Link to={`/post/${slug}`}> 
        	    <h1 className="font-semibold text-[32px] text-zinc-800 hoverLink">{title}</h1>
            </Link>
            <div className="text-gray-500 text-xs">
                <span >{ publishedDateFormatted.toUpperCase() }  - </span>
                <span >{autor.toUpperCase()}</span>
            </div>
            <div className="w-full h-60" >
                <img src={imagem} alt="" className="h-60 w-full object-cover" />
            </div>

            <p className="mt-1 text-gray-900   text-base ">{ description.substring(0, limit) + dotsOrEmpty }</p>
            <div className="my-1 ">
                <Link to={`/post/${slug}`}>
                        <span className="font-semibold text-slate-900 text-base hoverLink">Ler mais</span>
                </Link>
            </div>
            
        </div>
    )


}
