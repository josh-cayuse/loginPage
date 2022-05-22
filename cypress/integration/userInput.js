/// <reference types="cypress" />
import LoginPage from "../pages/login_page"

const loginPage = new LoginPage

describe("user input", ()=>{

    beforeEach(() =>{
        cy.viewport('macbook-15')
        cy.visit('https://app.sherpany.com');
    })

    

    it('x in login, on main page ', ()=>{
        //x shoudn't exist until user inputs anything
        cy.get('.ant-input-suffix > .anticon > svg > path').should('not.be.visible')

        cy.get('#email').type('a')

        //x now exists
        cy.get('.ant-input-suffix > .anticon > svg > path').should('be.visible')

        //use x, text should dissappear
        cy.get('[aria-label=close-circle]').click()

        cy.get('#email').should('have.value', '');

    })

    it(' x in login, forget password page', ()=> {
        //nav to forget password page
        cy.get('.PrimaryLogin_actions__30Kl7 > .ant-btn-text > span').click()

        // start of testing x, sholdn't exist, exists when something is typed, will delete entered 
        // text when used. 
        cy.get('.ant-input-suffix > .anticon > svg > path').should('not.be.visible')

        cy.get('[data-cy="password_reset_email"]').type('a')

        cy.get('.ant-input-suffix > .anticon > svg > path').should('be.visible')

        cy.get('[aria-label=close-circle]').click()

        cy.get('[data-cy="password_reset_email"]').should('have.value', '');
    })

    it(' x in login, log in with SOO', ()=> {
        cy.get('.AlternativeAction_container__17A_K > .ant-btn > span').click()

        cy.get('.ant-input-suffix > .anticon > svg > path').should('not.be.visible')

        cy.get('#email').type('a')

        cy.get('.ant-input-suffix > .anticon > svg > path').should('be.visible')

        cy.get('[aria-label=close-circle]').click()

        cy.get('#email').should('have.value', '')

    })

    it('language drop down, Deutsch, on main page', ()=>{

        cy.get('.ant-select-selection-item > span').click()

        loginPage.selectLang("Deutsch")

        cy.contains("Anmelden").should('exist')

    })

    it('language drop down, Français, on main page', ()=>{

        cy.get('.ant-select-selection-item > span').click()

        loginPage.selectLang("Français")

        cy.contains("S'identifier", {timeout: 6 * 1000}).should('exist')

    })

    it('language drop down, Italiano, then back to English, on main page', ()=>{

        cy.get('.ant-select-selection-item > span').click()

        loginPage.selectLang("Italiano")

        cy.contains("Accedere").should('exist')

        // check for going back to english
        cy.get('.ant-select-selection-item > span').click()

        loginPage.selectLang("English")

        cy.contains("Log in").should('exist')

    })

})