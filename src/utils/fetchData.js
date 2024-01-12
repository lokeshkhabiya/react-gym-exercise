export const exerciseOptions = {
    method: 'GET',
  headers: {
    'X-RapidAPI-Key': '3bf53c3899mshdbe4c4b2a8a8116p172905jsn3800c1e03b72',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
}

export const youtubeOptions = {
  method: 'GET',

  headers: {
    'X-RapidAPI-Key': '3bf53c3899mshdbe4c4b2a8a8116p172905jsn3800c1e03b72',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
}


export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}