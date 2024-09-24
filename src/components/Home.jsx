import React from 'react';
import { useNavigate } from "react-router-dom";
import NavigationBar from './NavigationBar';
import Footer from './Footer';

const Home = () => {
    let navigate = useNavigate();
  return (
    <div className='min-h-screen flex flex-col flex-1 '>
     <NavigationBar title="Home">
     </NavigationBar>

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
    <Footer></Footer>
    </div>
    
  )
}

export default Home;
