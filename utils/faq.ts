interface faqBodyI {
  title: string;
  body: string;
}
interface faqI {
  Talent: faqBodyI[];
  Employers: faqBodyI[];
}
const faq: faqI = {
  Talent: [
    {
      title: "What is Afrisplash Remotely about?",
      body: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vel accusantium magni explicabo
            neque, natus veritatis dicta deleniti laborum quia voluptas iusto ducimus adipisci, dolorem
             excepturi, pariatur eveniet reprehenderit soluta.`,
    },
    {
      title: "How do I get started?",
      body: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vel accusantium magni explicabo
            neque, natus veritatis dicta deleniti laborum quia voluptas iusto ducimus adipisci, dolorem
             excepturi, pariatur eveniet reprehenderit soluta.`,
    },
    {
      title: "Start from Here?",
      body: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vel accusantium magni explicabo
            neque, natus veritatis dicta deleniti laborum quia voluptas iusto ducimus adipisci, dolorem
             excepturi, pariatur eveniet reprehenderit soluta.`,
    },
    {
      title: "Will I pay any fees?",
      body: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vel accusantium magni explicabo
            neque, natus veritatis dicta deleniti laborum quia voluptas iusto ducimus adipisci, dolorem
             excepturi, pariatur eveniet reprehenderit soluta.`,
    },
  ],
  Employers: [
    {
      title: "What is Afrisplash Remotely about?",
      body: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vel accusantium magni explicabo
            neque, natus veritatis dicta deleniti laborum quia voluptas iusto ducimus adipisci, dolorem
             excepturi, pariatur eveniet reprehenderit soluta.`,
    },
    {
      title: "How do I handle compliance issues when hiring African talents?",
      body: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vel accusantium magni explicabo
            neque, natus veritatis dicta deleniti laborum quia voluptas iusto ducimus adipisci, dolorem
             excepturi, pariatur eveniet reprehenderit soluta.`,
    },
    {
      title: "Why should I hire African talents?",
      body: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vel accusantium magni explicabo
            neque, natus veritatis dicta deleniti laborum quia voluptas iusto ducimus adipisci, dolorem
             excepturi, pariatur eveniet reprehenderit soluta.`,
    },
    {
      title: "What is the Code of conduct for recruiters?",
      body: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vel accusantium magni explicabo
            neque, natus veritatis dicta deleniti laborum quia voluptas iusto ducimus adipisci, dolorem
             excepturi, pariatur eveniet reprehenderit soluta.`,
    },
    {
      title: "How do I promote a job?",
      body: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vel accusantium magni explicabo
            neque, natus veritatis dicta deleniti laborum quia voluptas iusto ducimus adipisci, dolorem
             excepturi, pariatur eveniet reprehenderit soluta.`,
    },
    {
      title: "How do I create a company page?",
      body: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vel accusantium magni explicabo
            neque, natus veritatis dicta deleniti laborum quia voluptas iusto ducimus adipisci, dolorem
             excepturi, pariatur eveniet reprehenderit soluta.`,
    },
  ],
};

export type { faqI, faqBodyI };
export default faq;
