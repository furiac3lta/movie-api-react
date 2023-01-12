import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
        <footer className="flex pt-10 h-30 mt-10 bg-gray-300 rounded-lg shadow md:pb-6       
                        md:items-center md:justify-center
                        xs:items-center xs:justify-center
                        lg:items-center lg:justify-center
                        xl:items-center xl:justify-center
                        2xl:items-center 2xl:justify-center
                       ">
  <div className=''>
  <span className="text-sm text-dark-500 sm:text-center dark:text-white-400">
    © 2022{" "}
    <Link to='/' className="hover:underline">
      TMDB™
    </Link>
    . All Rights Reserved.
  </span>
  </div>
  <div className=''>
  
  </div>
</footer>

    </>
  )
}

export default Footer
