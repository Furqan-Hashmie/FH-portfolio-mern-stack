import { FaHtml5, FaCss3Alt, FaReact, FaGithub, FaBootstrap, FaNode, FaGitAlt } from "react-icons/fa"
import { TbBrandJavascript } from "react-icons/tb"
import { SiMongodb, SiRedux, SiExpress, SiTailwindcss } from "react-icons/si"

export default function skill() {
  return (
    <div>
      <div className="text-center mt-10">
        <h1 className="sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-4xl">My<span className="text-yellow-500 ml-4">Skills</span> </h1>
      </div>

      <section className="w-screen mt-20">
  <div className="grid grid-cols-1 grid-rows-2 gap-6 mx-auto text-center sm:grid-cols-2 md:max-w-screen-lg md:grid-cols-4 md:px-0 text-white mb-20 ">
    <div className="flex aspect-square flex-col items-center justify-center space-y-3 bg-black border rounded-2xl border-white shadow-md shadow-blue-100 p-2">
      <div className="text-yellow-500">
        {/* fet:flag */}
   <FaHtml5 size={80}/>
      </div>
      <h3 className="text-xl font-semibold text-yellow-500">HTML5</h3>
    </div>
    <div className="flex aspect-square flex-col items-center justify-center space-y-3 bg-black border rounded-2xl border-white shadow-md shadow-blue-100 p-2">
      <div className="text-yellow-500">
        {/* fet:flag */}
   <FaCss3Alt size={80}/>
      </div>
      <h3 className="text-xl font-semibold text-yellow-500">CSS3</h3>
    </div>
    
    <div className="flex aspect-square flex-col items-center justify-center space-y-3 bg-black border rounded-2xl border-white shadow-md shadow-blue-100 p-2">
      <div className="text-yellow-500">
        {/* fet:flag */}
   <TbBrandJavascript size={80}/>
      </div>
      <h3 className="text-xl font-semibold text-yellow-500">JavaScript</h3>
    </div>

    <div className="flex aspect-square flex-col items-center justify-center space-y-3 bg-black border rounded-2xl border-white shadow-md shadow-blue-100 p-2">
      <div className="text-yellow-500">
        {/* fet:flag */}
   <FaBootstrap size={80}/>
      </div>
      <h3 className="text-xl font-semibold text-yellow-500">Bootstrap</h3>
    </div>

    <div className="flex aspect-square flex-col items-center justify-center space-y-3 bg-black border rounded-2xl border-white shadow-md shadow-blue-100 p-2">
      <div className="text-yellow-500">
        {/* fet:flag */}
   <SiMongodb size={80}/>
      </div>
      <h3 className="text-xl font-semibold text-yellow-500">MongoDB</h3>
    </div>

    <div className="flex aspect-square flex-col items-center justify-center space-y-3 bg-black border rounded-2xl border-white shadow-md shadow-blue-100 p-2">
      <div className="text-yellow-500">
        {/* fet:flag */}
   <SiExpress size={80}/>
      </div>
      <h3 className="text-xl font-semibold text-yellow-500">Express</h3>
    </div>

    <div className="flex aspect-square flex-col items-center justify-center space-y-3 bg-black border rounded-2xl border-white shadow-md shadow-blue-100 p-2">
      <div className="text-yellow-500">
        {/* fet:flag */}
   <FaReact size={80}/>
      </div>
      <h3 className="text-xl font-semibold text-yellow-500">React</h3>
    </div>

    <div className="flex aspect-square flex-col items-center justify-center space-y-3 bg-black border rounded-2xl border-white shadow-md shadow-blue-100 p-2">
      <div className="text-yellow-500">
        {/* fet:flag */}
   <FaNode size={80}/>
      </div>
      <h3 className="text-xl font-semibold text-yellow-500">Node js</h3>
    </div>
    <div className="flex aspect-square flex-col items-center justify-center space-y-3 bg-black border rounded-2xl border-white shadow-md shadow-blue-100 p-2">
      <div className="text-yellow-500">
        {/* fet:flag */}
   <SiTailwindcss size={80}/>
      </div>
      <h3 className="text-xl font-semibold text-yellow-500">Tailwind Css</h3>
    </div>

    <div className="flex aspect-square flex-col items-center justify-center space-y-3 bg-black border rounded-2xl border-white shadow-md shadow-blue-100 p-2">
      <div className="text-yellow-500">
        {/* fet:flag */}
   <SiRedux size={80}/>
      </div>
      <h3 className="text-xl font-semibold text-yellow-500">Redux</h3>
    </div>

    <div className="flex aspect-square flex-col items-center justify-center space-y-3 bg-black border rounded-2xl border-white shadow-md shadow-blue-100 p-2">
      <div className="text-yellow-500">
        {/* fet:flag */}
   <FaGitAlt size={80}/>
      </div>
      <h3 className="text-xl font-semibold text-yellow-500">Git</h3>
    </div>

    <div className="flex aspect-square flex-col items-center justify-center space-y-3 bg-black border rounded-2xl border-white shadow-md shadow-blue-100 p-2">
      <div className="text-yellow-500">
        {/* fet:flag */}
   <FaGithub size={80}/>
      </div>
      <h3 className="text-xl font-semibold text-yellow-500">Github</h3>
    </div>
  </div>
</section>
    </div>




  );
}