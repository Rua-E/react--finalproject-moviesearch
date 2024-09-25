import React from 'react'
import NavigationBar from './NavigationBar'
import Footer from './Footer'

const MovieResults = () => {
  return (
    <div>
        <NavigationBar title="Home"></NavigationBar>
       <div className='mx-0 my-auto w-full max-w-7xl flex justify-center flex-wrap bg-black'>
          <div className='w-full flex justify-between'>
            <div className='flex items-center justify-around border-8 border-double border-amber-500 rounded-sm p-5 m-8 max-h-screen text-xl font-bold text-white w-11/12 text-center'>
              <div>

                <div className='text-white text-2xl'>
                        <span className='font-mono font-extrabold text-2xl'>Title: </span>
                        post.Title
                </div>
                <div className='text-white font-thin'>
                    <span className='font-mono'>Year: </span>
                        post.Year
                </div>
                <div className='text-white f font-thin'>
                    <span className='font-mono'>Rating: </span>
                        post.Rated
                </div>
                <div className='text-white font-thin'>
                    <span className='font-mono'>Genre: </span>
                        post.Genre
                </div>
                <div className='text-white font-thin'>
                    <span className='font-mono'>Director: </span>
                        post.Director
                </div>
                <div className='text-white font-thin'>
                    <span className='font-mono'>Language: </span>
                        post.Language
                </div>
              </div>
              <div className='text-white'>
                post.Poster
                <img className='h-50 w-50' src="https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg" alt="" />
              </div>
            {/* {posts.map(post => <>{post.Title}</>)} */}
            </div>
            
          </div>

        </div>
        <Footer></Footer>
    </div>
  )
}

export default MovieResults
