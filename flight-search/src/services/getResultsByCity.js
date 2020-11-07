import { url_base_api, inbound, outbound } from './../constants/api_url'

const getResultsByCity = city => {
    const api = `${url_base_api}/${city}/${inbound}/${outbound}`;
    return new Request(api, {
        headers: new Headers({
            'X-RapidAPI-Host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
            'X-RapidAPI-Key': '1378cd0c4fmshce3d877db04bd89p156f7bjsn08bce6156435'
        })
    });
}

export default getResultsByCity;