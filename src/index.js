// This is the main file for the Netlify Build plugin npm-audit.
// Please read the comments to learn more about the Netlify Build plugin syntax.
// Find more information in the Netlify documentation.

module.exports = {
  async onPreBuild({
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
      await run('npx', ['audit-ci', '--config=audit-ci.json'])

    } catch (error) {
      // The audit failed
      build.failBuild('Error message', { error })
    }

    // Display success information
    status.show({ summary: 'Success!' })
  },
}
