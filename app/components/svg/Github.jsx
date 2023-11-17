import React from 'react';
import { addClick } from '../../actions/addClick.js';
import { useRouter } from 'next/navigation';

const Github = () => {
  const { replace } = useRouter();
  return (
    <svg
      onClick={() => {
        addClick('githubClicks');
        replace('https://github.com/rowgregory');
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="25px"
      height="25px"
      viewBox="0 0 120.78 117.79"
      className="ml-5 cursor-pointer group hover:scale-125 transition-all duration-300"
    >
      <path
        className="group-hover:fill-[#fff] transition-all duration-300"
        fill="rgb(119, 119, 119)"
        d="M60.39 0A60.39 60.39 0 0 0 41.3 117.69c3 .56 4.12-1.31 4.12-2.91 0-1.44-.05-6.19-.08-11.24C28.54 107.19 25 96.42 25 96.42c-2.75-7-6.71-8.84-6.71-8.84-5.48-3.75.41-3.67.41-3.67 6.07.43 9.26 6.22 9.26 6.22 5.39 9.23 14.13 6.57 17.57 5 .55-3.9 2.11-6.56 3.84-8.07C36 85.55 21.85 80.37 21.85 57.23A23.35 23.35 0 0 1 28.08 41c-.63-1.52-2.7-7.66.58-16 0 0 5.07-1.62 16.61 6.19a57.36 57.36 0 0 1 30.25 0C87 23.42 92.11 25 92.11 25c3.28 8.32 1.22 14.46.59 16a23.34 23.34 0 0 1 6.21 16.21c0 23.2-14.12 28.3-27.57 29.8 2.16 1.87 4.09 5.55 4.09 11.18 0 8.08-.06 14.59-.06 16.57 0 1.61 1.08 3.49 4.14 2.9A60.39 60.39 0 0 0 60.39 0Z"
      ></path>
    </svg>
  );
};

export default Github;
