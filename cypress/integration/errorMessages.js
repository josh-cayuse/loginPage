/// <reference types="cypress" />
import LanguageTests from "../pages/languageTesting"

const langTests = new LanguageTests;

const badEmail = "abcdefghijklmnop";
const fakeEmail = 'alskdjfickslas@gmail.com';
const fakePassword = "123abc"; 

///
///English
///
describe("checking error messages - English", ()=>{
let data;
//ensure this is the correct language to test
    
let setLang = 'English';

    before(()=>{
        //access fixture data
        cy.fixture('errorMess').then((fdata)=>{
           data=fdata;
        })
     })

    beforeEach(() =>{
        cy.viewport('macbook-15');
        cy.visit('https://app.sherpany.com');
        ///
        cy.wait(6 * 1000);
        cy.get('.ant-select-selector').click();
        langTests.selectLang(setLang);
        cy.wait(6 * 1000);

    })

    it('main page - email - blank', ()=>{
        cy.get('.ErrorMessage_message__GdM4G').should('not.exist');
        cy.contains(data.eng_invalidEmail).should('not.exist');

        cy.get('.ant-btn-primary').click();

        cy.get('.ErrorMessage_message__GdM4G').contains(data.eng_invalidEmail).should('exist');
    })

    it('main page - email - wrong', ()=>{

        cy.get('#email').type(badEmail);

        cy.get('.ErrorMessage_message__GdM4G').should('not.exist');
        cy.contains(data.eng_invalidEmail).should('not.exist');

        cy.get('.ant-btn-primary').click();
        cy.get('.ErrorMessage_message__GdM4G').contains(data.eng_invalidEmail).should('exist');
    })

    it('main page - bad email (no @), fake password', ()=>{
        cy.get('#email').type(badEmail);
        cy.get('#password').type(fakePassword);

        cy.get('.ErrorMessage_message__GdM4G').should('not.exist');
        cy.contains(data.eng_invalidEmail).should('not.exist');


        cy.get('.ant-btn-primary').click(); 
        cy.get('.ErrorMessage_message__GdM4G').contains(data.eng_invalidEmail).should('exist');
    })

    it('main page - fake email and password', ()=>{
        cy.get('#email').type(fakeEmail);
        cy.get('#password').type(fakePassword);

        cy.get('.ErrorMessage_message__GdM4G').should('not.exist');
        cy.contains(data.eng_retryAgain).should('not.exist');
        
        cy.get('.ant-btn-primary').click();
        cy.get('.ErrorMessage_message__GdM4G').contains(data.eng_retryAgain).should('exist');
    })

    it('main page - fake email and no password', ()=>{
        cy.get('#email').type(fakeEmail);

        cy.get('.ErrorMessage_message__GdM4G').should('not.exist');
        cy.contains(data.eng_retryAgain).should('not.exist');
        
        cy.get('.ant-btn-primary').click();
        cy.get('.ErrorMessage_message__GdM4G').contains(data.eng_retryAgain).should('exist');
    })

    it('forget password - bad email', ()=> {
        cy.get('.PrimaryLogin_actions__30Kl7 > .ant-btn-text > span').click();
        cy.get('[data-cy="password_reset_email"]').type(badEmail);

        cy.get('.LoginApp_contentContainer__utVQF').contains(data.eng_invalidEmail).should('not.exist');

        cy.get('.ForgotPasswordForm_actions__PHqb2 > .ant-btn > span').click();

        cy.get('.LoginApp_contentContainer__utVQF').contains(data.eng_invalidEmail).should('exist');

    })

    it('log in with SSO - fake email', ()=> {

        cy.get('.AlternativeAction_container__17A_K > .ant-btn').click();
        cy.get('#email').type(fakeEmail);

        cy.get('.ErrorMessage_message__GdM4G').should('not.exist');
        cy.contains(data.eng_nonSSOEmail).should('not.exist');

        cy.get('.SSOForm_actions__2_5Z_ > .ant-btn > span').click();

        cy.get('.ErrorMessage_message__GdM4G').contains(data.eng_nonSSOEmail).should('exist');
        
    })

    it('log in with SSO - bad email', ()=> {

        cy.get('.AlternativeAction_container__17A_K > .ant-btn').click();
        cy.get('#email').type(badEmail);

        cy.get('.ErrorMessage_message__GdM4G').should('not.exist');
        cy.contains(data.eng_invalidEmail).should('not.exist');

        cy.get('.SSOForm_actions__2_5Z_ > .ant-btn > span').click();

        cy.get('.ErrorMessage_message__GdM4G').contains(data.eng_invalidEmail).should('exist');     
    })

    it('sherpany support - all blank', ()=> {

        cy.get('.GetHelpAction_container___DT7O > .ant-btn > span').click();
        cy.contains(langTests.engSherSupport, {timeout: 6 * 1000}).should('exist');

        cy.get(data.eng_locSuppNameError, {timeout: 7 * 1000}).contains(data.eng_validName).should('not.be.visible');
        cy.get('#chat-fc-sherpanyloginemail-error').contains(data.eng_validEmail).should('not.be.visible');
        cy.get(data.eng_locSuppLangError).contains(data.eng_selectLang).should('not.be.visible');

        cy.get('.fc-button').click();

        cy.get(data.eng_locSuppNameError).should('exist');
        cy.get('#chat-fc-sherpanyloginemail-error').should('exist');
        cy.get(data.eng_locSuppLangError).should('exist');

        cy.contains(data.eng_validName).should('exist');
        cy.contains(data.eng_validEmail).should('exist');
        cy.contains(data.eng_selectLang).should('exist');



    })

})

///
///Deutsch
///
describe("checking error messages - Deutsch", ()=>{
    let data;
    //ensure this is the correct language to test

    let setLang = 'Deutsch';

        before(()=>{
            //access fixture data
            cy.fixture('errorMess').then((fdata)=>{
               data=fdata;
            })
         })
    
        beforeEach(() =>{
            cy.viewport('macbook-15');
            cy.visit('https://app.sherpany.com');
            ///
            cy.wait(6 * 1000);
            cy.get('.ant-select-selector').click();
            langTests.selectLang(setLang);
            cy.wait(6 * 1000);            

        })
    
        it('main page - email - blank', ()=>{
            cy.get('.ErrorMessage_message__GdM4G').should('not.exist');
            cy.contains(data.deu_invalidEmail).should('not.exist');
    
            cy.get('.ant-btn-primary').click();
    
            cy.get('.ErrorMessage_message__GdM4G').contains(data.deu_invalidEmail).should('exist');
        })
    
        it('main page - email - wrong', ()=>{
    
            cy.get('#email').type(badEmail);
    
            cy.get('.ErrorMessage_message__GdM4G').should('not.exist');
            cy.contains(data.deu_invalidEmail).should('not.exist');
    
            cy.get('.ant-btn-primary').click();
            cy.get('.ErrorMessage_message__GdM4G').contains(data.deu_invalidEmail).should('exist');
        })
    
        it('main page - bad email (no @), fake password', ()=>{
            cy.get('#email').type(badEmail);
            cy.get('#password').type(fakePassword);
    
            cy.get('.ErrorMessage_message__GdM4G').should('not.exist');
            cy.contains(data.deu_invalidEmail).should('not.exist');
    
    
            cy.get('.ant-btn-primary').click(); 
            cy.get('.ErrorMessage_message__GdM4G').contains(data.deu_invalidEmail).should('exist');
        })
    
        it('main page - fake email and password', ()=>{
            cy.get('#email').type(fakeEmail);
            cy.get('#password').type(fakePassword);
    
            cy.get('.ErrorMessage_message__GdM4G').should('not.exist');
            cy.contains(data.deu_retryAgain).should('not.exist');
            
            cy.get('.ant-btn-primary').click();
            cy.get('.ErrorMessage_message__GdM4G').contains(data.deu_retryAgain).should('exist');
        })
    
        it('main page - fake email and no password', ()=>{
            cy.get('#email').type(fakeEmail);
    
            cy.get('.ErrorMessage_message__GdM4G').should('not.exist');
            cy.contains(data.deu_retryAgain).should('not.exist');
            
            cy.get('.ant-btn-primary').click();
            cy.get('.ErrorMessage_message__GdM4G').contains(data.deu_retryAgain).should('exist');
        })
    
        it('forget password - bad email', ()=> {
            cy.get('.PrimaryLogin_actions__30Kl7 > .ant-btn-text > span').click();
            cy.get('[data-cy="password_reset_email"]').type(badEmail);
    
            cy.get('.LoginApp_contentContainer__utVQF').contains(data.deu_invalidEmail).should('not.exist');
    
            cy.get('.ForgotPasswordForm_actions__PHqb2 > .ant-btn > span').click();
    
            cy.get('.LoginApp_contentContainer__utVQF').contains(data.deu_invalidEmail).should('exist');
    
        })
    
        it('log in with SSO - fake email', ()=> {
    
            cy.get('.AlternativeAction_container__17A_K > .ant-btn').click();
            cy.get('#email').type(fakeEmail);
    
            cy.get('.ErrorMessage_message__GdM4G').should('not.exist');
            cy.contains(data.deu_nonSSOEmail).should('not.exist');
    
            cy.get('.SSOForm_actions__2_5Z_ > .ant-btn > span').click();
    
            cy.get('.ErrorMessage_message__GdM4G').contains(data.deu_nonSSOEmail).should('exist');
            
        })
    
        it('log in with SSO - bad email', ()=> {
    
            cy.get('.AlternativeAction_container__17A_K > .ant-btn').click();
            cy.get('#email').type(badEmail);
    
            cy.get('.ErrorMessage_message__GdM4G').should('not.exist');
            cy.contains(data.deu_invalidEmail).should('not.exist');
    
            cy.get('.SSOForm_actions__2_5Z_ > .ant-btn > span').click();
    
            cy.get('.ErrorMessage_message__GdM4G').contains(data.deu_invalidEmail).should('exist');     
        })
    
        it('sherpany support - all blank', ()=> {
    
            cy.get('.GetHelpAction_container___DT7O > .ant-btn > span').click();
            cy.contains(langTests.deuSherSupport, {timeout: 6 * 1000}).should('exist');
    
            cy.get(data.due_locSuppNameError, {timeout: 7 * 1000}).contains(data.deu_validName).should('not.be.visible');
            cy.get('#chat-fc-sherpanyloginemail-error').contains(data.deu_validEmail).should('not.be.visible');
            cy.get(data.deu_locSuppLangError).contains(data.deu_selectLang).should('not.be.visible');
    
            cy.get('.fc-button').click();
    
            cy.get(data.due_locSuppNameError).should('exist');
            cy.get('#chat-fc-sherpanyloginemail-error').should('exist');

            cy.get(data.deu_locSuppLangError).should('exist');
    
            cy.contains(data.deu_validName).should('exist');
            cy.contains(data.deu_validEmail).should('exist');
            cy.contains(data.deu_selectLang).should('exist');
    
    
            
        })
    
})

///
///Français
///
describe("checking error messages - Français", ()=>{
    let data;
    //ensure this is the correct language to test

    let setLang = 'Français';

        before(()=>{
            //access fixture data
            cy.fixture('errorMess').then((fdata)=>{
               data=fdata;
            })
         })
    
        beforeEach(() =>{
            cy.viewport('macbook-15');
            cy.visit('https://app.sherpany.com');
            ///
            cy.wait(6 * 1000);
            cy.get('.ant-select-selector').click();
            langTests.selectLang(setLang);
            cy.wait(6 * 1000);
        })
    
        it('main page - email - blank', ()=>{
            cy.get('.ErrorMessage_message__GdM4G').should('not.exist');
            cy.contains(data.fra_invalidEmail).should('not.exist');
    
            cy.get('.ant-btn-primary').click();
    
            cy.get('.ErrorMessage_message__GdM4G').contains(data.fra_invalidEmail).should('exist');
        })
    
        it('main page - email - wrong', ()=>{
    
            cy.get('#email').type(badEmail);
    
            cy.get('.ErrorMessage_message__GdM4G').should('not.exist');
            cy.contains(data.fra_invalidEmail).should('not.exist');
    
            cy.get('.ant-btn-primary').click();
            cy.get('.ErrorMessage_message__GdM4G').contains(data.fra_invalidEmail).should('exist');
        })
    
        it('main page - bad email (no @), fake password', ()=>{
            cy.get('#email').type(badEmail);
            cy.get('#password').type(fakePassword);
    
            cy.get('.ErrorMessage_message__GdM4G').should('not.exist');
            cy.contains(data.fra_invalidEmail).should('not.exist');
    
    
            cy.get('.ant-btn-primary').click(); 
            cy.get('.ErrorMessage_message__GdM4G').contains(data.fra_invalidEmail).should('exist');
        })
    
        it('main page - fake email and password', ()=>{
            cy.get('#email').type(fakeEmail);
            cy.get('#password').type(fakePassword);
    
            cy.get('.ErrorMessage_message__GdM4G').should('not.exist');
            cy.contains(data.fra_retryAgain).should('not.exist');
            
            cy.get('.ant-btn-primary').click();
            cy.get('.ErrorMessage_message__GdM4G').contains(data.fra_retryAgain).should('exist');
        })
    
        it('main page - fake email and no password', ()=>{
            cy.get('#email').type(fakeEmail);
    
            cy.get('.ErrorMessage_message__GdM4G').should('not.exist');
            cy.contains(data.fra_retryAgain).should('not.exist');
            
            cy.get('.ant-btn-primary').click();
            cy.get('.ErrorMessage_message__GdM4G').contains(data.fra_retryAgain).should('exist');
        })
    
        it('forget password - bad email', ()=> {
            cy.get('.PrimaryLogin_actions__30Kl7 > .ant-btn-text > span').click();
            cy.get('[data-cy="password_reset_email"]').type(badEmail);
    
            cy.get('.LoginApp_contentContainer__utVQF').contains(data.fra_invalidEmail).should('not.exist');
    
            cy.get('.ForgotPasswordForm_actions__PHqb2 > .ant-btn > span').click();
    
            cy.get('.LoginApp_contentContainer__utVQF').contains(data.fra_invalidEmail).should('exist');
    
        })
    
        it('log in with SSO - fake email', ()=> {
    
            cy.get('.AlternativeAction_container__17A_K > .ant-btn').click();
            cy.get('#email').type(fakeEmail);
    
            cy.get('.ErrorMessage_message__GdM4G').should('not.exist');
            cy.contains(data.fra_nonSSOEmail).should('not.exist');
    
            cy.get('.SSOForm_actions__2_5Z_ > .ant-btn > span').click();
    
            cy.get('.ErrorMessage_message__GdM4G').contains(data.fra_nonSSOEmail).should('exist');
            
        })
    
        it('log in with SSO - bad email', ()=> {
    
            cy.get('.AlternativeAction_container__17A_K > .ant-btn').click();
            cy.get('#email').type(badEmail);
    
            cy.get('.ErrorMessage_message__GdM4G').should('not.exist');
            cy.contains(data.fra_invalidEmail).should('not.exist');
    
            cy.get('.SSOForm_actions__2_5Z_ > .ant-btn > span').click();
    
            cy.get('.ErrorMessage_message__GdM4G').contains(data.fra_invalidEmail).should('exist');     
        })
    
        it('sherpany support - all blank', ()=> {
    
            cy.get('.GetHelpAction_container___DT7O > .ant-btn > span').click();
            cy.contains(langTests.fraSherSupport, {timeout: 6 * 1000}).should('exist');
    
            cy.get(data.fra_locSuppNameError, {timeout: 7 * 1000}).contains(data.fra_validName).should('not.be.visible');
            cy.get('#chat-fc-sherpanyloginemail-error').contains(data.fra_validEmail).should('not.be.visible');
            cy.get(data.fra_locSuppLangError).contains(data.fra_selectLang).should('not.be.visible');
    
            cy.get('.fc-button').click();
    
            cy.get(data.fra_locSuppNameError).should('exist');
            cy.get('#chat-fc-sherpanyloginemail-error').should('exist');
            cy.get(data.fra_locSuppLangError).should('exist');
    
            cy.contains(data.fra_validName).should('exist');
            cy.contains(data.fra_validEmail).should('exist');
            cy.contains(data.fra_selectLang).should('exist');
    
    
            
        })
    
})

///
///Italiano
///
describe("checking error messages - Italiano", ()=>{
    let data;
    //ensure this is the correct language to test

    let setLang = 'Italiano';
        
        before(()=>{
            //access fixture data
            cy.fixture('errorMess').then((fdata)=>{
               data=fdata;
            })
         })
    
        beforeEach(() =>{
            cy.viewport('macbook-15');
            cy.visit('https://app.sherpany.com');
            ///
            cy.wait(6 * 1000);
            cy.get('.ant-select-selector').click();
            langTests.selectLang(setLang);
            cy.wait(6 * 1000);
        })
    
        it('main page - email - blank', ()=>{
            cy.get('.ErrorMessage_message__GdM4G').should('not.exist');
            cy.contains(data.ita_invalidEmail).should('not.exist');
    
            cy.get('.ant-btn-primary').click();
    
            cy.get('.ErrorMessage_message__GdM4G').contains(data.ita_invalidEmail).should('exist');
        })
    
        it('main page - email - wrong', ()=>{
    
            cy.get('#email').type(badEmail);
    
            cy.get('.ErrorMessage_message__GdM4G').should('not.exist');
            cy.contains(data.ita_invalidEmail).should('not.exist');
    
            cy.get('.ant-btn-primary').click();
            cy.get('.ErrorMessage_message__GdM4G').contains(data.ita_invalidEmail).should('exist');
        })
    
        it('main page - bad email (no @), fake password', ()=>{
            cy.get('#email').type(badEmail);
            cy.get('#password').type(fakePassword);
    
            cy.get('.ErrorMessage_message__GdM4G').should('not.exist');
            cy.contains(data.ita_invalidEmail).should('not.exist');
    
    
            cy.get('.ant-btn-primary').click(); 
            cy.get('.ErrorMessage_message__GdM4G').contains(data.ita_invalidEmail).should('exist');
        })
    
        it('main page - fake email and password', ()=>{
            cy.get('#email').type(fakeEmail);
            cy.get('#password').type(fakePassword);
    
            cy.get('.ErrorMessage_message__GdM4G').should('not.exist');
            cy.contains(data.ita_retryAgain).should('not.exist');
            
            cy.get('.ant-btn-primary').click()
            cy.get('.ErrorMessage_message__GdM4G').contains(data.ita_retryAgain).should('exist');
        })
    
        it('main page - fake email and no password', ()=>{
            cy.get('#email').type(fakeEmail);
    
            cy.get('.ErrorMessage_message__GdM4G').should('not.exist');
            cy.contains(data.ita_retryAgain).should('not.exist');
            
            cy.get('.ant-btn-primary').click();
            cy.get('.ErrorMessage_message__GdM4G').contains(data.ita_retryAgain).should('exist');
        })
    
        it('forget password - bad email', ()=> {
            cy.get('.PrimaryLogin_actions__30Kl7 > .ant-btn-text > span').click();
            cy.get('[data-cy="password_reset_email"]').type(badEmail);
    
            cy.get('.LoginApp_contentContainer__utVQF').contains(data.ita_invalidEmail).should('not.exist');
    
            cy.get('.ForgotPasswordForm_actions__PHqb2 > .ant-btn > span').click();
    
            cy.get('.LoginApp_contentContainer__utVQF').contains(data.ita_invalidEmail).should('exist');
    
        })
    
        it('log in with SSO - fake email', ()=> {
    
            cy.get('.AlternativeAction_container__17A_K > .ant-btn').click();
            cy.get('#email').type(fakeEmail);
    
            cy.get('.ErrorMessage_message__GdM4G').should('not.exist');
            cy.contains(data.ita_nonSSOEmail).should('not.exist');
    
            cy.get('.SSOForm_actions__2_5Z_ > .ant-btn > span').click();
    
            cy.get('.ErrorMessage_message__GdM4G').contains(data.ita_nonSSOEmail).should('exist');
            
        })
    
        it('log in with SSO - bad email', ()=> {
    
            cy.get('.AlternativeAction_container__17A_K > .ant-btn').click();
            cy.get('#email').type(badEmail);
    
            cy.get('.ErrorMessage_message__GdM4G').should('not.exist');
            cy.contains(data.ita_invalidEmail).should('not.exist');
    
            cy.get('.SSOForm_actions__2_5Z_ > .ant-btn > span').click();
    
            cy.get('.ErrorMessage_message__GdM4G').contains(data.ita_invalidEmail).should('exist');     
        })
    
        it('sherpany support - all blank', ()=> {
    
            cy.get('.GetHelpAction_container___DT7O > .ant-btn > span').click();
            cy.contains(langTests.itaSherSupport, {timeout: 6 * 1000}).should('exist');
    
            cy.get(data.ita_locSuppNameError, {timeout: 7 * 1000}).contains(data.ita_validName).should('not.be.visible');
            cy.get('#chat-fc-sherpanyloginemail-error').contains(data.ita_validEmail).should('not.be.visible');
            cy.get(data.ita_locSuppLangError).contains(data.ita_selectLang).should('not.be.visible');
    
            cy.get('.fc-button').click();
    
            cy.get(data.ita_locSuppNameError).should('exist');
            cy.get('#chat-fc-sherpanyloginemail-error').should('exist');
            cy.get(data.ita_locSuppLangError).should('exist');
    
            cy.contains(data.ita_validName).should('exist');
            cy.contains(data.ita_validEmail).should('exist');
            cy.contains(data.ita_selectLang).should('exist');
    
    
            
        })
    
})