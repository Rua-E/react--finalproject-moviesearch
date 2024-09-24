import React from 'react'
import NavigationBar from './NavigationBar';
import Footer from './Footer';

const MovieSearch = () => {
  return (
    <>
   
    <div>
      <NavigationBar title="Find" className="bg-gradient-to-r from-orange-800 via-amber-500 to-yellow-300">
      </NavigationBar>
  
      <div class="flex min-h-fit w-full items-center justify-center bg-black">
    <span class="absolute mx-auto py-4 flex border w-fit bg-gradient-to-r blur-xl from-orange-800 via-amber-500 to-yellow-300 bg-clip-text text-6xl box-content font-extrabold text-transparent text-center select-none">
    Enjoy your Movie!
  </span>
    <h1
        class="relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-orange-800 via-amber-500 to-yellow-300 bg-clip-text text-6xl font-extrabold text-transparent text-center select-auto">
        Enjoy your Movie!
    </h1>
</div>
    </div>
    <Footer></Footer>
    </>
  )
}

export default MovieSearch;
