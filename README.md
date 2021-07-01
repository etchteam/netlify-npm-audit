# Netlify Build Plugin NPM Audit

Run [npm audit-ci](https://www.npmjs.com/package/audit-ci) on netlify builds to catch security errors.

## Install

Please install this plugin from the Netlify app.

Otherwise you can install this from npm and add the following to your `netlify.toml`

```
[[plugins]]
package = "@etchteam/netlify-plugin-npm-audit"
```

## Configuration

Add an `audit-ci.json` file to set the [audit configuration](https://www.npmjs.com/package/audit-ci)
