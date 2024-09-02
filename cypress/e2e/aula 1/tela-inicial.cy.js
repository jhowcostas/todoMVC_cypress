import telaInicial from '../../support/pageObjects/tela-inicial.pageObjects'

describe('Acessar a pagina do todoMVC', () => {
  it('Abrir o site', () => {
    cy.visit('/')
    telaInicial.inputText()
  })
})