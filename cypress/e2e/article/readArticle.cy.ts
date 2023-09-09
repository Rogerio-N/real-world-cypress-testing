import articlePreviewComponent from '../../components/article/articlePreviewComponent'
import articleDetailsPage from '../../pages/article/articleDetailsPage'

describe('Read article test scenarios', () => {
	beforeEach(() => {
		cy.intercept({
			method: 'GET',
			path: '/api?operationName=Articles**',
		}).as('articles')
		cy.visit('/')
		cy.wait('@articles')
	})

	it('Read artcile as not registered user', () => {
		articlePreviewComponent.getArticleList().should('not.be.empty')
		cy.intercept('GET', '/_next/data/**/article/**').as('articleDetails')
		articlePreviewComponent.clickRedirectFirstArticle()
		cy.wait('@articleDetails')
		cy.url().should('contain', '/article')
		articlePreviewComponent
			.getAuthorInfo()
			.should('exist')
			.and('be.visible')
		articleDetailsPage
			.getFavoriteArticleButton()
			.should('exist')
			.and('be.visible')
		articleDetailsPage
			.getFollowArticleButton()
			.should('exist')
			.and('be.visible')
		articleDetailsPage.getWriteCommentInput().should('not.exist')
	})
})
