import React from 'react';
import Nav from '@/components/Nav';
import LoginForm from '@/components/LoginForm';

const Login = () => {
      return (
            <>
                  <Nav />
                  <div className='flex justify-evenly bg-gray-900'>
                        <LoginForm />
                        <img className='w-2/6 h-2/6 my-auto mx-28' src="/Mobile inbox-pana.svg" alt="" />
                  </div>
            </>
      );
}

export default Login;
