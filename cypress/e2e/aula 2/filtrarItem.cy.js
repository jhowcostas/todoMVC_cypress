import telaInicial from '../../support/pageObjects/tela-inicial.pageObjects'

describe('Validar os filtros da aplicação apos a adição de itens', () => {
    
    
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
    });
    it.skip('Filtrar por filtros concluidos', () => {
        
    });
});