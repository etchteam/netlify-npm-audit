// This is the main file for the Netlify Build plugin npm-audit.
// Please read the comments to learn more about the Netlify Build plugin syntax.
// Find more information in the Netlify documentation.

module.exports = {
  async onPreBuild({
    // Users can pass configuration inputs to any plugin in their Netlify
    // configuration file.
    // For example:
    //
    //   [[plugins]]
    //   package = "netlify-plugin-npm-audit"
    //     [plugins.inputs]
    //     foo = "bar"
    inputs,

    // Core utilities
    utils: {
      // Utility to report errors.
      // See https://github.com/netlify/build#error-reporting
      build,
      // Utility to display information in the deploy summary.
      // See https://github.com/netlify/build#logging
      status,
      // Utility for running commands.
      // See https://github.com/netlify/build/blob/master/packages/run-utils#readme
      run,
    },
  }) {
    try {
      // Run npm audit to check for security issues
      const level = inputs.level || 'moderate';
      await run('npm', ['audit', `--audit-level=${level}`])

    } catch (error) {
      // The audit failed
      build.failBuild('Error message', { error })
    }

    // Display success information
    status.show({ summary: 'Success!' })
  },
}
