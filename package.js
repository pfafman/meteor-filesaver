Package.describe({
  name: "pfafman:filesaver",
	summary: "filesaver.js packaged for use in Meteor.",
  version: "0.2.0_1",
  git: "https://github.com/pfafman/meteor-filesaver.git"
});

Package.on_use(function (api) {
  api.versionsFrom("METEOR@1.0");
	api.add_files('lib/FileSaver.js', 'client');
});
