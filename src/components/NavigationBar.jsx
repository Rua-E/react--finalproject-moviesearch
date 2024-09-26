import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import DropDownMenu from './DropDownMenu';

const NavigationBar = ({ title }) => {
    let navigate = useNavigate();

  return (
      <>
    
       <div className='Navigation__bar bg-gradient-to-r from-orange-800 via-amber-500 to-yellow-300'>
        <div className='h-20 relative flex flex-col items-center px-0 pt-2 pb-5 text-lg font-semibold z-2 max-w-full'>
            <div className='relative flex items-center justify-between mx-0 my-auto flex-wrap z-2'>
                <img 
                    className='h-20 w-60 stroke-black ' 
                    src="https://static.vecteezy.com/system/resources/thumbnails/023/608/676/small_2x/movie-film-frame-png.png" 
                    alt="Move Logo" />
            </div>
            {title === "Home" ? ( 
                <button 
                    onClick={() => navigate("/Movies")}
                    className='z-10 flex items-center justify-center w-full text-amber-800 hover:text-white active:text-white'>
                    <div 
                        className='z-10 text-xs relative flex border-2 mt-10 rounded border-double border-orange-500 shadow-2xl drop-shadow-md shadow-red-900 outline outline-offset-2 outline-4 outline-deep-orange-400-accent hover:border-none hover:bg-none hover:outline-orange-800 active:bg-orange-800  active:outline-orange-400 invisible sm:visible' 
                        title="Find"
                        >--- Find Your Movie Here! ---
                    </div>
                </button>
            ) : ( 
                <button 
                    onClick={() => navigate("/", console.log("Going Home"))} 
                    className='z-10 flex items-center justify-center w-full text-amber-800 hover:text-white active:text-white'>
                    <div 
                        className='z-10 text-xs relative flex border-2 mt-10 rounded border-double border-orange-500 shadow-2xl drop-shadow-md shadow-red-900 outline outline-offset-2 outline-4 outline-deep-orange-400-accent hover:border-none hover:bg-none hover:outline-orange-800 active:bg-orange-800  active:outline-orange-400 invisible sm:visible' 
                        title="Home"
                        >     --- Home ---     
                    </div>
                </button>
                )}
        </div>
        <div>
            <DropDownMenu></DropDownMenu>
        </div>
            <div className='border-t-4 border-double border-amber-900'></div>
      </div>

    </>
  )
}

export default NavigationBar;
