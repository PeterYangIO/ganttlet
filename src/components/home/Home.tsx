import React, { Fragment, useEffect } from 'react';
import HeadSection from './HeadSection';
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
        </Fragment>
    );
}

export default Home;
