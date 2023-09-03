declare namespace Cypress {
	interface Chainable {
		createNewArticle(
			articleType: Article.ArticleTypeEnum,
			article?: Article.IArticle
		): Chainable<void>
	}
}
