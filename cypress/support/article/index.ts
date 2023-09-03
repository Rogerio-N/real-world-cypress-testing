import articleController from './articleController'

Cypress.Commands.add(
	'createNewArticle',
	(articleType: Article.ArticleTypeEnum, article?: Article.IArticle) => {
		articleController.createArticle(articleType, article)
	}
)
