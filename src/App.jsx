import { useState } from 'react';
import MenuButton from './components/MenuButton';
import NavBar from './components/NavBar';
import Main from './pages/Main';
import './styles/reset.css';
import './styles/App.scss';

export default function App() {
  const [page, setPage] = useState('technology');
  const [navIsOpen, setNavIsOpen] = useState(false);

  function changePage(e) {
    setPage(e.currentTarget.dataset.page);
    setNavIsOpen(false);
  }

  function toggleMenu() {
    setNavIsOpen(!navIsOpen);
  }

  return (
    <>
      <header className='header'>
        <button className='logo__button' data-page='home' onClick={changePage}>
          <img
            className='logo'
            src='../public/assets/shared/logo.svg'
            alt='Space Tourism Website Logo'
          />
        </button>
        <MenuButton navIsOpen={navIsOpen} toggleMenu={toggleMenu} />
        <NavBar changePage={changePage} navIsOpen={navIsOpen} />
      </header>

      <Main page={page} changePage={changePage} />
    </>
  );
}
