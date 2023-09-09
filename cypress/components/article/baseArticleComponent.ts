class BaseArticleComponent {
	private articleList = () => cy.findByTestId('article-list')
	private articleRedirect = () => cy.findAllByTestId('article-redirect')
	private authorInfo = () => cy.findAllByTestId('author-info')

	getArticleList() {
		return this.articleList()
	}

	clickRedirectFirstArticle() {
		this.articleRedirect().first().click()
	}

	getAuthorInfo() {
		return this.authorInfo()
	}
}

export { BaseArticleComponent }
