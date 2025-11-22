

class BasePage{

    constructor(page){
        this.page=page;
    }


async goto(url){

    await this.page.goto(url,{waitUntil:'domcontentloaded'});

}
async click(selector) {
  await this.page.locator(selector).click();
}

async fill(selector, value) {
  await this.page.locator(selector).fill(value);
}

async getText(selector) {
  return await this.page.locator(selector).textContent();
}

async isVisible(selector) {
  return await this.page.locator(selector).isVisible();
}












}
module.exports= BasePage;