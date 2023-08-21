import React from 'react'

const Nav = () => {
      return (
            <div className="navbar bg-base-100 flex justify-between">
                  <a href='/' className="btn btn-ghost normal-case text-xl">Auth-DCC</a>
                  <div>
                        <a href='/login'  className="btn btn-outline btn-success mx-2">Login</a>
                        <a href='/signup' className="btn btn-outline btn-error mx-2">Signup</a>
                  </div>
            </div>
      )
}

export default Nav