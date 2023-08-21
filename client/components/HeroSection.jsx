      import React from 'react'

      const HeroSection = () => {
            return (
                  <div><>

                        <section className="overflow-hidden bg-gray-50 dark:bg-gray-900 sm:grid sm:grid-cols-2 sm:items-center">
                              <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                                    <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                                          <h2 className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
                                                AuthDCC: The Dynamic Credential Custodian for Modern Security
                                          </h2>
                                          <p className="hidden text-gray-500 dark:text-gray-400 md:mt-4 md:block">
                                                Discover AuthDCC – your gateway to modern security solutions. Seamlessly navigate the ever-evolving realm of user authentication with our dynamic credential custodian. Immerse yourself in a cutting-edge fusion of technology and protection, ensuring your digital identity remains under an impervious lock and key. Welcome to the forefront of secure web experiences.
                                          </p>
                                          <div className="mt-4 md:mt-8">
                                                <a
                                                      href="#"
                                                      className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
                                                >
                                                      Get Started Today
                                                </a>
                                          </div>
                                    </div>
                              </div>
                              <img
                                    alt="Violin"
                                    src="/HeroSection.svg"
                                    className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
                              />
                        </section>
                  </>
                  </div>
            )
      }

      export default HeroSection