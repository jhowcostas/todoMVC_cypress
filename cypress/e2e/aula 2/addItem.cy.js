import telaInicial from '../../support/pageObjects/tela-inicial.pageObjects'

describe('Adicionar itens na minha lista de ToDo', () => {
    
    
    beforeEach(()=>{
        cy.visit('/')
    })
    it('Adicionar um item na lista', () => {
        telaInicial.inputText("dado1")
    

      })

      it('Adicionar mais de um item na lista', () => {
        var todoItens= ["maça", "Banana","Cenoura"]
        todoItens.forEach(function(item, indice, array){
            telaInicial.inputText(item)               
                })

      });

});