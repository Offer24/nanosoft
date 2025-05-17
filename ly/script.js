// وظيفة البحث
document.getElementById('searchInput').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const articles = document.querySelectorAll('.article');

    articles.forEach(article => {
        const content = article.textContent.toLowerCase();
        if (content.includes(searchTerm)) {
            article.style.display = 'block';
        } else {
            article.style.display = 'none';
        }
    });
});