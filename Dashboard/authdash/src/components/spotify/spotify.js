import React, {useState} from "react";
import SpotifyLogin from 'react-spotify-login'
import axios from 'axios'

export default function Spotify (){
    const [token, setToken] = useState("")
    const [lastSong, setLastSong] = useState("")
    
    const onSuccessSpotify = response => {
        setToken(response.access_token)
        axios({
            method: 'GET',
            url: 'https://api.spotify.com/v1/me/player/recently-played?limit=1',
            headers: {
              Accept: "application/json",
              "Content-Type": 'application.json',
              Authorization: 'Bearer ' + token
            },
          }).then(Response => {
                setLastSong( Response.data.items[0].track.name)
          }) 
        console.log(response.access_token)
        console.log(lastSong)
    }

    const onFailureSpotify = response => {
        console.log("error")
    }
    return(
        <div>
                <SpotifyLogin clientId="5126f5354709452fb0d262e8efcfc687"
                    redirectUri="http://localhost:8081"
                    onSuccess={onSuccessSpotify}
                    onFailure={onFailureSpotify}
                    scope="user-read-recently-played user-read-private user-read-email"
                />
                  <div>

                      <h1 style={{color: 'red'}}>{lastSong}</h1>
                  </div>
        
        </div>
    )
}
