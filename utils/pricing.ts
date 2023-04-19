interface pricingI {
  title: string;
  description: string;
  price: string;
  offers: string[];
  isPopular: boolean;
}
const pricingData: pricingI[] = [
  {
    title: "Silver Plan",
    description: `1  job credit can be used to feature 1 job post`,
    price: "$20.00",
    isPopular: false,
    offers: ["1 job credit", "Featured for 1 week", "Published for 2 months", "1 day approval", "Verified company"],
  },
  {
    title: "Bronze Plan",
    description: `3 job credits can be used to feature 3 job posts`,
    price: "$50.00",
    isPopular: true,
    offers: ["3 job credit", "Featured for 1 week", "Published for 2 months", "1 day approval", "Verified company"],
  },
  {
    title: "Diamond Plan",
    description: `1  job credit can be used to feature 1 job post`,
    price: "$70.00",
    isPopular: false,
    offers: ["5 job credit", "Featured for 1 week", "Published for 2 months", "1 day approval", "Verified company"],
  },
  {
    title: "Unlimited Plan",
    description: `1  job credit can be used to feature 1 job post`,
    price: "$100.00",
    isPopular: false,
    offers: ["1 job credit", "Featured for 1 week", "Published for 2 months", "1 day approval", "Verified company"],
  },
];

export { pricingData };
export type { pricingI };
