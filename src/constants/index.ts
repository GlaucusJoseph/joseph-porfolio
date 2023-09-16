import {
  CSharpIcon,
  GitIcon,
  GithubIcon,
  JavaScriptIcon,
  NodeJSIcon,
  CSSIcon,
  HTMLIcon,
  DotNetCoreIcon,
  ASPNetIcon,
  BootstrapIcon,
  PostgreSQLIcon,
  EnglishIcon,
} from "../assets/svg/index";

export const TECHNOLOGIES_OBJECT = {
  csharp: { name: "C#", icon: CSharpIcon },
  git: { name: "Git", icon: GitIcon },
  github: { name: "GitHub", icon: GithubIcon },
  javascript: { name: "JavaScript", icon: JavaScriptIcon },
  nodejs: { name: "Node.js", icon: NodeJSIcon },
  css: { name: "CSS", icon: CSSIcon },
  html: { name: "HTML", icon: HTMLIcon },
  dotnetcore: { name: ".NET Core", icon: DotNetCoreIcon },
  aspnet: { name: "ASP.NET", icon: ASPNetIcon },
  bootstrap: { name: "Bootstrap", icon: BootstrapIcon },
  postgreSQL: { name: "PostgreSQL", icon: PostgreSQLIcon },
  english: { name: "English", icon: EnglishIcon },
};

const {
  csharp,
  git,
  github,
  javascript,
  nodejs,
  css,
  html,
  dotnetcore,
  aspnet,
  bootstrap,
  postgreSQL,
  english,
} = TECHNOLOGIES_OBJECT;

export const COURSES_OBJECT_LIST = [
  {
    title: "Object-Oriented Programming Course: OOP",
    institution: "Platzi",
    date: "March 2021",
    technologies: [csharp],
    url: "https://platzi.com/p/josephdavidortegacordova/curso/1474-oop/diploma/detalle/",
  },
  {
    title: "Basic Programming Course",
    institution: "Platzi",
    date: "March 2021",
    technologies: [javascript, css, html, git, github],
    url: "https://platzi.com/p/josephdavidortegacordova/curso/1050-programacion-basica/diploma/detalle/",
  },
  {
    title: "Professional Git and GitHub Course",
    institution: "Platzi",
    date: "March 2021",
    technologies: [javascript, git, github],
    url: "https://platzi.com/p/josephdavidortegacordova/curso/1557-git-github/diploma/detalle/",
  },
  {
    title: "C# Fundamentals with .NET Core 2018",
    institution: "Platzi",
    date: "April 2021",
    technologies: [csharp, dotnetcore],
    url: "https://platzi.com/p/josephdavidortegacordova/curso/1375-fundamentos-csharp-2018/diploma/detalle/",
  },
  {
    title: "Basic Course in Algorithms and Logical Thinking",
    institution: "Platzi",
    date: "April 2021",
    technologies: [],
    url: "https://platzi.com/p/josephdavidortegacordova/curso/2218-course/diploma/detalle/",
  },
  {
    title: ".NET Core C# Course",
    institution: "Platzi",
    date: "July 2021",
    technologies: [csharp],
    url: "https://platzi.com/p/josephdavidortegacordova/curso/1359-c-sharp/diploma/detalle/",
  },
  {
    title: "ASP.NET Core Course",
    institution: "Platzi",
    date: "August 2021",
    technologies: [csharp, aspnet],
    url: "http://platzi.com/p/josephdavidortegacordova/curso/1395-aspnet-core/diploma/detalle/",
  },
  {
    title: "Full Stack JavaScript Junior Developer",
    institution: "Desafio Latam",
    date: "June 2022",
    technologies: [
      git,
      bootstrap,
      github,
      html,
      postgreSQL,
      javascript,
      css,
      nodejs,
    ],
    url: "",
  },
  {
    title: "EF SET Certificate - C2",
    institution: "EF Standard English Test (EF SET) ",
    date: "July 2023",
    technologies: [english],
    url: "https://www.efset.org/cert/SvwPMo",
  },
];

export const PROJECTS_OBJECT_LIST = [
  {
    title: "Object-Oriented Programming Course: OOP",
    description: "Platzi",
    tags: "March 2021",
    accessButtons: [csharp],
    imgUrl:
      "https://platzi.com/p/josephdavidortegacordova/curso/1474-oop/diploma/detalle/",
  },
];
