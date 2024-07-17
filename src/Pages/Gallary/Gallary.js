import React from 'react';
import GallaryPageSection01 from '../../Components/GallaryPageSection01-Header/GallaryPageSection01';
import GallaryPageSection02 from '../../Components/GallaryPageSection02-Video/GallaryPageSection02';
import GallaryPageSection03 from '../../Components/GallaryPageSection03-Photo/GallaryPageSection03';

const Gallary = () => {
    return (
        <div>
            <GallaryPageSection01></GallaryPageSection01>
            <GallaryPageSection02></GallaryPageSection02>
            <GallaryPageSection03></GallaryPageSection03>
        </div>
    );
};

export default Gallary;