import data from '../../data.json';

export default function PaginationDots({ changeMember, member }) {
  const crewMembers = data.crew;
  const memberArray = [];

  for (let member of crewMembers) {
    memberArray.push(member.name);
  }

  return (
    <div className='crew__pagination-dots'>
      {memberArray.map(memberFromArray => (
        <button
          key={memberFromArray}
          className={`crew__pagination-dots__dot${
            memberFromArray === member
              ? ' crew__pagination-dots__dot--active'
              : ''
          }`}
          data-name={memberFromArray}
          onClick={changeMember}
        ></button>
      ))}
    </div>
  );
}
