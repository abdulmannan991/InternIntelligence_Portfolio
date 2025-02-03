import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-[#1c1b29] text-white py-8 text-center">
    <p className="text-sm md:text-base opacity-70 mb-4">© 2025 Abdul Mannan Fazlani. All Rights Reserved.</p>
  
    <div className="flex justify-center space-x-8 mb-6">
      <a
        href="https://github.com/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xl hover:text-[#f39c12] transition-colors duration-300"
      >
        <span className="font-medium">GitHub</span>
      </a>
  
      <a
        href="https://linkedin.com/in/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xl hover:text-[#f39c12] transition-colors duration-300"
      >
        <span className="font-medium">LinkedIn</span>
      </a>
  
      <a
        href="https://twitter.com/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xl hover:text-[#f39c12] transition-colors duration-300"
      >
        <span className="font-medium">Twitter</span>
      </a>
    </div>
  
 
  </footer>
  
  )
}
