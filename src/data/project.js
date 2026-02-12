export const projects = [
  {
    id: 1,
    slug: "real-time-ride-booking-app",
    title: "Ride Booking Web Application",
    subtitle: "Full-Stack Project",
    role: "Full-Stack Developer",
    duration: "3 Weeks",
    status: "Completed",

    description:
      "A real-time ride booking platform with live driver tracking, authentication, and socket-based updates inspired by Uber’s core flow.",

    problem:
      "Ride booking systems require real-time synchronization between users and drivers, which becomes complex to scale and manage efficiently.",

    solution:
      "Built a MERN-based real-time system using Socket.io for instant updates, JWT authentication for security, and Google Maps for live tracking.",

    challenges:
      "Managing real-time socket connections while maintaining performance and preventing unnecessary re-renders required careful event handling and backend optimization.",

    features: [
      "Real-time ride status updates",
      "User & driver authentication",
      "Live map tracking using Google Maps",
      "Socket-based notifications",
      "Secure backend APIs",
    ],

    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io",
      "Google Maps API",
      "Tailwind CSS",
    ],

    images: ["/uber2.png", "/uber2.png"],

    githubLink: "https://github.com/anisha-max/uber-clone",
    liveLink: "https://uber-clone-frontend-2ubg.onrender.com",
  },

  {
    id: 2,
    slug: "video-streaming-platform",
    title: "Video Streaming Platform",
    subtitle: "Full-Stack Project",
    role: "Full-Stack Developer",
    duration: "4 Weeks",
    status: "Completed",

    description:
      "A scalable video streaming platform similar to YouTube, supporting video uploads, playback, and authentication.",

    problem:
      "Building a video platform requires handling large media uploads, secure authentication, and optimized playback without performance issues.",

    solution:
      "Used Next.js for performance, ImageKit for media optimization, NextAuth for authentication, and MongoDB for scalable data storage.",

    challenges:
      "Optimizing video loading speed while keeping the UI responsive across devices.",

    features: [
      "User authentication with NextAuth",
      "Video upload & playback",
      "Responsive UI for all devices",
      "Optimized media delivery using ImageKit",
    ],

    techStack: [
      "Next.js",
      "Tailwind CSS",
      "ImageKit",
      "NextAuth",
      "MongoDB",
    ],

    images: ["/videoapp.png"],

    githubLink: "https://github.com/anisha-max/Fullstack-youtube-application",
    liveLink: "https://fullstack-video-application.onrender.com",
  },

  // {
  //   id: 3,
  //   slug: "developer-portfolio",
  //   title: "Developer Portfolio",
  //   subtitle: "Frontend Project",
  //   role: "Frontend Developer",
  //   duration: "2 Weeks",
  //   status: "Completed",

  //   description:
  //     "A personal portfolio website showcasing projects, skills, and experience with a strong focus on performance and clean UI.",

  //   problem:
  //     "Most developer portfolios are cluttered, slow, and fail to clearly communicate skills to recruiters.",

  //   solution:
  //     "Designed a minimal, performance-focused portfolio with clear project case studies and smooth GSAP animations.",

  //   challenges:
  //     "Balancing animations with performance and keeping the design clean across screen sizes.",

  //   features: [
  //     "Clean and minimal UI",
  //     "Project case studies",
  //     "Smooth GSAP animations",
  //     "Fully responsive layout",
  //   ],

  //   techStack: ["React", "Tailwind CSS", "GSAP"],

  //   images: ["/portfolio.png"],

  //   githubLink: "https://github.com/anisha-max/Anisha-Parmar-WebDev",
  //   liveLink: "https://anisha-parmar-webdev.onrender.com",
  // },

  {
    id: 4,
    slug: "fintech-web-application",
    title: "Fintech Web Application",
    subtitle: "Company Project",
    role: "Frontend Developer",
    duration: "Ongoing",
    status: "Live",

    description:
      "A fintech web application developed as part of a company project, focused on secure and user-friendly financial services UI.",

    problem:
      "Fintech applications require clear, intuitive interfaces while handling complex user flows.",

    solution:
      "Collaborated with the team to build reusable React components and clean UI flows using Tailwind CSS.",

    challenges:
      "Ensuring UI consistency across multiple features while working within an existing system.",

    features: [
      "Clean and intuitive UI",
      "Responsive design",
      "Reusable frontend components",
    ],

    techStack: ["React", "Tailwind CSS"],

    images: ["/bbps.png"],

    liveLink: "https://utility.finuniques.in",
  },

  {
    id: 5,
    slug: "company-main-website",
    title: "Company Main Website",
    subtitle: "Company Project",
    role: "Frontend Developer",
    duration: "Ongoing",
    status: "Live",

    description:
      "The official company website built with a focus on branding, responsiveness, and smooth user experience.",

    problem:
      "The company needed a modern, responsive website that clearly communicated services and brand identity.",

    solution:
      "Developed responsive UI sections and optimized layouts using React and Tailwind CSS.",

    challenges:
      "Maintaining performance and consistency across pages while collaborating with designers and backend teams.",

    features: [
      "Responsive layouts",
      "Modern UI design",
      "Optimized performance",
    ],

    techStack: ["React", "Tailwind CSS"],

    images: ["/sevenunique.png"],

    liveLink: "https://www.sevenunique.com",
  },
];
