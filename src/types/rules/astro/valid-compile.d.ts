import type { RuleConfig } from '../rule-config';

/**
 * Disallow warnings when compiling.
 *
 * @see [valid-compile](https://ota-meshi.github.io/eslint-plugin-astro/rules/valid-compile/)
 */
export type ValidCompileRuleConfig = RuleConfig<[]>;

/**
 * Disallow warnings when compiling.
 *
 * @see [valid-compile](https://ota-meshi.github.io/eslint-plugin-astro/rules/valid-compile/)
 */
export interface ValidCompileRule {
  /**
   * Disallow warnings when compiling.
   *
   * @see [valid-compile](https://ota-meshi.github.io/eslint-plugin-astro/rules/valid-compile/)
   */
  'astro/valid-compile': ValidCompileRuleConfig;
}
