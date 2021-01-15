import brand from "./../images/icon-brand-recognition.svg";
import detailed from "./../images/icon-detailed-records.svg";
import customizable from "./../images/icon-fully-customizable.svg";

// SOCIALS
import facebook from "./../images/icon-facebook.svg";
import pinterest from "./../images/icon-pinterest.svg";
import instagram from "./../images/icon-instagram.svg";
import twitter from "./../images/icon-twitter.svg";

export const cards = [
  {
    id: 1,
    title: "Brand Recognition",
    text:
      "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
    icon: brand,
  },
  {
    id: 2,
    title: "Detailed Records",
    text:
      "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions",
    icon: detailed,
  },
  {
    id: 3,
    title: "Fully Customizable",
    text:
      "Improve brand awereness and content discoverability through customizable links, supercharging audience engagement",
    icon: customizable,
  },
];

export const footer = [
  {
    id: 1,
    title: "Features",
    segments: [
      {
        id: 1,
        title: "Link Shortening",
        url: "#",
      },
      { id: 2, title: "Branded Links", url: "#" },
      {
        id: 3,
        title: "Analytics",
        url: "#",
      },
    ],
  },
  {
    id: 2,
    title: "Resources",
    segments: [
      {
        id: 1,
        title: "Blog",
        url: "#",
      },
      {
        id: 2,
        title: "Developers",
        url: "#",
      },
      {
        id: 3,
        title: "Support",
        url: "#",
      },
    ],
  },
  {
    id: 3,
    title: "Company",
    segments: [
      {
        id: 1,
        title: "About",
        url: "#",
      },
      {
        id: 2,
        title: "Our Team",
        url: "#",
      },
      {
        id: 3,
        title: "Careers",
        url: "#",
      },
      {
        id: 4,
        title: "Contact",
        url: "#",
      },
    ],
  },
];

export const socials = {
  facebook: {
    title: "facebook",
    logo: facebook,
    link: "http://www.facebook.com",
  },
  twitter: {
    title: "twitter",
    logo: twitter,
    link: "http://www.twitter.com",
  },
  pinterest: {
    title: "pinterest",
    logo: pinterest,
    link: "http://www.pinterest.com",
  },
  instagram: {
    title: "instagram",
    logo: instagram,
    link: "http://www.instagram.com",
  },
};
