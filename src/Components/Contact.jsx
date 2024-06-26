import { Link } from "react-router-dom"

const Contact = () => {

  return (
    <div>
     <div className="max-w-2xl mx-auto text-center mt-10">
  <h1 className="sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-4xl">Contact<span className="text-yellow-500 ml-4">Me</span></h1>
    </div>
  <section className="bg-black mt-24">
  <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
    <div className="max-w-5xl mx-auto mt-12 sm:mt-16">
      <div className="grid grid-cols-1 gap-6 px-8 text-center md:px-0 md:grid-cols-3">
        <div className="overflow-hidden bg-white rounded-xl border border-black">
          <div className="p-6">
            <svg className="flex-shrink-0 w-10 h-10 mx-auto text-black" xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <p className="mt-6 text-lg font-medium text-gray-900">+92 313 4122910</p>
          </div>
        </div>
        <div className="overflow-hidden bg-white rounded-xl border border-black">
          <div className="p-6">
            <svg className="flex-shrink-0 w-10 h-10 mx-auto text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="yellow"  viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          <p className="mt-6 text-lg font-medium text-gray-900 ">furqanhashmi349@gmail.com</p>
          </div>
        </div>
        <div className="overflow-hidden bg-white rounded-xl border border-black">
          <div className="p-6">
            <svg className="flex-shrink-0 w-10 h-10 mx-auto text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p className="mt-6 text-lg font-medium leading-relaxed text-gray-900">Lahore</p>
          </div>
        </div>
      </div>
    
    </div>
  </div>
</section>
        <hr className="my-6 border border-yellow-500 w-3/12 mx-auto mt-24" />
  <h1 className="sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-4xl text-center mt-10">Get in<span className="text-yellow-500 ml-4">Touch</span></h1>
      <div className="justify-center sm:flex md:flex lg:flex xl:flex flex-none sm:space-x-4 md:space-x-20 lg:space-x-28 xl:space-x-32 mt-20 sm:ml-0 md:ml-0 lg:ml-0 xl:ml-0 ml-20 space-y-4">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex mt-3.5">
        <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" alt="img" className="h-10 w-10 me-2"/>
        <p className="text-white mt-1 text-2xl">Facebook</p>
      </a>
      <a href="https://www.linkedin.com/in/furqan-hashmi/"  target="_blank" rel="noopener noreferrer" className="flex">
        <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" alt="" className="h-10 w-10 me-2"/>
        <p className="text-white mt-1.5 text-2xl">LinkedIn</p>
      </a>
     <Link to="https://wa.me/923134122910" target="_blank" rel="noopener noreferrer"   className="flex">
     <svg xmlns="http://www.w3.org/2000/svg" className="h-9  mt-1.5 me-2" fill="currentColor" style={{ color: "palegreen" }} viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
        <p className="text-white mt-1.5 text-2xl">WhatsApp</p>

     </Link>
     <Link to="https://github.com/Furqan-Hashmie" target="_blank" rel="noopener noreferrer" className="flex">
     <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 mt-1.5 me-2" fill="currentColor" style={{ color: 'white' }} viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
        <p className="text-white mt-1.5 text-2xl">GitHub</p>

     </Link>
    </div>
    </div>
  )
}

export default Contact