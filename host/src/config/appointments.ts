import { IStackCard } from "../components/Appointment/StackCard";
type IAppointmentData = Omit<IStackCard & { id: string }, "position">[];
export const APPOINTMENT_CARD_DATA: IAppointmentData = [
    {
        id: "1",
        title: "One brand in one easy to use system, across all your locations",
        description:
            "Give customers a consistent brand experience, online and in person. With one source for all your business information, you'll unify your guest data, business operations, marketing efforts, and more from one login area.",
        image: "/appointment/map.png",
        cardClasses: "bg-[#00B0AD] text-gray-50",
        linkColor: "text-gray-50",
    },
    {
        id: "2",
        title:
            "Invite unlimited team members and assign custom roles and permissions",
        description:
            "This feature enables organizations to efficiently manage team members across one or multiple locations. Roles can be assigned and customized to control access, ensuring that team members only view or edit information and resources relevant to their roles.",
        image: "/appointment/roles.png",
        cardClasses: "bg-[#327FF0] text-gray-50",
        linkColor: "text-gray-50",
    },
    {
        id: "3",
        title: "Securely manage and organize payments: Cash, Debit, Credit",
        description:
            "Customers can securely payment via online credit, debit card, In person POS, Tap to pay and in app wallet. Also can record of cash and other gateway payment for reporting. Ambel integrates with gateways like Stripe, Clover, Square, and PayPal, providing comprehensive support for all your accounting and bookkeeping needs.",
        image: "/appointment/payment.png",
        cardClasses: "bg-[#0046B0] text-gray-50",
        linkColor: "text-gray-50",
    },
    {
        id: "4",
        title: "Third party apps Integrations tailored your business",
        description:
            "Connect tools like Google Meet, Zoom, Loom, Zapier, Zendesk, and WhatsApp to streamline operations. Ambel also integrates with payment gateways such as Stripe, PayPal, Clover, and Square, allowing you to access all features in one convenient platform.",
        image: "/appointment/Intrgration.png",
        cardClasses: "bg-[#EFF4FC]",
        linkColor: "text-gray-700",
    },
    {
        id: "5",
        title: "Create a free website and start selling your products online.",
        description:
            "With our Online Shop and Inventory Management System, you can easily manage inventory, streamline e-commerce operations, and provide an exceptional shopping experience for your customers. Enjoy full e-commerce functionality to manage products, orders, and inventory seamlessly.",
        image: "/appointment/shopping.png",
        cardClasses: "bg-[#FD9F00]",
        linkColor: "text-gray-700",
    },
    {
        id: "6",
        title: "Boost Sales with Gift Cards, Packages, and Memberships",
        description:
            "Enhance customer loyalty and increase revenue by offering gift cards for easy gifting, tailored packages that add value, and membership programs that reward repeat purchases. These options attract new customers, encourage larger purchases, and build a loyal customer base.",
        image: "/appointment/gift-card-green.png",
        cardClasses: "bg-[#79A78A] text-gray-50",
        linkColor: "text-gray-50",
    },
    {
        id: "11",
        title: "Boost Sales with Gift Cards, Packages, and Memberships",
        description:
            "Enhance customer loyalty and increase revenue by offering gift cards for easy gifting, tailored packages that add value, and membership programs that reward repeat purchases. These options attract new customers, encourage larger purchases, and build a loyal customer base.",
        image: "/appointment/gift-card-red.png",
        cardClasses: "bg-[#E41728] text-gray-50",
        linkColor: "text-gray-50",
    },
    {
        id: "7",
        title: "Unlimited SMS and Email Reminders, Notifications, and Marketing",
        description:
            "Stay connected with your customers effortlessly with unlimited SMS and email options. Send reminders for upcoming bookings, real-time notifications, and targeted marketing emails to keep your audience engaged and informed, all without limits. Boost customer satisfaction and retention while promoting your brand effectively via your own business email.",
        image: "/appointment/sms.png",
        cardClasses: "bg-[#EFFCFA]",
        linkColor: "text-gray-700",
    },
    {
        id: "8",
        title:
            "Create an Attractive and Customized Booking Page with your own domain",
        description:
            "Give your customers a seamless booking experience by personalizing your booking page. Customize colors, layout, and branding to reflect your business’s unique style, and add features like easy navigation, clear time slots, and engaging visuals to make booking effortless and enjoyable. Even build own website with custom domain.",
        image: "/appointment/website-widget.png",
        cardClasses: "bg-[#19525A] text-gray-50",
        linkColor: "text-gray-50",
    },
    {
        id: "9",
        title:
            "Streamline Daily Operations with E-Forms, Prescriptions, and Med Charts",
        description:
            "Digitize and organize your daily tasks efficiently with our all-in-one platform. Use customizable E-forms for patient intake and documentation, generate prescriptions instantly for seamless medication management, and maintain accurate med charts to monitor patient treatment plans. Simplify workflows, reduce paperwork, and ensure accurate, secure record-keeping for enhanced operational efficiency and patient care.",
        image: "/appointment/resource.png",
        cardClasses: "bg-[#DDF0FF]",
        linkColor: "text-gray-700",
    },
    {
        id: "10",
        title: "Comprehensive Dashboard with Real-Time Data Insights",
        description:
            "Access a powerful dashboard with real-time data visualization to monitor key metrics, track performance, and make instant, informed decisions. Gain valuable insights with dynamic charts and analytics, all in one intuitive interface.",
        image: "/appointment/laptop.png",
        cardClasses: "bg-[#FCF8EF]",
        linkColor: "text-gray-700",
    },
];
