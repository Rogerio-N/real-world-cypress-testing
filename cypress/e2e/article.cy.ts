import header from '../components/header'
import articleDetailsPage from '../pages/article/articleDetailsPage'
import { ArticleTypeEnum } from '../support/article/articleTypeEnum'
import { hasOperationName } from '../utils/graphqlUtils'

describe('Article test scenarios', () => {
	context('Create artcile scenarios', () => {
		beforeEach(() => {
			cy.login('rootUser')
			cy.visit('/')
		})
		it('Success to create article', () => {
			header.clickCreateArticle()
			cy.intercept('POST', '/api', (req) => {
				if (hasOperationName(req, 'CreateArticle')) {
					req.alias = 'createArticle'
				}
			})
			cy.createNewArticle(ArticleTypeEnum.DEFAULT)
			cy.wait('@createArticle').then(({ request }) => {
				cy.url().should('contain', '/article/')
				articleDetailsPage
					.getTitleText()
					.should('exist')
					.and('contain', request.body.variables.input.title)
			})
		})
	})
})
