import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AppContainer = styled.div`
  margin: 15px;
  padding: 15px;
  box-shadow: 5px 5px 15px 5px rgba(10, 10, 120, 0.35);
`;

export const Header = styled.header`
  border-radius: 5px;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  display: inline-block;
  position: relative;
  padding: 15px 25px;
  border-radius: 5px;
  border-image: linear-gradient(180deg, #ff3000, #ed0200, #ff096c, #d50082);
  border-image-slice: 1;
  /* margin-left: 7px; */
  margin-right: 16px;
  margin-bottom: 5px;
  text-transform: uppercase;
  overflow: hidden;
  letter-spacing: 2px;
  transition: 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 0;
    width: 100%;
    z-index: -1;
    color: white;
    background: linear-gradient(180deg, #ff3000, #ed0200, #ff096c, #d50082);
    transition: 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  &:hover {
    background: rgba(255, 255, 255, 0);
  }

  &:hover:before {
    bottom: 0%;
    top: auto;
    height: 100%;
  }
`;
