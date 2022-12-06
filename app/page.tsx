import Link from "next/link";
import { FC } from "react";
import { navbtnvals } from "../constants";
import styles from "./styles.module.scss";

const PageIndex: FC = () => {
  return (
    <main className={styles.maincenter}>
      <section className={styles.headingbox}>
        <h1>ならしな</h1>
        <h2>執筆書庫</h2>
      </section>
      <nav className={styles.frontnav}>
        {navbtnvals.map(({ link, kanji, ruby }, id) => (
          <Link key={id} href={link} passHref legacyBehavior>
            <button>
              <span>
                <p className={styles.navkanji}>{kanji}</p>
                <p className={styles.navruby}>{ruby}</p>
              </span>
            </button>
          </Link>
        ))}
        <button />
        <button />
      </nav>
    </main>
  );
};

export default PageIndex;
