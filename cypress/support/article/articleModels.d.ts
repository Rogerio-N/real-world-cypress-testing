declare namespace Cypress {
	interface Chainable {
		createNewArticle(article?: Partial<Article.IArticle>): Chainable<void>
	}
}
