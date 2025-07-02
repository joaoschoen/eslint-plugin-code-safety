import { Linter, Rule } from 'eslint'

declare const config: {
  configs: {
    'flat/recommended': Linter.Config
    recommended: Linter.Config
  }
  rules: Record<string, Rule.RuleModule>
}

export default config
