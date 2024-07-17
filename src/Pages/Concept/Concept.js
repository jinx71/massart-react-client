import React from 'react';
import ConceptPageSection01 from '../../Components/ConceptPageSection01/ConceptPageSection01';
import { useLocation } from 'react-router-dom';
import ConceptPageSection02 from '../../Components/ConceptPageSection02/ConceptPageSection02';

const Concept = () => {
    const currentPath = useLocation();
    return (
        <div>
            <ConceptPageSection01 path={currentPath.pathname}></ConceptPageSection01>
            <ConceptPageSection02></ConceptPageSection02>
        </div>
    );
};

export default Concept;