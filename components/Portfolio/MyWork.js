import PortfolioItem from "./PortfolioItem";

import { portfolioItemsArr } from "./../utils/portfolioUtils";

const mappedItems = portfolioItemsArr.map((item, index) => {
  return <PortfolioItem key={index} image={item.image} link={item.link} />;
});

function MyWork() {
  return (
    <div className="p-5 mt-5 my-work" id="work">
      <h2 className="section__title section__title--work">
        Portfolio Projects
      </h2>
      <p className="section__subtitle section__subtitle--work">
        A selection of my project work:
      </p>

      <div className="portfolio">{mappedItems}</div>
    </div>
  );
}

export default MyWork;
