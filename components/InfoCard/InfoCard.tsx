import styles from "./InfoCard.module.scss";
import Image from "next/image";
import PropTypes, { InferProps } from "prop-types";

const InfoCardProps = {
  image: PropTypes.string.isRequired,
  header: PropTypes.oneOfType([PropTypes.string, PropTypes.any]),
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.any]),
};
const InfoCard = ({
  image,
  header,
  content,
}: InferProps<typeof InfoCardProps>): JSX.Element => {
  return (
    <article className={styles.card}>
      <Image src={image} alt="" />
      <div>
        <h3>{header}</h3>
        <p>{content}</p>
      </div>
    </article>
  );
};

export default InfoCard;
