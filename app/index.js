'use strict';
var fs = require('fs');
var path = require('path');
var util = require('util');
var myUtils = require('../util.js');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var wiredep = require('wiredep');
var chalk = require('chalk');

var Generator = module.exports = function Generator(args, options) {
  yeoman.generators.Base.apply(this, arguments);
  this.argument('appname', { type: String, required: false });
  this.appname = this.appname || path.basename(process.cwd());

  this.option('app-suffix', {
    desc: 'Allow a custom suffix to be added to the module name',
    type: String,
    required: 'false'
  });
  this.env.options['app-suffix'] = this.options['app-suffix'];
  this.scriptAppName = this.appname + myUtils.appName(this);

  this.on('end', function () {
    this.installDependencies({
      skipInstall: this.options['skip-install'],
      skipMessage: this.options['skip-message']
    });

    var enabledComponents = [];

  });

  this.pkg = require('../package.json');
  this.sourceRoot(path.join(__dirname, '../templates'));
};

util.inherits(Generator, yeoman.generators.Base);

Generator.prototype.welcome = function welcome() {
  if (!this.options['skip-welcome-message']) {
    this.log(yosay());
    this.log(
      chalk.magenta(
        'Out of the box I include weex recommended modules.' +
        '\n'
      )
    );
  }
};

Generator.prototype.packageFiles = function packageFiles() {
  this.template('_package.json', 'package.json');
  this.template('_gulpfile.js', 'gulpfile.js');
  this.template('_README.md', 'README.md');
  this.template('_changelog.md', 'changelog.md');
  this.template('_editorconfig', '.editorconfig');
  this.template('_gitignore', '.gitignore');
  this.template('_npmrc', '.npmrc');
  this.template('webpack.config.js', 'webpack.config.js');
  this.template('index.html', 'index.html');

  fs.mkdir('src');
  fs.mkdir('build');

  fs.mkdir('src/p');
  fs.mkdir('src/c');

};

Generator.prototype.showGuidance = function showGuidance() {
  var guidance =
    '\nNow that everything is set up, you\'ll need to execute a build. ' +
    '\nThis is done by running' +
    '\n  gulp build' +
    '\n' +
    '\nWork with your files by using' +
    '\n  gulp' +
    '\n' +
    '\nThis sets a watch on your files and also opens your project in ' +
    '\na web browser using live-reload, so that any changes you make are ' +
    '\ninstantly visible.'

  console.log(guidance);
};
