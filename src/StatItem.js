import React, { Component } from 'react';

import styled from 'styled-components';
import variables from './variables';

const Item = styled('div')`
    margin-right:20px;
    display:flex;
    flex-direction: column;
    font-size:13px;
`;

const Stat = styled('div')``;

const Icon = styled('i')`
    margin-right:5px;
    color:${variables.lightText};
`;

const Text = styled('span')`
	color:${variables.darkText};
	font-size:16px;
`;

const Description = styled('div')`
    font-size:12px;
    margin-top:4px;
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
