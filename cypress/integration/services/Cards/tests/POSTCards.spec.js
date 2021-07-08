import * as POSTCards from '../requests/POSTCards.request';

context('POST Cards', () => {
    it('Verificar uma nova carta', () =>{
        POSTCards.drawACard().should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.not.null
        })
    })
})

context('POST Cards', () => {
    it('Retirar mais uma carta do baralho', () =>{
        POSTCards.drawACard().should((response) => {
            expect(response.status).to.eq(201);
            expect(response.body).to.be.not.null
        })
    })
})