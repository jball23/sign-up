import React from 'react';

const Newsletter = () => (
  <div className="grid lg:grid-cols-2 m-auto items-center content-center gap-x-20 py-24 px-6 md:px-20 border-2 border-gray-light rounded-md bg-gray-dark max-w-screen-xl text-white">
    <div className="mb-8 lg:mb-0">
      <h3 className="text-3xl mb-2 font-semibold">Sign up for our newsletter</h3>
      <p className="text-sm">Want to hear from us when we add new components? Sign up for our newsletter and we'll email you every time we release a new batch of components.</p>
    </div>
    <form>
      <div className="mb-2 flex">
        <input className="text-gray-dark py-3 px-3 rounded-sm w-full" placeholder="your@email.com" name="email" />
        <input className="bg-gold py-3 px-7 ml-3 rounded-md text-gray-dark" type="submit" value="Subscribe" />
      </div>
      <label className="text-xs">Enter your email to make the internet better.</label>
    </form>
  </div>
)

export default Newsletter