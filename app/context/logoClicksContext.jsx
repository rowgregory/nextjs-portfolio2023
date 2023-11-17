'use client';

import { createContext, useReducer, useContext } from 'react';

const initialState = {
  clickedGmail: false,
  clickedLogo: false,
  hexadecimals: ['#ffffff33', '#ffffff33'],
};

export const LogoClicksContext = createContext({
  clickedGmail: false,
  clickedLogo: false,
  hexadecimals: [],
  setClickedGmail: Function,
  setClickedLogo: Function,
});

function generateRandomColors() {
  const randomColor1 =
    '#' + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0');
  const randomColor2 =
    '#' + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0');

  return [randomColor1, randomColor2];
}

const logoClicksReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CLICKED_GMAIL':
      return {
        ...state,
        clickedGmail: !state.clickedGmail,
      };
    case 'SET_CLICKED_LOGO':
      const colors = generateRandomColors();
      const hex1 = colors[0];
      const hex2 = colors[1];
      return {
        ...state,
        clickedLogo: true,
        hexadecimals: [hex1, hex2],
      };
    default:
      return { ...state };
  }
};

export const LogoClicksProvider = (props) => {
  const [state, dispatch] = useReducer(logoClicksReducer, initialState);

  const setClickedGmail = () => dispatch({ type: 'SET_CLICKED_GMAIL' });
  const setClickedLogo = () => dispatch({ type: 'SET_CLICKED_LOGO' });

  return (
    <LogoClicksContext.Provider
      value={{
        clickedGmail: state.clickedGmail,
        clickedLogo: state.clickedLogo,
        hexadecimals: state.hexadecimals,
        setClickedGmail,
        setClickedLogo,
      }}
      {...props}
    />
  );
};

export const useLogoClicksContext = () => useContext(LogoClicksContext);
