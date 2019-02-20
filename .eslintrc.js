module.exports = {
  "env": {
    "browser": true,
    "es6": true,
  },
  "plugins": [
    "react",
  ],
  "globals": {
    "require": true,
	},
	"rules": {
    "no-console": 1,
    "no-underscore-dangle": 0,
    "no-param-reassign": 0,
    "global-require": 1,
    "max-len": [2, 150]
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module",
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true,
    },
  }
}