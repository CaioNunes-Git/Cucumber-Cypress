Given('que eu acesso o TodoApp',()=>{
    cy.visit('https://just-another-todo-app.vercel.app')
})

And('desejo adicionar uma nova tarefa',()=>{
    cy.get('#new-todo-item')
    .click()
})

When('digitar a tarefa',()=>{
    cy.get('#new-todo-item')
    .type("Teste de tarefa")
});

And('confirmar',()=>{
    //Diferentes formas de pegar o mesmo botão
        //cy.get('.row > :nth-child(2)').click()
        //cy.get('title=Add todo item') Não consegui
        //cy.get('.btn btn-primary') Não consegui
    //Dúvida: Tem como atribuir mais de um get para melhorar a busca do elemento?
    cy.get('button[data-testid=form-submit]').click()
})

Then('a nova tarefa será adicionada',()=>{
    cy.get('.form_item__text')
    .should('contain','Teste de tarefa')
});
