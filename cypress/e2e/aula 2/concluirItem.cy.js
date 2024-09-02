import telaInicial from '../../support/pageObjects/tela-inicial.pageObjects'

describe('Concluir itens na minha lista de ToDo', () => {
    
    
    beforeEach(()=>{
        cy.visit('/')
        
        var todoItens= ["maça", "Banana","Cenoura"]
        todoItens.forEach(function(item, indice, array){
        telaInicial.inputText(item)               
                    
          });
    })

      it('Concluir um item da lista de todo', () => {
        telaInicial.concluirItem()
      });



});