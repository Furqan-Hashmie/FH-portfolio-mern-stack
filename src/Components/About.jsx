import { School, Star } from "@mui/icons-material"


const About = () => {
  return (

    <div>
      <div className="text-center mt-10">
        <h2 className="max-w-full text-3xl font-bold tracking-tight leading-none md:text-4xl xl:text-5xl dark:text-white">About <span className="text-yellow-400">me</span></h2>
      </div>
      <section className="bg-black dark:bg-gray-900 mt-4">
        <div className="grid max-w-screen-2xl px-4 py-4 mx-36 lg:mx-16 lg:gap-8 xl:gap-0 lg:py-10 lg:grid-cols-12">
        <div className=" lg:mt-0 lg:col-span-5 lg:flex me-10">
            <img src="/images/laptop.png" alt="mockup" />
          </div>
          <div className="md:mt-8 sm:mt-8 mr-auto place-self-center lg:col-span-7">
            <p className="max-w-4xl -mt-2  text-white lg:mb-8 md:text-lg lg:text-lg">I’m Furqan Hashmi from Lahore, Pakistan. I am currently pursuing a Bachelor’s degree in Information Technology at the University of Education. I am also exploring the fields of web development and digital marketing to broaden my skill set and stay updated with the latest trends in technology and online business.</p>
                   <h4 className='text-xl text-white'> Some of my interests apart from Coding :</h4>
               <div className="mt-2 text-white">

            <div><Star className='-mt-1'/> <span className='text-lg'> Listening Music</span></div>                 
                  
            <div className="mt-1"> <Star className='-mt-2'/> <span className='text-lg'> Playing Badminton </span></div>      
                   
            <div className="mt-1"> <Star className='-mt-2'/> <span className='text-lg '> Playing Cricket</span></div>
                  
            <div className="mt-1"> <Star className='-mt-2'/> <span className='text-lg'>Watching Movies</span></div>

               </div>
                
          </div>
         
        </div>
      </section>


      <hr className="my-6 border border-yellow-300 w-3/12 mx-auto" />

      <h2 id='timeline' className="text-3xl font-bold mb-8 text-center">
        MY <span className="text-yellow-400">EDUCATION</span>
    </h2>

<div className="relative">
  {/* Vertical Line */}
  <div className="absolute left-1/2 transform -translate-x-1/2 h-full  border-l-2 border-white" />
  {/* Timeline Cards */}
  <div className="space-y-12">
    {/* First Card */}
    <div className="flex items-center w-full">
      <div className="w-1/2 pr-6">
        <div className="border-2 p-6 mt-14 rounded-lg shadow-md relative  sm:ml-4 md:ml-10 lg:ml-2 xl:ml-40">
          <h4 className="text-xl font-semibold mb-2" data-aos="fade-right">Bachelor’s - Computer Science</h4>
          <p data-aos="fade-right">
            University of Education - Township
          </p>
          <span className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-yellow-400 text-black flex items-center justify-center shadow-lg"><School/></span>
        </div>
      </div>
      <div className="w-3/2 pr-16 mt-10">
        <div className="ml-16 cursor-pointer font-extrabold shadow-md p-2.5 rounded-md shadow-white flex border">
            <p>
            2023 - Continue
            </p>

          </div>
      </div>
    </div>
    {/* Second Card */}
    <div className="flex items-center w-full flex-row-reverse">
      <div className="w-2/3 pl-6">
        <div className="border-2 p-6 rounded-lg shadow-md relative sm:-ml-16 sm:mr-2 md:mr-6 lg:mr-4 xl:mr-28">
          <h4 className="text-xl font-semibold mb-2" data-aos="fade-left">ICS - Computer Science</h4>
          <p data-aos="fade-left">
            Superior College, Township.
          </p>
          <span className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-yellow-400 text-black flex items-center justify-center shadow-lg"><School/></span>
        </div>
      </div>
      <div className="w-full sm:pr-24 md:pr-52 text-center">
        <div className="sm:ml-[8rem] md:ml-[8rem] lg:ml-[18rem] cursor-pointer font-extrabold shadow-md py-2.5 rounded-md shadow-white flex border px-6 text-center">
            <p className="text-center">
            2020 - 2022
            </p>

          </div>
      </div>
    </div>
    {/* third Card */}
    <div className="flex items-center w-full">
      <div className="w-1/2 pr-6">
        <div className="border-2 p-6 mt-2 rounded-lg shadow-md relative sm:ml-4 md:ml-10 lg:ml-2 xl:ml-40">
          <h4 className="text-xl font-semibold mb-2" data-aos="fade-right">Matric - Computer Science</h4>
          <p data-aos="fade-right">
            Muabrik Science Academy
          </p>
          <span className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-yellow-400 text-black flex items-center justify-center shadow-lg"><School/></span>
        </div>
      </div>
      <div className="w-3/2 pr-20 text-right ">
        <div className="ml-14 cursor-pointer font-extrabold shadow-md py-2.5 rounded-md shadow-white flex border px-6">
            <p>
            2018 - 2020
            </p>

          </div>
      </div>
    </div>
    <br/>
    <br/>
    <br/>


  </div>
</div>

    </div>

  )
}

export default About