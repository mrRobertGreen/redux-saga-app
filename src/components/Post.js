import React from "react";

export default function Post({body, title}) {
	return (
		<div className="card">
			<h5 className="card-title">{title}</h5>
			<p className="card-text">{body}</p>
		</div>
	)
}