 const elem = require('../elements/tela-inicial.elements').ELEMENTS
 const concluirItem = require('../elements/tela-inicial.elements').ITENS
 const filtrarItem = require('../elements/tela-inicial.elements').FILTROS


 class telaInicial{
    
    inputText(dado){
        cy.get(elem.inputTodo).type(dado).type('{enter}')
    }

    validarInput(texto){
        cy.get(elem.inputTodo)
        .should('have.attr', 'placeholder')
        .and('include', texto)
        
    }

    concluirItem(){
        cy.get(concluirItem.buttonConcluirItem)
        .last()
        .click()
    }
 
    filtrarItem(menu){
        cy.get(filtrarItem.filtroToDo)
        .contains(menu)
        .and('be.visible')
        .click()
    }
    deletarItem(){
        cy.get(concluirItem.listaItens)
        .first()
        .find('button')
        .invoke('show')
        .click()
    }
    validarContador(numero){
        cy.get(filtrarItem.contador)
        .find('strong')
        .should('have.text',numero)
    }
    validarSizeTodo(numero){
        cy.get(concluirItem.validarSizeTodo)
        .should('have.length',numero)
     
    
    }
}

    export default new telaInicial();