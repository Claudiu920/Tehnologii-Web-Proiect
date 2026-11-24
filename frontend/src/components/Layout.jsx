import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

function navClass({ isActive }) {
  return isActive ? `${styles.link} ${styles.active}` : styles.link;
}

export default function Layout() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.bannerWrapper}>
          <img
            src="/bannersite.jpg"
            alt="Banner PhoneRO"
            className={styles.banner}
          />
        </div>

        <div className={styles.inner}>
          <div>
            <span className={styles.logo}>PhoneRO</span>
            <p className={styles.tagline}>
              Cel mai nou magazin de telefoane de pe piața din România.
            </p>
          </div>

          <div className={styles.controls}>
            <nav className={styles.nav} data-testid="nav">
              <NavLink to="/" end className={navClass}>
                Telefoane
              </NavLink>
              <NavLink to="/despre" className={navClass}>
                Despre
              </NavLink>
            </nav>

            <button
              type="button"
              className={styles.themeToggle}
              onClick={() => setIsDark((prev) => !prev)}
            >
              {isDark ? "Mod Luminos ☀️" : "Mod Întunecat 🌙"}
            </button>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <Outlet />
      </main>

      <footer className={styles.footer}>Proiect Tehnologii Web</footer>
    </div>
  );
}