import articleController from './articleController'

Cypress.Commands.add(
	'createNewArticle',
	(article?: Partial<Article.IArticle>) => {
		articleController.createArticle(article ?? {})
	}
)
