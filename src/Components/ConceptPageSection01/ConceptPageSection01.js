import React from 'react';
import DoubleColumnTextSection from '../DoubleColumnTextSection/DoubleColumnTextSection';
import HomePageSection01 from "../../Assets/Image/Homepage/HomePageSection01.jpg";

const ConceptPageSection01 = ({path}) => {
    const sectionText = {
        HeadingBlackPart : "What",
        HeadingRedPart : " is durga puja Art",
        Paragraph : "dur",
        Paragraph01 : "durga puja is bengal’s biggest festival that takes place over a week  or so in september-october, on dates varying every year but announced  well in advance. at the centre of the celebration is the figure of  goddess durga, crafted traditionally in clay, who is worshipped in the  act of vanquishing the demon mahishasura. it is particularly in the  streets of kolkata (calcutta), the capital of the state, that durga puja  transcends religious bounds and serves as the cradle for the world’s  largest publicly funded Art show. while the worship of durga and her  four divine children remains the ritualistic core, the temporary  shelters of the idols – structures created from months in advance in  street corners – become exquisite works of artistic expression, unique  to each locality every year. thus there is a different artistic  interpretation offered in every locality through the choice of a  different theme to which the entire structure conforms.",
        Paragraph02 : "every autumn, the entire city wakes up to an explosion of creativity,  with every neighbourhood decked up in unique templates that are a  mélange of traditional Art and contemporary concepts, that are diverse  and creative enough to rival any international art biennale. commercial  promotion and sponsorship have kept pace with the explosion of Art,  providing an eco-system of community support.",
        Paragraph03 : `as a result, every year, the durga puja experience is different and  diverse. the evolution of durga puja of kolkata into an inclusive,  community-driven celebration of Art has been hailed by unesco, which  describes it as "the best instance of the public performance of religion  and Art, and as thriving ground for collaborative artists and  designers...”. durga puja has been inscribed on its list of intangible  cultural heritage of humanity in 2021.`,
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

export default ConceptPageSection01;