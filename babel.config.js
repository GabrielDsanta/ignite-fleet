module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugions: [
      [
        "module:react-native-dotenv",
        {
          "moduleName": "@env",
          "allowUndefined": false,
        }
      ]
    ]
  };
};
