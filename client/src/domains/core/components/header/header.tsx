import {useCallback, useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";

import "./header.scss";
import {NAV_TABS} from "@components/navbar/navbar.config";

interface HeaderProps {
  className?: string;
  isHidden?: boolean;
}

const SCROLL_THRESHOLD = 5;

export const Header = ({className, isHidden}: HeaderProps) => {
  const {t} = useTranslation("core");
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > SCROLL_THRESHOLD);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, {passive: true});
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleNavClick = (key: string) => {
    if (key.startsWith("#")) {
      navigate("/");
      setTimeout(() => {
        document.getElementById(key.slice(1))?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      navigate(`/${key}`);
    }
  };

  const handleLogoClick = () => {
    setMenuOpen(false);
    navigate("/");
  };

  return (
    <>
      {/* ── Header bar ── */}
      <header className={`header ${isHidden ? "header--hidden" : ""} ${scrolled ? "header--scrolled" : ""} ${className ?? ""}`}>
        <a
          className="header__logo"
          href="/"
          onClick={(e) => {
            e.preventDefault();
            handleLogoClick();
          }}
        >
          {t("header.name")}
        </a>

        <button
          className="header__burger"
          onClick={() => setMenuOpen(true)}
          aria-label="Open navigation"
        >
          <span/>
          <span/>
          <span/>
        </button>

        {/* Desktop nav (inline) */}
        <nav className="header__nav header__nav--desktop">
          {NAV_TABS.map((navTab) => (
            <a
              key={navTab.key}
              className="header__nav-link"
              href={`/${navTab.key}`}
              onClick={(e) => { e.preventDefault(); handleNavClick(navTab.key); }}
            >
              {t(`navbar.tabs.${navTab.key}`)}
            </a>
          ))}
        </nav>
      </header>

      {/* ── Mobile drawer ── */}
      <div className={`drawer ${menuOpen ? "drawer--open" : ""}`}>
        <div className="drawer__header">
          <a
            className="drawer__logo"
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleLogoClick();
            }}
          >
            {t("header.name")}
          </a>
          <button
            className="drawer__close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation"
          >
            <span/>
            <span/>
          </button>
        </div>

        <nav className="drawer__nav">
          {NAV_TABS.map((navTab) => (
            <a
              key={navTab.key}
              className="drawer__nav-link"
              href={`/${navTab.key}`}
              onClick={() => setMenuOpen(false)}
            >
              {t(`navbar.tabs.${navTab.key}`)}
            </a>
          ))}
        </nav>
      </div>

      {/* ── Backdrop ── */}
      {menuOpen && (
        <div
          className="drawer-backdrop"
          role="button"
          tabIndex={-1}
          aria-label="Close navigation"
          onClick={() => setMenuOpen(false)}
          onKeyDown={(e) => {
            if (e.key === "Escape") setMenuOpen(false);
          }}
        />
      )}
    </>
  );
};
