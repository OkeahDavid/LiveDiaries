// src/components/PageTransition.tsx
'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface PageTransitionProps {
  children: React.ReactNode
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  return (
    <div className="overflow-x-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '-100%' }}
          transition={{ type: 'tween', ease: 'anticipate', duration: 0.5 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default PageTransition