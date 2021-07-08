import * as GETCards from '../requests/GETCards.request';

describe('GET Cards', () => {
    it('Embaralhar Cartas', () => {
        GETCards.newCards().should((response) => {
         expect(response.status).to.eq(200);
         expect(response.body).to.be.not.null
        })
    });
});