import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import HeadSection from './HeadSection';
interface IProps {
    selectHome: Function;
}
Home.propTypes = {
    selectHome: PropTypes.func.isRequired,
};
function Home(props: IProps) {
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
