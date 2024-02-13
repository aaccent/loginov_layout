export default () => {
    const articlesWrapper = document.querySelector('.js-article-with-nav');

    if(!articlesWrapper) return;

    let navList = articlesWrapper.querySelector('aside > nav > ul');
    let articlesWithHeaders = articlesWrapper.querySelectorAll('article > div > h2');

    Array.from(articlesWithHeaders).forEach( (header, index) => {
        header.parentElement.id = `article-${index}`
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.setAttribute("href", `#article-${index}`);
        
        let span = document.createElement('span');
        span.textContent = header.textContent.trim();

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