import ENDPOINTS from "modules/api/endpoints";

const BASE_URL = 'https://63ce17326d27349c2b67689a.mockapi.io/api/v1/';

class Api {
    constructor(baseUrl, endpoints) {
        this.baseUrl = baseUrl;
        this.endpoints = endpoints;
    }

    async generateRequest(endpoint, data) {
        const {method, urn} = this.endpoints[endpoint];
        return fetch(`${this.baseUrl}${urn}`, {method, dody: data});

    }

    async fetch(endpoint, data) {
        const response = await this.generateRequest(endpoint, data);
        return response.json();
    }
}

export default new Api(BASE_URL, ENDPOINTS);