import React, { useEffect } from 'react';

import HeadSection from './HeadSection';
import FeatureSection from './FeatureSection';
import Footer from '../footer/Footer';

interface IProps {
    selectHome: { (): void };
}

function Home(props: IProps): JSX.Element {
    const { selectHome } = props;
    useEffect(() => {
        selectHome();
    }, [selectHome]);
    return (
        <div>
            <HeadSection />
            <FeatureSection />
            <Footer />
        </div>
    );
}

export default Home;
