/// <reference types="cypress" />
import LanguageTests from "../pages/languageTesting"

const langTests = new LanguageTests

////
/// Italian
///
describe("checking text - Italiano", () => {

    //ensure this is the correct language to test
    
    let setLang = 'Italiano'

    beforeEach(() =>{
        cy.viewport('macbook-15')
        cy.visit('https://app.sherpany.com');
        ///
        cy.wait(6 * 1000)
        cy.get('.ant-select-selector').click()
        langTests.selectLang(setLang)
        cy.wait(6 * 1000)
        
        //cy.contains('English').should('exist').click()
        //cy.contains('Deutsch').should('exist').click()
        //cy.contains('Français').should('exist')
        //cy.contains('Italiano').should('exist')
    })
    
    it('mainpage text exists', () => {

        cy.get('.SherpanyTopLogo_logo__76RxV > img').should('exist')

        langTests.loginPG_loginText(setLang)
        langTests.loginPG_password(setLang)
        langTests.loginPG_orDivider(setLang)
        langTests.loginPG_forgetPass(setLang)
        langTests.loginPG_loginButton(setLang)
        langTests.loginPG_SSOLogin(setLang)
        langTests.loginPG_noAcctYet(setLang)
        langTests.loginPG_getHelp(setLang)
        langTests.loginPG_reqDemo(setLang)

        //is the same in each language
        cy.get(':nth-child(1) > .FooterLink_link__f9Yzj').contains('Sherpany.com').should('exist')

        langTests.loginPG_meetResc(setLang)
        langTests.loginPG_PrivacyPol(setLang)
        langTests.loginPG_termsOfUse(setLang)

       //cy.contains('swiss made software').should('exist')
       //is an image with text, will be the same for each language
       cy.get('.Footer_swissMadeSoftware__OMFFj').should('exist')

       langTests.loginPG_downloadOn(setLang)

       //images for 1, apple; 2, google; 3, windows
       //will be the same on all languages 
       cy.get(':nth-child(1) > .NativeAppsLink_link__34sPh').should('exist')
       cy.get(':nth-child(2) > .NativeAppsLink_link__34sPh').should('exist')
       cy.get(':nth-child(3) > .NativeAppsLink_link__34sPh').should('exist')

    })

    it('get help text exist', ()=> {
  
        //open the get help area
        cy.get('.GetHelpAction_container___DT7O > .ant-btn > span').click()

        langTests.suppPG_checkHeader(setLang)
        langTests.suppPG_supportMessage(setLang)
        langTests.suppPG_name(setLang)
        langTests.suppPG_email(setLang)
        langTests.suppPG_langText(setLang)
        langTests.suppPG_startChat(setLang)

        //does not change with language selection
        //cy.get('#chat-fc-lingua').click()
        cy.get('#chat-fc-lingua').select('...').should('exist')
        cy.get('#chat-fc-lingua').select('English').should('exist')
        cy.get('#chat-fc-lingua').select('French').should('exist')
        cy.get('#chat-fc-lingua').select('German').should('exist')
        cy.get('#chat-fc-lingua').select('Italian').should('exist')

    })

    it('dropdown text exists', ()=>{

        cy.get('.ant-select-selector').click()
        cy.contains('English').should('exist')
        cy.contains('Deutsch').should('exist')
        cy.contains('Français').should('exist')
        cy.contains('Italiano').should('exist')
    })

})

///
/// Deutsch
///
describe("checking text - Deutsch", () => {

    //ensure this is the correct language to test
    
    let setLang = 'Deutsch'

    beforeEach(() =>{
        cy.viewport('macbook-15')
        cy.visit('https://app.sherpany.com');
        ///
        cy.wait(6 * 1000)
        cy.get('.ant-select-selector').click()
        langTests.selectLang(setLang)
        cy.wait(6 * 1000)
        
        //cy.contains('English').should('exist').click()
        //cy.contains('Deutsch').should('exist').click()
        //cy.contains('Français').should('exist')
        //cy.contains('Italiano').should('exist')
    })
    
    it('mainpage text exists', () => {

        cy.get('.SherpanyTopLogo_logo__76RxV > img').should('exist')

        langTests.loginPG_loginText(setLang)
        langTests.loginPG_password(setLang)
        langTests.loginPG_orDivider(setLang)
        langTests.loginPG_forgetPass(setLang)
        langTests.loginPG_loginButton(setLang)
        langTests.loginPG_SSOLogin(setLang)
        langTests.loginPG_noAcctYet(setLang)
        langTests.loginPG_getHelp(setLang)
        langTests.loginPG_reqDemo(setLang)

        //is the same in each language
        cy.get(':nth-child(1) > .FooterLink_link__f9Yzj').contains('Sherpany.com').should('exist')

        langTests.loginPG_meetResc(setLang)
        langTests.loginPG_PrivacyPol(setLang)
        langTests.loginPG_termsOfUse(setLang)

       //cy.contains('swiss made software').should('exist')
       //is an image with text, will be the same for each language
       cy.get('.Footer_swissMadeSoftware__OMFFj').should('exist')

       langTests.loginPG_downloadOn(setLang)

       //images for 1, apple; 2, google; 3, windows
       //will be the same on all languages 
       cy.get(':nth-child(1) > .NativeAppsLink_link__34sPh').should('exist')
       cy.get(':nth-child(2) > .NativeAppsLink_link__34sPh').should('exist')
       cy.get(':nth-child(3) > .NativeAppsLink_link__34sPh').should('exist')

    })

    it('get help text exist', ()=> {
  
        //open the get help area
        cy.get('.GetHelpAction_container___DT7O > .ant-btn > span').click()

        langTests.suppPG_checkHeader(setLang)
        langTests.suppPG_supportMessage(setLang)
        langTests.suppPG_name(setLang)
        langTests.suppPG_email(setLang)
        langTests.suppPG_langText(setLang)
        langTests.suppPG_startChat(setLang)

        //does not change with language selection
        //cy.get('#chat-fc-lingua').click()s
        cy.get('#chat-fc-sprache').select('...').should('exist')
        cy.get('#chat-fc-sprache').select('English').should('exist')
        cy.get('#chat-fc-sprache').select('French').should('exist')
        cy.get('#chat-fc-sprache').select('German').should('exist')
        cy.get('#chat-fc-sprache').select('Italian').should('exist')

    })

    it('dropdown text exists', ()=>{

        cy.get('.ant-select-selector').click()
        cy.contains('English').should('exist')
        cy.contains('Deutsch').should('exist')
        cy.contains('Français').should('exist')
        cy.contains('Italiano').should('exist')
    })

})

///
///English
///
describe("checking text - English", () => {

    //ensure this is the correct language to test
    
    let setLang = 'English'

    beforeEach(() =>{
        cy.viewport('macbook-15')
        cy.visit('https://app.sherpany.com');
        ///
        cy.wait(6 * 1000)
        cy.get('.ant-select-selector').click()
        langTests.selectLang(setLang)
        cy.wait(6 * 1000)
        
        //cy.contains('English').should('exist').click()
        //cy.contains('Deutsch').should('exist').click()
        //cy.contains('Français').should('exist')
        //cy.contains('Italiano').should('exist')
    })
    
    it('mainpage text exists', () => {

        cy.get('.SherpanyTopLogo_logo__76RxV > img').should('exist')

        langTests.loginPG_loginText(setLang)
        langTests.loginPG_password(setLang)
        langTests.loginPG_orDivider(setLang)
        langTests.loginPG_forgetPass(setLang)
        langTests.loginPG_loginButton(setLang)
        langTests.loginPG_SSOLogin(setLang)
        langTests.loginPG_noAcctYet(setLang)
        langTests.loginPG_getHelp(setLang)
        langTests.loginPG_reqDemo(setLang)

        //is the same in each language
        cy.get(':nth-child(1) > .FooterLink_link__f9Yzj').contains('Sherpany.com').should('exist')

        langTests.loginPG_meetResc(setLang)
        langTests.loginPG_PrivacyPol(setLang)
        langTests.loginPG_termsOfUse(setLang)

       //cy.contains('swiss made software').should('exist')
       //is an image with text, will be the same for each language
       cy.get('.Footer_swissMadeSoftware__OMFFj').should('exist')

       langTests.loginPG_downloadOn(setLang)

       //images for 1, apple; 2, google; 3, windows
       //will be the same on all languages 
       cy.get(':nth-child(1) > .NativeAppsLink_link__34sPh').should('exist')
       cy.get(':nth-child(2) > .NativeAppsLink_link__34sPh').should('exist')
       cy.get(':nth-child(3) > .NativeAppsLink_link__34sPh').should('exist')

    })

    it('get help text exist', ()=> {
  
        //open the get help area
        cy.get('.GetHelpAction_container___DT7O > .ant-btn > span').click()

        langTests.suppPG_checkHeader(setLang)
        langTests.suppPG_supportMessage(setLang)
        langTests.suppPG_name(setLang)
        langTests.suppPG_email(setLang)
        langTests.suppPG_langText(setLang)
        langTests.suppPG_startChat(setLang)

        //does not change with language selection
        //cy.get('#chat-fc-lingua').click()s
        cy.get('#chat-fc-language').select('...').should('exist')
        cy.get('#chat-fc-language').select('English').should('exist')
        cy.get('#chat-fc-language').select('French').should('exist')
        cy.get('#chat-fc-language').select('German').should('exist')
        cy.get('#chat-fc-language').select('Italian').should('exist')

    })

    it('dropdown text exists', ()=>{

        cy.get('.ant-select-selector').click()
        cy.contains('English').should('exist')
        cy.contains('Deutsch').should('exist')
        cy.contains('Français').should('exist')
        cy.contains('Italiano').should('exist')
    })

})

///
/// Francais
///

describe("checking text - Français", () => {

    //ensure this is the correct language to test
    
    let setLang = 'Français'

    beforeEach(() =>{
        cy.viewport('macbook-15')
        cy.visit('https://app.sherpany.com');
        ///
        cy.wait(6 * 1000)
        cy.get('.ant-select-selector').click()
        langTests.selectLang(setLang)
        cy.wait(6 * 1000)
        
        //cy.contains('English').should('exist').click()
        //cy.contains('Deutsch').should('exist').click()
        //cy.contains('Français').should('exist')
        //cy.contains('Italiano').should('exist')
    })
    
    it('mainpage text exists', () => {

        cy.get('.SherpanyTopLogo_logo__76RxV > img').should('exist')

        langTests.loginPG_loginText(setLang)
        langTests.loginPG_password(setLang)
        langTests.loginPG_orDivider(setLang)
        langTests.loginPG_forgetPass(setLang)
        langTests.loginPG_loginButton(setLang)
        langTests.loginPG_SSOLogin(setLang)
        langTests.loginPG_noAcctYet(setLang)
        langTests.loginPG_getHelp(setLang)
        langTests.loginPG_reqDemo(setLang)

        //is the same in each language
        cy.get(':nth-child(1) > .FooterLink_link__f9Yzj').contains('Sherpany.com').should('exist')

        langTests.loginPG_meetResc(setLang)
        langTests.loginPG_PrivacyPol(setLang)
        langTests.loginPG_termsOfUse(setLang)

       //cy.contains('swiss made software').should('exist')
       //is an image with text, will be the same for each language
       cy.get('.Footer_swissMadeSoftware__OMFFj').should('exist')

       langTests.loginPG_downloadOn(setLang)

       //images for 1, apple; 2, google; 3, windows
       //will be the same on all languages 
       cy.get(':nth-child(1) > .NativeAppsLink_link__34sPh').should('exist')
       cy.get(':nth-child(2) > .NativeAppsLink_link__34sPh').should('exist')
       cy.get(':nth-child(3) > .NativeAppsLink_link__34sPh').should('exist')

    })

    it('get help text exist', ()=> {
  
        //open the get help area
        cy.get('.GetHelpAction_container___DT7O > .ant-btn > span').click()

        langTests.suppPG_checkHeader(setLang)
        langTests.suppPG_supportMessage(setLang)
        langTests.suppPG_name(setLang)
        langTests.suppPG_email(setLang)
        langTests.suppPG_langText(setLang)
        langTests.suppPG_startChat(setLang)

        //does not change with language selection
        //cy.get('#chat-fc-lingua').click()s
        cy.get('#chat-fc-langue').select('...').should('exist')
        cy.get('#chat-fc-langue').select('English').should('exist')
        cy.get('#chat-fc-langue').select('French').should('exist')
        cy.get('#chat-fc-langue').select('German').should('exist')
        cy.get('#chat-fc-langue').select('Italian').should('exist')

    })

    it('dropdown text exists', ()=>{

        cy.get('.ant-select-selector').click()
        cy.contains('English').should('exist')
        cy.contains('Deutsch').should('exist')
        cy.contains('Français').should('exist')
        cy.contains('Italiano').should('exist')
    })

})

