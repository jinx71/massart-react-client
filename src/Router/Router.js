import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Concept from '../Pages/Concept/Concept';
import PreviewShow2023 from '../Pages/Preview Show 2023/PreviewShow2023';
import PreviewShow2024 from '../Pages/Preview Show 2024/PreviewShow2024';
import PreviewShow2025 from '../Pages/Preview Show 2025/PreviewShow2025';
import Gallary from '../Pages/Gallary/Gallary';
import Contact from '../Pages/Contact/Contact';
import PrivacyPolicy from '../Pages/Privacy Policy/PrivacyPolicy';
import Register from '../Pages/Register/Register';
import NotFound from '../Pages/NotFound/NouFound';
import TermsOfUse from '../Pages/Terms Of Use/TermsOfUse';
import FrequentlyAskedQuestion from '../Pages/FrequentlyAskedQuestion/FAQ';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
                
            },
            {
                path: "/home",
                element: <Home></Home>
                
            },
            {
                path: "/about",
                element: <About></About>
               
            },
            {
                path: "/concept",
                element: <Concept></Concept>
                
            },
            {
                path: "/preview-show-2023",
                element: <PreviewShow2023></PreviewShow2023>
                
            },
            {
                path: "/preview-show-2024",
                element: <PreviewShow2024></PreviewShow2024>
                
            },
            {
                path: "/preview-show-2025",
                element: <PreviewShow2025></PreviewShow2025>
                
            },
            {
                path: "/gallary",
                element: <Gallary></Gallary>
                
            },
            {
                path: "contact",
                element: <Contact></Contact>
                
            },
            {
                path: "/faq",
                element: <FrequentlyAskedQuestion></FrequentlyAskedQuestion>
            },
            {
                path: "/privacy-policy",
                element: <PrivacyPolicy></PrivacyPolicy>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/terms-of-use",
                element: <TermsOfUse></TermsOfUse>
            },
        ]
    },
    {
        path: "*",
        element: <NotFound></NotFound>
    },
])