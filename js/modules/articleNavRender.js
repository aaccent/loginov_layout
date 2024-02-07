export default () => {
    const articlesWrapper = document.querySelector('.js-article-with-nav');

    if(!articlesWrapper) return;

    let navList = articlesWrapper.querySelector('aside > nav > ul');
    let articlesWithAnchors = articlesWrapper.querySelectorAll('article > div[id]');

    Array.from(articlesWithAnchors).forEach( article => {
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.setAttribute("href", `#${article.id}`);
        
        let span = document.createElement('span');
        span.textContent = article.querySelector('h3').textContent.trim();

        let svg = document.createElement('svg');
        svg.classList.add('icon');
        let use = `
            <svg class="icon">
                <use xlink:href="./images/sprite.svg#arrow-forward"></use>
            </svg>`;
        svg.innerHTML = use;
        
        a.append(svg);
        a.append(span);
        li.append(a);
        navList.append(li)
    })
}