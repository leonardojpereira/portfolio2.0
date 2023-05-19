import InfoGamesImage from "../../images/infogames.jpg";
import SalesSystemImage from "../../images/salesystem.png";
import BlogAppImage from "../../images/blogapp.jpg";
import CardPersonImage from "../../images/cardperson.png";
import CreditCardImage from "../../images/creditcard.png";
import BibleAppImage from "../../images/bible.jpg";

const projects = [
  {
    name: "Info Games",
    image: InfoGamesImage,
    repository: "https://github.com/leonardojpereira/infogames-app",
    deploy: "https://infogamesapp.netlify.app/",
  },
  {
    name: "Sales System",
    image: SalesSystemImage,
    repository: "https://github.com/leonardojpereira/sales-system",
    deploy: "https://salesregisterapp.netlify.app/",
  },
  {
    name: "Blog App",
    image: BlogAppImage,
    repository: "https://github.com/leonardojpereira/blog-app",
    deploy: "https://test-blog-post-app.netlify.app",
  },
  {
    name: "Card Person",
    image: CardPersonImage,
    repository: "https://github.com/leonardojpereira/cardperson-app",
    deploy: "https://leonardojpereira.github.io/cardperson-app/",
  },
  {
    name: "Credit Card",
    image: CreditCardImage,
    repository:
      "https://github.com/leonardojpereira/interactvie-credit-card-react",
    deploy: "https://creditcard.netlify.app/",
  },
  {
    name: "Bíblia Digital",
    image: BibleAppImage,
    description:
      "Projeto feito em ReactJS, trata-se de uma Bíblia digital que retorna os dados através de uma API.",
    repository: "https://github.com/leonardojpereira/bible-app",
    deploy: "https://digitalbible.netlify.app/",
  },
];

export default projects;
