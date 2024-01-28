import type { RuleConfig } from '../rule-config';

/**
 * Disallow use of `set:text`.
 *
 * @see [no-set-text-directive](https://ota-meshi.github.io/eslint-plugin-astro/rules/no-set-text-directive/)
 */
export type NoSetTextDirectiveRuleConfig = RuleConfig<[]>;

/**
 * Disallow use of `set:text`.
 *
 * @see [no-set-text-directive](https://ota-meshi.github.io/eslint-plugin-astro/rules/no-set-text-directive/)
 */
export interface NoSetTextDirectiveRule {
  /**
   * Disallow use of `set:text`.
   *
   * @see [no-set-text-directive](https://ota-meshi.github.io/eslint-plugin-astro/rules/no-set-text-directive/)
   */
  'astro/no-set-text-directive': NoSetTextDirectiveRuleConfig;
}
