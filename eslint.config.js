import eslint from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import jestDomPlugin from 'eslint-plugin-jest-dom';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import prettierPlugin from 'eslint-plugin-prettier';
import reactJsxRuntime from 'eslint-plugin-react/configs/jsx-runtime.js';
import reactRecommended from 'eslint-plugin-react/configs/recommended.js';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';
import testingLibraryPlugin from 'eslint-plugin-testing-library';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  reactRecommended,
  reactJsxRuntime,
  {
    plugins: {
      'react-hooks': reactHooksPlugin,
      'jsx-a11y': jsxA11yPlugin,
      'jest-dom': jestDomPlugin,
      'testing-library': testingLibraryPlugin,
      'simple-import-sort': simpleImportSortPlugin,
      prettier: prettierPlugin
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      'jsx-a11y/click-events-have-key-events': 'off',
      'jsx-a11y/no-static-element-interactions': 'off',
      'jsx-a11y/anchor-is-valid': [
        'error',
        {
          components: ['Link'],
          specialLink: ['hrefLeft', 'hrefRight'],
          aspects: ['invalidHref', 'preferButton']
        }
      ],
      'react/prop-types': 'off', // Because TypeScript already checks for this
      'valid-typeof': 'warn',
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // `react` related packages come first.
            ['^react'],
            // Internal packages.
            ['^@?\\w'],
            // Aliased commonly used directories.
            [
              '^(api|assets|common|components|locales|mocks|pages|src|services|state|styles|types|utils)(/.*|$)'
            ],
            // Side effect imports.
            ['^\\u0000'],
            // Parent imports. Put `..` last.
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            // Other relative imports. Put same-folder imports, `.` and style imports last.
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$', '^.+\\.s?css$']
          ]
        }
      ],
      'no-console': 'warn',
      'no-useless-escape': 'warn',
      'prettier/prettier': 'error' // Enable prettier errors as ESLint errors
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    languageOptions: {
      ecmaVersion: 'latest',
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        document: 'readonly',
        navigator: 'readonly',
        window: 'readonly'
      }
    }
  },
  // Apply jsx-a11y strict rules
  {
    rules: jsxA11yPlugin.configs.strict.rules
  },
  // Apply react-hooks rules
  {
    rules: reactHooksPlugin.configs.recommended.rules
  },
  // Apply jest-dom rules
  {
    rules: jestDomPlugin.configs.recommended.rules
  },
  // Apply testing-library rules
  {
    rules: testingLibraryPlugin.configs.react.rules
  },
  // Apply prettier config
  prettierConfig,
  {
    ignores: [
      'node_modules/**',
      'build/**',
      'types/**',
      '.DS_Store',
      '.env',
      '.env.*',
      '.github/**',
      'webpack.config.js'
    ]
  }
);
