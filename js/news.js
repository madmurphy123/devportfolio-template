// const newsContainer = document.getElementById('news');
// if(newsContainer){
//     fetch("https://newsapi.org/v1/articles?source=bbc-news&apiKey=a5ba2a0461c24459b8c4f3e746c9ae8f")
//         .then(response => {
//             return response.json();
//         }).then(news => {
//             const newsHTML = news.articles.map(article => {
//                 return `
//                   <div class="project shadow-large">
//                     <div class="blog-image">
//                         <img src="${article.urlToImage}" alt="${article.title}" />
//                     </div>
//                     <!-- End .project-image -->
//                     <div class="project-info">
//                         <h3>${article.title}</h3>
//                         <p>
//                             ${article.description}
//                         </p>
//                         <a href=" ${article.url}" target="blank">Read More</a>
//                     </div>
//                     <!-- End .project-info -->
//                 </div>`;
//             }).join("\n");
            
//             newsContainer.innerHTML = newsHTML;
//         });
// }







// <div class="mdl-cell mdl-card mdl-shadow--4dp portfolio-card">
//                     <div class="mdl-card__media">
//                         <img class="article-image" src="${event.picture}" border="0" alt="">
//                     </div>
//                     <div class="mdl-card__title">
//                         <h2 class="mdl-card__title-text">${event.heading}</h2>
//                     </div>
//                     <div class="mdl-card__supporting-text">
//                         ${event.text}
//                     </div>
//                     <div class="mdl-card__actions mdl-card--border">
//                         <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--accent" href="${event.link}" data-upgraded=",MaterialButton,MaterialRipple">Read more<span class="mdl-button__ripple-container"><span class="mdl-ripple"></span></span></a>
//                     </div>
//                 </div>`;

