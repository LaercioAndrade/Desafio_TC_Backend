// verbo/metodo - endpoint . motivo (request). extensao
/// <reference types="cypress"/>

function newCards(){
    return cy.request({
        method:'GET', 
        url: 'deck/new/shuffle/?deck_count=1',
        failOnStatusCode: false,
    })
}
export { newCards };