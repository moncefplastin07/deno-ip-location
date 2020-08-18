import { makeRequest } from "./httpRequest.ts"
import { getIP } from "./ip.ts"

// get the ip detailes from https://ipapi.co api
export async function getIPLocation(ip?: string){
    const currentIP:string = ip ? ip : await getIP()
    return await makeRequest(`https://ipapi.co/${currentIP}/json/`)
}
