const DashboardPage = require('./dashboard.page');
const DoctorsPage = require('./doctors.page');
const PatientsPage = require('./patients.page');

module.exports = {
  dashboardPage: new DashboardPage(),
  doctorsPage: new DoctorsPage(),
  patientsPage: new PatientsPage(),
};