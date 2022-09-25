import styles from './footer.module.scss'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <div className={styles.talentAboutContainer}>
          <ul className={styles.talents}>
            <li>Talents</li>
            <li>
              <Link href='/UX-Designers'>UX Designers</Link>
            </li>
            <li>
              <Link href='/Website-Developers'>Website Developers</Link>
            </li>
            <li>
              <Link href='/Software-Engineers'>Software Engineers</Link>
            </li>
            <li>
              <Link href='/Data-Anyalysts'>Data Anyalysts</Link>
            </li>
            <li>
              <Link href='/Brand-Identity-Designers'>
                Brand Identity Designers
              </Link>
            </li>
            <li>
              <Link href='Product-Managers'>Product Managers</Link>
            </li>
          </ul>
          <ul className={styles.about}>
            <li>About</li>
            <li>
              <Link href='/Afrisplash'>Afrisplash</Link>
            </li>
            <li>
              <Link href='/Careers'>Careers</Link>
            </li>
            <li>
              <Link href='/FAQs'>FAQs</Link>
            </li>
            <li>
              <Link href='/Our-Team'>Our Team</Link>
            </li>
            <li>
              <Link href='/Contact'>Contact</Link>
            </li>
          </ul>
        </div>
        <div className={styles.othersSocialContainer}>
          <ul className={styles.others}>
            <li>Others</li>
            <li>
              <Link href='/Co-working-Space'>Co-working Space</Link>
            </li>
            <li>
              <Link href='/Forum'>Forum</Link>
            </li>
            <li>
              <Link href='/blogs-news'>Blogs &amp; News</Link>
            </li>
            <li>
              <Link href='/Events'>Events</Link>
            </li>
          </ul>
          <ul className={styles.social}>
            <li>Social</li>
            <li>
              <a href='...#'>Twitter</a>
            </li>
            <li>
              <a href='...#'>LinkedIn</a>
            </li>
            <li>
              <a href='...#'>Facebook</a>
            </li>
            <li>
              <a href='...#'>Instagram</a>
            </li>
            <li>
              <a href='...#'>Product Hunt</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.copyRightSection}>
        <p>&copy; 2022 Afrispalsh Remotely. All rights reserved.</p>
        <div className={styles.policySection}>
          <p>Terms of use</p>
          <p>Privacy policy</p>
          <p>Copyright policy</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
