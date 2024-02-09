export default function StatsContainer({ heading, value }) {
  return (
    <div className='stats__container'>
      <h2 className='stats__heading'>{heading}</h2>
      <p className='stats__value'>{value}</p>
    </div>
  );
}
