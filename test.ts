import { getIPLocation } from "./mod.ts";

// for the current visitor IP
console.log(await getIPLocation()) 

// for A specified IP
console.log(await getIPLocation('8.8.8.8')) 
// for A specified information
const visitor = await getIPLocation('8.8.8.8');

// Country name
console.log(visitor.country_name) // United States

// Currency name
console.log(visitor.currency_name) // Dollar

// Country calling code
console.log(visitor.country_calling_code) // "+1"