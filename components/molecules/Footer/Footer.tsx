import styles from "./Footer.module.scss";

const Footer = () => {
  let footer = [
    {
      title: "talents",
      items: [
        { title: "product designers" },
        { title: "website developers" },
        { title: "software engineers" },
        { title: "data analysts" },
        { title: "brand identity designers" },
        { title: "product managers" },
      ],
    },
    {
      title: "about",
      items: [
        { title: "afrisplash" },
        { title: "careers" },
        { title: "FAQs" },
        { title: "our team" },
        { title: "contact" },
      ],
    },
    {
      title: "others",
      items: [
        { title: "co-working space" },
        { title: "forum" },
        { title: "blogs & news" },
        { title: "events" },
      ],
    },
    {
      title: "social",
      items: [
        { title: "twitter" },
        { title: "linkedin" },
        { title: "facebook" },
        { title: "instagram" },
        { title: "product hunt" },
      ],
    },
  ];
  return (
    <footer className="bg-dark_blue w-full py-5">
      <div className="w-11/12 md:w-10/12 mx-auto space-y-12">
        <div className="flex w-full justify-between flex-wrap pt-14">
          {footer.map((item: any, index) => (
            <section key={index} className="text-white_2 mx-5 py-3 w-4/12 sm:w-3/12 md:w-max space-y-4">
              <div className="capitalize font-bold text-sm md:text-base">{item.title}</div>
              <ul className="space-y-3 text-xs sm:text-sm md:text-base">
                {item.items.map((subItems: any, index: number) => (
                  <li key={index} className="capitalize">{subItems.title}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
        <div className="text-white_2 flex items-center flex-col md:flex-row md:justify-between border-t border-white_2/20 py-10">
            <section>
                <span>&copy;</span>
                <span className="capitalize xs:text-xs md:text-sm lg:text-base">afrisplash remotely. all rights reserved</span>
            </section>
            <section>
                <ul className="flex space-x-3  text-sm lg:text-base">
                    <li>Terms of use</li>
                    <li>Privacy policy</li>
                    <li>Copyright policy</li>
                </ul>
            </section>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
