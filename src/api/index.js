import axios from "axios";

export const API_URL = "https://api.weatherapi.com/v1";

const $api = axios.create({
    baseURL: API_URL,
});

$api.interceptors.request.use(config => {
    config.headers["key"] = "6cc1a8e618424e0ebee95803232005";
    config.headers["Content-Type"] = "application/json";
    return config;
});

export default $api
