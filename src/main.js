window.addEventListener('DOMContentLoaded', (event) => {
  getVisitorCount();
});

const visitorCountURL = "https://rubioresume.azurewebsites.net/api/HttpTrigger1?code=hhUSukFL06HnCV3qxnytmBn3_x-Gk43UzQeCCfRAcJO6AzFuQih_mg=="

const getVisitorCount = () => {
  let count = -1;
  try{
    fetch(visitorCountURL, {
      mode: 'cors'
    })
    .then(response => {
      return response.json();
    }).then(value => {
      // grab visitor ID part and inject the String
      const section = document.querySelector('.count')
      const count = value;

      section.innerHTML = `You are visitor #${count}`;
    }).catch(err => {
      console.log('Error communicating with Azure Function to retrieve visitor count');
      document.querySelector('.count').innerHTML = `Error getting visitor number`;
    });
  }catch(e) {
    console.log('Error communicating with Azure Function to retrieve visitor count');
    document.querySelector('.count').innerHTML = `Error getting visitor number`;
  }
  
  return count;
}