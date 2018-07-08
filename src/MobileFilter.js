import React, { Component } from 'react';
import helper from './helper.js';
import styled from '../node_modules/styled-components';
import FilterBar from './FilterBar.js';

const Wrapper = styled('div')`


`;

class MobileFilter extends Component {
	render() {
		return (
			<Wrapper>
				<button>Filters</button>
				<FilterBar />
			</Wrapper>
		);
	}
}

export default MobileFilter;
