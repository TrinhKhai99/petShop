import axios from 'axios';

const Api = axios.create({
    baseURL: 'http://petadoption2.j.layershift.co.uk/admin/'
});

export default Api