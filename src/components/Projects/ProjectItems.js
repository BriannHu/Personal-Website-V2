export const ProjectMap = {
  0: {
    typeName: "Hackathon",
    typeColor: "#ff9800",
  },
  1: {
    typeName: "Personal",
    typeColor: "#00e676",
  },
  2: {
    typeName: "Academic",
    typeColor: "#7c4dff",
  },
  3: {
    typeName: "Research",
    typeColor: "#00b0ff",
  },
};

export const ProjectItems = [
  {
    projectName: "Run.Trackr",
    projectType: 1,
    imageLink: "/images/projects/marathonizer.png",
    projectDescription:
      "Full-stack MERN application designed to help runners prepare and train for upcoming races. Users can record, visualize and export runs, as well as track their past distance, duration and average pace.",
    projectLink: "https://github.com/BriannHu/MarathonTrainer",
    tags: [
      {
        name: "React.js",
      },
      {
        name: "Material UI",
      },
      {
        name: "Redux",
      },
      {
        name: "MongoDB",
      },
      {
        name: "Express.js",
      },
      {
        name: "Google OAuth",
      },
    ],
  },
  {
    projectName: "ASL Transcriber",
    projectType: 0,
    imageLink: "/images/projects/asl_transcriber.png",
    projectDescription:
      "Application that converts detected ASL gestures to the English alphabet. Users will have time to sign letters for them to appear dynamically on the screen. Includes a bonus phrase! (Hint: 🤟)",
    projectLink: "https://github.com/BriannHu/ASL_Alphabet_Interpretation",
    tags: [
      {
        name: "Python",
      },
      {
        name: "OpenCV",
      },
      {
        name: "Mediapipe",
      },
    ],
  },
  {
    projectName: "NSERC Project",
    projectType: 3,
    imageLink: "/images/projects/nserc_project.png",
    projectDescription:
      "Research project focusing on improving performance of RocksDB on real-time data analytics, by augmenting in-memory data structures. Custom benchmarks simulating social media workloads are tested on the system.",
    projectLink: "https://github.com/BriannHu/NSERC_Project",
    tags: [
      {
        name: "RocksDB",
      },
      {
        name: "C",
      },
      {
        name: "C++",
      },
    ],
  },
  {
    projectName: "Personal Site 2.0",
    projectType: 1,
    imageLink: "/images/projects/personal_website_v2.png",
    projectDescription:
      "Second iteration of my personal portfolio website! Now uses React.js for frontend with Material UI for reusable components and hooks for adjustable colors. Used Procreate to draw website images.",
    projectLink: "https://github.com/BriannHu/Personal-Website-V2",
    tags: [
      {
        name: "React.js",
      },
      {
        name: "Material UI",
      },
      {
        name: "Procreate",
      },
    ],
  },
  {
    projectName: "Pseudo OS",
    projectType: 2,
    imageLink: "/images/projects/pseudo_os.png",
    projectDescription:
      "Application created using C that simulates operating system. Complete prototype includes functional shell, kernel, memory-manager and ability to mount partitions and read to/write from basic files.",
    projectLink:
      "https://www.mcgill.ca/deanofstudents/students/student-rights-responsibilities/code",
    tags: [
      {
        name: "C",
      },
    ],
  },
  {
    projectName: "DISCS Lab Website",
    projectType: 1,
    imageLink: "/images/projects/discs_website.png",
    projectDescription:
      "Research website created for McGill's Data-Intensive Storage and Computer System Lab. Aimed towards undergraduates, where they can read more about the lab's activities and apply if they're interested.",
    projectLink: "https://github.com/BriannHu/DISCS-Website",
    tags: [
      {
        name: "React",
      },
      {
        name: "Bootstrap",
      },
      {
        name: "HTML/CSS",
      },
    ],
  },
  {
    projectName: "COVID-19 Visualizer",
    projectType: 0,
    imageLink: "/images/projects/covid_visualizer.png",
    projectDescription:
      "Application that collects Coronavirus data in real-time and visualizes it on graph. User can toggle between different regions as well as filter by type of information (ie. infected, deceased, cured).",
    projectLink: "https://github.com/BriannHu/Covid19Visualizer",
    tags: [
      {
        name: "Python",
      },
      {
        name: "Dash",
      },
      {
        name: "HTML/CSS",
      },
      {
        name: "Heroku",
      },
      {
        name: "Github Actions",
      },
    ],
  },
  {
    projectName: "MiniML",
    projectType: 2,
    imageLink: "/images/projects/toy_language.png",
    projectDescription:
      "Application created using OCaml that implemented toy language with features such as free variable checking, substitutions, evaluation, type checking and type inference.",
    projectLink:
      "https://www.mcgill.ca/deanofstudents/students/student-rights-responsibilities/code",
    tags: [
      {
        name: "OCaml",
      },
    ],
  },
  {
    projectName: "Personal Site 1.0",
    projectType: 1,
    imageLink: "/images/projects/personal_website_v1.png",
    projectDescription:
      "My first website! Great experience for learning the fundamentals of HTML + CSS/SCSS and Javascript. Used libraries such as Particles.js and scroll-spy to enhance website visuals.",
    projectLink: "https://github.com/BriannHu/PortfolioV1",
    tags: [
      {
        name: "HTML/CSS",
      },
      {
        name: "SCSS",
      },
      {
        name: "Javascript",
      },
    ],
  },
];
