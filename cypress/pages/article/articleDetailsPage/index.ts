class ArticleDetailsPage {
	private elements = {
		titleText: () => cy.get('h1'),
		editArticleButton: () => cy.findAllByTestId('edit-button'),
		deleteArticleButton: () => cy.findAllByTestId('delete-button'),
		followArticleButton: () => cy.findAllByTestId('follow-button'),
		favoriteArticleButton: () => cy.findAllByTestId('favorite-button'),
		signInCommentsLink: () =>
			cy.findAllByTestId('primary-redirect').contains('Sign in'),
		signUpCommentsLink: () =>
			cy.findAllByTestId('primary-redirect').contains('Sign up'),
		writeCommentInput: () => cy.findByTestId('comment-input'),
	}

	getTitleText() {
		return this.elements.titleText()
	}

	getEditArticleButton() {
		return this.elements.editArticleButton().first()
	}

	getDeleteArticleButton() {
		return this.elements.deleteArticleButton().first()
	}

	getFollowArticleButton() {
		return this.elements.followArticleButton().first()
	}

	getFavoriteArticleButton() {
		return this.elements.favoriteArticleButton().first()
	}

	getWriteCommentInput() {
		return this.elements.writeCommentInput()
	}
}

export default new ArticleDetailsPage()
