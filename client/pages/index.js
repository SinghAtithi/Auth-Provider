import React from 'react'
import Nav from '../components/Nav'
import HeroSection from '@/components/HeroSection'

const index = () => {
  return (
    <div><Nav />
      <div className='flex justify-evenly bg-gray-900'>
        <HeroSection />
      </div>
    </div>
  )
}

export default index