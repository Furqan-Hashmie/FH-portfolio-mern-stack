import { School, Star} from "@mui/icons-material"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css";


const About = () => {
  return (

    <div>
      <div className="text-center mt-10">
        <h2 className="max-w-full text-3xl font-bold tracking-tight leading-none sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl text-4xle">About <span className="text-yellow-400">me</span></h2>
      </div>
      <section className="text-white body-font">
  <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img className="object-cover object-center rounded" alt="hero" src="/images/laptop.png" />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <p className="mb-8 leading-relaxed text-lg">I’m Furqan Hashmi from Lahore, Pakistan. I am currently pursuing a Bachelor’s degree in Information Technology at the University of Education. I am also exploring the fields of web development and digital marketing to broaden my skill set and stay updated with the latest trends in technology and online business.</p>
      <div>
      <h4 className='text-xl text-white'> Some of my interests apart from Coding :</h4>
               <div className="mt-2 text-white">

            <div><Star className='-mt-1'/> <span className='text-lg'> Listening Music</span></div>                 
                  
            <div className="mt-1"> <Star className='-mt-2'/> <span className='text-lg'> Playing Badminton </span></div>      
                   
            <div className="mt-1"> <Star className='-mt-2'/> <span className='text-lg '> Playing Cricket</span></div>
                  
            <div className="mt-1"> <Star className='-mt-2'/> <span className='text-lg'>Watching Movies</span></div>

               </div>
      </div>
    </div>
  </div>
</section>



      <hr className="my-6 border border-yellow-500 w-3/12 mx-auto" />

      <div className="about flex flex-col items-center py-16 bg-black text-white">
      <h2 className="text-4xl font-bold mb-8">
        MY <span className="text-yellow-400">EDUCATION</span>
      </h2>

      <VerticalTimeline lineColor="white">

       {/* first card */}

        <VerticalTimelineElement
          icon={<School />}
          contentStyle={{
            boxShadow: '0 3px 0 rgba(0, 0, 0, 0.1)',
            textAlign: "center"
          }}
          className="text-black"
          contentArrowStyle={{ borderRight: "16px solid white" }}
          iconStyle={{ backgroundColor: 'black', color: 'yellow' }}
        >
          <h4 className="text-xl font-semibold">
            University Of Education - Township
          </h4>
          <p>
          Bachelor’s in Information Technology
          </p>
        </VerticalTimelineElement>

         {/* second card */}

        <VerticalTimelineElement
          icon={<School />}
          contentStyle={{
            boxShadow: '0 3px 0 rgba(0, 0, 0, 0.1)',
            backgroundColor: '#fff',
            textAlign: "center",
            color: '#23283e'
          }}
          contentArrowStyle={{ borderRight: "16px solid white" }}
          iconStyle={{ backgroundColor: 'black', color: 'yellow' }}
        >
          <h4 className="vertical-timeline-element-title text-xl font-semibold">
            ICS - Computer Science
          </h4>
          <p>Superior College - Township.</p>
          </VerticalTimelineElement>

          {/* third card */}

          <VerticalTimelineElement
          icon={<School />}
          contentStyle={{
            boxShadow: '0 3px 0 rgba(0, 0, 0, 0.1)',
            textAlign: "center"
          }}
          className="text-black"
          contentArrowStyle={{ borderRight: "16px solid white" }}
          iconStyle={{ backgroundColor: 'black', color: 'yellow' }}
        >
          <h4 className="text-xl font-semibold">
            Mubarik Science Academy
          </h4>
          <p>
          Matric in Computer Science
          </p>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
       
    </div>

  )
}

export default About