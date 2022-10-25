import { api } from "../services/server"

/**
 * It's a function that makes a fetch request to an API, and returns a promise.
 * 
 * The function takes three parameters:
 * 
 * type: the type of request (GET, POST)
 * endPoint: the endpoint of the API
 * data: the data to be sent to the API
 * 
 * The function is async, so it can be used with await.
 * 
 * The function uses try/catch to handle errors.
 * 
 * The function uses the json() method to convert the response to JSON.
 * 
 * The function returns the JSON data.
 * 
 * @param type - GET, POST
 * @param endPoint - The endpoint of the API.
 * @param data - {
 */

export const fetchAsyncToApi = async (endpoint, type, data ) => {
    try {
        const url = `${api}${endpoint}`
        let resp
        let dataRecived

        if( !!data ) {

            if( type === 'GET') {
                resp = await fetch( url, {method: type} )
                dataRecived = await resp.json()
                return dataRecived
            } else {
                resp = await fetch( url, {type, body: JSON.stringify(data)})
                dataRecived = await resp.json()
                return dataRecived
            }
        }
    } catch (error) {
        console.log('Error en fetch', error)
    }
}