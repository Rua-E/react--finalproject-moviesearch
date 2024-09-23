import React from 'react';
import { useNavigate } from "react-router-dom";

const Home = () => {
    let navigate = useNavigate();
  return (
    <div className='min-h-screen flex flex-col'>
      <div className='Navigation__bar'>
        <div className='h-40 relative flex items-center px-0 py-50 text-lg font-semibold mb-10 z-2 max-w-full'>
            <div className='relative flex items-center justify-between mx-0 my-auto flex-wrap z-2'>
                <img 
                    className='h-20 w-60 brightness-200  stroke-amber-800 ' 
                    src="https://thumbs.dreamstime.com/b/film-roll-vector-logo-black-cinema-movie-82866581.jpg" 
                    alt="Move Logo" />
            </div>
            <div className='flex items-center justify-around w-full text-amber-800 hover:text-black active:text-white'>
                <button 
                    className='relative flex border-2 rounded border-double border-orange-500 shadow-2xl drop-shadow-md shadow-red-900 outline outline-offset-2 outline-4 outline-deep-orange-400-accent hover:border-none hover:bg-green-600 hover:outline-black active:bg-green-800 focus:outline-none focus:ring focus:ring-green-300 invisible sm:visible' 
                    onClick={() => navigate("/Movies")} 
                >Find Your Movie Here!
                </button>
            </div>
        </div>
        <div className='flex items-center justify-center ml-9' >
                    <button className='inline-flex items-center gap-x-1 text-sm font-semibold leading-6 stroke-amber-800'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" 
                            className='size-20 visible sm:invisible m-auto'
                            aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
                        </svg>

                    </button>
                </div> 
        <div transition className='max-w-56 flex-col justify-center  text-amber-900  text-lg font-bold text-center absolute left-1/2 z-10 m-5 p-5 w-screen -translate-x-1/2 px-4 translate data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in' >
                
            <div className='mb-10 flex-auto overflow-hidden border-8 border-amber-900 rounded-3xl leading-6 shadow-lg ring-1 ring-amber-900'>
                <div className='p-4 '>
                    Home
                </div>
            </div>
            <div className='flex-auto overflow-hidden border-8 border-amber-900 rounded-3xl leading-6 shadow-lg ring-1 ring-amber-900'>
                <div className='p-4'>
                    Search Movies Here!
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
