export default function MenuButton({ navIsOpen, toggleMenu }) {
  return (
    <button
      className={`menu-button${navIsOpen ? ' menu-button--close' : ''}`}
      onClick={toggleMenu}
    >
      <div className='menu-button__line menu-button__top-line'></div>
      <div className='menu-button__line menu-button__middle-line'></div>
      <div className='menu-button__line menu-button__bottom-line'></div>
    </button>
  );
}
