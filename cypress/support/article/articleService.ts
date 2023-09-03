import newArticlePage from '../../pages/article/newArticlePage'

class ArticleService {
	createArticle(article: Article.IArticle) {
		newArticlePage.inputTitle(article.title)
		newArticlePage.inputDescription(article.description)
		newArticlePage.inputContent(article.content)
		article.tags.forEach((tag) => {
			newArticlePage.inputTag(tag)
		})
		newArticlePage.clickPublishButton()
	}
}

export default new ArticleService()
