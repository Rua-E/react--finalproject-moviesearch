import React from 'react';
import { useNavigate } from "react-router-dom";

const Home = () => {
    let navigate = useNavigate();
  return (
    <div className='min-h-screen flex flex-col flex-1 '>
      <div className='Navigation__bar'>
        <div className='h-20 relative flex items-center px-0 pt-2 pb-5 text-lg font-semibold z-2 max-w-full'>
            <div className='relative flex items-center justify-between mx-0 my-auto flex-wrap z-2'>
                <img 
                    className='h-20 w-60 brightness-200  stroke-amber-800 ' 
                    src="https://thumbs.dreamstime.com/b/film-roll-vector-logo-black-cinema-movie-82866581.jpg" 
                    alt="Move Logo" />
            </div>
            <div className='flex items-end justify-around w-full text-amber-800 hover:text-white active:text-white'>
                <button 
                    className='relative flex border-2 rounded border-double border-orange-500 shadow-2xl drop-shadow-md shadow-red-900 outline outline-offset-2 outline-4 outline-deep-orange-400-accent hover:border-none hover:bg-orange-400 hover:outline-orange-800 active:bg-orange-800  active:outline-orange-400 invisible sm:visible' 
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
        
        <div transition className='visible sm:invisible max-w-56 flex-col justify-center  text-amber-900  text-lg font-bold text-center absolute left-1/2 z-10 m-5 p-5 w-screen -translate-x-1/2 px-4 translate data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in' >
                
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

      <div className='max-w-full pt-0 pr-20 pl-20 flex flex-col items-center justify-between'>
        <div className='relative flex flex-col items my-0 mx-auto max-w-full'>
            <div className='z-10 bg-white flex flex-col items-center'>
                <h1 className='text-5xl font-black max-w-3xl leading-tight text-orange-800 text-center mb-8 tracking-wider'>America's easiest place to find your movies!</h1>
                <h2 className='text-2xl font-bold leading-normal mb-2 text-orange-900 text-center'>FIND YOUR PERFECT <span className='font-bold text-amber-500'>MOVIE</span> HERE </h2>
            </div>

            <div className='max-w-full relative flex flex-col items-center justify-center' onClick={() => navigate("/Movies")}>
                <div className='max-w-max min-h-max'>
                    <img className='flex items-center align-baseline max-w-max min-h-max bottom-0 h-40 w-40 mt-10' src="https://media1.giphy.com/media/C8GzyTpmnYmuWIsZ03/giphy.gif?cid=790b76114rs43b13sqjzfph8nosmwrni9pee94fhqp45a28q&ep=v1_gifs_search&rid=giphy.gif&ct=s" alt="" />
                </div>
                <div className='flex items-center justify-center cursor-pointer w-52 rounded-full border-4 border-y-amber-500 hover:border-y-white border-x-amber-950 hover:border-x-amber-500 border-dotted outline outline-offset-2 outline-4 outline-orange-400 hover:outline-orange-800 shadow-2xl shadow-amber-600 hover:shadow-amber-600 active:shadow-white hover:bg-orange-400 active:bg-orange-800 active:outline-amber-500 focus:ring-orange-800'>
                    <button>
                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="size-8 stroke-amber-900 flex items justify-center hover:stroke-white active:stroke-white">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        </div>
                    </button>
                </div>
            </div>
        </div>
      </div>
    <footer className='mt-auto'>
        <div className='border-t-4 border-double border-amber-900 mt-1'>
            <h5 className='text-center text-xs'>
                Copyright &copy; 2024 Rua El-kasheef
            </h5>
        </div>
    </footer>
    </div>
    
  )
}

export default Home;
