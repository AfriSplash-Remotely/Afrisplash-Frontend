import styles from  './InfoCard.module.scss'
import Image from 'next/image'

interface InfoCardProps{
  image: any,
  header: string | any,
  content: string | any,
}
const InfoCard = ({image, header, content}: InfoCardProps) => {
    return (
      <article className={styles.card}>
        <Image src={image} alt='' />
        <div>
          <h3>{header}</h3>
          <p>
          {content}
          </p>
        </div>
      </article>
    )
}

export default InfoCard