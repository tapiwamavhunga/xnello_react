import React from 'react';
import { Link } from '@reach/router';

class Navbar extends React.Component {
	render() {
		return(
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<Link className="navbar-brand" to="/">React App</Link>

				
			</nav>
		)
	}
}

export default Navbar;
