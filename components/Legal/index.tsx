import React, { FC, ReactNode, useRef } from "react";
import ReactMarkdown from "react-markdown";
import styles from "./style.module.scss";

interface LegalProps {
  content: string;
}

function chainUp(str: string): string {
  return str?.replace(/\s+/g, "-").toLowerCase() ?? "";
}

interface HeadingProps {
  children?: ReactNode;
  node?: any;
}

function useScrollIntoView(): {
  headingRef: React.RefObject<HTMLHeadingElement>;
  handleClick: () => void;
} {
  const headingRef = useRef<HTMLHeadingElement>(null);

  const handleClick = () => {
    if (headingRef.current) {
      headingRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return { headingRef, handleClick };
}

const H1: FC<HeadingProps> = ({ children }) => {
  const { headingRef, handleClick } = useScrollIntoView();
  const id =
    typeof children === "string" ? chainUp(children.toString()) : undefined;

  return (
    <h1 id={id} className="text-primary_green" ref={headingRef}>
      <a href={`#${id}`} onClick={handleClick}>
        {children}
      </a>
    </h1>
  );
};

const H2: FC<HeadingProps> = ({ children }) => {
  const { headingRef, handleClick } = useScrollIntoView();
  const id =
    typeof children === "string" ? chainUp(children.toString()) : undefined;

  return (
    <h2 id={id} className="text-primary_green" ref={headingRef}>
      <a href={`#${id}`} onClick={handleClick}>
        {children}
      </a>
    </h2>
  );
};

const H3: FC<HeadingProps> = ({ children }) => {
  const { headingRef, handleClick } = useScrollIntoView();
  const id =
    typeof children === "string" ? chainUp(children.toString()) : undefined;

  return (
    <h3 id={id} className="text-primary_green" ref={headingRef}>
      <a href={`#${id}`} onClick={handleClick}>
        {children}
      </a>
    </h3>
  );
};

const renderers: any = {
  h1: H1,
  h2: H2,
  h3: H3,
};

const Legal: FC<LegalProps> = ({ content }) => {
  const headings = content.match(/#{2,}(.+)/g);

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <h3 className="text-primary_green ">Contents</h3>
        <ul>
          {headings &&
            headings.map((heading, index) => {
              const title = heading.replace(/#{2,}\s*/g, "");
              const anchor = chainUp(title);

              return (
                <li key={index}>
                  <a href={`#${anchor}`}>{title}</a>
                </li>
              );
            })}
        </ul>
      </div>
      <div className={styles.privacyPolicy}>
        <ReactMarkdown components={renderers}>{content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Legal;
