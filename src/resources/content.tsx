import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Vũ",
  lastName: "Nguyễn Đức Thắng",
  name: "Vũ Nguyễn Đức Thắng",
  role: "Software Engineer",
  avatar: "/images/avatar.svg",
  email: "vndt181204@gmail.com",
  location: "Asia/Ho_Chi_Minh",
  locationLabel: "Thanh Xuan, Ha Noi",
  languages: ["Vietnamese", "English"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Stay in touch</>,
  description: <>Reach out by email if you want to collaborate on product or AI engineering.</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/vincerevu",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/thang-vu-nguyen-duc-6a1233405/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.svg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building full-stack products and local-first AI workflows</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Flazz</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured project
        </Text>
      </Row>
    ),
    href: "/work/flazz-local-first-ai-desktop-coworker",
  },
  subline: (
    <>
      I am a software engineer focused on React.js, Spring Boot, NestJS, and PostgreSQL,
      building business systems and AI-assisted tools with strong backend foundations and
      practical automation.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Professional Summary",
    description: (
      <>
        Software engineer with experience building web applications and AI-powered workflows
        using React.js, Spring Boot, NestJS, and PostgreSQL. Skilled in prompt engineering,
        AI agent workflow design, tool integration, and local-first systems with structured
        memory and automation.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Freelancer",
        timeframe: "Jul 2025 - Present",
        role: "Software Engineer",
        achievements: [
          <>
            Developed a CRM web application using React.js, Redux, Styled Components,
            Express.js, Prisma ORM, and PostgreSQL.
          </>,
          <>
            Designed database models and backend APIs for customers, orders, products, and
            inventory with JWT-based authentication.
          </>,
          <>
            Built quotation, order processing, payment tracking, stock update, dashboard,
            and reporting workflows, and configured GitHub Actions with Docker pipelines for
            testing and deployment.
          </>,
        ],
        images: [],
      },
      {
        company: "WsoftPro",
        website: "http://wsoftpro.com",
        logo: "/images/companies/wsoftpro.jpg",
        timeframe: "Apr 2025 - Jul 2025",
        role: "Software Engineer",
        achievements: [
          <>
            Built an IQC laboratory quality management system for a hospital using React.js and
            Express.js to support test quality tracking, record management, and lab operations.
          </>,
          <>
            Developed a document and task management system for a hospital with document signing,
            approval workflows, and centralized tracking of internal records.
          </>,
        ],
        images: [],
      },
      {
        company: "TinaSoft",
        website: "https://tinasoft.io",
        logo: "/images/companies/tinasoft.png",
        timeframe: "Feb 2025 - Apr 2025",
        role: "Software Engineer Intern",
        achievements: [
          <>
            Integrated LaoID SSO into LaoSocial using OAuth 2.0 and OpenID Connect.
          </>,
          <>
            Implemented secure authentication flows including token handling, session
            management, and user onboarding.
          </>,
          <>
            Customized frontend features with React.js and worked with Docker, Nginx,
            Linux, and CI/CD pipelines.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Posts and Telecommunications Institute of Technology (PTIT)",
        website: "https://ptit.edu.vn",
        logo: "/images/companies/ptit.png",
        description: <>Engineer of Information Technology.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Skills",
    skills: [
      {
        title: "Languages",
        description: (
          <>Java, JavaScript, TypeScript, Python, and C/C++.</>
        ),
        tags: [
          { name: "Java" },
          { name: "JavaScript", icon: "javascript" },
          { name: "TypeScript" },
          { name: "Python" },
          { name: "C/C++" },
        ],
        images: [],
      },
      {
        title: "Frontend",
        description: (
          <>React.js, Next.js, Tailwind CSS, MUI, Redux Toolkit, and production UI workflows.</>
        ),
        tags: [
          { name: "React.js" },
          { name: "Next.js", icon: "nextjs" },
          { name: "Tailwind CSS" },
          { name: "MUI" },
          { name: "Redux Toolkit" },
        ],
        images: [],
      },
      {
        title: "Backend & Data",
        description: (
          <>
            Spring Boot, Spring Security, Spring Data JPA, Hibernate, Express.js, NestJS,
            Prisma ORM, REST APIs, JWT authentication, PostgreSQL, MySQL, and Redis.
          </>
        ),
        tags: [
          { name: "Spring Boot" },
          { name: "NestJS" },
          { name: "Express.js" },
          { name: "PostgreSQL" },
          { name: "MySQL" },
          { name: "Redis" },
        ],
        images: [],
      },
      {
        title: "AI Engineering",
        description: (
          <>
            Prompt engineering, context management, MCP, tool calling, AI agent workflows,
            agent orchestration, and RAG.
          </>
        ),
        tags: [
          { name: "Prompt Engineering" },
          { name: "MCP" },
          { name: "Tool Calling" },
          { name: "Agent Workflows" },
          { name: "RAG" },
        ],
        images: [],
      },
      {
        title: "Tools & Platforms",
        description: <>Docker, GitHub Actions, CI/CD, Linux, and deployment automation.</>,
        tags: [
          { name: "Docker" },
          { name: "GitHub Actions" },
          { name: "CI/CD" },
          { name: "Linux" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Notes and writing",
  description: `Writing and technical notes by ${person.name}`,
};

const work: Work = {
  path: "/work",
  label: "Projects",
  title: `Projects – ${person.name}`,
  description: `Selected engineering projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `Gallery by ${person.name}`,
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
