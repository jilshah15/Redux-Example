import React from 'react';
import {connect} from 'react-redux';
class Post extends React.Component{
	//const posts=this.posts
	//console.log(posts)
	
	render(){

		return(
				<tr>
					<td>{this.props.post.title}</td>
					<td>{this.props.post.body}</td>
					
					<button onClick={()=>this.props.dispatch({
						type:'EDIT_POST',
						id:this.props.post.id
					})}>EDIT</button>

					<button onClick={()=>this.props.dispatch({
						type:'DELETE_POST',
						id:this.props.post.id
					})}>DELETE</button>
				
				</tr>
			)
	}
}

export default connect()(Post);