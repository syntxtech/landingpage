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
        { point: "Building for the Future", description: "Our focus on maintainable code ensures your product evolves seamlessly over time." },
        { point: "Scalability at the Core", description: "We engineer solutions that grow with your business, adapting effortlessly to changing demands." },
        { point: "Energized Remote Team", description: "With a remote team of experts, we deliver results with agility and efficiency." },
        { point: "Efficient Engineering", description: "We optimize every aspect of development, providing cost-effective solutions without compromising quality." },
        { point: "Comprehensive Documentation", description: "Transparency is paramount. We document everything to keep you informed every step of the way." }
      ],
      animationData : RocketLaunch
    },
    {
      title: "Passionate about the Future",
      description: "In a rapidly evolving tech landscape, we thrive on challenges, keeping a keen eye on growth strategies and the future of technology.",
      points: [
        { point: "Tech Enthusiasts", description: "Our team loves exploring emerging technologies, staying ahead of the curve to deliver innovative solutions." },
        { point: "Independent and Driven", description: "With a supercharged team, we operate with minimal dependencies, maximizing efficiency." },
        { point: "Entrepreneurial Spirit", description: "We approach every project with an entrepreneurial mindset, seeking opportunities for growth and innovation." },
        { point: "User-Centric Focus", description: "Each line of code is crafted with users in mind, ensuring an exceptional experience every time." },
        { point: "Passionate Team", description: "We're fueled by our love for what we do, delivering excellence with every project." }
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
  