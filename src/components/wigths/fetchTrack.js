import axios from "axios";


const options = {
    method: 'GET',
    url: 'https://deezerdevs-deezer.p.rapidapi.com/album/',
    headers: {
      'x-rapidapi-key': 'dd6afea9bfmsh018760fb61b2962p1b69c8jsnae921a70b580',
      'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com'
    }
  };
  
 

  export function getTrak(id){
    options.url = `https://deezerdevs-deezer.p.rapidapi.com/album/${id}`
    const album = axios.request(options).then(
        response => response.data
    ).catch(function (error) {
        console.error(error);
    });

    return album
  }


  