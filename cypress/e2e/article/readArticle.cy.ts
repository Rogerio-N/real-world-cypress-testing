import articlePreviewComponent from '../../components/article/articlePreviewComponent'
import articleDetailsPage from '../../pages/article/articleDetailsPage'

describe('Read article test scenarios', () => {
	it('Read artcile as not registered user', () => {
		cy.intercept('GET', '/api?operationName=Articles**').as('articles')
		cy.visit('/')
		cy.wait('@articles')
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

	it('Read artcile as registered user', () => {
		cy.login('rootUser')
		cy.intercept('GET', '/api?operationName=Articles**').as('articles')
		cy.visit('/')
		cy.wait('@articles')
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
			.getEditArticleButton()
			.should('exist')
			.and('be.visible')
		articleDetailsPage
			.getDeleteArticleButton()
			.should('exist')
			.and('be.visible')
		articleDetailsPage
			.getWriteCommentInput()
			.should('exist')
			.and('be.visible')
	})
})
