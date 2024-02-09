import HomePage from './home/HomePage';
import CrewPage from './crew/CrewPage';
import DestinationPage from './destination/DestinationPage';
import TechnologyPage from './technology/TechnologyPage';
import '../styles/Main.scss';

export default function Main({ page, changePage }) {
  if (page === 'home') {
    return <HomePage changePage={changePage} />;
  } else if (page === 'crew') {
    return <CrewPage />;
  } else if (page === 'destination') {
    return <DestinationPage />;
  } else {
    return <TechnologyPage />;
  }
}
