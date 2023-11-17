'use client';

import React from 'react';
import { addClick } from '../actions/addClick.js';

const Footer = () => {
  return (
    <footer className="flex justify-end pt-9 pb-6">
      <div
        onClick={() => addClick('footerClicks')}
        className={`text-sm text-[#c8c8c8]`}
      >
        ©{new Date().getFullYear()} gregoryrow.com
      </div>
    </footer>
  );
};

export default Footer;
