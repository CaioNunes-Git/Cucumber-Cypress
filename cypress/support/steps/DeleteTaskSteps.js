Given('que eu acesso o TodoApp',()=>{
    cy.visit('https://just-another-todo-app.vercel.app')
    
});

When('tento excluir uma tarefa',()=>{
    //A seguir vem a Rule, esse seria o lugar mais adequado para colocá-la?
    cy.get('#new-todo-item')
    .click()
    .type("Teste de tarefa 1")
    .get('button[data-testid=form-submit]').click()

    cy.get('.form_item__text')
    .trigger('mouseover')
});

// ↓Poderia tirar?↓
And('confirmo',()=>{
    cy.get('[title=Delete]')
    .click()
});

Then('a tarefa não deve constar na lista',()=>{
    cy.get('.form_item__text')
    .should('not.exist')
});