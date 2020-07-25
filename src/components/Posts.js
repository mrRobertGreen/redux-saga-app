import React, {useEffect} from "react";
import Post from "./Post";
import {getPosts} from "../redux/postsReducer";
import {connect} from "react-redux";

const Posts = ({posts, getPosts}) => {
	useEffect(() => {
		getPosts()
	}, [])

	if (!posts) {
		return <></>
	}

	return (
		<>
			{posts.map(post => (
				<ul key={post.id}>
					<li>
						<Post body={post.body}
						      title={post.title}
						/>
					</li>
				</ul>
			))}
		</>
	)
}

const mapStateToProps = (state) => ({
	 posts: state.posts.posts
})

export default connect(mapStateToProps, {getPosts})(Posts)