import {gql, useMutation} from "@apollo/client";
import { CircularProgress} from "@mui/material";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import {Footer} from "../components/Footer";
import AppBarComponent from "../components/AppBar";
import {Comment} from "../components/Comment";
import {Client} from "../service/ApolloService";
import {useAuth} from "../hook/useAuth";
//import {CreateNewComment} from "../service/Mutation";



export const Content=()=>{
	
	const [isLoading, setIsLoading] = useState(false)
	const [send, setSend] = useState(false)
	const [date,setDate]=useState<any>()
	const [newComment,setNewComment]=useState('')
	const [newCommentsafe,setNewCommentSafe]=useState<any>([])
	const { name } = useParams()
	const {userName}=useAuth();
	console.log(userName)
	
	const CreateNewComment=gql`
	mutation {
	  createComment(data: {id_post: {connect: {Post: {slug: "${name}"}}}, content:["${newComment}"],userName: "${userName}" }) {
	    content
	    userName
	  }
	}
`
	const [createC, { data, loading, error }] = useMutation(CreateNewComment);
	
	
	
	const GET_POSTS_QUERY=gql`
		query dados{
			post(where: {slug: "${name}"}) {
				autor
				content {
				  html
				}
				createdAt
				title
				comments {
				  content
				  userName
				}
			
			}
		}
	`
	
	const handleSubmit =async ()=>{
		setNewCommentSafe([...newCommentsafe,newComment])
		setSend(true);
		await createC({});
	}
	
	
	const [post,setPost]=useState({
		autor:"",
		content:{
			html:""
		},
		createdAt:"",
		title: "",
		comments:[
			{
				content:[],
				userName:""
			}
		]
	});
	
	useEffect(() => {
		setIsLoading(true)
		const fetchProducts = async () => {
			const  data  = await Client.query({
				query: GET_POSTS_QUERY,
			});
			setIsLoading(false)
			console.log(data.data.post)
			setPost(data.data.post)
			setDate(format(new Date(data.data.post.createdAt), "EEE' - 'd' de 'MMMM'", {locale: ptBR,}))
		}
		fetchProducts();
	}, []);
	
	// if () return 'Submitting...';
	// if (error) return `Submission error! ${error.message}`;
	return(
		<div className="bg-[#ffffff] h-full min-h-screen">
			<AppBarComponent/>
			<main className="max-w-7xl md:flex  md:justify-center  mt-[5rem] md:mt-[5rem]">
				{
					
					isLoading ? (
						<div className="flex justify-center items-center m-[15rem]">
							<CircularProgress/>
						</div>
					):(
						<div className=" md:w-[65%] p-3">
							<div className="flex justify-center flex-col border-dotted border-l-2 border-l-neutral-500 p-5">
								<div className="">
									<h1 className="font-semibold text-[32px]">{post.title}</h1>
								</div>
								<div
									className="content "
									dangerouslySetInnerHTML={{ __html: post.content.html }}>
								</div>
								
								<div className={'md:ml-24 md:mt-10 '}>
									
									{
										post.comments.map(({content,userName},index)=>{
											console.log(userName)
											return (<div><Comment key={index} comment={content} userName={userName}/></div>)
										})
										
									}
									{
										send ? ( <div><Comment key={1} comment={newCommentsafe} userName={userName}/></div>): ("")
										
										
									}
									
									<div className={'border-2  p-5'}>
				                          <textarea rows={5} placeholder={'Comentario'} className={'w-full outline-none'}
				                                    onChange={(e)=>{setNewComment(e.target.value)}}
				                          >
				
				                          </textarea>
									</div>
									<div className={'flex justify-end gap-2 py-2'}>
										<button className={'p-2 bg-gray-100 w-20 rounded-xl'}>Limpar</button>
										<button className={'p-2 bg-green-900 w-20 text-white rounded-xl flex justify-center items-center'}
										        onClick={handleSubmit}
										>
											{
											    loading ? ( <CircularProgress size={15} />): ("Publicar")
											}
											
										</button>
									</div>
								</div>
								<div>
									<p  className={'text-gray-600'}>Bibliografias:</p>
								</div>
							</div>
							
							<div  className="">
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