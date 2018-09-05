import React, { Component } from 'react';
import styled from '../node_modules/styled-components';
import images from './images/hero.png';
import { Link } from 'react-router-dom';

import Header from './Header';
const HeroContainer = styled('div')`
	width:100%;
	height:500px;
	background: #292F35;
`;

const HeroContent = styled('div')`
	width:1000px;
	margin:auto;
	display:flex;
	padding-top:100px;
	justify-content: space-between;
`;

const HeroText = styled('div')`
	width:400px;
	& > h1 {
		font-size: 32px;
		color: #FFFFFF;
		line-height: 40px;
	}

	& > p{
		font-size: 14px;
		color: #FFFFFF;
		line-height: 21px;
	}
`;
const HeroSVG = styled('img')`
	width:359px;
`;

const HeroButton = styled('button')`
	background: #769F1A;
	border-radius: 5px;
	font-size: 14px;
	color: #FFFFFF;
	letter-spacing: 1.03px;
	border: none;
	padding:20px;
	padding-top:15px;
	padding-bottom:15px;
	margin-top:35px;

	& > a {
		text-decoration:none;
		color: #FFFFFF;

	}
`;

class About extends Component {
	render() {
		return (
			<div>
				<Header handleGlobalSearch={this.handleGlobalSearch} />
				<HeroContainer>
					<HeroContent>
						<HeroText>
							<h1>Discover Recipes Based on your Fridge</h1>
							<p>
								Stripe is the best software platform for running an internet business. We handle
								billions of dollars every year for forward-thinking businesses around the world.
							</p>
							<HeroButton>
								<Link to="/">Getting Started</Link>
							</HeroButton>
						</HeroText>
						<HeroSVG src={images} alt="logo" />
					</HeroContent>
				</HeroContainer>
			</div>
		);
	}
}

export default About;
