import styled from 'styled-components';

export const Image = styled.img`
  width: 150px;
  margin-top: 15px;
  margin-bottom: 5px;

  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const ImageList = styled.ul`
  display: grid;
  max-width: calc(100vw - 40px);
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 16px;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const ImageItem = styled.li`
  text-align: center;
`;
