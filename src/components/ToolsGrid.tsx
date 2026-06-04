import React from 'react';
import { motion } from 'motion/react';
import { Star, Check, ExternalLink } from 'lucide-react';
import { products } from '../data';

const ProductIcon = ({ id, className }: { id: string; className?: string }) => {
  switch (id) {
    case 'p5': // Runway
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M15.6 11.6L22 7v10l-6.4-4.5v-1zM4 5h9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2z"/>
          <circle cx="8" cy="12" r="3" />
        </svg>
      );
    case 'p6': // HeyGen
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case 'p7': // ElevenLabs
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M2 10v3" />
          <path d="M6 6v11" />
          <path d="M10 3v18" />
          <path d="M14 8v7" />
          <path d="M18 5v13" />
          <path d="M22 10v3" />
        </svg>
      );
    case 'p8': // Descript
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <line x1="10" y1="9" x2="8" y2="9" />
        </svg>
      );
    case 'p9': // InVideo AI
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <circle cx="12" cy="12" r="10" />
          <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" />
        </svg>
      );
    default:
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <circle cx="12" cy="12" r="10"/>
        </svg>
      );
  }
};

export function ToolsGrid() {
  return (
    <section className="py-24 bg-white" id="tools">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl tracking-tight font-display font-bold text-gray-900 sm:text-4xl">
            Our Top AI Media Tools
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            The industry's most powerful generators and editors, tested and verified by our team.
          </p>
        </div>

        <div className="space-y-8">
          {products.map((product, index) => {
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row group"
              >
                <div className={`w-full sm:w-1/3 p-8 flex items-center justify-center ${product.colorScheme.bg} border-b sm:border-b-0 sm:border-r border-gray-100 transition-colors duration-300`}>
                  <ProductIcon 
                    id={product.id} 
                    className={`w-20 h-20 ${product.colorScheme.text} opacity-90 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500`}
                  />
                </div>
                
                <div className="p-8 sm:w-2/3 flex flex-col justify-between bg-white">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-xs font-semibold uppercase tracking-wider ${product.colorScheme.text} ${product.colorScheme.bg} px-3 py-1 rounded-full`}>
                        {product.category}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                        <span className="text-sm font-medium text-gray-900">{product.rating}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold font-display text-gray-900 mb-3">{product.name}</h3>
                    <p className="text-gray-600 text-[15px] leading-relaxed mb-6">
                      {product.description}
                    </p>
                    
                    <ul className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-600">
                          <Check className="w-4 h-4 text-brand-500 mr-2 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-auto pt-5 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500 uppercase tracking-wider mb-1">Pricing</span>
                      <span className="text-sm font-medium text-gray-900">{product.priceModel}</span>
                    </div>
                    <a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center px-6 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-xl hover:bg-brand-600 transition-all shadow-sm`}
                    >
                      <span>Get Started</span>
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
