import tslint, { type ConfigWithExtends } from 'typescript-eslint'

export default function typescript(): ConfigWithExtends[] {
  return [
    ...tslint.configs.recommended,
    {
      rules: {
        '@typescript-eslint/ban-types': ['error', { '{}': false }],
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-explicit-any': 'warn',
      },
    },
  ]
}
