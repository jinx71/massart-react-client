import React from 'react';
import DoubleColumnTextSection from '../../Components/DoubleColumnTextSection/DoubleColumnTextSection';
import HomePageImage01 from "../../Assets/Image/Homepage/homepage_Image_01.jpg";
import ArtFestival from '../../Components/ArtFestival/ArtFestival';
import GallaryPageSection01 from '../../Components/GallaryPageSection01-Header/GallaryPageSection01';
const Home = () => {
    const sectionText = {
        HeadingBlackPart : "What is ",
        HeadingRedPart: " durga puja Art",
        Paragraph: "Durga puja is bengal’s biggest festival that takes place over a week or so in september-october, on dates varying every year but announced well in advance. at the centre of the celebration is the figure of goddess durga, crafted traditionally in clay, who is worshipped in the act of vanquishing the demon mahishasura.",
        Button: true,
        Image: '"../../Assets/Image/Homepage/homepage_Image_01.jpg"',
        ImageTitle: "Durga Pujaj Title"

    }
    return (
        <>
        <DoubleColumnTextSection sectionText={{sectionText}}></DoubleColumnTextSection>
        <ArtFestival></ArtFestival>
        <GallaryPageSection01></GallaryPageSection01>

        </>
    );
};

export default Home;