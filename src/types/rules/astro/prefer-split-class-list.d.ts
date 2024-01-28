import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface PreferSplitClassListOption {
  splitLiteral?: boolean;
}

/**
 * Options.
 */
export type PreferSplitClassListOptions = [PreferSplitClassListOption?];

/**
 * Require use split array elements in `class:list`.
 *
 * @see [prefer-split-class-list](https://ota-meshi.github.io/eslint-plugin-astro/rules/prefer-split-class-list/)
 */
export type PreferSplitClassListRuleConfig =
  RuleConfig<PreferSplitClassListOptions>;

/**
 * Require use split array elements in `class:list`.
 *
 * @see [prefer-split-class-list](https://ota-meshi.github.io/eslint-plugin-astro/rules/prefer-split-class-list/)
 */
export interface PreferSplitClassListRule {
  /**
   * Require use split array elements in `class:list`.
   *
   * @see [prefer-split-class-list](https://ota-meshi.github.io/eslint-plugin-astro/rules/prefer-split-class-list/)
   */
  'astro/prefer-split-class-list': PreferSplitClassListRuleConfig;
}
