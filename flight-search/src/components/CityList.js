import React from 'react';
import PropTypes from 'prop-types'
import Search from './Search';


const CityList = ( {cities} ) => {
    
    const strToComponents = cities => (        
        <Search cities={cities}/>
    );

    return (
        strToComponents(cities)
    )
};

CityList.prototypes = {
    cities: PropTypes.array.isRequired,
}

export default CityList;