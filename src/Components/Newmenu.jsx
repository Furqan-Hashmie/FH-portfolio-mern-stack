import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Newmenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <nav className=" border-gray-200 bg-black pt-2">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
     <Link to="/">
     <button className="sm:ml-2 md:ml-5 lg:ml-0 xl:-ml-2 cursor-pointer font-extrabold shadow-md p-2 rounded-md shadow-white flex border">
                    <p className='text-white'>
                      FH DEVELOPER
                    </p>
                  </button>
     </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded={menuOpen}
            onClick={handleToggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className={`${menuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
          <ul className=" mt-6 mb-4 xl:mr-0 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-2 xl:gap-6">
              <nav
                as="li"
                variant="small"
                color="white"
                className="px-3.5 font-extrabold text-md"
              >
                <Link to="/" className="flex items-center relative group">
                  <span className="relative flex group-hover:text-yellow-400">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 me-2 mb-1">
                      <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                      <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                    </svg>
                    Home
                    <span className="absolute -bottom-1  left-0 w-full h-0.5 bg-yellow-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100  "></span>
                  </span>
                </Link>
              </nav>
              <nav
                as="li"
                variant="small"
                color="white"
                className="px-3.5 font-extrabold text-md"
              >
                <Link to="/about" className="flex items-start relative group">
                  <span className="relative flex group-hover:text-yellow-400">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-6 me-2 mb-1">
                      <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
                    </svg>
                    About me
                    <span className="absolute -bottom-1  left-0 w-full h-0.5 bg-yellow-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 "></span>
                  </span>
                </Link>
              </nav>
              <nav
                as="li"
                variant="small"
                color="white"
                className="px-3.5 font-extrabold text-md"
              >
                <Link to="/contact" className="flex items-start relative group">
                  <span className="relative flex group-hover:text-yellow-400">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-5 me-1 mb-1 mt-0.5">
                      <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                    </svg>
                    Contact me
                    <span className="absolute -bottom-1  left-0 w-full h-0.5 bg-yellow-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 "></span>
                  </span>
                </Link>
              </nav>
        
              <nav
                as="li"
                variant="small"
                color="white"
                className="px-3.5 font-extrabold text-md"
              >
                <Link to="/project" className="flex items-center relative group">
                  <span className="relative flex group-hover:text-yellow-400">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-5 me-1 mb-1  mt-0.5">
                      <path fillRule="evenodd" d="M2.25 5.25a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3V15a3 3 0 0 1-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 0 1-.53 1.28h-9a.75.75 0 0 1-.53-1.28l.621-.622a2.25 2.25 0 0 0 .659-1.59V18h-3a3 3 0 0 1-3-3V5.25Zm1.5 0v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5Z" clipRule="evenodd" />
                    </svg>
                    Projects
                    <span className="absolute -bottom-1  left-0 w-full h-0.5 bg-yellow-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 "></span>
                  </span>
                </Link>
              </nav>
              <nav
                as="li"
                variant="small"
                color="white"
                className="px-3.5 font-extrabold text-md"
              >
                <Link to="/skill" className="flex items-center  relative group">
                  <span className="relative flex group-hover:text-yellow-400">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-6 me-1 mb-1">
                      <path fillRule="evenodd" d="M12 6.75a5.25 5.25 0 0 1 6.775-5.025.75.75 0 0 1 .313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 0 1 1.248.313 5.25 5.25 0 0 1-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 1 1 2.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0 1 12 6.75ZM4.117 19.125a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z" clipRule="evenodd" />
                      <path d="m10.076 8.64-2.201-2.2V4.874a.75.75 0 0 0-.364-.643l-3.75-2.25a.75.75 0 0 0-.916.113l-.75.75a.75.75 0 0 0-.113.916l2.25 3.75a.75.75 0 0 0 .643.364h1.564l2.062 2.062 1.575-1.297Z" />
                      <path fillRule="evenodd" d="m12.556 17.329 4.183 4.182a3.375 3.375 0 0 0 4.773-4.773l-3.306-3.305a6.803 6.803 0 0 1-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 0 0-.167.063l-3.086 3.748Zm3.414-1.36a.75.75 0 0 1 1.06 0l1.875 1.876a.75.75 0 1 1-1.06 1.06L15.97 17.03a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
        
        
                    Skills
                    <span className="absolute -bottom-1  left-0 w-full h-0.5 bg-yellow-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 "></span>
                  </span>
                </Link>
              </nav>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Newmenu;
