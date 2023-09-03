import header from '../components/header'
import articleDetailsPage from '../pages/article/articleDetailsPage'
import newArticlePage from '../pages/article/newArticlePage'
import { aliasRequest } from '../utils/graphqlUtils'

describe('Article test scenarios', () => {
	context('Create artcile scenarios', () => {
		beforeEach(() => {
			cy.login('rootUser')
			cy.visit('/')
			header.clickCreateArticle()
		})
		it('Success to create article', () => {
			cy.intercept('POST', '/api', (req) => {
				aliasRequest(req, 'CreateArticle')
			})
			cy.createNewArticle()
			cy.wait('@gqlCreateArticleRequest').then(({ request }) => {
				cy.url().should('contain', '/article/')
				articleDetailsPage
					.getTitleText()
					.should('exist')
					.and('contain', request.body.variables.input.title)
			})
		})

		it('Error to create article, empty title', () => {
			const emptyTitle = { title: ' ' }
			cy.createNewArticle(emptyTitle)
			newArticlePage
				.getFormValidation('Title is required')
				.should('exist')
				.and('be.visible')
			newArticlePage.getPublishButton().should('be.disabled')
		})

		it('Error to create article, empty description', () => {
			const emptyDescription = { description: ' ' }
			cy.createNewArticle(emptyDescription)
			newArticlePage
				.getFormValidation('Description is required')
				.should('exist')
				.and('be.visible')
			newArticlePage.getPublishButton().should('be.disabled')
		})

		it('Error to create article, empty content', () => {
			const emptyContent = { content: ' ' }
			cy.createNewArticle(emptyContent)
			newArticlePage
				.getFormValidation('Article content is required')
				.should('exist')
				.and('be.visible')
			newArticlePage.getPublishButton().should('be.disabled')
		})

		it('Error to create article, empty tags', () => {
			const emptyTags = { tags: [' '] }
			cy.createNewArticle(emptyTags)
			newArticlePage
				.getFormValidation('Add at least one tag')
				.should('exist')
				.and('be.visible')
			newArticlePage.getPublishButton().should('be.disabled')
		})
	})
})
