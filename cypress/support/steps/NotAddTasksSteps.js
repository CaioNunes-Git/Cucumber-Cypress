Given('que eu acesso o TodoApp',()=>{
    cy.visit('https://just-another-todo-app.vercel.app')
});

When('não digito uma nova tarefa',()=>{
    cy.get('#new-todo-item')
});

Then('não será possível confirmar',()=>{
    cy.get('button[data-testid=form-submit]')
    // usando o cy.get('.row > :nth-child(2)') estoura o tempo, porquê?
    .should('be.disabled')
});

And('a nova tarefa não será adicionada',()=>{
    cy.get('.form_item__text')
    .should('not.exist')
});

