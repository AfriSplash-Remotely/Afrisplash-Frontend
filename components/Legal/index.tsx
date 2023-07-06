import React from "react";
import ReactMarkdown, { Components } from "react-markdown";
import styles from "./style.module.scss";
interface PrivacyPolicyProps {
  content: string;
}
function chainUp(str: string) {
  return str?.replace(/\s+/g, "-").toLowerCase();
}

const renderers: Partial<Components> = {
  h1: ({ children, ...props }) => {
    const { node } = props;
    const id = children[0]?.toString().replace(/\s+/g, "-").toLowerCase();
    const headingRef = React.useRef<HTMLHeadingElement>(null);

    const handleClick = () => {
      if (headingRef.current) {
        headingRef.current.scrollIntoView({ behavior: "smooth" });
      }
    };

    return (
      <h2 id={id} className="text-primary_green" ref={headingRef}>
        <a href={`#${id}`} onClick={handleClick}>
          {children}
        </a>
      </h2>
    );
  },
  h2: ({ children, ...props }) => {
    const { node } = props;
    const id = children[0]?.toString().replace(/\s+/g, "-").toLowerCase();
    const headingRef = React.useRef<HTMLHeadingElement>(null);

    const handleClick = () => {
      if (headingRef.current) {
        headingRef.current.scrollIntoView({ behavior: "smooth" });
      }
    };

    return (
      <h2 id={id} ref={headingRef} className="text-primary_green">
        <a href={`#${id}`} onClick={handleClick}>
          {children}
        </a>
      </h2>
    );
  },
  h3: ({ children, ...props }) => {
    const { node } = props;

    const id = children[0]?.toString().replace(/\s+/g, "-").toLowerCase();
    const headingRef = React.useRef<HTMLHeadingElement>(null);

    const handleClick = () => {
      if (headingRef.current) {
        headingRef.current.scrollIntoView({ behavior: "smooth" });
      }
    };

    return (
      <h3
        id={id}
        className="text-primary_green"
        ref={headingRef}
      >
        <a href={`#${id}`} onClick={handleClick}>
          {children}
        </a>
      </h3>
    );
  },
};

const Legal: React.FC<PrivacyPolicyProps> = ({ content }) => {
  const headings = content.match(/#{2,}(.+)/g);

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <h3 className="text-primary_green ">Contents</h3>
        <ul>
          {headings &&
            headings.map((heading, index) => {
              const title = heading.replace(/#{2,}\s*/g, "");
              const anchor = title.replace(/\s+/g, "-").toLowerCase();

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
