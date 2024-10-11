import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { motion, useScroll } from "framer-motion";

import Navbar from "../navbar/navbar.tsx";




import "./header.scss";

const Header = () => {
    const { scrollY } = useScroll();
    const navigate = useNavigate();
    const { t } = useTranslation("core");

    const handleClickHeaderTitle = () => {
        navigate("/");
        window.scroll(0, 0);
    };

    useEffect(() => {
        let prevScrollpos = window.pageYOffset;
        window.onscroll =  ()=> {
            const currentScrollPos = window.pageYOffset;
            if (window.innerWidth > 900) {
                const navbar = document.getElementById("header");
                if (prevScrollpos > currentScrollPos) {
                    if (currentScrollPos < 100) {
                        navbar.classList.remove("background-color");
                        navbar.classList.add("background-transparent");
                    } else {
                        navbar.classList.add("background-color");
                    }
                    navbar.style.top = "0";
                } else if (currentScrollPos <= 100) {
                    navbar.classList.add("background-color");
                } else {
                    navbar.style.top = "-10%";
                }
                prevScrollpos = currentScrollPos;
            }
        };
    });

    return (
        <motion.header className="header" id="header">
            <div onClick={handleClickHeaderTitle}>
                <h1 className="header__title" >{t("header.name")}</h1>
            </div>
            <Navbar/>
        </motion.header>
    );
};

export default Header;