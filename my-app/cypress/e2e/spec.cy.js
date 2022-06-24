describe('empty spec', () => {
  it('passes', () => {
    cy.visit("localhost:3001")
    cy.contains("Log In").click()
    cy.contains("Week 1").click()
    cy.contains("Day 1").click()
    cy.get(':nth-child(2) > .add-to-weekend').click()
    cy.get(':nth-child(2) > .todo-list-item > .chevron-icon > svg').click()
    cy.get('.accordion > input').type("Testing Comment Input")
    cy.get('.accordion > .accordion-button').click()
    cy.get(':nth-child(2) > .todo-list-item > .todo-list-content > .icon-box > .star-rating > :nth-child(4) > .star').click()
    cy.get(':nth-child(4) > .todo-list-item > .todo-list-content > .icon-box > .star-rating > :nth-child(2) > .star').click()
    cy.get(':nth-child(6) > .todo-list-item > .todo-list-content > .icon-box > .star-rating > :nth-child(4) > .star').click()
    cy.get(':nth-child(8) > .todo-list-item > .todo-list-content > .icon-box > .star-rating > :nth-child(5) > .star').click()
    cy.contains("3.7")
    cy.contains("Weekend").click()
    cy.contains("HTML elements and attributes")
    cy.get(':nth-child(1) > .star').click()
    cy.contains("3")
    cy.contains("Week 1").click()
    cy.contains("Week 2").click()
    cy.contains("Day 3").click()
    cy.get(':nth-child(4) > .add-to-weekend').click()
    cy.contains("Weekend").click()
    cy.get('.add-to-weekend').click()
    cy.get('.nav-button').click()
  })
})