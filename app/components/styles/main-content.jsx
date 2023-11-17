import { motion } from 'framer-motion';
import styled from 'styled-components';

export const DescriptionBox = styled.span.attrs((props) => ({
  h1: props.h1,
  h2: props.h2,
}))`
  margin-left: 30px;
  position: relative;
  display: block;

  ::before {
    position: absolute;
    opacity: 0.5;
    content: '';
    width: 2px;
    height: 100%;
    top: 0;
    bottom: 0;
    left: -30px;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    background-image: ${({ h1, h2 }) =>
      `linear-gradient(to bottom, ${h1}, ${h2})`};
  }
`;

export const ProjectTitle = styled.div.attrs((props) => ({
  h1: props.h1,
  h2: props.h2,
}))`
  font-size: 14px;
  margin-bottom: 20px;
  padding-bottom: 5px;
  color: #d1d1d1;
  cursor: pointer;
  position: relative;
  width: fit-content;
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    left: 0;
    right: 0;
    bottom: 0;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    background-image: ${({ h1, h2 }) =>
      `linear-gradient(to right, ${h1}, ${h2})`};
  }
`;

export const ProjectCorner = styled.div.attrs((props) => ({
  h1: props.h1,
  h2: props.h2,
}))`
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  }

  &::before {
    width: 100px;
    height: 2px;
    top: 0;
    left: 0;
    background-image: ${({ h1, h2 }) =>
      `linear-gradient(to right, ${h1}, ${h2})`};
  }

  &::after {
    width: 2px;
    height: 100px;
    top: 0;
    left: 0;
    background-image: ${({ h1, h2 }) =>
      `linear-gradient(to bottom, ${h1}, ${h2})`};
  }
`;

export const VisitSite = styled(motion.a).attrs((props) => ({
  h1: props.h1,
  h2: props.h2,
}))`
  position: relative;
  width: fit-content;
  color: #ccc;
  font-size: 16px;
  font-weight: regular;
  padding-block: 8px;
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    left: 0;
    right: 0;
    top: 35px;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    background-image: ${({ h1, h2 }) =>
      `linear-gradient(to right, ${h1}, ${h2})`};
  }
`;
export const SubmitBtn = styled.button.attrs((props) => ({
  h1: props.h1,
  h2: props.h2,
}))`
  width: 100%;
  margin-top: 20px;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  background-image: ${({ h1, h2 }) =>
    `linear-gradient(to right, ${h1}, ${h2})`};
`;
