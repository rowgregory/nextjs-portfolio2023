import React from 'react';

const container =
  'pt-8 flex flex-col h-[calc(100%-102px)] min-h-[calc(100%-102px)] mt-5 x9:mt-0 x9:pt-0 px-7 x9:px-[50px] x9:flex-row x9:items-center mx-auto bg-[#1c202b] relative max-w-md rounded-lg shadow-lg';

const LoadingPage = () => {
  return (
    <div className={container}>
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-100"></div>
    </div>
  );
};

export default LoadingPage;
