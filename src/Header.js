import React, { Component } from 'react';
import images from './images/logo.png';
import styled from '../node_modules/styled-components';

import variables from './variables';

const Container = styled('div')`
    width: 100%;
    background: ${variables.headerBG};
    color: white;
    height: 55px;
    line-height: 55px;
`;

const FlexContainer = styled('div')`
    display: flex;  
`;

const Logo = styled('div')``;

const LogoImage = styled('img')`
    width: 35px;
    position: relative;
	top: 9px;
	left:20px;
`;

const LogoText = styled('span')`
	font-size: 18px;
	padding-left:25px;	
`;

const SearchBar = styled('input')`
    background: #ffffff;
    border: 1px solid #8dba26;
    border-radius: 10px;

    font-size: 14px;
    color: #181818;
    letter-spacing: 0;
    text-align: left;

	padding: 10px;
	padding-left:15px;

    outline-color: transparent;
    outline-style: none;

    width: calc(100% - 40px);


    margin-top: 10px;
	font-size: 12px;
	color: rgba(255,255,255,0.8);
	width: 300px;
	background: #404448;
	border: 0px solid black;

	&::placeholder{
		color:rgba(255,255,255,0.4);
		font-style:italic;
	}
`;

const Search = styled('div')`
	padding-left: 15px;
`;

const MenuLinksContainer = styled('div')`
	margin-left:20px;


	& > a{
		color:white;
		text-decoration:none;
		font-size:14px;
		font-weight:500;
	}

	& > a:hover{
		color:rgba(255,255,255,.7);
	}
`;

class Header extends Component {
	componentDidMount() {
		document.addEventListener('keydown', this.handleSearch, false);
	}
	handleSearch = (event) => {
		if (event.keyCode === 13) {
			this.props.handleGlobalSearch(this.globalSearch.value.toLowerCase());
			this.globalSearch.value = '';
		}
	};
	render() {
		return (
			<Container>
				<FlexContainer>
					<Logo>
						<LogoImage src={images} alt="logo" />{' '}
						<LogoText>
							{' '}
							<b>Food</b>Craft{' '}
						</LogoText>
					</Logo>
					<Search>
						<SearchBar
							innerRef={(input) => (this.globalSearch = input)}
							onChange={this.handleSearch}
							type="text"
							placeholder="Filter Recipes by Keyword"
						/>
					</Search>
					<MenuLinksContainer>
						<a href="#">About</a>
					</MenuLinksContainer>
				</FlexContainer>
			</Container>
		);
	}
}

export default Header;
