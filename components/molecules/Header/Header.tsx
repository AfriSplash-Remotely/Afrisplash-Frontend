import styles from "./Header.module.scss";
import card_1 from "assets/home-page/card_1.png";
import card_2 from "assets/home-page/card_2.png";
import card_3 from "assets/home-page/card_3.png";
import Image from "next/image";
import Button from "../../atoms/Button/Button";
import { ArrowRightIcon } from "@heroicons/react/24/outline";


const Header = () => {
  return (
    <div className={`${styles.wrapper} w-full`}>
      <div className="w-10/12 mx-auto flex justify-between">
        <section className="w-6/12 mt-20">
          <div className="space-y-4">
            <h1 className="capitalize text-6xl font-bold text-dark_blue">
              The <span className="text-primary_green">gateway</span> to
              africa's remote workforce
            </h1>
            <div className="space-y-12">
            <p className="w-10/12 leading-7">
              We put the <strong>A</strong> back in <strong>EMEA</strong>. Find
              the best remote jobs at truly inclusive and remote-friendly
              companies
            </p>
            <div className="flex space-x-5">
              <Button
                type="filled"
                bgColor="dark_blue"
                color="white"
                text="join the community"
                classes="w-max px-3 h-10  md:px-3 xl:px-5 rounded-md text-sm capitalize text-white bg-dark_blue hover:opacity-80"
              />
              <button className="flex space-x-2 items-center text-dark_blue"><span>Post a job</span><span><ArrowRightIcon className="w-5 h-4 "/></span> </button>
            </div>
            </div>
          </div>
        </section>
        <section className="w-5/12">
          <div>
            <div className={`${styles.imageWrapper} relative`}>
              <div
                className={`${styles.imageWrapper_image} ${styles.imageWrapper_image_1}`}
              >
                <Image src={card_1} alt="card_1" />
              </div>
              <div
                className={`${styles.imageWrapper_image} ${styles.imageWrapper_image_2}`}
              >
                <Image
                  className="absolute top-48 left-0"
                  src={card_2}
                  alt="card_2"
                />
              </div>
              <div
                className={`${styles.imageWrapper_image} ${styles.imageWrapper_image_3}`}
              >
                <Image
                  className="absolute bottom-0 left-48"
                  src={card_3}
                  alt="card_3"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Header;
