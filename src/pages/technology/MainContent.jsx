import { useState } from 'react';
import PaginationDots from './PaginationDots';
import InfoSection from './InfoSection';
import HeroImage from './HeroImage';
import data from '../../data.json';

export default function MainContent() {
  const [selectedTech, setSelectedTech] = useState('Launch vehicle');

  function changeSelectedTech(e) {
    setSelectedTech(e.currentTarget.dataset.name);
  }

  const technologies = data.technology;
  let description;
  let portraitImgUrl;
  let landscapeImgUrl;

  for (let technology of technologies) {
    if (technology.name !== selectedTech) {
      continue;
    }

    description = technology.description;
    portraitImgUrl = technology.images.portrait;
    landscapeImgUrl = technology.images.landscape;
  }

  return (
    <div className='technology__main-content'>
      <PaginationDots
        selectedTech={selectedTech}
        changeSelectedTech={changeSelectedTech}
      />
      <InfoSection selectedTech={selectedTech} description={description} />
      <HeroImage
        selectedTech={selectedTech}
        portraitImg={portraitImgUrl}
        landscapeImg={landscapeImgUrl}
      />
    </div>
  );
}
