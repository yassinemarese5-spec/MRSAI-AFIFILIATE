import React, { useState } from 'react';
import { Command, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Footer() {
  const [modalType, setModalType] = useState<'privacy' | 'terms' | null>(null);

  const closeModal = () => setModalType(null);

  return (
    <>
      <footer className="bg-gray-900 w-full text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            
            <div className="flex items-center space-x-2">
              <span className="font-display font-bold text-2xl tracking-tight">MRS<span className="text-blue-500">AI</span></span>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
              <a href="#blog" className="hover:text-white transition-colors">Blog</a>
              <button 
                onClick={() => setModalType('privacy')} 
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => setModalType('terms')} 
                className="hover:text-white transition-colors"
              >
                Terms of Use
              </button>
            </div>
            
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col items-center gap-4">
            <p className="text-sm text-gray-400 text-center">
              &copy; {new Date().getFullYear()} MRSAI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {modalType && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"
              onClick={closeModal}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-8 md:p-10 max-h-[90vh] overflow-y-auto"
            >
              <button 
                onClick={closeModal}
                className="absolute top-6 right-6 p-2 text-gray-400 hover:text-gray-900 bg-gray-50 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="pr-4 md:pr-8">
                {modalType === 'privacy' && (
                  <>
                    <div className="mb-8 border-b border-gray-100 pb-6">
                      <h2 className="text-3xl font-display font-bold text-gray-900 mb-2">Privacy Policy</h2>
                      <p className="text-sm text-gray-500">Last Updated: June 2026</p>
                    </div>
                    
                    <div className="space-y-10 text-gray-600 text-sm leading-relaxed">
                      <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Overview</h2>
                        <p className="mb-4">Welcome to MRSAI. We deeply respect your privacy and are committed to protecting your personal data.</p>
                        <p>This privacy policy will inform you as to how we look after your personal data and tell you about your privacy rights and how the law protects you.</p>
                      </section>

                      <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
                        <p className="mb-4">We collect minimal information to provide you with the best possible service, including:</p>
                        
                        <h3 className="text-base font-semibold text-gray-800 mb-2 mt-6">2.1 Personal Data</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                          <li>Your email address.</li>
                          <li>Information voluntarily provided when you subscribe to our newsletter.</li>
                        </ul>
                      </section>

                      <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Use of Cookies</h2>
                        <p className="mb-4">Like many websites, we use cookies to enhance your browsing experience.</p>
                        
                        <h3 className="text-base font-semibold text-gray-800 mb-2 mt-4">Why we use cookies:</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>To analyze site traffic.</li>
                          <li>To understand where our audience comes from.</li>
                          <li>To ensure the site functions properly.</li>
                        </ul>
                        
                        <p className="mt-4">You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>
                      </section>

                      <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Affiliate Disclosure</h2>
                        <p className="mb-4">We believe in absolute transparency with our audience.</p>
                        <p className="mb-4">MRSAI participates in various affiliate marketing programs. This means we may get paid commissions on editorially chosen products purchased through our links.</p>
                        
                        <h4 className="text-sm font-semibold text-gray-800 mb-2 mt-4">Our Partners Include:</h4>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Runway</li>
                          <li>HeyGen</li>
                          <li>ElevenLabs</li>
                          <li>Descript</li>
                          <li>InVideo</li>
                        </ul>
                        
                        <p className="mt-4 text-gray-500 italic">Note: Purchasing through our links comes at absolutely no extra cost to you, and it helps support our independent digital research.</p>
                      </section>

                      <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Contact Us</h2>
                        <p>If you have any questions about this privacy policy, please contact us at: <a href="mailto:contact@mrsai.com" className="text-blue-600 hover:underline font-medium">contact@mrsai.com</a></p>
                      </section>
                    </div>
                  </>
                )}

                {modalType === 'terms' && (
                  <>
                    <div className="mb-8 border-b border-gray-100 pb-6">
                      <h2 className="text-3xl font-display font-bold text-gray-900 mb-2">Terms of Service</h2>
                      <p className="text-sm text-gray-500">Last Updated: June 2026</p>
                    </div>
                    
                    <div className="space-y-10 text-gray-600 text-sm leading-relaxed">
                      <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                        <p className="mb-4">By accessing and using MRSAI, you accept and agree to be bound by the terms and provision of this agreement.</p>
                        <p>If you do not agree to abide by these terms, please do not use this service or access our website.</p>
                      </section>

                      <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Use License</h2>
                        <p className="mb-4">Permission is granted to temporarily view the materials (information or software) on MRSAI's website for personal, non-commercial transitory viewing only.</p>
                        
                        <h3 className="text-base font-semibold text-gray-800 mb-2 mt-6">Restrictions</h3>
                        <p className="mb-4">Under this license you may not:</p>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                          <li>Modify or copy the materials.</li>
                          <li>Use the materials for any commercial purpose.</li>
                          <li>Attempt to decompile or reverse engineer any software.</li>
                          <li>Remove any copyright or other proprietary notations.</li>
                        </ul>
                      </section>

                      <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Disclaimer</h2>
                        <p className="mb-4">The materials on MRSAI's website are provided on an 'as is' basis. MRSAI makes no warranties, expressed or implied, and hereby disclaims all other warranties.</p>
                        <p>Further, MRSAI does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials.</p>
                      </section>

                      <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Limitations</h2>
                        <p>In no event shall MRSAI or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on MRSAI's website.</p>
                      </section>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
