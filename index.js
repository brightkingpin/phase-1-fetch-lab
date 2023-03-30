function fetchBooks() {
  const url = "https://anapioficeandfire.com/api/characters/583";  // 1. Define the API endpoint
  return fetch(url)  // 2. Make a fetch request to the API endpoint
    .then(response => response.json())  // 3. Convert the response to JSON
    .then(data => renderBooks(data.aliases))  // 4. Call the renderBooks function with the aliases data
    .catch(error => console.log(error));  // 5. Handle any errors that occur during the fetch request
}

function renderBooks(aliases) {
  const main = document.querySelector('main');  // 6. Find the <main> element on the page
  aliases.forEach(alias => {  // 7. Loop over each alias in the aliases array
    const h2 = document.createElement('h2');  // 8. Create a new <h2> element for the alias
    h2.innerHTML = alias;  // 9. Set the innerHTML of the <h2> element to the alias text
    main.appendChild(h2);  // 10. Add the <h2> element to the <main> element on the page
  });
}

document.addEventListener('DOMContentLoaded', function() {  // 11. Wait for the page to finish loading
  fetchBooks();  // 12. Call the fetchBooks function
});
