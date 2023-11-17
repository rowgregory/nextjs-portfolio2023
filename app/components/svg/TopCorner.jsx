import { useLogoClicksContext } from '../../context/logoClicksContext.jsx';
import {
  TopHorizontalPiece,
  TopVerticalPiece,
} from '../styles/corner-pieces.jsx';

const TopCorner = () => {
  const { hexadecimals } = useLogoClicksContext();
  const h1 = hexadecimals[0];
  const h2 = hexadecimals[1];

  return (
    <div className="absolute top-0 left-0 z-[0] ">
      <div className="relative">
        <TopVerticalPiece
          h1={h1}
          h2={h2}
          className="absolute h-64 w-5 top-0 left-0 rounded-2xl opacity-50"
        ></TopVerticalPiece>
        <TopHorizontalPiece
          h1={h1}
          h2={h2}
          className="absolute h-5 w-64 top-0 left-0 rounded-2xl opacity-50"
        ></TopHorizontalPiece>
      </div>
    </div>
  );
};

export default TopCorner;
