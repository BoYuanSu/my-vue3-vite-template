module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/standard'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  globals: {
    defineProps: 'readonly',
    VITE_APP_VERSION: 'readonly'
    // customEnv: 'readonly',
    // custom:'readonly'
  },
  rules: {
    'no-unused-vars': 'warn',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
