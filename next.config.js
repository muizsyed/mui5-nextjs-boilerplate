const { version } = require('./package.json');

// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
    /* config options here */
    reactStrictMode: true,
    serverRuntimeConfig: {
        gitCommitHash: process.env.GIT_COMMIT_HASH,
        version
    },
    publicRuntimeConfig: {},
}

module.exports = nextConfig;