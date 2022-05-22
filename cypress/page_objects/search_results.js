export default{
    filter_button: () => cy.get('[data-test="filtersButton"]'),
    category_button: () => cy.get('[v\data-test="pillButton"]').contains('Category'),
    price_button: () => cy.get('[data-test="pillButton"]').contains('Price'),
    sold_by_button: () => cy.get('[data-test="pillButton"]').contains('Sold by'),
    type_button: () => cy.get('[data-test="pillButton"]').contains('Type'),
    brand_button: () => cy.get('[data-test="pillButton"]').contains('Brand'),
    deals_button: () => cy.get('[data-test="pillButton"]').contains('Deals'),
    color_button: () => cy.get('[data-test="pillButton"]').contains('Color'),
    material_button: () => cy.get('[data-test="pillButton"]').contains('Material'),
    results_item: (num = {}) => cy.get('[class="styles__StyledCol-sc-ct8kx6-0 ebNJlV"]').eq(num),
    product_title: (num = {}) => cy.get('[class="styles__StyledCol-sc-ct8kx6-0 ebNJlV"]').eq(num).find('[data-test="product-title"]')
}