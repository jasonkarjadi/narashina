"use client";

import { faBars, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, useEffect, useState } from "react";
import { navbtnvals } from "../constants";
import styles from "./topnav.module.scss";

const TopNav: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
    return () => {};
  }, [pathname]);

  return (
    <div className={styles.topnavwrap}>
      <button onClick={() => setIsOpen((isOpen) => !isOpen)}>
        <FontAwesomeIcon icon={isOpen ? faChevronDown : faBars} />
      </button>
      <nav className={isOpen ? "flex" : "hidden"}>
        {navbtnvals.map(({ link, kanji, ruby }, id) => (
          <Link key={id} href={link} passHref legacyBehavior>
            <button>
              <p className={styles.navkanji}>{kanji}</p>
              <p className={styles.navruby}>{ruby}</p>
            </button>
          </Link>
        ))}
        <button />
        <button />
      </nav>
    </div>
  );
};

export default TopNav;
