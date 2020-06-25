import React, { Fragment, useEffect } from 'react';
import HeadSection from './HeadSection';
import FeatureSection from './FeatureSection';

interface IProps {
    selectHome: { (): void };
}

function Home(props: IProps): JSX.Element {
    const { selectHome } = props;
    useEffect(() => {
        selectHome();
    }, [selectHome]);
    return (
        <Fragment>
            <HeadSection />
            <FeatureSection />
        </Fragment>
    );
}

export default Home;
