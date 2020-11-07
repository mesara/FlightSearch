const transformData = flight_data => {
    const carriers = flight_data.Carriers;
    const places = flight_data.Places;
    const quotes = flight_data.Quotes;

    const data = {
        carriers,
        places,
        quotes,
    }
    
    return data;
}

export default transformData;