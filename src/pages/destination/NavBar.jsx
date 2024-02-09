import data from '../../data.json';

export default function NavBar({ changeDestination, destination }) {
  const destinations = data.destinations;
  const destinationArray = [];

  for (let destination of destinations) {
    destinationArray.push(destination.name);
  }

  return (
    <nav className='destination__nav-bar'>
      {destinationArray.map(destinationFromArray => (
        <button
          key={destinationFromArray}
          className={`destination__button${
            // Add --active class if the button correlates to active destination
            destinationFromArray === destination
              ? ' destination__button--active'
              : ''
          }`}
          data-destination={destinationFromArray}
          onClick={changeDestination}
        >
          {destinationFromArray}
        </button>
      ))}
    </nav>
  );
}
