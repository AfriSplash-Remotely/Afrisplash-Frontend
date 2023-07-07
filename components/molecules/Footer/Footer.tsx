import Link from "next/link";
import { useTranslation } from "react-i18next";

type FooterItems = {
  title: string,
  items: { title: string, url: string, external: boolean }[]
}

type PolicyItems = {
  title:string,
  url:string
}


const Footer = (): JSX.Element => {
  const { t: translate } = useTranslation("home");

  const footer: FooterItems[] = [
    {
      title: `${translate("talents")}`,
      items: [
        {
          external: false,
          title: `${translate("product designers")}`,
          url: "#",
        },
        {
          external: false,
          title: `${translate("website developers")}`,
          url: "#",
        },
        {
          external: false,
          title: `${translate("software engineers")}`,
          url: "#",
        },
        {
          external: false,
          title: `${translate("data analysts")}`,
          url: "#",
        },
        {
          external: false,
          title: `${translate("brand identity designers")}`,
          url: "#",
        },
        {
          external: false,
          title: `${translate("product managers")}`,
          url: "#",
        },
      ],
    },
    {
      title: `${translate("about")}`,
      items: [
        {
          external: false,
          title: `${translate("afrisplash")}`,
          url: "/about-us",
        },
        { external: false, title: `${translate("careers")}`, url: "#" },
        { external: false, title: `${translate("FAQs")}`, url: "#" },
        { external: false, title: `${translate("our team")}`, url: "#" },
        { external: false, title: `${translate("contact")}`, url: "#" },
      ],
    },
    {
      title: `${translate("others")}`,
      items: [
        {
          external: false,
          title: `${translate("co-working space")}`,
          url: "#",
        },
        { external: false, title: `${translate("forum")}`, url: "#" },
        {
          external: false,
          title: `${translate("blogs & news")}`,
          url: "/blog",
        },
        { external: false, title: `${translate("events")}`, url: "#" },
      ],
    },
    {
      title: `${translate("social")}`,
      items: [
        {
          external: true,
          title: `${translate("twitter")}`,
          url: "https://twitter.com/Afrisplash",
        },
        {
          external: true,
          title: `${translate("linkedin")}`,
          url: "https://www.linkedin.com/company/afrisplash/",
        },
        {
          external: true,
          title: `${translate("facebook")}`,
          url: "https://web.facebook.com/AfriSplashRemotely",
        },
        { external: true, title: `${translate("instagram")}`, url: "#" },
        { external: true, title: `${translate("product hunt")}`, url: "#" },
      ],
    },
  ];

  const policies: PolicyItems[] = [
    { title: `${translate("Terms of use")}`, url: "/terms" },
    { title: `${translate("Privacy policy")}`, url: "/privacy" },
    { title: `${translate("Copyright policy")}`, url: "/copyright-policy" },
  ];
  return (
    <footer className="bg-dark_blue w-full py-5">
      <div className="w-11/12 md:w-10/12 mx-auto space-y-12">
        <div className="flex w-full justify-between flex-wrap pt-14">
          {footer.map((item: FooterItems, index) => (
            <section
              key={index}
              className="text-white_2 mx-5 py-3 w-4/12 sm:w-3/12 md:w-max space-y-4"
            >
              <div className="capitalize font-bold text-sm md:text-base">
                {item.title}
              </div>
              <ul className="space-y-3 text-xs sm:text-sm md:text-base">
                {item.items.map((subItems: any, index: number) => (
                  <li key={index} className="capitalize">
                    <Link
                      href={subItems.url}
                      target={subItems.external ? "_blank" : "_self"}
                    >
                      {subItems.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
        <div className="text-white_2 flex items-center flex-col md:flex-row md:justify-between border-t border-white_2/20 py-10">
          <section>
            <span>&copy;</span>
            <span className="capitalize xs:text-xs md:text-sm lg:text-base">
              {translate("afrisplash remotely. all rights reserved")}
            </span>
          </section>
          <section>
            <ul className="flex space-x-3  text-sm lg:text-base">
              {policies.map((policy: PolicyItems, index) => (
                <li key={index}>
                  <Link href={policy.url}>{policy.title}</Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
