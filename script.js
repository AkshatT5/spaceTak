fetch("https://newsapi.org/v2/everything?q=space&apiKey=10795ad1046b4ffa942119acdb581cfc")
    .then(response => response.json())
    .then(data => {
        const articles = data.articles;
        for (let i = 0; i < articles.length; i++) {
            const article = articles[i];
            const articleElement = document.createElement("div");
            articleElement.innerHTML = `
        <h2>${article.title}</h2>
        <p>${article.description}</p>
        <p>Author: ${article.author}</p>
        <p>Published at: ${article.publishedAt}</p>
      `;
            document.body.appendChild(articleElement);
        }
    })
    .catch(error => console.error(error));

