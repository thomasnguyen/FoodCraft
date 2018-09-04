import React, { Component } from 'react';

import Header from './Header';

class About extends Component {
	render() {
		return (
			<div>
				<Header handleGlobalSearch={this.handleGlobalSearch} />
			</div>
		);
	}
}

export default About;
