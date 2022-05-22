
export default class LanguageTests{

    //locations main page
    loc_login_header = '.ContentBoxTitle_heading__ryO0N'
    loc_emailText = ':nth-child(1) > .FieldLabel_fieldLabel__Awo_E'
    loc_passwordText = ':nth-child(2) > .FieldLabel_fieldLabel__Awo_E'
    loc_forgetPass = '.PrimaryLogin_actions__30Kl7 > .ant-btn-text > span'
    loc_loginButton = '.ant-btn-primary'
    loc_orButton = '.AlternativeAction_label__TeIfN'
    loc_loginSSO ='.AlternativeAction_container__17A_K > .ant-btn > span'
    //             .AlternativeAction_container__17A_K > .ant-btn
    loc_NoAcctYet = '.RequestDemoAction_container__uqBFr > span'
    loc_getHelp = '.GetHelpAction_container___DT7O > .ant-btn > span'
    loc_ReqDemo = '.RequestDemoAction_link__GwUR1'
    loc_meetResc = ':nth-child(2) > .FooterLink_link__f9Yzj'
    loc_privacyPol = ':nth-child(3) > .FooterLink_link__f9Yzj'
    loc_TermsOfUse =':nth-child(4) > .FooterLink_link__f9Yzj'
    loc_downloadOn = '.NativeAppsLinks_label__rc2b5'

    //locations support pop up after clicking on Get Help link
    loc_suppHeader = '.fc-header'
    loc_suppMess = '.fc-form > p'
    loc_suppName = 'ul > :nth-child(1) > label'
    loc_suppEmail = 'ul > :nth-child(2) > label'
    loc_suppLangSelector = ':nth-child(3) > label'
    loc_suppStartChat = '.fc-button'


    //english, main login page
    engLogin = "Log in"
    engEmail = 'Email'
    engPass = 'Password'
    engOr = 'or'
    engForgetPass = 'Forgot password?'
    engLoginButton = 'Log in'
    engLoginSSO = 'Log in with SSO'
    engNoAcctYet = 'No account yet'
    engGetHelp = 'Get help'
    engRequestDemo = 'Request a demo'
    engMeetingResc = 'Meeting resources'
    engPrivacyPol = 'Privacy Policy'
    engTermsOfUse = 'Terms of Use'
    engDownloadOn = 'Download on'

    //eng support page
    engSherSupport = 'Sherpany Support'
    engSupportMess = "We´re happy to talk to you. First, please take a moment to tell us a little bit more about you so that we can provide you with the best service possible."
    engSupportName = 'Name'
    engSupportEmail = 'Sherpany Login Email'
    engSupportLang = 'Language'
    engSupportChat = 'Start Chat'
    
    //deutsch main login page
    deuLogin = 'Anmelden'
    deuEmail = 'E-Mail'
    deuPass = 'Passwort'
    deuOr = 'oder'
    deuForgetPass = 'Passwort vergessen?'
    deuLoginButton = 'Anmelden'
    deuLoginSSO = 'Mit SSO anmelden'
    deuNoAcctYet = 'Noch kein Konto?'
    deuGetHelp = 'Brauchen Sie Hilfe?'
    deuRequestDemo = 'Demo anfordern'
    deuMeetingResc = 'Ressourcen für die Sitzung'
    deuPrivacyPol = 'Datenschutzbestimmungen'
    deuTermsOfUse = 'Nutzungsbedingungen'
    deuDownloadOn = 'Herunterladen auf'

    //deutsch support page
    deuSherSupport = 'Sherpany Support'
    deuSupportMess = "Wir freuen uns auf ein Gespräch mit Ihnen. Bitte nehmen Sie sich zunächst einen Moment Zeit, um uns ein wenig mehr über sich zu erzählen, damit wir Ihnen den bestmöglichen Service bieten können."
    deuSupportName = 'Name'
    deuSupportEmail = 'Sherpany Login Email'
    deuSupportLang = 'Sprache'
    deuSupportChat = 'Chat starten'

    //Français main login page
    fraLogin = "S'identifier"
    franEmail = 'E-mail'
    fraPass = 'Mot de passe'
    fraOr = 'ou'
    fraForgetPass = 'Mot de passe oublié?'
    fraLoginButton = "S'identifier"
    fraLoginSSO = 'Se connecter avec SSO'
    fraNoAcctYet = 'Pas encore de compte ?'
    fraGetHelp = "Recevoir de l'aide"
    fraRequestDemo = 'Demander une démo'
    fraMeetingResc = 'Ressources pour la réunion'
    fraPrivacyPol = 'Déclaration de protection de données'
    fraTermsOfUse = "Conditions d'utilisation"
    fraDownloadOn = 'Téléchargement sur'

    //Français support page
    fraSherSupport = 'Support Sherpany'
    fraSupportMess = "Nous sommes heureux de vous parler. Tout d'abord, veuillez prendre un moment pour nous en dire un peu plus sur vous afin que nous puissions vous fournir le meilleur service possible."
    fraSupportName = 'Nom'
    fraSupportEmail = 'Sherpany Login Email'
    fraSupportLang = 'Langue'
    fraSupportChat = 'Démarrer le Chat'

    //italiano main login page
    itaLogin = 'Accedere'
    itaEmail = 'Email'
    itaPass = 'Password'
    itaOr = 'o'
    itaForgetPass = 'Password dimenticata?'
    itaLoginButton = 'Accedere'
    itaLoginSSO = 'Accedere con SSO'
    itaNoAcctYet = 'Non ha ancora un account?'
    itaGetHelp = 'Ottenere aiuto'
    itaRequestDemo = 'Richiedere una demo'
    itaMeetingResc = 'Risorse per le riunioni'
    itaPrivacyPol = 'Informativa sulla privacy'
    itaTermsOfUse = "Condizioni d'uso"
    itaDownloadOn = 'Scaricare su'

    //italiano support page
    itaSherSupport = 'Supporto Sherpany'
    itaSupportMess = "Siamo felici di parlare con lei. Per prima cosa, ci racconti qualcosa in più su di lei, in modo che possiamo fornirle il miglior servizio possibile."
    itaSupportName = 'Nome'
    itaSupportEmail = 'Sherpany Login Email'
    itaSupportLang = 'Lingua'
    itaSupportChat = 'Inizio chat'


    selectLang(lang){
        cy.get('span').each(($ele) => {
            if ($ele.text() == lang) {
                cy.wrap($ele).click()
            }
        })
    }

    loginPG_loginText(lang){
        let loginHeader; 

        if (lang == "English"){
            loginHeader = this.engLogin
        }else if(lang == "Deutsch"){
            loginHeader = this.deuLogin
        }else if(lang == "Français"){
            loginHeader = this.fraLogin
        }else if(lang == "Italiano"){
            loginHeader = this.itaLogin
        }
        cy.get(this.loc_login_header).contains(loginHeader).should('exist')
    }

    loginPG_email(lang){
        let email; 

        if (lang == "English"){
            email = this.engEmail
        }else if(lang == "Deutsch"){
            email = this.dueEmail
        }else if(lang == "Français"){
            email = this.fraEmail
        }else if(lang == "Italiano"){
            email = this.itaEmail
        }

        cy.get(this.loc_emailText).contains(email).should('exist')

    }

    loginPG_password(lang){
        let pass; 

        if (lang == "English"){
            pass = this.engPass
        }else if(lang == "Deutsch"){
            pass = this.deuPass
        }else if(lang == "Français"){
            pass = this.fraPass
        }else if(lang == "Italiano"){
            pass = this.itaPass
        }

        cy.get(this.loc_passwordText).contains(pass).should('exist')

    }

    loginPG_orDivider(lang){
        let orButton; 

        if (lang == "English"){
            orButton = this.engOr
        }else if(lang == "Deutsch"){
            orButton = this.deuOr
        }else if(lang == "Français"){
            orButton = this.fraOr
        }else if(lang == "Italiano"){
            orButton = this.itaOr
        }

        cy.get(this.loc_orButton).contains(orButton).should('exist')

    }

    loginPG_forgetPass(lang){
        let forgetPass; 

        if (lang == "English"){
            forgetPass = this.engForgetPass
        }else if(lang == "Deutsch"){
            forgetPass = this.deuForgetPass
        }else if(lang == "Français"){
            forgetPass = this.fraForgetPass
        }else if(lang == "Italiano"){
            forgetPass = this.itaForgetPass
        }

        cy.get(this.loc_forgetPass).contains(forgetPass).should('exist')

    }

    loginPG_loginButton(lang){
        let loginButton; 

        if (lang == "English"){
            loginButton = this.engLoginButton
        }else if(lang == "Deutsch"){
            loginButton = this.deuLoginButton
        }else if(lang == "Français"){
            loginButton = this.fraLoginButton
        }else if(lang == "Italiano"){
            loginButton = this.itaLoginButton
        }

        cy.get(this.loc_loginButton).contains(loginButton).should('exist')


    }

    loginPG_SSOLogin(lang){
        let ssoLogin; 

        if (lang == "English"){
            ssoLogin = this.engLoginSSO
        }else if(lang == "Deutsch"){
            ssoLogin = this.deuLoginSSO
        }else if(lang == "Français"){
            ssoLogin = this.fraLoginSSO
        }else if(lang == "Italiano"){
            ssoLogin = this.itaLoginSSO
        }

        cy.get(this.loc_loginSSO).contains(ssoLogin).should('exist')

    }

    loginPG_noAcctYet(lang){
        let noAcc; 

        if (lang == "English"){
            noAcc = this.engNoAcctYet
        }else if(lang == "Deutsch"){
            noAcc = this.deuNoAcctYet
        }else if(lang == "Français"){
            noAcc = this.fraNoAcctYet
        }else if(lang == "Italiano"){
            noAcc = this.itaNoAcctYet
        }

        cy.get(this.loc_NoAcctYet).contains(noAcc).should('exist')

    }

    loginPG_getHelp(lang){
        let getHelp; 

        if (lang == "English"){
            getHelp = this.engGetHelp
        }else if(lang == "Deutsch"){
            getHelp = this.deuGetHelp
        }else if(lang == "Français"){
            getHelp = this.fraGetHelp
        }else if(lang == "Italiano"){
            getHelp = this.itaGetHelp
        }

        cy.get(this.loc_getHelp).contains(getHelp).should('exist')
    }

    loginPG_reqDemo(lang){
        let reqDemo; 

        if (lang == "English"){
            reqDemo = this.engRequestDemo
        }else if(lang == "Deutsch"){
            reqDemo = this.deuRequestDemo
        }else if(lang == "Français"){
            reqDemo = this.fraRequestDemo
        }else if(lang == "Italiano"){
            reqDemo = this.itaRequestDemo
        }

        cy.get(this.loc_ReqDemo).contains(reqDemo).should('exist')

    }

    loginPG_meetResc(lang){
        let meetResc; 

        if (lang == "English"){
            meetResc = this.engMeetingResc
        }else if(lang == "Deutsch"){
            meetResc = this.deuMeetingResc
        }else if(lang == "Français"){
            meetResc = this.fraMeetingResc
        }else if(lang == "Italiano"){
            meetResc = this.itaMeetingResc
        }

        cy.get(this.loc_meetResc).contains(meetResc).should('exist')

    }

    loginPG_PrivacyPol(lang){
        let privacyPol; 

        if (lang == "English"){
            privacyPol = this.engPrivacyPol
        }else if(lang == "Deutsch"){
            privacyPol = this.deuPrivacyPol
        }else if(lang == "Français"){
            privacyPol = this.fraPrivacyPol
        }else if(lang == "Italiano"){
            privacyPol = this.itaPrivacyPol
        }

        cy.get(this.loc_privacyPol).contains(privacyPol).should('exist')

    }

    loginPG_termsOfUse(lang){
        let termsOfUse; 

        if (lang == "English"){
            termsOfUse = this.engTermsOfUse
        }else if(lang == "Deutsch"){
            termsOfUse = this.deuTermsOfUse
        }else if(lang == "Français"){
            termsOfUse = this.fraTermsOfUse
        }else if(lang == "Italiano"){
            termsOfUse = this.itaTermsOfUse
        }

        cy.get(this.loc_TermsOfUse).contains(termsOfUse).should('exist')
    }

    loginPG_downloadOn(lang){
        let downloadOn; 

        if (lang == "English"){
            downloadOn = this.engDownloadOn
        }else if(lang == "Deutsch"){
            downloadOn = this.deuDownloadOn
        }else if(lang == "Français"){
            downloadOn = this.fraDownloadOn
        }else if(lang == "Italiano"){
            downloadOn = this.itaDownloadOn
        }
        cy.get(this.loc_downloadOn).contains(downloadOn).should('exist')
    }


    //support area 
    suppPG_checkHeader(lang){
        let headerText; 

        if (lang == "English"){
            headerText = this.engSherSupport
        }else if(lang == "Deutsch"){
            headerText = this.deuSherSupport
        }else if(lang == "Français"){
            headerText = this.fraSherSupport
        }else if(lang == "Italiano"){
            headerText = this.itaSherSupport
        }
        cy.get(this.loc_suppHeader).contains(headerText).should('exist')
    }
    suppPG_supportMessage(lang){
        let suppMessage; 

        if (lang == "English"){
            suppMessage = this.engSupportMess
        }else if(lang == "Deutsch"){
            suppMessage = this.deuSupportMess
        }else if(lang == "Français"){
            suppMessage = this.fraSupportMess
        }else if(lang == "Italiano"){
            suppMessage = this.itaSupportMess
        }
        cy.get(this.loc_suppMess).contains(suppMessage).should('exist')
    }
    suppPG_name(lang){
        let nameText; 

        if (lang == "English"){
            nameText = this.engSupportName
        }else if(lang == "Deutsch"){
            nameText = this.deuSupportName
        }else if(lang == "Français"){
            nameText = this.fraSupportName
        }else if(lang == "Italiano"){
            nameText = this.itaSupportName
        }
        cy.get(this.loc_suppName).contains(nameText).should('exist')
    }
    suppPG_email(lang){
        let emailText; 

        if (lang == "English"){
            emailText = this.engSupportEmail
        }else if(lang == "Deutsch"){
            emailText = this.deuSupportEmail
        }else if(lang == "Français"){
            emailText = this.fraSupportEmail
        }else if(lang == "Italiano"){
            emailText = this.itaSupportEmail
        }
        cy.get(this.loc_suppEmail).contains(emailText).should('exist')
    }

    suppPG_langText(lang){
        let langText; 

        if (lang == "English"){
            langText = this.engSupportLang
        }else if(lang == "Deutsch"){
            langText = this.deuSupportLang
        }else if(lang == "Français"){
            langText = this.fraSupportLang
        }else if(lang == "Italiano"){
            langText = this.itaSupportLang
        }
        cy.get(this.loc_suppLangSelector).contains(langText).should('exist')
    }

    suppPG_startChat(lang){
        let chatText; 

        if (lang == "English"){
            chatText = this.engSupportChat
        }else if(lang == "Deutsch"){
            chatText = this.deuSupportChat
        }else if(lang == "Français"){
            chatText = this.fraSupportChat
        }else if(lang == "Italiano"){
            chatText = this.itaSupportChat
        }
        cy.get(this.loc_suppStartChat).contains(chatText).should('exist')
    }

}