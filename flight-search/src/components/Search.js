import React, { Component } from 'react';
import getResultsByCity from './../services/getResultsByCity';
import CircularProgress from '@material-ui/core/CircularProgress';
import Print from './Print';
import transformData from './../services/transformData';

class Search extends Component {

    constructor(props) {
        super(props);
        const { cities } = props;
        this.state = {
            cities,
            data: [],
        };
    }

    componentDidMount() {
        this.state.cities.map(city => (
            this.handleUpdateClick(city)  
        ));
    }

    handleUpdateClick = (city) => {   
        const api_skyscanner = getResultsByCity(city);     
        fetch(api_skyscanner).then( resolve => {
            return resolve.json();
        }).then( results => {
            const newData = transformData(results);
            const data = this.state.data;
            data.push(newData);
            this.setState({
                data: data
            });  
        });
    }

    render() {
        const { data } = this.state;  
        return (     
            data ? <Print data={data}/> : <CircularProgress/>
        );
    }

};

export default Search;