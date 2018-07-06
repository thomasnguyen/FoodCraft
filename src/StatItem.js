import React, { Component } from 'react';

import styled from 'styled-components';

const Item = styled('div')`
    margin-right:20px;
    display:flex;
    flex-direction: column;
    font-size:13px;
`;

const Stat = styled('div')``;

const Icon = styled('i')`
    margin-right:5px;
    color:#B9B9B9;
`;

const Text = styled('span')`
    color:#4E4A4E;
`;

const Description = styled('div')`
    font-size:10px;
    margin-top:2px;
`;

class StatItem extends Component {
	render() {
		return (
			<Item>
				<Stat>
					<Icon className={`fas ${this.props.icon}`} />
					<Text>{this.props.number}</Text>
				</Stat>
				<Description>{this.props.measure}</Description>
			</Item>
		);
	}
}

export default StatItem;
