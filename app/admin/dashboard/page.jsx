'use client';

import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { UserContext } from '@/app/context/userContext.jsx';

const DashboardPage = () => {
  const { user } = useContext(UserContext);
  return (
    <motion.div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: '100vh',
      }}
      initial={{ opacity: 0, scale: 10, translateZ: -1000 }}
      animate={{ opacity: 1, scale: 1, translateZ: 0 }}
      transition={{ duration: 0.75, delay: -0.25 }}
    >
      Welcome {user?.firstName}
    </motion.div>
  );
};

export default DashboardPage;
