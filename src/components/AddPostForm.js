import React, {Component} from "react";
import {connect} from "react-redux";
import {addPost} from "../redux/postsReducer";

class AddPostForm extends Component {
	state = {
		titleValue: "",
		bodyValue: "",
	}

	onSubmitForm = (event) => {
		const {addPost} = this.props
		const {titleValue, bodyValue} = this.state
		event.preventDefault()
		const post = {
			title: titleValue,
			body: bodyValue,
			userId: 100,
		}
		addPost(post)
		this.setState({
			titleValue: "",
			bodyValue: "",
		})
	}

	onChangeValue(event) {
		if (event.target.name === "title") {
			this.setState({
				titleValue: event.target.value,
			})
		} else if (event.target.name === "body") {
			this.setState({
				bodyValue: event.target.value,
			})
		}
	}

	render() {
		const {titleValue, bodyValue} = this.state
		return (
			<form onSubmit={this.onSubmitForm}>
				<div className="form-group">
					<label htmlFor="title">Post Title</label>
					<input type="text"
					       className="form-control form-control-lg"
					       name="title"
					       value={titleValue}
					       onChange={this.onChangeValue.bind(this)}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="body">Post Text</label>
					<textarea className="form-control form-control-lg"
					          name="body"
					          value={bodyValue}
					          onChange={this.onChangeValue.bind(this)}
					/>
				</div>
				<button className="btn btn-success" type={"submit"}>Add Post</button>
			</form>
		)
	}
}

const mapDispatchToProps = {
	addPost
}

export default connect(null, mapDispatchToProps)(AddPostForm)