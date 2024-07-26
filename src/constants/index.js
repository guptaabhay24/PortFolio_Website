import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Software Developer",
    icon: backend,
  },
  {
    title: "CyberSec Enthusiast",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  {
    name: "Three JS",
    icon: threejs,
  },
  // {
  //   name: "git",
  //   icon: git,
  // },
  {
    name: "C++",
    icon: figma,
  },
  {
    name: "arduino",
    icon: docker,
  },
];

const experiences = [
  {
    title: "PortFolio Website",
    company_name: "Solo Project",
    icon: starbucks,
    iconBg: "#383E56",
    date: "July 2024 - August 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Resolved issues through rigorous testing and studying responsive design best practices, achieving a seamless user experience across devices.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Ensured a secure, scalable deployment using services like Netlify and Vercel, guaranteeing smooth and reliable website performance.",
    ],
  },
  {
    title: "Shopping Cart App",
    company_name: "Solo Project",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2024 - March 2024",
    points: [
      "Engineered a responsive, modular Shopping Cart App using React, integrating state management for efficient data flow and achieving a 30% boost in user engagement",
      "Boosted user engagement by 30% through intuitive UI/UX design and seamless interactions",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Optimized the checkout process by 20% through the implementation of robust form handling and rigorous validation techniques",
    ],
  },
  {
    title: "Smart Kitchen ",
    company_name: "Team Project",
    icon: tesla,
    iconBg: "#383E56",
    date: "April 2023 - May 2023",
    points: [
      "Developed a Smart Kitchen system using Arduino and sensors, automating lighting, temperature control, and appliance management",
      "Successfully achieved 45% energy savings, safely enhanced by 25%, and dramatically increased operational efficiency by 60%",
      "Worked closely with mentors to enhance the overall functionality and performance of our Smart Kitchen system",
      "Participating in code reviews and providing constructive feedback to other teammates.",
    ],
  },
  {
    title: "Coding Profiles",
    company_name: "Abhay Gupta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Up To Date",
    points: ["Leetcode Profile", "GeeksForGeeks Profile"],
    leetcodeProfile: "https://leetcode.com/u/abhay_coder24/",
    GeeksForGeeksProfile: "https://www.geeksforgeeks.org/user/workohol4lz5/",
  },
];

const testimonials = [
  {
    testimonial:
      "A special thanks to my childhood friend, YashVardhan Baid, who guided and mentored me tirelessly during my placement preparation. His support and encouragement were invaluable in helping me navigate the challenges and succeed in my career journey.",
    name: "YashVardhan Baid",
    designation: "Mentor and Friend",
    company: "",
    image:
      "https://media.licdn.com/dms/image/D4D03AQGUAfhqYWTHZw/profile-displayphoto-shrink_800_800/0/1680437670416?e=1726099200&v=beta&t=UpmRu5f-39LCkA_63pVTObgMEBdVc4ZfATspwvfQ4qc",
  },
  {
    testimonial:
      "A special thanks to my best senior, YashVardhan Saraswat, for always guiding me in every aspect of life. His wisdom and support have been invaluable in helping me grow both personally and professionally.",
    name: "YashVardhan Saraswat",
    designation: "Best Senior",
    company: "",
    image:
      "https://media.licdn.com/dms/image/D4D03AQFaNE4Ettuldg/profile-displayphoto-shrink_800_800/0/1703183628890?e=1726099200&v=beta&t=c3rCeiakFWYuHT6xHI9TXHkwwqXAh3hmwNMuO6RHXv0",
  },
  {
    testimonial:
      "A special thanks to my college friend, Aryan Shah, who always helped me in my web development journey. His constant support and encouragement were crucial in overcoming challenges and achieving my goals.                 ",
    name: "Aryan Shah",
    designation: "Friend",
    company: "",
    image:
      "https://media.licdn.com/dms/image/D4D35AQFuMb2GlXWfTw/profile-framedphoto-shrink_400_400/0/1704805875878?e=1721224800&v=beta&t=ZXCtuhLa7WMfA_JjiP4nTvmZPFJ7BmAWTpzChdR5UsQ",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
