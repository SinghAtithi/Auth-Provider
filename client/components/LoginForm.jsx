import React, { useState } from 'react';

const Login = () => {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [confirmPassword, setConfirmPassword] = useState('');
      const [passwordsMatch, setPasswordsMatch] = useState(true);

      const handlePasswordChange = (e) => {
            setPassword(e.target.value);
            setPasswordsMatch(e.target.value === confirmPassword);
      };

      const handleConfirmPasswordChange = (e) => {
            setConfirmPassword(e.target.value);
            setPasswordsMatch(e.target.value === password);
      };

      const handleSubmit = (e) => {
            e.preventDefault();
            if (password === confirmPassword) {
                  // Perform the signup logic here
            } else {
                  // Handle password mismatch error

            }
      };

      return (
            <>

                  <section className="bg-gray-50 dark:bg-gray-900 w-4/5">
                        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                              <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                                    <img className='w-12 h-12 mx-2' src="https://dccnita.tech/static/media/logo.4277b22420a908e2d017.png" alt="" />
                                    AuthDCC
                              </a>
                              <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                                Log On To Your Account
                                          </h1>
                                          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                                                <div>
                                                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                                      <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                                                </div>
                                                <div>
                                                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                                      <input type="password" name="password" id="password" value={password} onChange={handlePasswordChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="••••••••" required />
                                                </div>
                                                
                                                <button type="submit" className="w-full btn btn-outline btn-success">Log In</button>
                                               
                                          </form>
                                    </div>
                              </div>
                        </div>
                  </section>

            </>
      );
};

export default Login;
