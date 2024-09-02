import telaInicial from '../../support/pageObjects/tela-inicial.pageObjects'

describe('Regressivo ToDo App', () => {
    context('Validar a tela inicial', () => {
        beforeEach(() => {
            cy.visit('/')
        });
        
        it('Validar a area label de input de dados', () => {
            telaInicial.validarInput("What needs to be done?")
        });
    })
  
    context('Validar a adição de itens', () => {
        beforeEach(() => {
            cy.visit('/')
                    });
        it('Adicionar mais de um item na lista', () => {
            var todoItens= ["maça", "Banana","Cenoura"]
            todoItens.forEach(function(item, indice, array){
            telaInicial.inputText(item)
            })
            telaInicial.validarContador(3);
        })
           
    })

    context('Validar a conclusão de itens', () => {
    
        beforeEach(()=>{
            cy.visit('/')
            
            var todoItens= ["maça", "Banana","Cenoura"]
            todoItens.forEach(function(item, indice, array){
            telaInicial.inputText(item)               
                        
              });

            })

        it('Concluir um item da lista de todo', () => {
        telaInicial.concluirItem()
        telaInicial.validarContador(2);
        telaInicial.validarSizeTodo(3)
        });
           
            
            })

    context('Validar o filtro de itens', () => {
        beforeEach(()=>{
            cy.visit('/')
            
            var todoItens= ["maça", "Banana","Cenoura"]
            todoItens.forEach(function(item, indice, array){
            telaInicial.inputText(item)               
              });
              telaInicial.concluirItem()
        })
    
        it('Filtrar por itens ativos', () => {
            telaInicial.filtrarItem("Active")
            telaInicial.validarSizeTodo(2)
        });
        it('Filtrar por filtros concluidos', () => {
            telaInicial.filtrarItem("Completed")
            telaInicial.validarSizeTodo(1)
        });
    })

    context('Validar a remoção de itens', () => {
        beforeEach(()=>{
            cy.visit('/')
            
            var todoItens= ["maça", "Banana","Cenoura"]
            todoItens.forEach(function(item, indice, array){
            telaInicial.inputText(item)               
              });
            });
            it('deleção de um item da lista', () => {
              telaInicial.deletarItem()
              telaInicial.validarSizeTodo(2)
            });
    })
})
