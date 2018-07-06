import React, { Component } from 'react';
import images from './images/logo.png';
import styled from '../node_modules/styled-components';

const Container = styled('div')`
    width: 100%;
    background: #24292e;
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
`;

const LogoText = styled('span')`
	font-size: 18px;
	padding-left:5px;
`;

const SearchBar = styled('input')`
    background: #ffffff;
    border: 1px solid #8dba26;
    border-radius: 10px;

    font-size: 14px;
    color: #181818;
    letter-spacing: 0;
    text-align: left;
    opacity: 0.57;

    padding: 10px;
    padding-left: 30px;

    outline-color: transparent;
    outline-style: none;

    width: calc(100% - 40px);


    margin-top: 10px;
	font-size: 12px;
	color: white;
	width: 300px;
	background: #404448;
	border: 0px solid black;
`;

const Search = styled('div')`
	padding-left: 165px;
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
							laceholder="Global search...."
						/>
					</Search>
				</FlexContainer>
			</Container>
		);
	}
}

export default Header;
