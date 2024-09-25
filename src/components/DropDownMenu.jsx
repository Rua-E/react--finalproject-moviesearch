import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function DropDownMenu() {
const [isOpen, setIsOpen] = useState(false)

return (
  <div>
    <div
          className='flex flex-col items-center justify-center relative select-none' >
          <button 
              onClick={() => setIsOpen((prev) => !prev)}
              className='inline-flex flex-col items-center gap-x-1 text-sm font-semibold leading-6 stroke-amber-800 hover:stroke-black active:stroke-yellow-50'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
          {!isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" 
                  className='size-20 visible sm:invisible m-auto ease-in-out duration-300'
                  >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
              </svg>
          ) :  (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" 
                      className='size-15 visible sm:invisible m-auto rotate-180 ease-in-out duration-300 '
                      >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
              </svg>
          )}
          </button>

          {isOpen && (
              <div 
              className='px-12  visible sm:invisible rounded-2xl h-fit outline-double outline-yellow-600 outline-8 border-black border-4 border-double bg-yellow-400 pb-auto m-y-20  text-amber-900  text-lg font-bold text-center z-10 min-w-auto flex flex-col' >  
                      <Link to="/">
                      <button className='cursor-pointer my-10 max-h-14 flex-auto overflow-hidden w-56 border-8 border-amber-900 rounded-3xl leading-6 shadow-lg ring-1 ring-amber-900'>
                          <div className='p-2'>
                              Home
                          </div>
                      </button>
                      </Link>
                      
                      <Link to="/Movies">
                      <button className='cursor-pointer mb-10 max-h-14 flex-auto overflow-hidden w-56 border-8 border-amber-900 rounded-3xl leading-6 shadow-lg ring-1 ring-amber-900'>
                          <div className='p-2'>
                              Search Movies Here!
                          </div>
                      </button>
                      </Link>
                  </div> 
          )}
      </div> 
  </div>
);
}



export default DropDownMenu;
