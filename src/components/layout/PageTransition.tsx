/**
 * PageTransition.tsx
 *
 * Wraps page content with a subtle fade-in + slight upward drift on route change.
 * Framer Motion's initial/animate props handle this without AnimatePresence
 * since App Router manages mounting/unmounting natively.
 *
 * Animation is intentionally understated (opacity + 12px translateY, 350ms):
 *  - Fast enough not to feel sluggish on repeated navigation
 *  - Slow enough to be perceptible as a polished transition
 *  - No spring/bounce — B2B audience expects measured, professional motion
 *
 * 'use client' required for Framer Motion browser APIs.
 */
"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
