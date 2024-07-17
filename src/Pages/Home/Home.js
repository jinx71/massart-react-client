import React from 'react';
import HomePageSection01 from "../../Assets/Image/Homepage/HomePageSection01.jpg";
import DoubleColumnTextSection from '../../Components/DoubleColumnTextSection/DoubleColumnTextSection';
import ArtFestival from '../../Components/ArtFestival/ArtFestival';
import GallaryPageSection01 from '../../Components/GallaryPageSection01-Header/GallaryPageSection01';
import HomePageConceptSection from '../../Components/HomePageConceptSection/HomePageConceptSection';
import HomePageVideoSection from '../../Components/HomePageVideoSection/HomePageVideoSection';
import HomePageBuildMemorySection from '../../Components/HomePageBuildMemorySection/HomePageBuildMemorySection';
import HomePageTestimonials from '../../Components/HomePageTestimonial/HomePageTestimonial';
import FAQ from '../../Components/FAQ/FAQ';
import HomePageMasterClass from '../../Components/HomePageMasterClass/HomePageMasterClass';

const Home = () => {
    const sectionText = {
        HeadingBlackPart : "What is ",
        HeadingRedPart: " durga puja Art",
        Paragraph: "Durga puja is bengal’s biggest festival that takes place over a week or so in september-october, on dates varying every year but announced well in advance. at the centre of the celebration is the figure of goddess durga, crafted traditionally in clay, who is worshipped in the act of vanquishing the demon mahishasura.",
        Button: true,
        Image: HomePageSection01,
        ImageTitle: "Durga Pujaj Title"

    }
    return (
        <>
        <DoubleColumnTextSection sectionText={{sectionText}}></DoubleColumnTextSection>
        <ArtFestival></ArtFestival>
        <GallaryPageSection01></GallaryPageSection01>
        <HomePageConceptSection></HomePageConceptSection>
        <HomePageVideoSection></HomePageVideoSection>
        <HomePageMasterClass></HomePageMasterClass>
        <HomePageBuildMemorySection></HomePageBuildMemorySection>
        <HomePageTestimonials></HomePageTestimonials>
        <FAQ></FAQ>

        </>
    );
};

export default Home;