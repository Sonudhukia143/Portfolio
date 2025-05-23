export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  export const clientReviews = [
    {
      id: 1,
      name: 'Emily Johnson',
      position: 'Marketing Director at GreenLeaf',
      img: 'assets/review1.png',
      review:
        'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
      id: 2,
      name: 'Mark Rogers',
      position: 'Founder of TechGear Shop',
      img: 'assets/review2.png',
      review:
        'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
      id: 3,
      name: 'John Dohsas',
      position: 'Project Manager at UrbanTech ',
      img: 'assets/review3.png',
      review:
        'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
      id: 4,
      name: 'Ether Smith',
      position: 'CEO of BrightStar Enterprises',
      img: 'assets/review4.png',
      review:
        'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
  ];
  
  export const myProjects = [
    {
      title: 'Yelpcamp - An online campground sharing platform',
      desc: 'Yelpcamp is a revolutionary platform that provides great UI and functions those can provide a user login,signin , review , campground adding options.',
      subdesc:
        'Built as a unique website it has a backend based on node with powerfull API service and multiple security layers.It provides user with robust and safe authorization to safegaurd personal data and review other users without hesitation.',
      href: 'https://yelpcamp-xxkv.onrender.com/',
      texture: '/textures/project/project1.mp4',
      logo: '/assets/Yelp.svg',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'Node.js',
          path: '/assets/nodejs.svg',
        },
        {
          id: 2,
          name: 'MongoDB',
          path: 'assets/mongodb.svg',
        },
        {
          id: 3,
          name: 'JavaScript',
          path: '/assets/javascript.svg',
        },
        {
          id: 4,
          name: 'Bootstrap',
          path: '/assets/bootstrap.svg',
        },
      ],
    },
    {
      title: '3d Solar System',
      desc: 'This project built using three js provide realtime 3d features like shadows,textures and lightning.',
      subdesc:
        'With Solar System, users can experience the 3d strucuture and revovlve around in the space this can also be used for education purpose.',
      href: 'https://3dimensionsolarsystem.netlify.app/',
      texture: '/textures/project/project2.mp4',
      logo: '/assets/portfolio.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'Three js',
          path: '/assets/threejs.svg',
        },
        {
          id: 4,
          name: 'Vite',
          path: '/assets/vite.svg',
        },
      ],
    }
  ]
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Udemy',
      pos: 'The Web Developer Bootcamp 2020',
      duration: '74 total hours',
      title: "This course started from introducing core concepts in web development and later advanced towards techonologies like react,node,mongo.Untill, I completed this bootcamp I was skilled enough to build robust API's and backend services and throghout this course I build a full-stack application Yelpcamp using everything I learnt from this course.",
      icon: '/assets/udemy.svg',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'Education',
      pos: 'Bachelor in Computer And Applications',
      duration: '2022 - 2025',
      title: "I started my college degree in 2022 I built my core concepts in computer science from college.",
      icon: '/assets/degree.svg',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'Advancements In Field',
      pos: 'Other Online Learning Platforms',
      duration: 'Till I Die',
      title: "I gained a great start in the field from Udemy and the curosity to learn more forced me to go beyond and I am continuously learning from online platforms and documentations.",
      icon: '/assets/online.svg',
      animation: 'salute',
    },
  ];