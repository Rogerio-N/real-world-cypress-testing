import { defaultArticle } from '../../fixtures/article/data/defaultArticle'
import articleService from './articleService'

class ArticleController {
	createArticle(article: Partial<Article.IArticle>) {
		articleService.createArticle({
			...defaultArticle,
			...article,
		})
	}
}

export default new ArticleController()
