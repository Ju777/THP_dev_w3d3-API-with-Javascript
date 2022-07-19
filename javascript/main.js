// 1ère façon de faire de l'asynchorne
var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=6b19cfea81314c89aeadd9ff0ad2dcab';
var req = new Request(url);


const getArticlesTryCatch = async () => {
    try {
        const response = await fetch(req);
        const data = await response.json();
        console.log(data.articles);
        getArticleProperties(data.articles[0]);
    } catch (error) {
        console.error('Problème de requête asynchrone : ' + error);
    }
}

getArticlesTryCatch();

// 2e façon de faire de l'asynchorne
const getArticlesThenCatch = async () => {
    await fetch("https://newsapi.org/v2/everything?q=Apple&from=2022-07-19&sortBy=popularity&apiKey=6b19cfea81314c89aeadd9ff0ad2dcab")
    .then((res) => res.json())
    .then((data) => console.log(data.articles))
    .catch((error) => console.log("Response error:", error.message))
    }
    
getArticlesThenCatch();

getArticleProperties = (article) => {
    console.log(Object.keys(article));
}

    