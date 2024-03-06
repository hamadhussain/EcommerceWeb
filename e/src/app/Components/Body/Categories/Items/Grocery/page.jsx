import React from 'react'

const page = async() => {
    // const fetch = require('node-fetch');

const url = 'https://community-food2fork.p.rapidapi.com/get?key=%3CREQUIRED%3E&rId=37859';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'community-food2fork.p.rapidapi.com'
  }
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
  return (
    <div>
      grocery
    </div>
  )
}

export default page
