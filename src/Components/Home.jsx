import { Facebook, GitHub, LinkedIn, WhatsApp } from "@mui/icons-material"
import { Link } from "react-router-dom"
import TypewriterComponent from "typewriter-effect"

const Home = () => {
  return (
    <div className="text-center sm:ml-0 md:ml-24 lg:ml-0 xl:ml-0">
      <div className="container text-center mt-16 ">
        <h1 className="sm:text-4xl md:text-4xl lg:text-5xl font-bold text-2xl"> Hello, I am <span className="text-yellow-500">Furqan Hashmi</span> </h1>
        <h2 className="lg:text-3xl xl:text-3xl md:text-3xl sm:text-2xl text-xl my-8 font-semibold ">
          <TypewriterComponent options={{
            strings: ["A Mern Stack Developer", "An Expert Digital Marketer", "Curious to Learn new Things"],
            autoStart: true, loop: true, deleteSpeed: 30
          }} />
        </h2>
        <p className="px-4 sm:px-8 md:px-24 text-base sm:text-lg leading-relaxed">My journey in the industry has equipped me with
          a deep understanding of MERN stack technologies, including
          MongoDB, Express Js, React Js, and Node Js. Additionally, I
          am proficient in languages such as HTML, CSS, and
          JavaScript, and frameworks like Bootstrap and Tailwind CSS.
          I develop a seamless experience across various devices and
          platforms. Familiarity with version control systems,
          especially Git.Experience as a Web
          Developer showcasing diverse projects.
          Excellent collaboration and communication skills to
          work effectively with designers and back-end developer</p>


        <hr className="my-6 border border-yellow-500 w-3/12 mx-auto" />

        <div className="mt-6">
          <Link to="https://github.com/Furqan-Hashmie" target="_blank" rel="noopener noreferrer" className="me-4  hover:text-gray-400"><GitHub /></Link>
          <Link to="https://www.linkedin.com/in/furqan-hashmi/" target="_blank" rel="noopener noreferrer" className="me-4 hover:text-blue-600"><LinkedIn /></Link>
          <Link to="https://wa.me/923134122910" target="_blank" rel="noopener noreferrer" className="me-4 hover:text-green-600"><WhatsApp /></Link>
          <Link to="https://www.facebook.com/profile.php?id=61555283755021" target="_blank" rel="noopener noreferrer" className="me-4 hover:text-blue-700"><Facebook />
          </Link>
        </div>
        <div className="flex-row ">
        <Link to="https://drive.google.com/file/d/1fqNw7BYRmv0Ud3iLWUYVF6_muTCYxEtk/view" target="_blank">
          <button className="my-10 overflow-hidden relative w-32 p-1 h-10 bg-white text-black border-none rounded-md text-xl font-bold cursor-pointer z-10 group me-5">
            Resume
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left" />
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-yellow-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left" />
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-yellow-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left" />
            <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-1.5 left-6 z-10">Explore!</span>
          </button>
        </Link>
        <Link to="https://drive.google.com/file/d/1AQehjHN6FK6LqOL_2z-ocp2873jly5D0/view" target="_blank">
          <button className="my-10 overflow-hidden relative w-32 p-1 h-10 bg-white text-black border-none rounded-md text-xl font-bold cursor-pointer  z-10 group">
            Certificate
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left" />
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-yellow-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left" />
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-yellow-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left" />
            <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-1.5 left-6 z-10">Explore!</span>
          </button>
        </Link>
        </div>


      </div>
    </div>
  )
}

export default Home