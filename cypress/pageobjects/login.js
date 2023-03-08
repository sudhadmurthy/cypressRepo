 class loginPage {

    getEmail(){
        return cy.get('#username')
    }

    getPassword() {
        
        return  cy.get('#password')
    }

    Loginbutton(){
        return cy.get('.radius')
    }

}

export default loginPage
