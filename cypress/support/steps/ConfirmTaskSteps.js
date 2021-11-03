Given('que eu acesso o TodoApp',()=>{
    cy.visit('https://just-another-todo-app.vercel.app')
})

When('eu assiná-lo a tarefa como completa',()=>{
    cy.get('#new-todo-item')
    .click()
    .type("Teste de tarefa 1")
    .get('button[data-testid=form-submit]').click()

    cy.get('.form_item__checkout > span > .svg-inline--fa > path')
    .click()
})

Then('ao lado da tarefa consta como verificado',()=>{
    cy.get('.form_item__checkout > span > .svg-inline--fa > path')
    .should('not.be.disabled')
})