import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import Button from "../components/general/button/Button";
import Icon from "../components/icon/icon";
import data from "../data/home.json";
import classNames from "classnames";
import styles from "./index.module.scss";

export default function Home(props) {
  const containerRef = useRef();
  const wrapperRef = useRef();
  const iconRefs = useRef([]);
  iconRefs.current = [];
  const [isAligned, setIsAligned] = useState(false);

  const addToRefs = (element) => {
    if (element && !iconRefs.current.includes(element)) {
      iconRefs.current.push(element);
    }
  };

  useEffect(() => {
    let timeline = gsap.timeline();

    iconRefs.current.forEach((element) => {
      timeline.set(element, {
        y: containerRef.current.clientHeight / 2,
        scale: 0,
      });
    });
    timeline.to(iconRefs.current, {
      scale: 1,
      stagger: 0.2,
      duration: 2,

      ease: "back.easeOut",
    });
  }, []);

  useEffect(() => {
    if (!props.disabled) {
      let numberOfIcons = iconRefs.current.length;
      let timeline = gsap.timeline();

      let iconDiameterMobile = Math.round(
        containerRef.current.clientHeight / numberOfIcons
      );
      let iconDiameterDesktop = Math.round(
        containerRef.current.clientWidth / numberOfIcons
      );

      timeline.to(iconRefs.current, {
        stagger: 0.2,
        duration: 1,
        //TODO! IF MOBILE VERTICAL IF DESKTOP HORIZONTAL
        width: iconDiameterMobile,
        height: iconDiameterMobile,
        x: containerRef.current.clientWidth / 2 - iconDiameterMobile / 2,
        y: 0,

        ease: "power3.inOut",
      });
      iconRefs.current.forEach((element) => {
        timeline.set(
          element.children[1],
          {
            width: "100%",
            height: "100%",
          },
          2
        );
      });
    }
  }, [props.disabled]);

  return (
    <main
      className={classNames(
        styles.container,
        props.disabled ? styles["disabled"] : null
      )}
      ref={containerRef}
    >
      <div
        className={classNames(styles.wrapper, isAligned ? styles["align"] : "")}
        ref={wrapperRef}
      >
        {data.items.map((item, index) => {
          return (
            <div ref={addToRefs} key={index} data-mood={index + 1}>
              <span className={styles.copy}>{item.copy}</span>
              <Button
                aria-label={item.copy}
                className={classNames(
                  styles.button,
                  styles[`mood${index + 1}`]
                )}
              >
                <Icon index={index} />
              </Button>
            </div>
          );
        })}
      </div>
    </main>
  );
}
