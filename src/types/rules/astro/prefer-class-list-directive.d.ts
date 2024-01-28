import type { RuleConfig } from '../rule-config';

/**
 * Require `class:list` directives instead of `class` with expressions.
 *
 * @see [prefer-class-list-directive](https://ota-meshi.github.io/eslint-plugin-astro/rules/prefer-class-list-directive/)
 */
export type PreferClassListDirectiveRuleConfig = RuleConfig<[]>;

/**
 * Require `class:list` directives instead of `class` with expressions.
 *
 * @see [prefer-class-list-directive](https://ota-meshi.github.io/eslint-plugin-astro/rules/prefer-class-list-directive/)
 */
export interface PreferClassListDirectiveRule {
  /**
   * Require `class:list` directives instead of `class` with expressions.
   *
   * @see [prefer-class-list-directive](https://ota-meshi.github.io/eslint-plugin-astro/rules/prefer-class-list-directive/)
   */
  'astro/prefer-class-list-directive': PreferClassListDirectiveRuleConfig;
}
