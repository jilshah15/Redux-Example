import React from 'react';
import {connect} from 'react-redux';
import Post from './Post';
import EditPost from './EditPost';
class AllForm extends React.Component{
	render(){
		
		return(
			<div>
				<h1>AllPost Here</h1>
				<table>
					<thead>
						<tr>
							<th>Title</th>
							<th>Body</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{this.props.posts.map((item,index)=>(

							<div>
								{item.editing?
									<EditPost key={index} post={item} />
								:<Post key={index} post={item}/>
								}
							</div>

							)
						)}
					</tbody>	
				</table>
			</div>
			)
	}
}
const mapStateToProps=(state)=>{
	return{
		posts:state,
	}
}

export default connect(mapStateToProps)(AllForm);