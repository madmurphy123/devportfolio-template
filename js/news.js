const newsContainer = document.getElementById('news');
if(newsContainer){
    fetch("https://newsapi.org/v1/articles?source=bbc-news&apiKey=a5ba2a0461c24459b8c4f3e746c9ae8f")
        .then(response => {
            return response.json();
        }).then(news => {
            const newsHTML = news.articles.map(article => {
                return `
                  <div class="project shadow-large">
                    <div class="blog-image">
                        <img src="${article.urlToImage}" alt="${article.title}" />
                    </div>
                    <!-- End .project-image -->
                    <div class="project-info">
                        <h3>${article.title}</h3>
                        <p>
                            ${article.description}
                        </p>
                        <a href=" ${article.url}" target="blank">Read More</a>
                    </div>
                    <!-- End .project-info -->
                </div>`;
            }).join("\n");
            
            newsContainer.innerHTML = newsHTML;
        });
}


