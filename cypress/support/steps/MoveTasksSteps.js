Given('que eu acesso o TodoApp',()=>{
    cy.visit('https://just-another-todo-app.vercel.app')
})

When('eu arrasto a primeira tarefa', ()=>{
    cy.get('#new-todo-item')
    .click()
    .type("Teste de tarefa 1")
    .get('button[data-testid=form-submit]').click()

    cy.get('#new-todo-item')
    .click()
    .type("Teste de tarefa 2")
    .get('button[data-testid=form-submit]').click()

    cy.get('#new-todo-item')
    .click()
    .type("Teste de tarefa 3")
    .get('button[data-testid=form-submit]').click()

    cy.get('ul li:last')
      .drag('ul li:first')
      

})

And('a coloco no lugar na segunda', ()=>{

})

Then('ela muda de lugar', ()=>{

})

