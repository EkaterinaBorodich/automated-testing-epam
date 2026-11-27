const BasePage = require('./base.page');

class DoctorsPage extends BasePage {
  constructor() {
    super('doctors');
  }

  get moduleTitle() {
    return $('.module-title');
  }

  get addNewDoctorButton() {
    return $('button=Add New Doctor');
  }

  get doctorCards() {
    return $$('.specialist-item');
  }

  doctorCard(name) {
    return $(`//div[contains(@class, "specialist-item") and contains(., "${name}")]`);
  }
}

module.exports = DoctorsPage;