Package.describe({
	summary: "filesaver.js packaged for use in Meteor.",
  version: "0.1.0",
  git: "https://github.com/pfafman/meteor-filesaver.git"
});

Package.on_use(function (api) {
  api.versionsFrom("METEOR@0.9.0");
	api.add_files('lib/FileSaver.js', 'client');
});
