const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const {wrapWithReanimatedMetroConfig} = require('react-native-reanimated/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {};


// module.exports = mergeConfig(getDefaultConfig(__dirname), config);

// Merge your config with the default one
const mergedConfig = mergeConfig(getDefaultConfig(__dirname), config);

// Wrap it with Reanimated
module.exports = wrapWithReanimatedMetroConfig(mergedConfig);
