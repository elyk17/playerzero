export default{
    search_field: () => cy.get('[id="search"]'),
    search_button: () => cy.get('button').contains('go')
}