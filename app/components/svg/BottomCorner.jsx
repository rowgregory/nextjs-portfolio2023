import { useLogoClicksContext } from '../../context/logoClicksContext.jsx';
import {
  BottomHorizontalPiece,
  BottomVerticalPiece,
} from '../styles/corner-pieces.jsx';

const BottomCorner = () => {
  const { hexadecimals } = useLogoClicksContext();
  const h1 = hexadecimals[0];
  const h2 = hexadecimals[1];

  return (
    <>
      <div className="absolute bottom-0 right-0">
        <div className="relative">
          <BottomVerticalPiece
            h1={h1}
            h2={h2}
            className="absolute h-64 w-5 bottom-0 right-0 rounded-2xl opacity-50"
          ></BottomVerticalPiece>
          <BottomHorizontalPiece
            h1={h1}
            h2={h2}
            className="absolute h-5 w-64 bottom-0 right-0 rounded-2xl opacity-50"
          ></BottomHorizontalPiece>
        </div>
      </div>
    </>
  );
};

export default BottomCorner;
