describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

describe('Expenses list', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('should display 3 expenses list items', () => {
    cy.get('.expenses-list li').should('have.length', 3)
    cy.get('.expenses-list li h2').first().should('have.text', 'New book')
    cy.get('.expenses-list li h2').last().should('have.text', 'New bag')
  })

  it('can add new expenses', () => {
    const title = 'bird'
    const amount = 2
    const date = '2023-05-05'

    cy.contains('Add New Expense').click()
    cy.get('form #title').type(`${title}`)
    cy.get('form #amount').type(`${amount}`)
    cy.get('form #date').type(`${date}`)
    cy.contains('Add Expense').click()

    cy.get('.expenses-list li h2').first().should('have.text', 'Cat')

  })

  it('can filter expenses by year', () => {
    cy.get('.expenses-filter__control select').select(1)
    cy.get('.expenses-list li').should('have.length', 1)
    cy.get('.expenses-list li h2').first().should('have.text', 'New jeans')

    cy.get('.expenses-filter__control select').select(2)
    cy.get('.expenses-list li').should('have.length', 0)
  })
})