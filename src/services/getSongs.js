//export function getSongs() {
// make your api call .. fetch, axios
// let my_token = 'my_token <- get_spotify_api_token(client_id = "***", client_secret = "***")';
//function get_spotify_api_tolken(client_id = "ea189656ff184969bd234dc44e6baa20", client_secret = "79bf118e133b4a60af66318afb8e072f") {
//}
// method: get
// url string /api/songs
// return your api call
//console.log("getSongs")
//}

export function getSongs() {
    // Make your API call using fetch or axios
    let my_token = getSpotifyApiToken("client_id", "client_secret");

    // Define a function to get the Spotify API token
    function getSpotifyApiToken(client_id, client_secret) {
        // Implement your logic here to fetch the token
        // You can use the provided client_id and client_secret as default values
        // or pass your own values when calling the function
    }

    // Define the API call details
    // Method: GET
    // URL string: /api/songs
    // Return your API call
    console.log("getSongs");
}
