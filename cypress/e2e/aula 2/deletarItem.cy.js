import telaInicial from '../../support/pageObjects/tela-inicial.pageObjects'

describe('Validar os filtros da aplicação apos a adição de itens', () => {
    
    
    beforeEach(()=>{
        cy.visit('/')
        
        var todoItens= ["maça", "Banana","Cenoura"]
        todoItens.forEach(function(item, indice, array){
        telaInicial.inputText(item)               
          });
        });
        it('deleção de um item da lista', () => {
          telaInicial.deletarItem()
            
        });
});