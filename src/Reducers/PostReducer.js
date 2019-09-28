export const PostReducer=(state=[],action)=>{
	switch(action.type){
		case 'ADD_POST':
			return state.concat([action.payload])

		case 'DELETE_POST':
			return state.filter((post)=>post.id!==action.id)

		case 'EDIT_POST':
			return state.map((post)=>post.id===action.id?{...post,editing : !post.editing}:post)

		case 'UPDATE_POST':	
			return state.map((post)=>{
				if(post.id===action.id){
					return{
						...post,
						title:action.payload.title,
						body:action.payload.body,
						editing:!post.editing,
					}
				}
				else return post;
			})

	default:
			return state;	
	}
}