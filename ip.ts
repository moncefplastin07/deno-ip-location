import { makeRequest } from "./httpRequest.ts";
const endpoint = 'https://api.ipify.org'

// get device ip from https://ipify.org api
export async function getIP() {
    // make http request and return the IP as json
    return (await makeRequest(`${endpoint}?format=json`)).ip
}

