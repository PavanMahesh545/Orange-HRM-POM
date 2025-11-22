const BasePage= require('./BasePage');

class LoginPage extends BasePage{

    constructor(page){

        super(page);

    this.usernameInput = page.getByPlaceholder('Username');
        this.passwordInput = page.getByPlaceholder('Password');
        this.loginButton = page.getByRole('button', { name: 'Login' });

    }

    async login(user,pass){

        await this.usernameInput.fill(user);
        await this.passwordInput.fill(pass);
        await this.loginButton.click();
    }

}
module.exports=LoginPage;