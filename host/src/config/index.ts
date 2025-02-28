import { TNavList } from "../shared/Header/Header";
import aqua from "../assets/brands/aqua.png";
import logoCfr from "../assets/brands/logo-cfr.png";
import muchaMarketing from "../assets/brands/mucha-marketing.png";
import skinPrecision from "../assets/brands/skin-precision.png";
import rhLogo from "../assets/brands/rh-logo.png";
import spaClinics from "../assets/brands/spa-clinics.png";

export const NAV_LIST: TNavList[] = [
    {
        id: "#feature",
        label: "Features",
    },
    {
        id: "pricing",
        path: "http://localhost:5174/",
        label: "Pricing",
        hasDropDown: false,
    },
    {
        id: "#solutions",
        label: "Solutions",
    },
    {
        id: "#resources",
        label: "Resources",
    },
    {
        id: "#find-professionals",
        label: "Find Professionals",
        hasDropDown: false,
    },
    {
        id: "#help",
        label: "Help",
    },
];

export const BRANDS = [
    { id: "1", img: aqua, alt: "aqua" },
    { id: "2", img: logoCfr, alt: "cfr" },
    { id: "3", img: muchaMarketing, alt: "mucha" },
    { id: "4", img: skinPrecision, alt: "skin-precision" },
    { id: "5", img: rhLogo, alt: "rh-logo" },
    { id: "6", img: spaClinics, alt: "spa-clinics" },
];
