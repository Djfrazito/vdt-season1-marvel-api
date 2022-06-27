

describe('POST /characters', () => {


  before(() => {

    cy.setToken(),
      cy.back2ThePast()

  })

  it('Deve cadastrar um personagem', () => {

    const character = {
      name: 'Steven Rogers',
      alias: 'Capitão America',
      team: ['vingadores'],
      active: true
    }

    cy.postCharacters(character).then((response) => {


      expect(response.body).to.have.property('character_id')
      expect(response.body.character_id.length).to.eql(24)

    })

  })


  context('Quando o personagem já existe', () => {

    const character = {
      name: 'Djalma Frazito',
      alias: 'Capitão America',
      team: ['x-mean'],
      active: true
    }

    before(() => {
      cy.postCharacters(character).then((response) => {

        expect(response.status).to.eql(201)

      })
    })

    it('Não deve cadastrar duplicado', () => {

      cy.postCharacters(character).then((response) => {

        expect(response.status).to.eql(400)

      })
    })

  })

})
