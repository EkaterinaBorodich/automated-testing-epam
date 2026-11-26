const { patientsPage } = require('../po');

describe('Patients page', () => {
  beforeEach(async () => {
    await patientsPage.open();
  });

  it('should find a patient by name', async () => {
    await expect(patientsPage.moduleTitle).toHaveText('PATIENT LIST');

    await patientsPage.searchFor('Laura');

    await expect(patientsPage.rows).toBeElementsArrayOfSize(1);
    await expect(patientsPage.rows[0]).toHaveText(/Laura/);
  });
});