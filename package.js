Package.describe({
  name: "pfafman:filesaver",
	summary: "filesaver.js packaged for use in Meteor.",
  version: "1.2.2",
  git: "https://github.com/pfafman/meteor-filesaver.git"
});

Package.onUse(function (api) {
  api.export(['saveAs'])
  api.versionsFrom("METEOR@1.0");
	api.add_files('lib/FileSaver.js', 'client');
});
