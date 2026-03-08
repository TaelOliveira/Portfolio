export const portfolio = {
  name: 'Tael de Oliveira',
  title: 'Front End Developer',
  tagline:
    'Specializing in React, TypeScript, and User-Centric Solutions | API Integration',
  location: 'Greater Sydney Area',
  email: 'tael.oliveira@gmail.com',
  linkedIn: 'https://www.linkedin.com/in/tael-oliveira',

  summary:
    'As an accomplished and solutions-oriented Front-End Developer based in Sydney, I thrive on crafting intuitive and engaging web applications that elevate user experiences. With a strong proficiency in React.js, TypeScript, CSS, and JavaScript, I specialize in transforming complex datasets into seamless, user-friendly interfaces. I am dedicated to fostering a collaborative team environment, driving project success through effective communication and agile methodologies.',

  highlights: [
    'Elevated user engagement with React.js and PWA architecture',
    'Optimized workflows with Swagger, Jira, and Bitbucket',
    'Refined front-end/back-end integration for minimal downtime',
    'Drove collaborative team culture and project delivery',
  ],

  about:
    'I am a Front-End Developer at 1WordFlow (Revealr.ai) in Sydney since 2021, spearheading front-end development with React, TypeScript, and JavaScript to build user-centric features that enhance product performance. I focus on seamless back-end and front-end integration and code management through Bitbucket. My background includes a Bachelor of Information Technology in Mobile Application Development from the Academy of Information Technology (2018–2020), where I gained hands-on experience with Swift, Java, Kotlin, React Native, UI/UX design, and Agile methodologies. I hold an ECA Professional Year in Information Technology (2021–2022).',

  skills: [
    { name: 'React', value: 92, category: 'Frontend' },
    { name: 'TypeScript', value: 88, category: 'Frontend' },
    { name: 'JavaScript', value: 90, category: 'Frontend' },
    { name: 'HTML / CSS', value: 95, category: 'Frontend' },
    { name: 'Angular', value: 70, category: 'Frontend' },
    { name: 'Node.js', value: 75, category: 'Backend' },
    { name: 'User Experience (UX)', value: 88, category: 'Design' },
    { name: 'Agile / Jira', value: 85, category: 'Process' },
    { name: 'API Integration', value: 85, category: 'Backend' },
    { name: 'Version Control (Git)', value: 90, category: 'Tools' },
  ],

  projects: [
    {
      id: 'clockdownunder',
      title: 'ClockDownUnder',
      description:
        'Digital clock and timer for Australia with Sydney time display, world clocks across 40+ countries, drag-and-drop reordering, alarms, and local storage persistence. Built with real-time updates and Australian date formatting.',
      technologies: ['React', 'TypeScript', 'Local Storage', 'PWA-ready'],
      role: 'Sole developer – concept, UI/UX, and implementation',
      link: 'https://clockdownunder.com/',
    },
    {
      id: 'student-support-app',
      title: 'Student Support App',
      description:
        'Cross-platform application utilizing Angular and Firebase for iOS and Android, catering to students in search of academic support. Key features: customizable onboarding (name, school, course), community forum with viewable profiles and in-app messaging, adaptive dashboard by user type (student/teacher), and teacher tools for profiles, messaging, and forum moderation.',
      technologies: ['Angular', 'Firebase', 'iOS', 'Android', 'Cross-platform'],
      role: 'Student developer – full design and implementation',
      link: null,
    },
    {
      id: 'stay-global-visa-app',
      title: 'Stay Global Student Visa Quoting App',
      description:
        'Cross-platform app for iOS and Android that simplifies the student visa quoting process for prospective students in Australia. Included visa quoting (personal info, school/course selection, detailed quotes for immigration fees and health exams), informational sections on requirements and services, and integrated email inquiries with secure database storage.',
      technologies: ['Cross-platform', 'iOS', 'Android', 'Database'],
      role: 'Student developer – full design and implementation',
      link: null,
    },
    {
      id: 'media-library-rental',
      title: 'Media Library Rental System',
      description:
        'Windows desktop application built with C# and .NET with MySQL database integration for a media library rental system. Users could log in, view available media, and make reservations. Library owners could add, update, delete, and manage media records with a user-friendly interface.',
      technologies: ['C#', '.NET', 'MySQL', 'Windows'],
      role: 'Student developer – full design and implementation',
      link: null,
    },
    {
      id: 'pwa-web-apps',
      title: 'React PWA Web Applications',
      description:
        'Enterprise web applications built with React.js and PWA architecture at 1WordFlow, significantly elevating user engagement and performance. Integrated with Swagger, Jira, and Bitbucket for streamlined development and documentation.',
      technologies: [
        'React.js',
        'PWA',
        'TypeScript',
        'Swagger',
        'Jira',
        'Bitbucket',
      ],
      role: 'Frontend Developer – feature development and back-end integration',
      link: null,
    },
    {
      id: 'capstone-mobile',
      title: 'Full-Stack Mobile Application (Capstone)',
      description:
        'Capstone project at the Academy of Information Technology: a full-stack mobile application with a robust backend and engaging user experience, presented to faculty and industry partners. Incorporated real-time data, push notifications, and offline support.',
      technologies: ['React Native', 'Firebase', 'AWS', 'REST APIs'],
      role: 'Student developer – full design and implementation',
      link: null,
    },
  ],

  experience: [
    {
      company: 'Revealr.ai (1WordFlow)',
      role: 'Frontend Developer',
      location: 'Sydney, New South Wales, Australia',
      start: 'October 2021',
      end: 'Present',
      duration: '4+ years',
      responsibilities: [
        'Spearhead front-end development with React, TypeScript, and JavaScript to deliver user-centric features that enhance product performance.',
        'Drive seamless integration between back-end and front-end systems for reliable, efficient web applications.',
        'Manage code and releases through Bitbucket; collaborate across teams in an agile, autonomous environment.',
      ],
      achievements: [
        'Elevated user engagement and performance by developing web applications using React.js and PWA architecture.',
        'Optimized development processes through Swagger, Jira, and Bitbucket integration.',
        'Enhanced UX and reliability by refining front-end/back-end integration, minimizing downtime.',
        'Boosted product capabilities and user satisfaction through continuous feature enhancements.',
      ],
    },
    {
      company: 'Academy of Information Technology',
      role: 'Student – Bachelor of Information Technology',
      location: 'Sydney, New South Wales, Australia',
      start: 'March 2018',
      end: 'October 2020',
      duration: '2 years 8 months',
      responsibilities: [
        'Mobile application development with Swift, Java, Kotlin, and React Native.',
        'UI/UX design with user-centered and accessibility principles; software testing and Git/GitHub.',
        'Agile methodologies; databases and backend development with APIs, Firebase, and AWS.',
      ],
      achievements: [
        'Completed capstone: full-stack mobile application with robust backend and engaging UX, presented to faculty and industry partners.',
        'Applied OOP and software design patterns to mobile solutions.',
      ],
    },
  ],
} as const;

export type Portfolio = typeof portfolio;
