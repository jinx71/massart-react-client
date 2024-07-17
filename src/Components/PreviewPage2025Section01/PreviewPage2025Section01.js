import React from 'react';
import { useLocation } from 'react-router-dom';
import HomePageSection01 from "../../Assets/Image/Homepage/HomePageSection01.jpg";
import DoubleColumnTextSection from '../DoubleColumnTextSection/DoubleColumnTextSection';

const PreviewPage2025Section01 = () => {
    const currentLocation = useLocation();
    const path = currentLocation.pathname;
    const sectionText = {
        HeadingBlackPart : "preview show ",
        HeadingRedPart : " 2025",
        Paragraph : "",
        Paragraph01 : " the preview show, conceived by massArt, received overwhelming response in its inaugural year in 2022, being hailed at home and abroad as a breakthrough idea by creating a space to accommodate tourists who want to soak in the creative aspect of durga puja without jostling with the crowd.",
        Paragraph02 : "massArt is back this year of its 3rd initiative with preview show 2024 of durga puja Art. over five days – from 30 september to 4 october – the preview show will showcase a selection of the finest creations – 22 contemporary, 2 traditional and 2 aristocrat household durga pujas – before pre-registered tourists from beyond the borders of the state and the country.",
        Paragraph03 : `alongside the preview show at the puja sites, an exhibition on ‘making of durga puja Art' will take place during the period at the iconic town hall. the exhibition is a journey through the entire process, from conception to execution, using audio-visual footage and live demonstration. there is also an opportunity to sample the craftsmanship of artistes and collect specimens of their Art before stepping out to enjoy the creations on view at the chosen puja sites.`,
        Button: false,
        Image: HomePageSection01,
        ImageTitle: "Durga Pujaj Title",
        Path: path
    }
    return (
        <div>
            <DoubleColumnTextSection sectionText={{sectionText}}></DoubleColumnTextSection>
        </div>
    );
};

export default PreviewPage2025Section01;