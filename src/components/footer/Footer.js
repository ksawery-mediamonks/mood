import React, { useState, useEffect } from "react";
import Button from "../general/button/Button";
import Face from "../../../public/icons/buttons/face.svg";
import styles from "./Footer.module.scss";
import classNames from "classnames";
import data from "../../data/footer.json";

export default function Footer(props) {
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [isCtaActive, setIsCtaActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDisplayed(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const onClick = () => {
    props.onClick(isDisplayed);
    setIsDisplayed(false);
    setIsCtaActive(true);
  };

  return (
    <footer className={styles.container}>
      {isDisplayed ? (
        <div className={styles.tooltip} onClick={onClick}>
          <span className={styles.copy}>{data.tooltip[0]}</span>
        </div>
      ) : null}

      <div className={styles.wrapper}>
        <Button
          className={classNames(
            styles.button,
            isDisplayed ? styles["displayed"] : ""
          )}
          disabled={isCtaActive}
          onClick={onClick}
          aria-label="Open"
        >
          <Face />
        </Button>
        <Button
          disabled={true}
          className={styles.button}
          onClick={onClick}
          aria-label="Info"
        >
          ?
        </Button>
      </div>
    </footer>
  );
}
