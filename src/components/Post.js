import React from 'react';
import clientConfig from "../client-config";
import axios from "axios";
import renderHTML from "react-render-html";
import { Link } from "@reach/router";
import Loader from "../loader.gif";

class Post extends React.Component {

	constructor( props ) {
		super( props );

		this.state = {
			post: null,
			loading: true
		}
	}

	componentDidMount() {
		const restApiUrl = `${clientConfig.siteUrl}/wp-json/wp/v2/posts/${this.props.id}`;

		axios.get( restApiUrl )
			.then( res => {
				console.warn( res.data );
				if ( res.data ) {
					this.setState( { post: res.data, loading: false } );
				}
			} )
			.catch( err => console.warn( err.response.data ) );
	}

	render() {

		const { post, loading } = this.state;

		return (
			<div>
				
				{ loading && <img className="loader" src={ Loader } /> }
				{ post && (
					<div className="timeline_post mb-3 mt-5" key={ post.id }>
						<h3 className="title">{ post.title.rendered }</h3>
						<div className="content">
							{ renderHTML( post.content.rendered ) }
						</div>
					</div>
				) }
			</div>
		)
	}
}

export default Post;
