'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { SubmitBtn } from '../components/styles/main-content.jsx';
import { useLogoClicksContext } from '../context/logoClicksContext.jsx';
import { sendMessage } from '../actions/sendMessage';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const ContactPage = () => {
  const pathname = usePathname();
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: '',
  });
  let [loading, setLoading] = useState(false);
  const [messageReceived, setMessageReceived] = useState(false);
  const [error, setError] = useState('');
  const { hexadecimals } = useLogoClicksContext();
  const h1 = hexadecimals[0];
  const h2 = hexadecimals[1];

  const container =
    'pt-8 flex flex-col items-center justify-center h-[calc(100%-102px)] min-h-[calc(100%-102px)] mt-5 px-7 x9:px-[50px] mx-auto relative max-w-md rounded-lg shadow-lg overflow-hidden';

  const inputStyles = `bg-[#383f52] h-10 focus:outline-none focus:border-none pl-3 text-white`;
  const textareaStyles = `bg-[#383f52]  focus:outline-none focus:border-none pl-3 py-3 text-white`;
  const labelStyles = `uppercase text-white mb-1 font-medium text-[10px] text-zinc-300`;
  const formStyles = `${
    messageReceived && 'translate-y-[-600px] duration-500'
  } w-full relative basis-[53%] grow shrink min-h-[330px]`;

  const handleInput = (e) => {
    setInputs((inputs) => ({
      ...inputs,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    if (
      emailRegex.test(inputs.email) &&
      inputs.message.length <= 300 &&
      inputs.message.length >= 2 &&
      inputs.name.length >= 2 &&
      inputs.name.length < 60
    ) {
      setError('');
      await sendMessage(inputs);
      setLoading(false);
      setMessageReceived(true);
    } else {
      setLoading(false);
      setMessageReceived(false);
      setError('Please check your inputs');
    }
  };

  return (
    <>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.3, ease: 'easeInOut' },
        }}
        className={container}
        id="glassmorphism-styles"
      >
        <form className={formStyles}>
          <p className="text-center mb-5 text-2xl font-medium">GET IN TOUCH</p>
          <div className="flex flex-col mb-4 w-full">
            <label className={labelStyles}>Name</label>
            <input
              id="glassmorphism-styles"
              className={inputStyles}
              name="name"
              value={inputs.name || ''}
              onChange={handleInput}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className={labelStyles}>Email</label>
            <input
              id="glassmorphism-styles"
              className={inputStyles}
              name="email"
              value={inputs.email || ''}
              onChange={handleInput}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className={labelStyles}>Message</label>
            <textarea
              id="glassmorphism-styles"
              className={textareaStyles}
              rows={8}
              name="message"
              value={inputs.message || ''}
              onChange={handleInput}
            />
          </div>
          <SubmitBtn
            disabled={loading}
            h1={h1}
            h2={h2}
            onClick={onSubmit}
            className="rounded-2xl py-2 shadow-lg font-medium transform translate-y-0 active:translate-y-1 transition-transform active:shadow-sm text-sm"
          >
            {loading ? (
              <div className="animate-spin mx-auto rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-100"></div>
            ) : (
              'SUBMIT'
            )}
          </SubmitBtn>
          <p className="text-center text-red-500 text-bold mt-4 text-sm">
            {error}
          </p>
        </form>
        <div
          className={`${
            messageReceived ? 'translate-y-[-250px]' : 'translate-y-[600px]'
          } w-full text-center duration-500`}
        >
          I appreciate you taking the time to send me a message. I will get back
          to you as soon as possible. Have a great day.
        </div>
      </motion.div>
    </>
  );
};

export default ContactPage;
