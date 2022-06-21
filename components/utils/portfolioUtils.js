import portfolioItem1 from "../../public/images/book-shelf.png";
import portfolioItem2 from "../../public/images/meditation-timer.png";
import portfolioItem3 from "../../public/images/askr.png";
import portfolioItem4 from "../../public/images/crypto-comet.png";
import portfolioItem5 from "../../public/images/image-api.png";

export const portfolioItemsArr = [
  {
    link: "https://jimmyallday-image-api.herokuapp.com/",
    image: portfolioItem5,
  },
  {
    link: "https://crypto-comet.herokuapp.com/",
    image: portfolioItem4,
  },
  {
    link: "https://jimmyallday.github.io/askr/#/login",
    image: portfolioItem3,
  },
  {
    link: "https://jimmyallday.github.io/meditation-timer/",
    image: portfolioItem2,
  },
  {
    link: "https://jimmyallday.github.io/book-shelf/",
    image: portfolioItem1,
  },
];

export const homeLinks = [
  { href: "#home", section: "Home" },
  { href: "#work", section: "Portfolio Projects" },
  //! { href: "#services", section: "What I do" }, - 'services' omitted at current - can reinstate
  { href: "#about", section: "About Me" },
];

export const resLinks = [
  { href: "#overview", section: "Overview" },
  { href: "#techSkills", section: "Tech Skills" },
  { href: "#techTrain", section: "Tech Training" },
  { href: "#softSkills", section: "Soft Skills" },
  { href: "#nonTechEd", section: "Non-Tech Education" },
  { href: "#workExp", section: "Work Experience" },
  { href: "#referees", section: "Referees" },
];

export const postsLinks = [{ href: "#overview", section: "Overview" }];

export default function renderLinks(path) {
  switch (path) {
    case "/":
      return homeLinks;
    case "/resume":
      return resLinks;
    case "/posts/posts-main":
      return postsLinks;
    default:
      return homeLinks;
  }
}
