const BaseComponent = require('./base.component');

class HeaderComponent extends BaseComponent {
  constructor() {
    super('.planner-header');
  }

  get appName() {
    return this.rootEl.$('.clinic-name');
  }
}

module.exports = HeaderComponent;