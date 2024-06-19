import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGithub } from "react-icons/fa"
import { TbBrandJavascript } from "react-icons/tb"
import { SiMongodb, SiRedux, SiExpress, SiBootstrap, SiNetlify, SiTailwindcss } from "react-icons/si"

export default function skill() {
  return (
    <div>
      <div className="text-center mt-10">
        <h1 className="text-6xl sm:text-5xl font-bold">My<span className="text-yellow-500 ml-4">Skills</span> </h1>
      </div>

      <div className="mt-24">
        <div className=" justify-center flex gap-x-20 sm:gap-x-7 md:gap-x-20 lg:gap-x-20 list-none my-10 text-yellow-500">
          <li className="">
            <FaHtml5 size={80} />
            <h5 className="ml-5"> HTML5</h5>
          </li>

          <li className="">
            <FaCss3Alt size={80} />
            <h5 className="ml-5"> CSS3</h5>
          </li>

          <li className="">
            <SiBootstrap size={80} />
            <h5>Bootstrap</h5>
          </li>

          <li className="">
            <TbBrandJavascript size={80} />
            <h5> JavaScript</h5>
          </li>

          <li className="">
            <SiTailwindcss size={80} />
            <h5> Tailwind Css</h5>
          </li>

          <li className="">
            <FaReact size={80} />
            <h5 className="ml-5"> React</h5>
          </li>
        </div>

        <div className="flex justify-center list-none gap-x-20 sm:gap-x-7 md:gap-x-20 lg:gap-x-20 my-10 text-yellow-500">
          <li className="">
            <SiMongodb size={80} />
            <h5>MongoDB</h5>
          </li>

          <li className="">
            <SiRedux size={80} />
            <h5 className="ml-5">Redux</h5>
          </li>

          <li className="">
            <SiExpress size={80} />
            <h5 className="ml-5">Express</h5>
          </li>


          <li className="">
            <FaNodeJs size={80} />
            <h5 className="ml-3">NodeJs</h5>
          </li>



          <li className="">
            <FaGithub size={80} />
            <h5 className="ml-4">GitHub</h5>
          </li>

          <li className="">
            <SiNetlify size={80} />
            <h5 className="ml-3">Netlify</h5>
          </li>
        </div>
      </div>
    </div>




  );
}