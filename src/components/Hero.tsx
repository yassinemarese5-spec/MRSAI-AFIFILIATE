import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative bg-white pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-gray-100">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-50 via-white to-white opacity-70"></div>
        <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent bottom-0"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-brand-50 text-brand-600 mb-8 border border-brand-100/50">
            <span className="flex w-2 h-2 rounded-full bg-brand-500 mr-2 animate-pulse"></span>
            Curated Tools for Digital Creators
          </span>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight text-gray-900 mb-8 max-w-4xl mx-auto leading-[1.1]">
            Build, scale, and ship <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400">
              faster than ever.
            </span>
          </h1>
          
          <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            We review and curate the absolute best SaaS products, AI workflows, and digital tools so you can focus on executing your vision.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#tools"
              className="w-full sm:w-auto px-8 py-3.5 bg-gray-900 text-white rounded-xl font-medium text-lg hover:bg-gray-800 transition-all shadow-lg shadow-gray-900/20 flex items-center justify-center group"
            >
              Explore Top Tools
              <ArrowUpRight className="w-5 h-5 ml-2 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
