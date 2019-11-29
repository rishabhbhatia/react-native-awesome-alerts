module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    development: {
      plugins: ['@babel/plugin-proposal-class-properties']
    }
  }
};
