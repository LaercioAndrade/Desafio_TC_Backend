/// <reference types="cypress"/>

function drawACard(){
    return cy.request({
        method: 'POST',
        url: 'deck/v5acaqctl94b/draw/?count=2',
        failOnStatusCode: false,
    })
}
export { drawACard };