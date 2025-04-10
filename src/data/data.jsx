import finexoImg from "/src/assets/projectsData/Finexo/finexo-img.png";
import cyborgImg from "/public/cyborg-img.png";
import multiStepImg from "/src/assets/projectsData/Multi-Step-Form/Multi-step-form-img.png";
import productListImg from "/src/assets/projectsData/Product-list-with-cart/Product-list-with-cart-img.png";

export const projectsData = [
  {
    id: 1,
    title: "Finexo",
    description:
      "Finexo - Crypto Trading Platform With React And Modern Technologies",
    image: finexoImg,
    technologies: ["React", "React Icons", "Tailwind CSS", "Swiper Js", "React Router"],
    liveLink: "https://finexo-react-tailwind.netlify.app/",
    githubLink: "https://github.com/AbdallahKhattab11/Finexo_template",
  },
  {
    id: 2,
    title: "Cyborg",
    description:
      "Cyborg - Your destination for popular games, Browse our gaming library.",
    image: cyborgImg,
    technologies: ["HTML", "CSS", "JavaScript", "Swiper Js"],
    liveLink: "https://cyporg-project.netlify.app/",
    githubLink: "https://github.com/AbdallahKhattab11/Cyborg-Project",
  },
  {
    id: 3,
    title: "Multi Step Form (Frontend Mentor)",
    description: "A clean and responsive multi-step form with field validation, ideal for guiding users through complex inputs",
    image: multiStepImg,
    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://abdallahkhattab11.github.io/Multi-step-form/",
    githubLink: "https://github.com/AbdallahKhattab11/Multi-step-form",
  },
  {
    id: 4,
    title: "Product List With Cart (Frontend Mentor)",
    description:
      "A dynamic product list with an interactive cart system that updates quantities and totals in real-time",
    image: productListImg,
    technologies: ["HTML", "CSS", "JavaScript", "JSON"],
    liveLink: "https://abdallahkhattab11.github.io/Product-list-with-cart/",
    githubLink: "https://github.com/AbdallahKhattab11/Product-list-with-cart",
  },
];
