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
  BDA,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  iiit_pic,
  jpmc_pic,
  zummit_pic,
  carrent,
  jobit,
  tripguide,
  threejs,
  OCR,
  APT,
  CMU
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
  {
  id: "Resume",
  title: "My Resume",
},
];

const services = [
  {
    title: "Research Assistant",
    icon: web,
  },
  {
    title: "Full Stack Developer",
    icon: mobile,
  },
  {
    title: "Software Engineer",
    icon: backend,
  }
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
  {
    name: "TypeScript",
    icon: typescript,
  },
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
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  
  {
    title: "Research Intern",
    company_name: "Carnegie Mellon University",
    icon: CMU,
    iconBg: "#383E56",
    date: "Sep 2023 - Jan 2024",
    points: [
      "Achieved 226-fold reduction in the training time for fine-tuning vision transformers on Cryo-ET images, significantly enhancing efficiency.",
      "Elevated the accuracy of CryoET classification by 5% on synthetic data with 0.05 SNR through the implementation of contrastive learning on stylized natural images"
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "JPMorgan Chase & Co.",
    icon: jpmc_pic,
    iconBg: "#383E56",
    date: "June 2023 - July 2023",
    points: [
      "Developed FIAT (Functional ID Retrieval and Access Token Generation), a robust full-stack application using ReactJS and Spring Boot, to ensure a 0% locking rate of FID during UAT testing.",
      "Automated FID identification by implementing an advanced search filter, enabling efficient querying based on Sealid, business requirements, or FID functionality."    
    ],
  },
  {
    title: "Research Assistant",
    company_name: "IIIT Hyderabad",
    icon: iiit_pic,
    iconBg: "#E6DEDD",
    date: "May 2022 - May 2023",
    points: [
       " Worked on two different techniques Layout Parser API to parse each word in an uploaded image for 14 different languages and OCR API to display recognized words.",
       "The Handwritten OCR achieved a remarkable accuracy rate of 98.98% for the Tamil language, printed OCR achieved 99.35% accuracy for the Assamese language, and scene text OCR achieved 96.59% accuracy in the Tamil language",
       "Integrated deep network-based text line detector on Palm leaf Manuscripts into the workflow system."
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "Zummit Infolabs",
    icon: zummit_pic,
    iconBg: "#383E56",
    date: "Oct 2021 - Jan 2022",
    points: [
      "Contributed to the front-end design for the Quantumzyme project, achieving significant web traffic with 8.4k visits.",
      "Led a collaborative team for the development of the NGO project, Sankalpa. Worked closely with the design team to create Figma designs and successfully translated them into functional web pages with the front-end team using ReactJS."
    ],
  },
];

const testimonials = [
  {
    title:
      "Predicting the Borrower's Genuineness in Loan Repayment through Big Data Analytics",
      pulicationType:"IEEE",
      topicName:"Applied ML" ,
      paperLink:"https://ieeexplore.ieee.org/document/10431007"

  }
];

const projects = [
  {
    name: "Predictive Ananlytics on Big Data",
    description:
      "An ML Model that predicts the Borrower’s Genuineness in Loan Repayment through Big Data Analytics using google data proc on Loan Lending dataset containing 2.1 million data records giving 93.56% accuracy" ,
    tags: [
      {
        name: "DataProc",
        color: "blue-text-gradient",
      },
      {
        name: "PySpark",
        color: "green-text-gradient",
      },
      {
        name: "Jupyter",
        color: "pink-text-gradient",
      },
    ],
    image: BDA,
    source_code_link: "https://ieeexplore.ieee.org/document/10431007",
  },
  {
    name: "Activity Points Tracker",
    description:
      "A MERN Web application that enables students to upload their co-curricular and extra curricular certificates. Based on the authenticity of certificate professor can validate it. Overall activity points of the student is recorded in the dashboard.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "ExpressJS",
        color: "pink-text-gradient",
      },
    ],
    image: APT,
    source_code_link: "https://activity-points-tracker-cbit.netlify.app/",
  },
  {
    name: "OCR API specs - Character Recognition Tool (NLTM, Computer Vision)",
    description:
      "An API that takes Handwritten/Printed/Scene images and extract text from the images for 14 different languages. A layout parser detects and crops each word in image and sends to Doctr model which recognises text.",
    tags: [
      {
        name: "PyTorch",
        color: "blue-text-gradient",
      },
      {
        name: "FastAPI",
        color: "green-text-gradient",
      },
      {
        name: "Docker",
        color: "pink-text-gradient",
      },
    ],
    image: OCR,
    source_code_link: "https://bhashini.gov.in/ulca/model/explore-models",
  },
];

export { services, technologies, experiences, testimonials, projects };
