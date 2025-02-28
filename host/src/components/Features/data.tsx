import { IFeaturesCard } from "./FeaturesCard";
import {
  FaCalendarAlt,
  FaVideo,
  FaCreditCard,
  FaUsers,
  FaBell,
  FaGlobe,
  FaChartLine,
  FaFolderOpen,
} from "react-icons/fa"; // Importing icons from react-icons

export const FEATURES_CARDS: IFeaturesCard[] = [
  {
    title: "Schedule & Booking",
    description:
      "Create, schedule, and send your clients to your Ambel booking page, where they can book on any device.",
    Icon: FaCalendarAlt,
  },
  {
    title: "Live Consultant",
    description:
      "Integrate Meet, Zoom, and Loom to communicate with your customers or clients via video conference.",
    Icon: FaVideo,
  },
  {
    title: "Payments",
    description:
      "Send custom invoices, take POS and cash payments, and accept credit or debit card payments from anywhere.",
    Icon: FaCreditCard,
  },
  {
    title: "Customer Tracking",
    description:
      "Manage customers, send marketing emails and messages, create records, and track via notes and case studies.",
    Icon: FaUsers,
  },
  {
    title: "Notification",
    description:
      "Automatically notify your clients and practitioners with reminders via SMS and email in a single setup.",
    Icon: FaBell,
  },
  {
    title: "Website Builder",
    description:
      "Get a free website, design and customize your booking website for your business without any coding.",
    Icon: FaGlobe,
  },
  {
    title: "Reports",
    description:
      "Powerful data and graphs at your fingertips to monitor day-to-day activities and generate reports.",
    Icon: FaChartLine,
  },
  {
    title: "Resources",
    description:
      "Create and share resources like prescriptions, documentations, medical charts, and videos.",
    Icon: FaFolderOpen,
  },
];
