import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const Image = styled.img`
  transition: 0.3s;
  box-shadow: 4px 4px 6px 3px rgba(0, 0, 0, 0.3);

  &:hover {
    transform: scale(1.03);
  }
`;
