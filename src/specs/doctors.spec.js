const { doctorsPage } = require('../po');

describe('Doctors page', () => {
  beforeEach(async () => {
    await doctorsPage.open();
  });

  it('should show the doctors list', async () => {
    await expect(doctorsPage.moduleTitle).toHaveText('DOCTORS LIST');
    await expect(doctorsPage.addNewDoctorButton).toExist();
    await expect(doctorsPage.doctorCards).toBeElementsArrayOfSize(7);
  });

  it('should list Dr. Nembo Lukeni among the doctors', async () => {
    await expect(doctorsPage.doctorCard('Nembo Lukeni')).toExist();
  });
});