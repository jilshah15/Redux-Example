import React from 'react';
import {connect} from 'react-redux';

class EditPost extends React.Component{
	constructor(props){
		super(props)
		this.state={
			title:'',
			body:'',
			
		}
	}	
	handleChange=(event)=>{
		this.setState({
			[event.target.name]:event.target.value
		})
	}
	handleSubmit=(event)=>{
		event.preventDefault();
			const payload={
				
				title:this.state.title,
				body:this.state.body,
			}
			this.props.dispatch({
				id:this.props.post.id,
				type:'UPDATE_POST',
				payload,
			})
	}

	render(){
		console.log(this.props)
		return(
			<div>
				<h1>Book Information</h1>
				<form onSubmit={this.handleSubmit}>
					<div>
						<label>Title:</label>
						<input name="title" onChange={this.handleChange} defaultValue={this.props.post.title}/>
					</div>
						<div>
							<label>Body:</label>
							<textarea name="body"onChange={this.handleChange} defaultValue={this.props.post.body}/>
						</div>
							<button>UPDATE</button>	
				</form>
			</div>
			)
	}
}
const mapStateToProps=(state)=>{
	return{
		posts:state,
	}
}

export default connect(mapStateToProps)(EditPost);