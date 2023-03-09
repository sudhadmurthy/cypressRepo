/// <reference types="cypress" />

Cypress.Commands.add('loginByGoogleApi', () => {
  cy.log('Logging in to Google')
  cy.request({
    method: 'POST',
    url: 'https://www.googleapis.com/oauth2/v4/token',
    body: {
      grant_type: 'refresh_token',
      client_id: 'enter client id',
      client_secret: 'enter client_secret',
      refresh_token: 'enter refresh token'
    },
  }).then(({ body }) => {
    const { access_token, id_token } = body
    cy.request({
      method: 'GET',
      url: 'https://www.googleapis.com/oauth2/v3/userinfo',
      headers: { Authorization: `Bearer ${access_token}` },
    }).then(({ body }) => {
      cy.log(body)
      const userItem = {
        token: id_token,
        user: {
          googleId: body.sub,
          email: body.email,
          givenName: body.given_name,
          familyName: body.family_name,
          imageUrl: body.picture,
        },
      }

      window.localStorage.setItem('googleCypress', JSON.stringify(userItem))
      cy.visit('')
    })
  })
})