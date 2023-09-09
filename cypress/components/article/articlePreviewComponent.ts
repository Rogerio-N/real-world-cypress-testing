import { BaseArticleComponent } from './baseArticleComponent'

class ArticlePreviewComponent extends BaseArticleComponent {
	private elements = {
		favoriteButton: () => cy.get('[aria-label="Toggle Favorite"]'),
	}

	getFavoriteButton() {
		return this.elements.favoriteButton()
	}
}

export default new ArticlePreviewComponent()
