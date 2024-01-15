describe('shipserv supplier', () => {
  const shipservURL = 'trade.shipserv.com'

  beforeEach(()  => {
    cy.visit('/')

    //it('verify successful log in as shipserv supplier', () => {
    cy.get('.css-bq7ibo')
      .contains('Login')
      .click()

    cy.location()
      .then((location) => {
        cy.wrap(location.pathname)
          .should('include', '/login')
    })

    cy.get('#mui-1')
      .should('exist')
      .type('ryandagoy@gmail.com')

    cy.get('#mui-2')
      .should('exist')
      .type('BXOTKk^5mWYJ*RmN')

    cy.get('.MuiButton-contained')
      .contains('Sign in')
      .click()
    
    cy.url()
      .should('include', 'https://www.shipserv.com/')

    cy.get('.css-ybe1m3')
      .contains('Supplier')
   // })
  })

  afterEach(()  => {
    cy.get('.MuiAvatar-root')
      .scrollIntoView()
      .should('be.visible')
      .click()

    cy.get('[href="https://id.shipserv.com/logout"]')
      .contains('Logout')
      .click()

    cy.location()
      .then((location) => {
        cy.wrap(location.pathname)
          .should('include', '/login')
    })
  })

  // it('verify successful log out', () => {
  //   cy.get('.css-bq7ibo')
  //     .contains('Login')
  //     .click()

  //   cy.location()
  //     .then((location) => {
  //       cy.wrap(location.pathname)
  //         .should('include', '/login')
  //   })

  //   cy.get('#mui-1')
  //     .should('exist')
  //     .type('ryandagoy@gmail.com')

  //   cy.get('#mui-2')
  //     .should('exist')
  //     .type('BXOTKk^5mWYJ*RmN')

  //   cy.get('.MuiButton-contained')
  //     .contains('Sign in')
  //     .click()
    
  //   cy.url()
  //     .should('include', 'https://www.shipserv.com/')

  //   // cy.location().then((location) => {
  //   //     cy.wrap(location.pathname).should('have', 'https://www.shipserv.com/')
  //   // })

  //   cy.get('.css-ybe1m3')
  //     .contains('Supplier')
  
  // })

  it('view all invoices and credit notes', () => {
    cy.get('#navigation-invoicing')
      .should('exist')
      .click()

    cy.location()
    .then((location) => {
      cy.wrap(location.pathname)
        .should('include', '/invoices')
    })

    cy.get('.css-14k4spz')
      .should('exist')
      .its('length')
      .then((n) => cy.log(`found ${n} invoices`))

    cy.get('.css-hjbaqt').last()
      .should('exist', 'Credit Notes')
      .click()
      .wait(2000)

    cy.location()
    .then((location) => {
      cy.wrap(location.pathname)
        .should('include', '/credit_notes')
    })      

    cy.get('.css-j18n8z')
    .should('be.visible')
    .its('length')
    .then((n) => cy.log(`found ${n} credit notes`))
  })

  it('create a new invoice', () => {
    cy.get('#navigation-invoicing')
      .should('exist')
      .click()

    cy.location()
      .then((location) => {
        cy.wrap(location.pathname)
          .should('include', '/invoices')
    })
    
    cy.get('.css-ayx6u1')
      .should('exist')
      .contains('New Invoice')
      .click()
    
    cy.location()
      .then((location) => {
        cy.wrap(location.pathname)
          .should('include', '/create_invoice')
    })

    cy.get('.css-1ftd4ir')
      .should(be.visible)
      .type('sdfadsf{enter}')

    cy.get('.css-m6cjr9')
      .should(be.visible)
    
    cy.get('.css-tq3o32')
      .should(be.visible)
      .click()

    cy.get('.css-lo4038').should(be.visible).type('ryan')
    cy.get('#:r1n:').should('be.visible').type('23')
    cy.get('.css-i1slq7').scrollIntoView().should('be.visible').click()
    
    cy.get('.css-jbobqn').should('be.visible')
    cy.get('#autocomplete').should('be.visible').select('Others')
    cy.get('input[type=file]')
      .selectFile('cypress/fixtures/AA.pdf', { force: true })

  })

})
