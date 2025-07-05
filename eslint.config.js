import { globalIgnores } from 'eslint/config'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import pluginVue from 'eslint-plugin-vue'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,js,mjs,cjs,vue}']
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  pluginVue.configs['flat/recommended'],
  vueTsConfigs.recommended,
  skipFormatting,

  {
    rules: {
      'vue/block-order': [
        'error',
        {
          order: ['template', 'script', 'style']
        }
      ],
      'vue/block-lang': [
        'error',
        {
          style: {
            lang: 'scss'
          }
        }
      ],
      'vue/multi-word-component-names': 'off',

      // 👇 Добавь это, чтобы отключить требование дефисов
      'vue/attribute-hyphenation': 'off',
      'vue/custom-event-name-casing': 'off'
    }
  }
)
