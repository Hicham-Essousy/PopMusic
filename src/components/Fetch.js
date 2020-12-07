import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
  params: {q: 'eminim'},
  headers: {
    'x-rapidapi-key': 'dd6afea9bfmsh018760fb61b2962p1b69c8jsnae921a70b580',
    'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com'
  }
};


export function getAlbum(search = 'Elgrande toto'){
    options.params.q = search;
   const albums =  axios.request(options).then(
	    response => response.data.data
      ).catch(function (error) {
        	console.error(error);
      });

      return albums
}

