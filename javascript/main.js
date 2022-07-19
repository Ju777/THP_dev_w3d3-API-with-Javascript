// 1ère façon de faire de l'asynchorne
var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=6b19cfea81314c89aeadd9ff0ad2dcab';
var req = new Request(url);


const getArticlesTryCatch = async () => {
    try {
        const response = await fetch(req);
        const data = await response.json();
        displayArticles(data.articles);

    } catch (error) {
        console.error('Problème de requête asynchrone : ' + error);
    }
}

getArticlesTryCatch();

// FIN

// 2e façon de faire de l'asynchorne
const getArticlesThenCatch = async () => {
    await fetch("https://newsapi.org/v2/everything?q=Apple&from=2022-07-19&sortBy=popularity&apiKey=6b19cfea81314c89aeadd9ff0ad2dcab")
    .then((res) => res.json())
    .then((data) => console.log(data.articles))
    .catch((error) => console.log("Response error:", error.message))
    }
    
getArticlesThenCatch();

// FIN



// Affichage des articles de la 1ère méthode
displayArticles = (articlesArray) => {
    let html = '';
    const properties = getArticleProperties(articlesArray[0]);
    // console.log(properties);

    articlesArray.map(article => {
        // Extraction des informations dans le but de les formatter en HTML.
        let source = article.source.name;
        let author = article.author;
        let title = article.title;
        let description = article.description;
        let url = article.url;
        let imageURL = article.urlToImage;
        let publishingDate = article.publishedAt;
        let content = article.content;
        console.log(source, author, title, description, url, imageURL, publishingDate, content);

        // Création de la structure HTML pour afficher ces informations.
        let htmlSegment =`
        <div class="news-container align-items-center">
            <div class="image-container">
                <div class="p-3">
                    ${article.title}
                </div>
                <div>
                    <img src="${article.urlToImage}" alt="image" class="rounded-pill"/>
                </div>       
            </div>

            <div class="text-container">
                <p class="p-3">${article.content}<br/>--> <a href=\"${article.url}\" >read more</a></p>
                <p class="fs-6 fw-medium p-3" >by ${article.author} [${article.source.name}] | on ${article.publishedAt}</p>
            </div>
        </div>
            `
        html += htmlSegment;
    });

    const mainContainer = document.getElementById('main-container');
    mainContainer.innerHTML = html;
} 

getArticleProperties = (article) => {
    return Object.keys(article);
}
