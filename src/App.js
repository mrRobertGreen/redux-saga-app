import React from 'react';
import AddPostForm from "./components/AddPostForm";
import Posts from "./components/Posts";
import {connect} from "react-redux";
import Alert from "./components/Alert";

function App({isShowAlert, alertMessage}) {
	return (
		<div className="container">
			{isShowAlert && <Alert message={alertMessage}/>}
			<div className="col">
				<AddPostForm/>
				<h1>Posts</h1>
				<Posts/>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => ({
	isShowAlert: state.app.isShowAlert,
	alertMessage: state.app.alertMessage,
})

export default connect(mapStateToProps, null)(App);
