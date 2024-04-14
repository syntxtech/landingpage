import RocketLaunch from "../../public/assets/lottie/RocketLaunch.json"
import TeamWorking from "../../public/assets/lottie/TeamWorking.json"
import { VscDashboard } from "react-icons/vsc";
import { CgWebsite } from "react-icons/cg";
import { FaReact } from "react-icons/fa6";
import { SiAzuredevops } from "react-icons/si";
import Astronaut from "../../public/images/Astronaut.jpg"
import Astronaut2 from "../../public/images/Astronaut2.jpg";
import Astronaut3 from "../../public/images/Astronaut3.jpg";

export const navLinks = [
    {
      label: "Home",
      route: "home",
    },
    {
        label: "Services",
        route: "services",
      },
      {
        label: "About Us",
        route: "about-us",
      },
    
  ];

  export const benefits = [
    {
      title: "Prioritizing Scalability & Maintainability",
      description: "We're committed to ensuring that your product remains scalable and maintainable for the long haul. Your vision drives us, and we're dedicated to bringing it to life.",
      points: [
        "Future-focused code for seamless evolution.",
            "Core scalability for effortless growth.",
            "Agile efficiency with a remote expert team.",
           "Cost-effective optimization without sacrificing quality.",
                 "Transparent documentation for informed collaboration."
      ],
      animationData : RocketLaunch
    },
    {
      title: "Passionate about the Future",
      description: "In a rapidly evolving tech landscape, we thrive on challenges, keeping a keen eye on growth strategies and the future of technology.",
      points: [
        "Exploring emerging tech for innovative solutions.",
 "Independent and efficient with minimal dependencies.",
 "Entrepreneurial mindset for growth and innovation.",
  "User-centric coding for exceptional experiences.",
  "Passionate team delivering excellence.",
      ],
      animationData : TeamWorking

    }
  ];

  export const services = [
    {
        label : "Dashboard Development",
        icon: VscDashboard
    },
    
    {
        label : "React Native (ios + android) apps",
        icon: FaReact
    },
    {
        label : "Web (frontend/Backend) and SaaS Development",
        icon: CgWebsite
    },
    {
        label : "Devops",
        icon: SiAzuredevops 
    },
 
    
  ]

  export const teamMembers = [
    {
        image : Astronaut.src,
        name : "Shubham Kumar",
        description: 'I am a dynamic full-stack JavaScript engineer, harnessing over 3 years of expertise to engineer pioneering solutions and drive technological innovation.'
    },
    {
        image : Astronaut.src,
        name : "Rahul Ranjan",
        description: 'I am a dynamic full-stack JavaScript engineer, harnessing over 3 years of expertise to engineer pioneering solutions and drive technological innovation.'
    },
    {
        image : Astronaut3.src,
        name : "Abhishek Kumar",
        description: 'I am a dynamic full-stack JavaScript engineer, harnessing over 3 years of expertise to engineer pioneering solutions and drive technological innovation.'
    }
  ]
  