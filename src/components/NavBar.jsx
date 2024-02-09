export default function NavBar({ changePage, navIsOpen }) {
  return (
    <nav className={`header__nav${navIsOpen ? '' : ' header__nav--hidden'}`}>
      <button
        className={`header__page-button${
          navIsOpen ? ' header__page-button--open' : ''
        }`}
        data-page='home'
        onClick={changePage}
        style={{
          ['--index']: 1,
        }}
      >
        Home
      </button>

      <button
        className={`header__page-button${
          navIsOpen ? ' header__page-button--open' : ''
        }`}
        data-page='destination'
        onClick={changePage}
        style={{
          ['--index']: 2,
        }}
      >
        Destination
      </button>

      <button
        className={`header__page-button${
          navIsOpen ? ' header__page-button--open' : ''
        }`}
        data-page='crew'
        onClick={changePage}
        style={{
          ['--index']: 3,
        }}
      >
        Crew
      </button>

      <button
        className={`header__page-button${
          navIsOpen ? ' header__page-button--open' : ''
        }`}
        data-page='technology'
        onClick={changePage}
        style={{
          ['--index']: 4,
        }}
      >
        Technology
      </button>
    </nav>
  );
}
