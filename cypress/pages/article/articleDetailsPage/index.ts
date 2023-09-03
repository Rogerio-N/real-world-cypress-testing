class ArticleDetailsPage {
	private elements = {
		titleText: () => cy.get('h1'),
	}

	getTitleText() {
		return this.elements.titleText()
	}
}

export default new ArticleDetailsPage()
