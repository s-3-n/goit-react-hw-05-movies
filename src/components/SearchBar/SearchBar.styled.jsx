import styled from 'styled-components';

export const Input = styled.input`
  height: 35px;
  width: 300px;

  color: black;
  border-radius: 5px;
  border: 2px solid #ff3000;
  margin-right: 10px;
  padding-left: 15px;
`;

export const Form = styled.form`
  margin-bottom: 10px;
`;

export const Button = styled.button`
  text-decoration: none;
  color: black;
  background-color: #fff;
  display: inline-block;
  position: relative;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
  border-image: linear-gradient(180deg, #ff3000, #ed0200, #ff096c, #d50082);
  border-image-slice: 1;
  margin-right: 16px;
  margin-bottom: 5px;
  /* text-transform: uppercase; */
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
