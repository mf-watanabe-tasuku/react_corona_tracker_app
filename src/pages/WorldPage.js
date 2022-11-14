import React from 'react';
import Card from '../components/Card';

const WorldPage = (props) => {
    return (
        <Card
            allCountriesData={props.allCountriesData}
            getAllCountiesData={props.getAllCountiesData}
        />
    );
};

export default WorldPage;
