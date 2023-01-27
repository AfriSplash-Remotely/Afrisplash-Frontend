import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import card_1 from "assets/home-page/card_1.png";
import card_2 from "assets/home-page/card_2.png";
import card_3 from "assets/home-page/card_3.png";
import styles from "./Header.module.scss";
import Button from "../../atoms/Button/Button";
import {motion} from 'framer-motion';

const Header = (): JSX.Element => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`${styles.wrapper} w-full`}
    >
      <div className="w-10/12 mx-auto flex justify-between">
        <section className="w-6/12 mt-20">
          <motion.div className="space-y-4">
            <motion.h1
              initial={{ y: -100 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.8 }}
              className="capitalize text-6xl font-bold text-dark_blue"
            >
              The <span className="text-primary_green">gateway</span> to
              africa&apos;s remote workforce
            </motion.h1>
            <motion.div
              className="space-y-12"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1}}
              transition={{ duration: 0.8 }}
            >
              <p className="w-10/12 leading-7">
                We put the <strong>A</strong> back in <strong>EMEA</strong>.
                Find the best remote jobs at truly inclusive and remote-friendly
                companies
              </p>
              <motion.div
                className="flex space-x-5"
                initial={{ y: 100 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Button
                  type="filled"
                  // bgColor="dark_blue"
                  color="white"
                  text="join the community"
                  classes="w-max px-5 h-12  md:px-3 xl:px-5 rounded-md text-sm capitalize text-white bg-dark_blue hover:opacity-80"
                />
                <button className="flex space-x-2 items-center text-dark_blue">
                  <span>Post a job</span>
                  <span>
                    <ArrowRightIcon className="w-5 h-4 " />
                  </span>
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>
        <section className="w-5/12">
          <div>
            <div className={`${styles.imageWrapper} relative`}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                animate={{
                  scale: [1.1, 1],
                  y: [-100, 0],
                }}
                transition={{ duration: 0.8 }}
                className={`${styles.imageWrapper_image} ${styles.imageWrapper_image_1}`}
              >
                <Image src={card_1} alt="card_1"/>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                animate={{
                  scale: [1.1, 1],
                  x: [-100, 0],
                }}
                transition={{ duration: 0.5 }}
                className={`${styles.imageWrapper_image} ${styles.imageWrapper_image_2}`}
              >
                <Image
                  className="absolute top-48 left-0"
                  src={card_2}
                  alt="card_2"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                animate={{
                  scale: [1.1, 1],
                  y: [100, 0],
                }}
                transition={{ duration: 1 }}
                className={`${styles.imageWrapper_image} ${styles.imageWrapper_image_3}`}
              >
                <Image
                  className="absolute bottom-0 left-48"
                  src={card_3}
                  alt="card_3"
                />
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default Header;
