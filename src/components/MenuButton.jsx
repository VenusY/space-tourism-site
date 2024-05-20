export default function MenuButton({ navIsOpen, toggleMenu }) {
  return (
    <button
      className={`menu-button${navIsOpen ? ' menu-button--close' : ''}`}
      onClick={toggleMenu}
    >
      <p className='menu-button__accessibility-text'>Menu</p>
      <div className='menu-button__line menu-button__top-line'></div>
      <div className='menu-button__line menu-button__middle-line'></div>
      <div className='menu-button__line menu-button__bottom-line'></div>
    </button>
  );
}
