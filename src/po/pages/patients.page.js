const BasePage = require('./base.page');

class PatientsPage extends BasePage {
  constructor() {
    super('patients');
  }

  get moduleTitle() {
    return $('.module-title');
  }

  get searchInput() {
    return $('#schedule_searchbar');
  }

  get rows() {
    return $$('.e-grid .e-row');
  }

  async searchFor(name) {
    await this.searchInput.setValue(name);
    await browser.keys('Enter');
  }
}

module.exports = PatientsPage;