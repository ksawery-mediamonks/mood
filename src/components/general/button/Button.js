/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import { omit } from "lodash-es";

import Link from "next/link";
import classNames from "classnames";

import styles from "./Button.module.scss";

// type ButtonProps = {
//   id?: string,
//   className?: string,
//   href?: string,
//   target?: "_blank",
//   children?: ReactNode,
//   onClick?: (
//     event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
//   ) => void,
//   onBlur?: () => void,
// };

const Button = ({ ...otherProps }) => {
  const { href, target, className, children, onClick } = otherProps;
  const classes = classNames(styles.button, className);
  const props = omit(otherProps, "className");

  if (href) {
    if (target) {
      return (
        <a
          className={classes}
          href={href}
          target={target}
          onClick={(event) => onClick?.(event)}
          {...props}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href}>
        <a className={classes} onClick={(event) => onClick?.(event)} {...props}>
          {children}
        </a>
      </Link>
    );
  }

  return (
    <button
      className={classes}
      onClick={(event) => onClick?.(event)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
