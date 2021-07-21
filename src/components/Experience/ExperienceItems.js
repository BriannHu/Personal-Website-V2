export const ExperienceItems = [
  {
    type: "school", // either school or work
    orientation: "right", // refers to which side text is on
    imageLink: "/images/experience/enactus.jpg",
    roleTitle: "Web & Software Development Coordinator",
    roleLocation: "Enactus McGill",
    roleDate: "July 2021 - Present",
    tags: [
      {
        name: "In Progress!",
        level: 2,
      },
    ],
    points: [
      {
        text: "Just getting started, more to come!",
      },
    ],
  },
  {
    type: "work", // either school or work
    orientation: "left", // refers to which side text is on
    imageLink: "/images/experience/mcgill.jpg",
    roleTitle: "Undergraduate Researcher",
    roleLocation: "Data-Intensive Storage and Computer Systems Lab",
    roleDate: "April 2021 - Present",
    tags: [
      {
        name: "Git",
        level: 3,
      },
      {
        name: "Python",
        level: 3,
      },
      {
        name: "RocksDB",
        level: 2,
      },
      {
        name: "Unix/Linux",
        level: 2,
      },
      {
        name: "C",
        level: 2,
      },
      {
        name: "C++",
        level: 2,
      },
    ],
    points: [
      {
        text: "Research project funded by NSERC USRA, supervised by Dr. Oana Balmau",
      },
      {
        text: "Focus on NoSQL systems design for real-time data analytics",
      },
      {
        text: "Developed and ran representative data analytics benchmark in C++ to simulate social media workload using RocksDB to identify significant bottlenecks.",
      },
      {
        text: "Still in progress!",
      },
    ],
  },
  {
    type: "school", // either school or work
    orientation: "right", // refers to which side image is on
    imageLink: "/images/experience/discord.png",
    roleTitle: "Helpdesk Tutor",
    roleLocation: "McGill Computer Science Undergraduate Society",
    roleDate: "September 2020 - April 2021",
    tags: [
      {
        name: "Python",
        level: 3,
      },
      {
        name: "Java",
        level: 3,
      },
      {
        name: "C",
        level: 2,
      },
      {
        name: "Bash",
        level: 2,
      },
      {
        name: "OCaml",
        level: 1,
      },
    ],
    points: [
      {
        text: "Received Tomlinson Engagement Award for Mentoring, on behalf of CSUS Helpdesk",
      },
      {
        text: "Provided virtual peer-to-peer tutoring on Discord to students enrolled in undergraduate programming classes",
      },
      {
        text: "Explained core programming concepts and theory, in order to work towards solutions without explictly giving away answer",
      },
    ],
  },
  {
    type: "work", // either school or work
    orientation: "left", // refers to which side image is on
    imageLink: "/images/experience/mcgill2.jpeg",
    roleTitle: "Research Assistant",
    roleLocation: "Distributed Systems Information Lab",
    roleDate: "September 2020 - December 2020",
    tags: [
      {
        name: "Python",
        level: 3,
      },
      {
        name: "Unix/Linux",
        level: 2,
      },
      {
        name: "Docker ",
        level: 1,
      },
      {
        name: "Wireshark",
        level: 1,
      },
    ],
    points: [
      {
        text: "Collected network packets over McGill’s network using different compression algorithms in container environment",
      },
      {
        text: "Analyzed network traffic with Wireshark and resolved packet retransmission issues",
      },
      {
        text: "Created technical documentation for lab’s proprietary AIDA software (Agile Abstraction for Advanced In-Database Analytics)",
      },
    ],
  },
];
