import React, { Component } from 'react';

import styled from 'styled-components';

const Item = styled('div')`
    margin-right:20px;
    display:flex;
    flex-direction: column;
    font-size:13px;
`;

class StatItem extends Component {
	render() {
		return (
			<Item>
				<div className="quick_stats__number">
					<i className={`fas ${this.props.icon}`} />
					<span className="time">{this.props.number}</span>
				</div>
				<div className="quick_stats__title">{this.props.measure}</div>
			</Item>
		);
	}
}

export default StatItem;
