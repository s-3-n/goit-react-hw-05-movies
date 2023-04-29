import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Image = styled.img`
  width: 300px;
  margin-right: 17px;

  box-shadow: 5px 5px 5px 3px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const Section = styled.section`
  display: flex;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;
  position: relative;
  padding: 10px 25px;
  border-radius: 5px;
  border-image: linear-gradient(180deg, #ff3000, #ed0200, #ff096c, #d50082);
  border-image-slice: 1;
  margin-right: 15px;
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

export const Title2 = styled.h2`
  margin-bottom: 30px;
  font-size: 35px;
`;

export const Text = styled.p`
  font-size: 15px;
  margin-bottom: 30px;
`;

export const GenresList = styled.ul`
  display: flex;
`;

export const GenresItem = styled.ul`
  margin-right: 5px;
`;

export const AdditionalSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AdditionalList = styled.ul`
  display: flex;
`;

export const Title5 = styled.h5`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 20px;
`;
