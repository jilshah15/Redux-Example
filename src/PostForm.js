import React from 'react';
import {connect} from 'react-redux';

class PostForm extends React.Component{
	constructor(props){
		super(props)
		this.state={
			title:'',
			body:'',
			editing:false,
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
				id:new Date(),
				title:this.state.title,
				body:this.state.body,
				editing:this.state.editing,
			}
			this.props.dispatch({
				type:'ADD_POST',
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
						<input name="title" onChange={this.handleChange} defaultValue={this.state.title}/>
					</div>
						<div>
							<label>Body:</label>
							<textarea name="body"onChange={this.handleChange} defaultValue={this.state.body}/>
						</div>
							<button>ADD Info</button>	
				</form>
			</div>
			)
	}
}
export default connect()(PostForm);