import type { RuleConfig } from '../rule-config';

/**
 * Require use object instead of ternary expression in `class:list`.
 *
 * @see [prefer-object-class-list](https://ota-meshi.github.io/eslint-plugin-astro/rules/prefer-object-class-list/)
 */
export type PreferObjectClassListRuleConfig = RuleConfig<[]>;

/**
 * Require use object instead of ternary expression in `class:list`.
 *
 * @see [prefer-object-class-list](https://ota-meshi.github.io/eslint-plugin-astro/rules/prefer-object-class-list/)
 */
export interface PreferObjectClassListRule {
  /**
   * Require use object instead of ternary expression in `class:list`.
   *
   * @see [prefer-object-class-list](https://ota-meshi.github.io/eslint-plugin-astro/rules/prefer-object-class-list/)
   */
  'astro/prefer-object-class-list': PreferObjectClassListRuleConfig;
}
