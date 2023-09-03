import articles from '../../fixtures/article'
import articleService from './articleService'
import { ArticleTypeEnum } from './articleTypeEnum'

class ArticleController {
	createArticle(articleType: ArticleTypeEnum, article?: Article.IArticle) {
		if (articleType == ArticleTypeEnum.DEFAULT) {
			articleService.createArticle(articles.defaultArticle)
		} else if (articleType == ArticleTypeEnum.CUSTOM && article) {
			articleService.createArticle(article)
		} else {
			throw new Error(
				'C=ArticleController, M=createArticle, R=article is null or undefined'
			)
		}
	}
}

export default new ArticleController()
