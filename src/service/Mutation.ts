import {gql} from "@apollo/client";

const CreateNewComment=gql`
	    mutation createComment($name:String,$comment:String){
	      createComment(
	        data: {id_post: {connect: {Post: {slug: $name}}}, content:$comment}
	      ) {
	        id
	        content
	      }
	    }
	`

export {CreateNewComment}