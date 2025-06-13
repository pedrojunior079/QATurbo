/// <reference types="cypress"/>:

describe('Login', () => {
    // cenario 1
    it('Login com sucesso', () => {
        cy.visit('https://automationpratice.com.br/login');
        cy.get('#user').type('joao@email.com');
        cy.get('#password').type('123456');
        cy.get('#btnLogin').click();
        cy.get('#swal2-title').should('have.text', 'Login realizado');
    });
     
    // cenario 2
    it('Email invalido', () => {
        cy.visit('https://automationpratice.com.br/login');
        cy.get('#user').type("jjhjhjkhhh54444564454");
        cy.get('#password').type('123456');
        cy.get('#btnLogin').click();
        cy.get('.invalid_input').should('have.text', 'E-mail inválido.');
    });

    // cenario 3
    it('Senha invalida', () => {
        cy.visit('https://automationpratice.com.br/login');
        cy.get('#user').type("joao@email.com");
        cy.get('#password').type('123');
        cy.get('#btnLogin').click();
        cy.get('.invalid_input').should('have.text', 'Senha inválida.');
    });

    it('Campos vazios', () => {
        cy.visit('https://automationpratice.com.br/login');
        cy.get('#btnLogin').click();
        cy.get('.invalid_input').should('have.text', 'E-mail inválido.');
    });
})

