import loginPage from "../pageobjects/login"

// login to herokuapp
describe('login to herokuapp',()=>{
    let LoginPage = new loginPage();
    let data;
before('run before',()=>
    {
    cy.visit('https://the-internet.herokuapp.com/login');    
cy.fixture('example').then( (fdata) => {
    data = fdata})
    }
)

    it('Login test',()=>{
        //visit the url
        LoginPage.getEmail().type(data.userId);
        LoginPage.getPassword().type(data.password);
        LoginPage.Loginbutton().click();

        }
    )

})