import { FaReact, FaNode } from "react-icons/fa"
import { SiBootstrap, SiCss3, SiExpress, SiHtml5, SiMongodb, SiTailwindcss } from "react-icons/si"
import { IoLogoJavascript } from "react-icons/io"
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

export function Project() {
  return (
    <div>
<div className="text-center mt-10">
<h1 className="text-6xl sm:text-5xl font-bold">My<span className="text-yellow-500 ml-4">Projects</span> </h1>
</div>   
   <div className="mt-24">
    {/* first card */}
    <Card className="sm:mx-4 md:mx-8 lg:mx-16 flex-row sm:flex-col md:flex-col lg:flex-row xl:flex-row bg-gray-300 border-2  p-3 shadow-md shadow-teal-700">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-[55%] sm:ml-28 md:ml-48 lg:ml-0 xl:ml-0 shrink-0 rounded-r-2xl bg-gray-300"
        >
          <div className="rounded-xl">
            <Splide options={{ rewind: true, gap: '1rem', heightRatio: .53 }} aria-label="React Splide Example">
              <SplideSlide>
                <img src="/images/j.topimg.PNG" className="h-full rounded-xl" />
              </SplideSlide>
              <SplideSlide>
                <img src="/images/footer j..PNG" className="rounded-xl h-full" />
              </SplideSlide>
              <SplideSlide>
                <img src="/images/new arival.PNG" className="rounded-xl" />
              </SplideSlide>
            </Splide>
          </div>

        </CardHeader>
        <CardBody className="text-black mt-2 sm:text-center md:text-center lg:text-start xl:text-start">
          <Typography variant="h6" color="gray" className="mb-4 uppercase text-black font-bold text-2xl ">
            Ecommerce Website
          </Typography>
          <Typography variant="h4" color="blue-gray" className="mb-2 text-black text-xl">
            Developed a fully functional e-commerce website, utilizing the
            MERN Stack. Implemented user authentication using JWT, product
            search, and filtering, shopping cart functionality, and product-
            adding form.
          </Typography>

          <div className="my-4 sm:ml-20 md:ml-60 lg:ml-0 xl:ml-0">
            <ul>
              <li className='flex gap-x-4'>
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
          </div>
          <div className="">
            <a href="#" className="inline-block">
              <Button variant="text" className="h-11 flex items-center text-white bg-black me-2 hover:text-yellow-400">
                Watch Live
              </Button>
            </a>

            <a href="#" className="inline-block">
              <Button variant="text" className="h-11 flex items-center gap-2 text-white bg-black hover:text-yellow-400">
                View Code
              </Button>
            </a>
          </div>
        </CardBody>
      </Card>
      {/* second card */}
      <Card className="sm:mx-4 md:mx-8 lg:mx-16  sm:flex-col md:flex-col lg:flex-row xl:flex-row flex-row bg-gray-300 border-2 mt-10 p-3 shadow-md shadow-teal-700">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-[55%] sm:ml-32 md:ml-48 lg:ml-0 xl:ml-0  shrink-0 rounded-r-2xl bg-gray-300"
        >
          <div className="rounded-xl">
            <Splide options={{ rewind: true, gap: '1rem', heightRatio: .53 }} aria-label="React Splide Example">
              <SplideSlide>
                <img src="/images/pny main.PNG" className="h-full rounded-xl" />
              </SplideSlide>
              <SplideSlide>
                <img src="/images/about pny.PNG" className="rounded-xl h-full" />
              </SplideSlide>
              <SplideSlide>
                <img src="/images/marketing pny.PNG" className="rounded-xl" />
              </SplideSlide>
            </Splide>
          </div>

        </CardHeader>
        <CardBody className="text-black mt-2 sm:text-center md:text-center lg:text-start xl:text-start">
          <Typography variant="h6" color="gray" className="mb-4 uppercase text-black font-bold text-2xl">
            Training Institute Website
          </Typography>
          <Typography variant="h4" color="blue-gray" className="mb-2 text-black text-xl">
            Designed and built a website of a training institute, using
            React.Created pages for courses, like Kids , Female , About Us and Admission info to provide a complete overview of the institute. Develop a login/Signup form with handling and validation.

          </Typography>

          <div className="my-4 ml-7">
            <ul>
              <li className='flex gap-x-4  sm:ml-32 md:ml-[17rem] lg:ml-0 xl:ml-0'>
                <SiHtml5 size={29} />
                <SiCss3 size={29} />
                <IoLogoJavascript size={30} />
                <FaReact size={31} />
                <SiBootstrap size={33} />

              </li>
            </ul>
          </div>
          <div>
            <a href="#" className="inline-block">
              <Button variant="text" className="h-11 flex items-center text-white bg-black me-2 hover:text-yellow-400">
                Watch Live
              </Button>
            </a>

            <a href="#" className="inline-block">
              <Button variant="text" className="h-11 flex items-center gap-2 text-white bg-black hover:text-yellow-400">
                View Code
              </Button>
            </a>
          </div>
        </CardBody>
      </Card>
      {/* third card */}
      <Card className="sm:mx-4 md:mx-8 lg:mx-16  sm:flex-col md:flex-col lg:flex-row xl:flex-row  flex-row bg-gray-300 border-2 mt-10 p-3 shadow-md shadow-teal-700">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-[55%] sm:ml-32 md:ml-48 lg:ml-0 xl:ml-0 shrink-0 rounded-r-2xl bg-gray-300"
        >
          <div className="rounded-xl">
            <Splide options={{ rewind: true, gap: '1rem', heightRatio: .53 }} aria-label="React Splide Example">
              <SplideSlide>
                <img src="/images/port-home.PNG" className="h-full rounded-xl" />
              </SplideSlide>
              <SplideSlide>
                <img src="/images/about-port.PNG" className="rounded-xl h-full" />
              </SplideSlide>
              <SplideSlide>
                <img src="/images/portfolio skills.PNG" className="rounded-xl" />
              </SplideSlide>
            </Splide>
          </div>

        </CardHeader>
        <CardBody className="text-black -mt-5 sm:text-center md:text-center lg:text-start xl:text-start">
          <Typography variant="h6" color="gray" className="mb-4 uppercase text-black font-bold text-2xl">
            Portfolio Website
          </Typography>
          <Typography variant="h4" color="blue-gray" className="mb-2 text-black text-xl">
          Constructed a personal portfolio website using React to showcase my skills and projects. Developed an interactive platform with an About Me , Skills and Services Page showcasing my background and expertise, a Projects section detailing my work.
          </Typography>

          <div className="my-4 ml-7">
            <ul>
              <li className='flex gap-x-4 sm:ml-32 md:ml-[17rem] lg:ml-0 xl:ml-0'>
                <SiHtml5 size={29} />
                <SiCss3 size={29} />
                <IoLogoJavascript size={30} />
                <FaReact size={31} />
                <SiBootstrap size={33} />

              </li>
            </ul>
          </div>
          <div className="">
            <a href="#" className="inline-block">
              <Button variant="text" className="h-11 flex items-center text-white bg-black me-2 hover:text-yellow-400">
                Watch Live
              </Button>
            </a>

            <a href="#" className="inline-block">
              <Button variant="text" className="h-11 flex items-center gap-2 text-white bg-black hover:text-yellow-400">
                View Code
              </Button>
            </a>
          </div>
        </CardBody>
      </Card>
   </div>
    </div>
  );
}