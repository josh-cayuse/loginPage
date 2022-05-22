/// <reference types="cypress" />

describe("checking links", ()=>{

    const appleLinkVerify = 'id1172873177';
    const googleLinkVerify = 'details?id=ch.sherpany.boardroom';
    const microsoftLinkVerify = '9NH1PR95ZXF7';

    beforeEach(() => {
        cy.viewport('macbook-15');
        cy.visit('https://app.sherpany.com');
    })

    it('forget password link works', () => {
        cy.get('.PrimaryLogin_actions__30Kl7 > .ant-btn-text > span').click();
        cy.url().should('include', '/password/reset');
        cy.get('.AlternativeAction_container__17A_K > .ant-btn > span').click()
        cy.url().should('eq','https://app.sherpany.com/')

    })

    it('login with SSO', () => {
        cy.get('.AlternativeAction_container__17A_K > .ant-btn').click();
        //same url, but will have new text at top
        cy.contains('Log in with SSO').should('exist');
        cy.get('.AlternativeAction_container__17A_K > .ant-btn > span').click();
        cy.url().should('eq','https://app.sherpany.com/')
    })

    it('Request a demo', () => {
        cy.get('.RequestDemoAction_link__GwUR1').invoke('removeAttr', 'target').click();

        //new window appears
        cy.url().should('include', 'app_demo');
    })

    it('get help', () => {
        cy.get('.GetHelpAction_container___DT7O > .ant-btn > span').click();
        cy.contains('Sherpany Support').should('exist');
        cy.get('#chat-fc-name').type('Korben Dallas');
        cy.get('#chat-fc-sherpanyloginemail').type('multipass@gmail.com');
        cy.get('#chat-fc-language').select('English');
        cy.get('.fc-button').click();
    })

    it('Sherpany.com link', () => {
        cy.get(':nth-child(1) > .FooterLink_link__f9Yzj').invoke('removeAttr', 'target').click();
        cy.url().should('include', 'sherpany.com');
    })

    it('Meeting resources link', () => {
        cy.get(':nth-child(2) > .FooterLink_link__f9Yzj').invoke('removeAttr', 'target').click();
        cy.url().should('include', 'meeting-management');
    })

    it('Private Policy link', () => {

        cy.get(':nth-child(3) > .FooterLink_link__f9Yzj').invoke('removeAttr', 'target').click();
        cy.url().should('include', 'privacy-policy');
    })

    it('Terms of Use link', () => {
        cy.get(':nth-child(4) > .FooterLink_link__f9Yzj').invoke('removeAttr', 'target').click();
        cy.url().should('include', 'terms');
    })

    it('Apple App Download link', () => {
        cy.get(':nth-child(1) > .NativeAppsLink_link__34sPh').invoke('removeAttr', 'target').click();
        cy.url().should('contain', appleLinkVerify);
    })

    it ('Google Play Download link', () => {
        cy.get(':nth-child(2) > .NativeAppsLink_link__34sPh').invoke('removeAttr', 'target').click();
        cy.url().should('contain', googleLinkVerify);
    })

    it ('Microsoft Store Download link', () => {
        cy.get(':nth-child(3) > .NativeAppsLink_link__34sPh').invoke('removeAttr', 'target').click();
        cy.url().should('contain', microsoftLinkVerify);
    })

 
})