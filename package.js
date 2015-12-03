Package.describe({
  name: "pfafman:filesaver",
	summary: "filesaver.js packaged for use in Meteor.",
  version: "0.2.2",
  git: "https://github.com/pfafman/meteor-filesaver.git"
});

Package.onUse(function (api) {
  api.versionsFrom("METEOR@1.0");
	api.add_files('lib/FileSaver.js', 'client');
});
