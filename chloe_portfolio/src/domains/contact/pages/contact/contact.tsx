import "./contact.scss";

import { PortfolioPage } from "../../../core";

import { useTranslation } from "react-i18next";

const Contact = () => {
    const { t } = useTranslation("contact");
    return (
        <PortfolioPage className="contact">
            <h2>Contact</h2>
            <h2>Get in touch</h2>
            <p>If you want to collaborate and discuss a project, please contact me. I’m usually based in Paris, but I am open to work anywhere in the world</p>
        </PortfolioPage>
    );
};

export default Contact;

