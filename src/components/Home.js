import React from 'react';
import axios from 'axios';
import clientConfig from '../client-config';
import renderHTML from 'react-render-html';
import { Link } from "@reach/router";
import Loader from '../loader.gif';

class Home extends React.Component {

	constructor( props ) {
		super( props );

		this.state = {
			posts: null,
			loading: true
		}
	}

	componentDidMount() {
		const restApiUrl = `${clientConfig.siteUrl}/wp-json/wp/v2/posts`;

		axios.get( restApiUrl )
			.then( res => {
				if ( res.data.length ) {
					this.setState( { posts: res.data, loading: false } );
				}
			} )
			.catch( err => console.warn( err.response.data ) );
	}

	render() {

		const { posts, loading } = this.state;

		return(
			<div>
				<div className="container mt-5 mb-5">
				<div className="row">
					<div className="col-md-6 offset-md-3">
					<h4>Latest News</h4>
					<ul className="timeline">
						{ loading && <img className="loader" src={ Loader } /> }
						{ posts && posts.length && (
							posts.map( post => (
								
							<li key={ post.id }>
							<Link  to={`/post/${post.id}`}>{ post.title.rendered }</Link>
							<div> { renderHTML( post.content.rendered.substring(0,150) ) }</div>
							</li>

							) )
						) }
					</ul>
					</div>
				</div>
				</div>
			</div>
		)
	}
}

export default Home;
