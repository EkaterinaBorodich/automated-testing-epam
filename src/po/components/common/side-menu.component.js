const BaseComponent = require('./base.component');

class SideMenuComponent extends BaseComponent {
  constructor() {
    super('#plannerSiderBar');
  }

  item(name) {
    return this.rootEl.$(`[routerlink="/${name.toLowerCase()}"]`);
  }
}

module.exports = SideMenuComponent;