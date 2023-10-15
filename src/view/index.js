document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Mencegah formulir dikirim ulang

    const q = document.querySelector('input[name="q"]').value;
    const page = document.querySelector('input[name="page"]').value;
    const perPage = document.querySelector('input[name="perPage"]').value;

    fetch(`http://localhost:3000/tasks/search/${q}?page=${page}&perPage=${perPage}`)
        .then(response => response.json())

.then(data => {
    const searchResults = document.getElementById('search-results');
    const hasil = data.message.notes
    searchResults.innerHTML = '';

    hasil.forEach(result => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${result.title}:</strong> ${result.description}`;
        searchResults.appendChild(listItem);
    });
})
.catch(error => {
    console.error('Error:', error);
});
});
