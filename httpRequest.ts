// Make api requests (method GET) 
export async function makeRequest(endpoint: string) {

    // send the request 
    const res = await fetch(endpoint);

    // return the respone json data 
    return await res.json()
    
}