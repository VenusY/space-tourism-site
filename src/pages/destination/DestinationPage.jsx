import MainContent from './MainContent';
import '../../styles/DestinationPage.scss';

export default function DestinationPage() {
  return (
    <main className='main destination'>
      <h1 className='main__page-heading main__page-heading--destination'>
        Pick your destination
      </h1>
      <MainContent />
    </main>
  );
}
