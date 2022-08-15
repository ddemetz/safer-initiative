
var pressContainer = $('#press-article-container')

var press = [
  {
    image:"assets/news-articles/nbc.png",
    title:"Google and Yelp disable reviews on some crisis pregnancy center pages amid activist 'spam' campaign",
    source:"NBC News",
    link:"https://www.nbcnews.com/tech/tech-news/abortion-crisis-pregnancy-center-google-yelp-review-spam-rcna37212"
  },
  {
    image:"assets/news-articles/teen-vogue.png",
    title:"Matt Gaetz Body-Shamed a Teen — Who Then Launched a Fundraiser for Abortion Rights",
    source:"Teen Vogue",
    link:"https://www.teenvogue.com/story/matt-gaetz-teen-abortion-donation-fundraiser"
  },
  {
    image:"assets/news-articles/bloomberg.jpg",
    title:"Teen Has Raised $1.5 Million for Abortion Funds in the Week Since Matt Gaetz Mocked Her",
    source:"Bloomberg",
    link:"https://www.bloomberg.com/news/articles/2022-07-29/olivia-julianna-raises-1-5-million-for-abortion-funds-after-matt-gaetz-comments"
  },
  {
    image:"assets/news-articles/npr.png",
    title:"A Texas teen raises over $700,000 for abortions after Rep. Matt Gaetz mocked her",
    source:"NPR",
    link:"https://www.npr.org/2022/07/28/1114300388/matt-gaetz-olivia-julianna-abortion-gen-z-for-change"
  },
]

  var counter=0

press.forEach(pushNews)

function pushNews(){
  pressContainer.append(`
    <a href="${press[counter].link}">
    <article class="press-card">
      <img class="press-img" src="${press[counter].image}" alt="Press Card Image">
      <section class="press-cta">
        <h4 class="press-title">${press[counter].title}</h4>
        <h5 class="press-source">${press[counter].source}</h5>
        <a class="press-link" href="${press[counter].link}"> Read Aricle</a>
      </section>
    </article>
    </a>
    `)
counter++
}
