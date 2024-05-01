import '../../styles/HomePage.scss';

export default function Home({ changePage }) {
  return (
    <main className='home'>
      <section className='home__text-section'>
        <h1 className='home__heading'>
          <span className='home__heading--small'>
            So, you want to travel to
          </span>
          <span className='home__heading--large'>Space</span>
        </h1>

        <p className='home__introduction'>
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a truly out of this world
          experience!
        </p>
      </section>

      <button
        className='explore-button'
        data-page='destination'
        onClick={changePage}
      >
        <span className='explore-button__text'>Explore</span>
      </button>
    </main>
  );
}
