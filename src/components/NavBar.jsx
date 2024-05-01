export default function NavBar({ changePage, navIsOpen, page }) {
  const pagesArray = ['home', 'destination', 'crew', 'technology'];

  const pagesArrayCapitalised = pagesArray.map(pageInArray => {
    const firstLetter = pageInArray[0].toUpperCase();
    const restOfWord = pageInArray.slice(1);
    const completeWord = `${firstLetter}${restOfWord}`;
    return completeWord;
  });

  return (
    <nav className={`header__nav${navIsOpen ? '' : ' header__nav--hidden'}`}>
      {pagesArray.map((pageInArray, index) => (
        <button
          key={pageInArray}
          className={`header__nav__page-button${
            navIsOpen ? ' header__nav__page-button--open' : ''
          }${pageInArray === page ? ' header__nav__page-button--active' : ''}`}
          data-page={pageInArray}
          onClick={changePage}
          style={{ '--index': index + 1 }}
        >
          {pagesArrayCapitalised[index]}
        </button>
      ))}
    </nav>
  );
}
