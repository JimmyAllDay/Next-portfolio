import PortfolioItem from './PortfolioItem';
import UnderDevelopmentItem from './UnderDevelopmentItem';

import { portfolioItemsArr } from '../utils/portfolioUtils';

const mappedItems = portfolioItemsArr.map((item, index) => {
  if (index === 0) {
    return (
      <UnderDevelopmentItem
        key={index}
        image={item.image}
        link={item.link}
        className="mx-auto"
      />
    );
  } else {
    return (
      <PortfolioItem
        key={index}
        image={item.image}
        link={item.link}
        className="mx-auto"
      />
    );
  }
});

function MyWork() {
  return (
    <div className="p-5 bg-dark mt-6 text-center dark:bg-inherit" id="work">
      <h2 className="text-6xl text-light mx-auto mb-3">Portfolio Projects</h2>
      <p className="text-accent text-2xl mx-auto mb-5">
        A selection of my project work:
      </p>

      <div className="grid grid-cols-fluid max-w-5xl mx-auto m-5">
        {mappedItems}
      </div>
    </div>
  );
}

export default MyWork;
