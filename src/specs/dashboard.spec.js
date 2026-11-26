const { dashboardPage, doctorsPage } = require('../po');

describe('Dashboard page', () => {
  beforeEach(async () => {
    await dashboardPage.open();
  });

  it('should have the correct page title', async () => {
    await expect(browser).toHaveTitle('Appointment Planner - Syncfusion Angular Components Showcase App');
    await expect(dashboardPage.header.appName).toHaveText('APPOINTMENT PLANNER');
  });

  it('should open the Doctors page from the side menu', async () => {
    await dashboardPage.sideMenu.item('doctors').click();

    await expect(browser).toHaveUrl(expect.stringContaining('#/doctors'));
    await expect(doctorsPage.moduleTitle).toHaveText('DOCTORS LIST');
  });
});