
Cypress.Commands.add('setToken', () => {
 
  cy.api({
    method: 'POST',
    url: '/sessions',
    body: {
      email: 'fernando@qacademy.io',
      password: 'qa-cademy'
    }
  }).then((response) =>{
    expect(response.status).to.eql(200)

    Cypress.env('token', response.body.token)
    Cypress.env('idUser', response.body.user._id)

  })

})

Cypress.Commands.add('back2ThePast', () => {

  cy.api({

    method: 'DELETE',
    url: '/back2thepast/' + Cypress.env('idUser')

  }).then((response) =>{

    expect(response.status).to.eql(200)

  })

})

Cypress.Commands.add('postCharacters', (payload) => {

  cy.api({
    method: 'POST',
    url: '/characters',
    body: payload,
    headers: {
      Authorization: Cypress.env('token') 
    },
    failOnStatusCode: false
  }).then((response) => {
    return response
  })
})

Cypress.Commands.add('getCharacters', () => {

  cy.api({
    method: 'GET',
    url: '/characters',
    headers: {
      Authorization: Cypress.env('token') 
    },
    failOnStatusCode: false
  }).then((response) => {
    return response
  })
})