var contactsComponent = require('../contacts/contacts.module.js'),
    studentsComponent = require('../students/students.module.js'),
    schoolsModule = require('../schools/schools.module.js'),
    albumsModule = require('../albums/albums.module.js'),
    mainRoute = require('./main.route'),
    navigationComponent = require('../navigation/navigation.module.js'),
    mainComponent = require('./components/main.component.js'),
    levelsComponent = require('../levels/levels.module.js'),
    newsComponent = require('../news/news.module.js'),
    loginModule = require('../login/login.module.js'),
    requestComponent = require('../request/request.module.js'),
    parentsModule = require('../parents/parents.module.js'),
    teachersModule = require('../teachers/teachers.module.js');

module.exports = angular.module("app.main", [
  // modules
  require('angular-ui-router'),
  require('angular-resource'),
  mainComponent.name,
  navigationComponent.name,
  studentsComponent.name,
  schoolsModule.name,
  albumsModule.name,
  contactsComponent.name,
  levelsComponent.name,
  newsComponent.name,
  mainRoute.name,
  loginModule.name,
  requestComponent.name,
  parentsModule.name,
  teachersModule.name
]);
