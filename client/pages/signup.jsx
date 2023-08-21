import React from 'react'
import Nav from '@/components/Nav'
import SignupForm from '@/components/SignupForm'

const signup = () => {
      return (
            <>
                  <Nav />
                  <div className='flex justify-evenly bg-gray-900'>
                        <img className='w-2/5 h-2/5 my-auto' src="https://blush.design/api/download?shareUri=2YuZQBoPZ&w=800&h=800&fm=png" alt="" />
                        <SignupForm />
                  </div>
            </>
      )
}

export default signup