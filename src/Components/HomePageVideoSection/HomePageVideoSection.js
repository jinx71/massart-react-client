import React from 'react';
import HomeSectionVideo from '../../Assets/Video/ShowReel.mp4'
const HomePageVideoSection = () => {
return (
<div>
    <div className="relative 
      xs:mt-[60px] lg:mt-[150px] xs:mb-[30px]
     xs:h-[550px]">
        <video autoPlay loop muted className="rounded-[10px]  h-full w-full object-cover">
            <source src={HomeSectionVideo} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </div>
</div>
);
};

export default HomePageVideoSection;