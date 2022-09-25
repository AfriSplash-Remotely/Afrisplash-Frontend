import Logo from '../../assets/hire-talent-assets/afrisplash_logo.svg'
import ArrowDown from '../../assets/hire-talent-assets/arrow-down.svg'
import Link from 'next/link'
import Image from 'next/image'
import styles from './header.module.scss'

const Header = () => {

    return (
      <header className={styles.header}>
        <div className={styles.logo}>
          <Image src={Logo} alt='Afrisplash Logo' />
        </div>
        {/* page link */}
        <ul className={styles.navLink}>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/resources'>Resources</Link>
            <Image src={ArrowDown} alt='arrow-down' />
          </li>
          <li>
            <Link href='/candidates'>Candidates</Link>
          </li>
          <li>
            <Link href='/employer'>Employer</Link>
          </li>
          <li>
            <Link href='/hire-talent'>Hire talent</Link>
          </li>
          <li>
            <Link href='/remote-jobs'>Remotes jobs</Link>
          </li>
        </ul>

        <div className={styles.btnContainer}>
          <button className={styles.signupBtn}>Sign in</button>
          <button className={styles.postjobsBtn}>Post jobs</button>
        </div>

        <div className={styles.hamburger}>
          <span>&#9776;</span>
        </div>
      </header>
    )
}

export default Header