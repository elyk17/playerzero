import search from '../page_objects/search_bar'
import results from '../page_objects/search_results'

describe('Target test', () => {
    beforeEach(() => {
        cy.visit('https://www.target.com')
        cy.window().then((window) => {
          var document = window.document
          var head = document.getElementsByTagName("head").item(0);
          var script = document.createElement("script");
          script.setAttribute("type", "text/javascript");
          script.setAttribute("src", "https://go.playerzero.ai/record/6274691b00fbad01561df689");
          head.appendChild(script);
          cy.wait(1000)
          })
      })
      afterEach(() => {
        cy.window().then((window) => {
          let string = window.playerzero.session()
          cy.log(string )
         })
      })   
  it('ordering a product', () => {
      search.search_field().clear({force: true}).type('Toilet Paper')
      search.search_button().click({force: true})
      cy.wait(3000)
      results.product_title(3).contains('Charmin')
  })
})