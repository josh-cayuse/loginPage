export default class LoginPage{


    //most of this is part of me learning how, kept it here for reference 
    //the selectlang(lang) is actually used in userinput.js 
    loginPage_email = '#email'
    loginPage_password = '#password'
    loginPage_button = '.ant-btn-primary > span'

    navigate(url){
        cy.visit(url)
    }

    enterEmail(email){
        cy.get(this.loginPage_email).type(email)
    }

    enterPassword(password){
        cy.get(this.loginPage_password ).type(password)
    }

    clickLogin(){
        cy.get(this.loginPage_button).click()
    }

    selectLang(lang){
        cy.get('span').each(($ele) => {
            if ($ele.text() == lang) {
                cy.wrap($ele).click()
            }
        })
    }

    loginText(lang){
        let text; 

        if (lang = "English"){
            text = "Log in"
        }else if(lang = "Deutsch"){
            text = "Anmelden"
        }else if(lang = "Francis"){
            text = "S'identifier"
        }else{
            text = "Accedere"
        }
        cy.contains(text).should('exist')
    }



}