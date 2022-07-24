import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import GoogleFontLoader from '../components/modified/GoogleFontLoader';

import cover from '../../static/aldo/cover.png'
import texture from "../../static/img/texture.png";
import grisi from "../../static/aldo/grisi.png";
import RoundButton from './RoundButton';
import logo from '../../static/logo/header-logo.png';
import { Link } from 'gatsby';
import Theme from '../../config/theme';

/*
  @media screen and (min-width: ${Theme.breakpoints.s}) {
    background: url(${cover}) 70% 200% no-repeat;
    background-size: 450px;
  }

    @media screen and (min-width: ${Theme.breakpoints.m}) {
    background: url(${cover}) 90% -50% no-repeat;
    background-size: 550px;
  }
  @media screen and (min-width: ${Theme.breakpoints.l}) and (max-width: ${Theme.breakpoints.lx}) {
    background: url(${cover}) 90% -8vh no-repeat;
    background-size: 650px;
  }

  
  @media screen and (min-width: ${Theme.breakpoints.lx}) {
    background: url(${cover}) 100% -14vh no-repeat;
    background-size: 700px;
  }
*/

const Wrapper = styled.header`
  height: 100vh;
  margin: 0 auto;
  background-image: linear-gradient(90deg, ${Theme.colors.primary.base} 0%, ${Theme.colors.primary.light} 25%, #333 25%, #222 100%);

  display: grid;
  grid-template-columns: 1fr 2fr 3fr 1fr;
  grid-template-rows: 250px 1fr;

  @media screen and (min-width: ${Theme.breakpoints.xs}) {
    grid-template-columns: 1fr 2fr 1fr 2fr 3fr 1fr;

  }

  @media screen and (min-width: ${Theme.breakpoints.m}) {
    grid-template-columns: 1fr 3fr 2fr 3fr 1fr;
  }

  @media screen and (min-width: ${Theme.breakpoints.l}) {
    grid-template-columns: 1fr 1fr 2fr 3fr 1fr;
    background-image: linear-gradient(90deg, ${Theme.colors.primary.base} 0%, ${Theme.colors.primary.light} 20%, #333 20%, #222 100%);
  }

  &:before {
    content: '';
    height: 100vh;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0.7;
    background: url(${texture}) no-repeat;
    background-size: cover;
  }

  &:after {
    content: '';
    height: 100vh;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    
    height: 100vh;
    background: 
      url(${cover}) -100% 100% no-repeat,
      url(${grisi}) 25% 70% no-repeat;
    background-size: 355px;
    margin: 0 auto;
  
  
    @media screen and (min-width: ${Theme.breakpoints.s}) {
      background: 
        url(${cover}) -15% 100% no-repeat,
        url(${grisi}) 25% 50% no-repeat;
      background-size: 355px;
    }
  
    @media screen and (min-width: ${Theme.breakpoints.m}) {
      background: 
        url(${cover}) 10% 100% no-repeat,
        url(${grisi}) 25% 50% no-repeat;
      background-size: 355px;
    }
  
    @media screen and (min-height: 900px) {
      background: 
        url(${cover}) -10% 100% no-repeat,
        url(${grisi}) 25% 65% no-repeat;
    }
  }
`;

const Text = styled.div`
  grid-column: 1 / -1;
  z-index: 2;
  align-self: center;
  justify-self: center;

  @media screen and (min-width: ${Theme.breakpoints.s}) {
    grid-column: 3 / -1;
    padding: 0 2rem;
    align-self: flex-start;
  }

  @media screen and (min-width: ${Theme.breakpoints.m}) {
    grid-column: 3 / -1;
  }

  @media screen and (min-width: ${Theme.breakpoints.l}) {
    grid-column: 3 / 5;
  }
    
  @media screen and (min-height: 900px) {
    grid-column: 3 / -1;
  }
`;

const Subtitle = styled.p`
  max-width: 650px;
  font-size: 22px;
  text-align: left;
  margin: 2rem 0;
  color: ${Theme.colors.white.light};
`;

const PositiveMessage = styled.h1`
text-align: center;
display: block; 
font-size: 35px;
letter-spacing: 0;
color: #FFFFFF;
font-weight: 400;
text-shadow: 0px 3px 6px #00000050;
width: 100%;
margin-bottom: 0;
opacity: 1;
font-family: Lato;
line-height: 1.2;

@media screen and (min-width: ${Theme.breakpoints.s}) {
  font-size: 50px;
  text-align: left;
  align-self: flex-end;
  text-shadow: 0px 3px 6px #00000029;
}

@media screen and (min-width: ${Theme.breakpoints.m}) and (max-width: ${Theme.breakpoints.l}) {
  font-size: 60px;
  text-align: left;
  width: 100%;

}

@media screen and (min-width: ${Theme.breakpoints.l}) and (max-width: ${Theme.breakpoints.lx}) {
  font-size: 65px;
  text-align: left;
  width: 100%;

}

@media screen and (min-width: ${Theme.breakpoints.lx}) {
  font-size: 70px;
  text-align: left;
}
`;

const StyledLink = styled.div`
  grid-column: 1/-1;
  z-index: 2;  

  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: ${Theme.breakpoints.l}) {
    grid-column: 3 / 5;
  }
`;

const Logo = styled.img`
  z-index: 2;  
  max-width: 240px;
`;

const DisplayNone = styled.div`

@media screen and (max-width:  ${Theme.breakpoints.s}){
  display: none;
}
`;

const HeaderCoverSection = ({ children, title, date }) => {
  return(<Wrapper>
    <GoogleFontLoader
          fonts={[
              {
                  font: 'Poppins',
                  weights: [300, 400, 600],
              },
          ]}
        />

    <StyledLink to="/">
      <Link to="/">
      <Logo src={logo} alt="Dr Aldo Grisi Logo" />
      </Link>
    </StyledLink>

    <Text>
      <PositiveMessage>Dr. Aldo Grisi</PositiveMessage>
      <DisplayNone>
        <Subtitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
          ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
          voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </Subtitle>
      </DisplayNone>
      <Link to="/#knowbetter">
        <RoundButton text="AGENDE SUA CONSULTA ONLINE" />
      </Link>
    </Text>
    
    {children && <Subtitle>{children}</Subtitle>}
    
  </Wrapper>
)};

export default HeaderCoverSection;

HeaderCoverSection.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.bool,
  ]),
};

HeaderCoverSection.defaultProps = {
  children: false,
  date: false,
  title: false,
};
