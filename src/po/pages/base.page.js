const { HeaderComponent, SideMenuComponent } = require('../components');

class BasePage {
  constructor(url) {
    this.url = url; 
    this.header = new HeaderComponent();
    this.sideMenu = new SideMenuComponent();
  }

  async open() {
    await browser.url(`/showcase/angular/appointmentplanner/#/${this.url}`);
  }
}

module.exports = BasePage;