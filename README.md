# deno-bitly
is simple module for deno 🦕 It helps us to get user IP location details

# Usage
### `Firstival`: the module require `--allow-net` flag 
#### like this 
***$*** ``` deno run --allow-net xxx.ts ```
### get IP location details .
```js
import { getIPLocation } from "https://deno.land/x/ip_location/mod.ts";

// for the current visitor IP
console.log(await getIPLocation()) 

// for A specified IP
console.log(await getIPLocation('8.8.8.8')) 
{
    "ip" : "8.8.8.8"
    "city" : "Mountain View"
    "region" : "California"
    "region_code" : "CA"
    "country_code" : "US"
    "country_code_iso3" : "USA"
    "country_name" : "United States"
    "country_capital" : "Washington"
    "country_tld" : ".us"
    "continent_code" : "NA"
    "in_eu" : false
    "postal" : "94035"
    "latitude" : 37.386
    "longitude" : -122.0838
    "timezone" : "America/Los_Angeles"
    "utc_offset" : "-0700"
    "country_calling_code" : "+1"
    "currency" : "USD"
    "currency_name" : "Dollar"
    "languages" : "en-US,es-US,haw"
    "asn" : AS15169
    "org" : "Google LLC"
}

const visitor = await getIPLocation('8.8.8.8');

// Country name
console.log(visitor.country_name) // United States

// Currency name
console.log(visitor.currency_name) // Dollar

// Country calling code
console.log(visitor.country_calling_code) // "+1"

```
### For testing run this in commend line 
```console
$ deno run --allow-net https://deno.land/x/ip_location/test.ts
```