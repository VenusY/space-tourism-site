import data from '../../data.json';

export default function PaginationDots({ selectedTech, changeSelectedTech }) {
  const technologies = data.technology;
  const technologyArray = [];

  for (let technology of technologies) {
    technologyArray.push(technology.name);
  }

  return (
    <div className='technology__pagination-dots'>
      {technologyArray.map((technology, index) => (
        <button
          key={technology}
          className={`technology__pagination-dots__dot${
            technology === selectedTech
              ? ' technology__pagination-dots__dot--active'
              : ''
          }`}
          data-name={technology}
          onClick={changeSelectedTech}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
}
