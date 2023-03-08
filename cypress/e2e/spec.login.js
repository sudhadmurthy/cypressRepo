import loginPage from "../pageobjects/login"
// login to herokuapp
describe('login to herokuapp',()=>{
    let LoginPage = new loginPage();
    it('Login test',()=>{
        //visit the url
        LoginPage.getEmail(cy.fixture('userId'));
        LoginPage.getPassword(cy.fixture('password'));
        LoginPage.Loginbutton().click();

        }
    )

})