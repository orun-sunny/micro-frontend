import { IPricingCard } from "../components/Pricing/PricingCard";




export const NAV_LIST = [
    {
        id: "#feature",
        label: "Features",
    },
    {
        id: "plans",
        path: "http://localhost:5174/",
        label: "Plans",
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


export const PRICING_DATA: IPricingCard[] = [
    {

        price: {
            monthly: "10%",
            yearly: "30%",
        },
        headingText: "Pay As You Go",
        description: "10% from your customer payment",
        items: [
            "Only pre-paid booking",
            "Both practitioner and Organization",
            "Up to 5 practitioners in organization",
            "2 staff members are allowed",
            "Basic chat and email support",
        ],
    },
    {

        price: {
            monthly: "$49",
            yearly: "$59",
        },
        headingText: "Practitioner",
        description: "1 practitioner license/monthly",
        items: [
            "All booking options",
            "All schedule Feature",
            "Individual single practitioner license",
            "3 staff members are allowed",
            "Unlimited email marketing",
        ],
    },
    {

        price: {
            monthly: "$39",
            yearly: "$99",
        },
        headingText: "Enterprise",
        description: "Practitioner Number",
        items: [
            "All booking options",
            "Both practitioner and Organization",
            "Unlimited practitioners and staff",
            "Customizable 6 page website",
            "E-commerce functionality",
        ],
        buttonText: "Contact Sales",
    },
];

