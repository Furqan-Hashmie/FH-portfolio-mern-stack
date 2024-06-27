import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { FaReact, FaNode } from "react-icons/fa"
import { SiBootstrap, SiCss3, SiExpress, SiHtml5, SiMongodb, SiTailwindcss } from "react-icons/si"
import { IoLogoJavascript } from "react-icons/io"
import React from 'react';
import { Link } from 'react-router-dom';
const Myproject = () => {
  return (
    <div>
      <div className="text-center mt-10">
        <h1 className="sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-4xl">My<span className="text-yellow-500 ml-4">Projects</span> </h1>
      </div>
      <section className="text-white body-font mt-16">
        <div className="container mx-auto flex py-10 px-5 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <div className="rounded-xl border-2 border-white">
              <Splide options={{ rewind: true, gap: '1rem', heightRatio: 0.53, type: 'loop', perPage: 1 }} aria-label="React Splide Example">
                <SplideSlide>
                  <img src="/images/j.topimg.PNG" className="rounded-xl w-full" alt="img" />
                </SplideSlide>
                <SplideSlide>
                  <img src="/images/footer j..PNG" className="rounded-xl w-full" alt="img" />
                </SplideSlide>
                <SplideSlide>
                  <img src="/images/new arival.PNG" className="rounded-xl w-full" alt="img" />
                </SplideSlide>
              </Splide>
            </div>
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-12 md:pl-16 xl:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-yellow-400">Ecommerce Website</h1>
            <p className="mb-2 leading-relaxed">Developed a fully functional e-commerce website, utilizing the
              MERN Stack. Implemented user authentication using JWT, product
              search, and filtering, shopping cart functionality, and product-adding form.</p>

            <ul className='my-4'>
              <li className='flex gap-x-4 text-teal-400 cursor-pointer'>
                <SiHtml5 size={29} />
                <SiCss3 size={29} />
                <IoLogoJavascript size={30} />
                <SiTailwindcss size={30} />
                <FaReact size={31} />
                <FaNode size={35} />
                <SiMongodb size={33} />
                <SiExpress size={33} />
              </li>
            </ul>

            <div className="flex justify-center">
            <Link to="https://github.com/Furqan-Hashmie/J.-website-frontend-" target='_blank'>
            <button type="button" class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-4 mb-2">Watch Code</button>
            </Link>
              <button type="button" class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Watch Live</button>
            </div>
          </div>
        </div>
      </section>
      <hr className="border border-yellow-400 w-3/6 mx-auto my-16" />

      <section className="text-white body-font mt-16">
        <div className="container mx-auto flex py-10 px-5 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <div className="rounded-xl border-2 border-white">
              <Splide options={{ rewind: true, gap: '1rem', heightRatio: .53 }} aria-label="React Splide Example">
                <SplideSlide>
                  <img src="/images/pny main.PNG" className="h-full rounded-xl" alt='' />
                </SplideSlide>
                <SplideSlide>
                  <img src="/images/about pny.PNG" className="rounded-xl h-full" alt='' />
                </SplideSlide>
                <SplideSlide>
                  <img src="/images/marketing pny.PNG" className="rounded-xl" alt='' />
                </SplideSlide>
              </Splide>
            </div>
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-12 md:pl-16 xl:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-yellow-400">Training Institute Website</h1>
            <p className="mb-2 leading-relaxed"> Designed and built a website of a training institute, using
              React.Created pages for courses, like Kids , Female , About Us and Admission info to provide a complete overview of the institute. Develop a login/Signup form with handling and validation.</p>

            <ul className='my-4'>
              <li className='flex gap-x-4 text-teal-400 cursor-pointer'>
                <SiHtml5 size={29} />
                <SiCss3 size={29} />
                <IoLogoJavascript size={30} />
                <FaReact size={31} />
                <SiBootstrap size={33} />
              </li>
            </ul>

            <div className="flex justify-center">
              <Link to="https://github.com/Furqan-Hashmie/Pny-website-clone" target="_blank" rel="noopener noreferrer">
                <button type="button" class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-4 mb-2">Watch Code</button>
              </Link>
              <Link to="https://training-institute-website.vercel.app/" target="_blank" rel="noopener noreferrer">
                <button type="button" class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl   focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Watch Live</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <hr className="my-16 border border-yellow-400 w-3/6 mx-auto" />
      <section className="text-white body-font mt-16">
        <div className="container mx-auto flex py-10 px-5 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <div className="rounded-xl border-2 border-white">
              <Splide options={{ rewind: true, gap: '1rem', heightRatio: .53 }} aria-label="React Splide Example">
                <SplideSlide>
                  <img src="/images/port-home.PNG" className="h-full rounded-xl" alt='' />
                </SplideSlide>
                <SplideSlide>
                  <img src="/images/about-port.PNG" className="rounded-xl h-full" alt='' />
                </SplideSlide>
                <SplideSlide>
                  <img src="/images/portfolio skills.PNG" className="rounded-xl" alt='' />
                </SplideSlide>
              </Splide>
            </div>
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-12 md:pl-16 xl:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-yellow-400">Portfolio Website</h1>
            <p className="mb-2 leading-relaxed"> Constructed a personal portfolio website using React to showcase my skills and projects. Developed an interactive platform with an About Me , Skills and Services Page showcasing my background and expertise, a Projects section detailing my work.</p>

            <ul className='my-4'>
              <li className='flex gap-x-4 text-teal-400 cursor-pointer'>
                <SiHtml5 size={29} />
                <SiCss3 size={29} />
                <IoLogoJavascript size={30} />
                <FaReact size={31} />
                <SiBootstrap size={33} />
              </li>
            </ul>

            <div className="flex justify-center">
              <Link to="https://github.com/Furqan-Hashmie/Portfolio-website" target="_blank" rel="noopener noreferrer">
                <button type="button" class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-4 mb-2">Watch Code</button>
              </Link>

              <Link to="https://portfolio-website-red-six-29.vercel.app/" target="_blank" rel="noopener noreferrer">
                <button type="button" class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Watch Live</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Myproject;
