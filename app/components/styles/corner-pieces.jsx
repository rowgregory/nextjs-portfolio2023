import styled from 'styled-components';

export const TopVerticalPiece = styled.div.attrs((props) => ({
  h1: props.h1,
  h1: props.h1,
}))`
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  background-image: ${({ h1, h2 }) =>
    `linear-gradient(to bottom, ${h1}, ${h2})`};
`;

export const TopHorizontalPiece = styled.div.attrs((props) => ({
  h1: props.h1,
  h1: props.h1,
}))`
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  background-image: ${({ h1, h2 }) =>
    `linear-gradient(to right, ${h1}, ${h2})`};
`;

export const BottomVerticalPiece = styled.div.attrs((props) => ({
  h1: props.h1,
  h1: props.h1,
}))`
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  background-image: ${({ h1, h2 }) => `linear-gradient(to top, ${h1}, ${h2})`};
`;

export const BottomHorizontalPiece = styled.div.attrs((props) => ({
  h1: props.h1,
  h1: props.h1,
}))`
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  background-image: ${({ h1, h2 }) => `linear-gradient(to left, ${h1}, ${h2})`};
`;
