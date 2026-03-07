import coffeerush from "../assets/imgs/coffeerush.png";
import ists from "../assets/imgs/ists.svg";
import suntrackingsolarpanel from "../assets/imgs/suntrackingsolarpanel.svg";
import pharmatrack from "../assets/imgs/pharmatrack.svg";
import reactTailwind from "../assets/imgs/react+tailwind.svg";

export const projectsData = [
  {
    title: "☕ Coffee Rush 💸",
    description: "A Roblox game where players craft unique coffee recipes and serve NPCs using guided brewing systems.",
    img: coffeerush,
    link: "https://www.roblox.com/games/2957036843/Coffee-Rush",
    status: "Testing Phase",
  },
  {
    title: "Inventory & Sales Tracking System",
    description: "A web-based system for real-time product tracking, sales report, incident handling and more feautures.",
    img: ists,
    link: "",
    status: "Coding Phase",
  },
  {
    title: "Sun Tracking Solar Panel",
    description: "An IoT-based project using 2 LDR sensors to track sun for maximum efficiency using Servo Motor and ESP82.",
    img: suntrackingsolarpanel,
    link: "",
    status: "Coding Phase",
  },
  {
    title: "Stock Market Tracker",
    description: "Stock Market Tracker is a Flutter app...",
    img: "", // Requires handling in MainProjectCard
    link: "",
    status: "Coding Phase",
  },
  {
    title: "Pharmatrack",
    description: "PharmaTrack is designed by showing medication information...",
    img: pharmatrack,
    link: "https://skelemete.github.io/pharmatrack/",
    status: "Done",
  },
  {
    title: "Portfolio Website",
    description: "This React + Tailwind portfolio.",
    img: reactTailwind,
    link: "linkhere",
    status: "Deployed",
  },
];