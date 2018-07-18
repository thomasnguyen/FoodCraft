import React, { Component } from 'react';

import styled from 'styled-components';
import variables from './variables';

const Item = styled('div')`
    margin:auto;
    display:flex;
    flex-direction: column;
	font-size:13px;
	@media (max-width: 960px){
		margin:0px;
		text-align:left;
		flex-direction: row;
		margin-top:1px;
		margin-bottom:1px;
    }
`;

const Stat = styled('div')`

`;

const Icon = styled('i')`
    margin-right:5px;
	color:${variables.lightText};
	@media (max-width: 740px){
display:none    }
`;

const Text = styled('span')`
	color:${variables.darkText};
	font-size:16px;
	@media (max-width: 740px){
		font-size:12px;
    }
`;

const Description = styled('div')`
    font-size:12px;
	margin-top:4px;
	@media (max-width: 960px){
		margin-top:2px;
		margin-left:5px;
    }
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
