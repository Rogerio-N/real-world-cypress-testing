import { ArticleTextEnum } from './articleTextEnum'

class NewArticlePage {
	private elements = {
		titleInput: () => cy.get(`input[name=${ArticleTextEnum.TITLE}]`),
		descriptionInput: () =>
			cy.get(`input[name=${ArticleTextEnum.DESCRIPTION}]`),
		contentInput: () => cy.get(`textarea[name=${ArticleTextEnum.CONTENT}]`),
		tagsInput: () => cy.findByPlaceholderText(ArticleTextEnum.TAGS),
		publishButton: () =>
			cy.findByRole('button', { name: ArticleTextEnum.PUBLISH_ARTICLE }),
	}

	inputTitle(title: string) {
		this.elements.titleInput().type(title)
	}

	inputDescription(description: string) {
		this.elements.descriptionInput().type(description)
	}

	inputContent(content: string) {
		this.elements.contentInput().type(content)
	}

	inputTag(tag: string) {
		this.elements.tagsInput().type(`${tag}{enter}`)
	}

	clickPublishButton() {
		this.elements.publishButton().click()
	}
}

export default new NewArticlePage()
