describe('GET /characters', () => {

    before(() => {

        cy.setToken()

    })

    it('deve retornar ums lista de personagens', () => {

        cy.getCharacters().then((response) => {
            expect(response.status).to.eql(200)
            expect(response.body).to.be.a('array')
        })
    })

})