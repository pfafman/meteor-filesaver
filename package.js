Package.describe({
  name: "pfafman:filesaver",
	summary: "filesaver.js packaged for use in Meteor.",
  version: "1.3.2_1",
  git: "https://github.com/pfafman/meteor-filesaver.git"
});

Package.onUse(function (api) {
  api.export(['saveAs'])
  api.add_files('lib/FileSaver.js', 'client');
});
