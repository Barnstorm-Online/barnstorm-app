/* eslint-disable */

module.exports =
  {
    'setupTestFrameworkScriptFile': './jest.setup.js',
    'globals': {
      '__DEV__': true
    },
    'verbose': true,
    'testURL': 'http://localhost/',
    'testEnvironment': 'jsdom',
    'collectCoverage': true,
    'collectCoverageFrom': [
      '<rootDir>/src/**/*.{js}',
      '<rootDir>/src/**/*.{vue}'
    ],
    'coverageDirectory': '<rootDir>/test/coverage',
    'coverageThreshold': {
      'global': {
        'branches': 0,
        'functions': 0,
        'lines': 0,
        'statements': 0
      },
      './src/components/': {
        'branches': 0,
        'statements': 0
      }
    },
    'testMatch': [
      '<rootDir>/test/**/?(*.)(spec).js?(x)',
      '<rootDir>/test/**/?(*.)(test).js?(x)'
    ],
    'testPathIgnorePatterns': [
      '<rootDir>/components/coverage/',
      '<rootDir>/test/cypress/',
      '<rootDir>/test/coverage/',
      '<rootDir>/dist/',
      '<rootDir>/node_modules/'
    ],
    'moduleFileExtensions': [
      'js',
      'json',
      'vue'
    ],
    'moduleNameMapper': {
      'src/components/([^\\.]*).vue$': '<rootDir>/src/components/$1.vue',
      'src/components/([^\\.]*)$': '<rootDir>/src/components/$1.js',
      'src/layouts/([^\\.]*).vue$': '<rootDir>/src/layouts/$1.vue',
      'src/pages/([^\\.]*).vue$': '<rootDir>/src/pages/$1.vue',
      '^vue$': 'vue/dist/vue.common.js',
      'src/([^\\.]*)$': '<rootDir>/src/$1.js',
      'src/([^\\.]*).vue$': '<rootDir>/src/$1.vue',
      '(.*)/(.*).vue$': '<rootDir>/src/$1/$2.vue',
      'quasar': 'quasar-framework/dist/umd/quasar.mat.umd.min.js'
    },
    'resolver': null,
    'transformIgnorePatterns': [
      'node_modules/core-js',
      'node_modules/babel-runtime',
      'node_modules/lodash',
      'node_modules/vue'
    ],
    'transform': {
      '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
      '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
    },
    'snapshotSerializers': [
      '<rootDir>/node_modules/jest-serializer-vue'
    ]
  }
