Given('que eu acesso o TodoApp',()=>{
    cy.visit('https://just-another-todo-app.vercel.app')
    
});

When('tento editar uma tarefa',()=>{
    //A seguir vem a Rule, esse seria o lugar mais adequado para colocá-la?
    cy.get('#new-todo-item')
    .click()
    .type("Teste de tarefa 1")
    .get('button[data-testid=form-submit]').click()

    cy.get('.form_item__text')
    .trigger('mouseover')
    .get('[title=Edit]') //Felicidade
    .click()
});

And('não confirmo seu novo valor',()=>{
    cy.get('#input-edit-todo-item')
    .clear()
    .type('Novo valor do Título')
    .get('#cancel-edit-todo-item')
    .click()
});

Then('o valor atual da tarefa será igual ao inicial',()=>{
    cy.get('.form_item__text')
    .should('contain','Teste de tarefa 1')
});