export default {
  'extends': 'stylelint-config-standard',
  'plugins': [
    '@stylistic/stylelint-plugin',
  ],
  'rules': {
    '@stylistic/color-hex-case': 'lower',
    '@stylistic/number-leading-zero': 'always',
    '@stylistic/unit-case': 'lower',
  },
};
