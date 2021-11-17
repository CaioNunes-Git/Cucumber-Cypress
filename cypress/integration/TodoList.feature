Feature: TodoList
    Como usuário, desejo utilizar o app 
    Para o controle de tarefas a serem realizadas

Scenario: Adicionar nova tarefa
    Given que eu acesso o TodoApp
    When inserir a tarefa 
    # And confirmar, Essa parte fica subentendida
    Then a nova tarefa será adicionada

Scenario: Não adicionar nova tarefa
    Given que eu acesso o TodoApp
    When não digito uma nova tarefa
    Then não será possível confirmar
    And a nova tarefa não será adicionada

Scenario: Alterar tarefa
    Given que eu acesso o TodoApp
    When tento editar uma tarefa
    And confirmo seu novo valor
    Then o valor atual da tarefa será o novo valor digitado

Scenario: Alterar a tarefa porém não confirmar
    Given que eu acesso o TodoApp
    When tento editar uma tarefa
    And não confirmo seu novo valor
    Then o valor atual da tarefa será igual ao inicial

Scenario: Excluir tarefa
    Given que eu acesso o TodoApp
    When tento excluir uma tarefa
    And confirmo
    Then a tarefa não deve constar na lista

Scenario: Completar tarefas
    Given que eu acesso o TodoApp
    When eu assiná-lo a tarefa como completa
    Then ao lado da tarefa consta como verificado

Scenario: Mover tarefas
    Given que eu acesso o TodoApp
    When eu arrasto a primeira tarefa
    And a coloco no lugar na segunda
    Then ela muda de lugar

