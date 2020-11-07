import React from 'react';
import Cell from './Cell';
import moment from 'moment';

const getCarrierById = ( id, carriers ) => (
    carriers.map((carrier) => {
        return id.includes(carrier.CarrierId) ? carrier.Name : null;
    })
)

const getCityNameById = ( id, places ) => (
    places.map((place) => {
        return place.PlaceId === id ? place.CityName : null;
    })
)

const getAirportById = ( id, places ) => (
    places.map((place) => {
        return place.PlaceId === id ? place.Name : null;
    })
)

const getCountryById = ( id, places ) => (
    places.map((place) => {
        return place.PlaceId === id ? place.CountryName : null;
    })
)

const getFormatDate = ( date ) => (
    moment(date).format('DD-MM-YYYY')
)

const getDays = ( departureDate, returnDate ) => (
    moment(returnDate, 'DD-MM-YYYY').diff(moment(departureDate, 'DD-MM-YYYY'), 'days')
)

const printData = rows => (
    <Cell rows={rows}/>
);

const Print = ({ data }) => {
        const rows = [];
        data.map(d => (
        d.quotes.map((quote) => {
            const from = getCityNameById(quote.OutboundLeg.OriginId,d.places);
            const destination = getCityNameById(quote.InboundLeg.OriginId,d.places);
            const country = getCountryById(quote.InboundLeg.OriginId,d.places);
            const airport = getAirportById(quote.InboundLeg.OriginId,d.places);
            const price = `$${quote.MinPrice}`;
            const departureFlight = getFormatDate(quote.OutboundLeg.DepartureDate);
            const returnFlight = getFormatDate(quote.InboundLeg.DepartureDate);
            const days = getDays(departureFlight, returnFlight);
            const carrier = `${getCarrierById(quote.InboundLeg.CarrierIds,d.carriers)} y ${getCarrierById(quote.OutboundLeg.CarrierIds,d.carriers)}`.replace(/,/g, ' ');
            
            if (days<=30 && days>=4) {
            //if (days<=7 && quote.MinPrice<=50 ) {
                const dataForTable = {
                    from,
                    destination,
                    country,
                    airport,
                    price,
                    departureFlight,
                    returnFlight,
                    days,
                    carrier,
                }
                return rows.push(dataForTable)   
            }
            return null;         
        })
    ))
    debugger;
    return printData(rows)
}

export default Print;