addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

/**
 * Fetch and log a given request object
 * @param {Request} request
 */
const  url = "https://cfw-takehome.developers.workers.dev/api/variants";

async function handleRequest(request) {
  console.log('Got request', request) //use this to debug headers etc
  let Resp = await fetch(url);
  let Urls = await Resp.json();

  console.log(Urls);

  //randomly select between the Urls with 50% chance
  let test = Math.random() < 0.5 ? Urls['variants'][0] :Urls['variants'][1]
  //make request to one of them
  let resp  = await fetch(test);
  return resp  
  
}