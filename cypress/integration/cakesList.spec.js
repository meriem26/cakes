describe('Main Page', () => {
	beforeEach(() => {
		cy.visit('/');
	});
	it('should contain a title', () => {
		cy.get('[data-qa=title]').should('contain.text', 'Cakes List');
	});
	it('should contain an input', () => {
		cy.get('[data-qa=searchInput]').should('be.visible');
	});
});
describe('Mock List', () => {
	before(() => {
		cy.server();
		cy.route(
			'GET',
			'https://gist.githubusercontent.com/hart88/198f29ec5114a3ec3460/raw/8dd19a88f9b8d24c23d9960f3300d0c917a4f07c/cake.json',
			'fixture:cakes'
		);
		cy.visit('/');
	});
	it('should contain two cakes in the list', () => {
		cy.get('.card-info').should('have.length', 2);
	});
	it('should have the title of the cake for each one', () => {
		cy.get('[data-qa="cake-title"]')
			.eq(0)
			.contains('Lemon cheesecake');
		cy.get('[data-qa="cake-title"]')
			.eq(1)
			.contains('victoria sponge');
	});

	it('should have the image of the cake for each one', () => {
		cy.get('[data-qa="cake-img"]')
			.eq(0)
			.should(
				'have.attr',
				'src',
				'https://s3-eu-west-1.amazonaws.com/s3.mediafileserver.co.uk/carnation/WebFiles/RecipeImages/lemoncheesecake_lg.jpg'
			);
		cy.get('[data-qa=cake-img]')
			.eq(1)
			.should(
				'have.attr',
				'src',
				'http://www.bbcgoodfood.com/sites/bbcgoodfood.com/files/recipe_images/recipe-image-legacy-id--1001468_10.jpg'
			);
	});

	it('should have the description of the cake for each one', () => {
		cy.get('[data-qa="cake-desc"]')
			.eq(0)
			.contains('Mimicka cake');
		cy.get('[data-qa="cake-desc"]')
			.eq(1)
			.contains('sponge with jam');
	});
});
