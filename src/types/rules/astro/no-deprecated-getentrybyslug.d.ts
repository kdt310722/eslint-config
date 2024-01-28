import type { RuleConfig } from '../rule-config';

/**
 * Disallow using deprecated `getEntryBySlug()`.
 *
 * @see [no-deprecated-getentrybyslug](https://ota-meshi.github.io/eslint-plugin-astro/rules/no-deprecated-getentrybyslug/)
 */
export type NoDeprecatedGetentrybyslugRuleConfig = RuleConfig<[]>;

/**
 * Disallow using deprecated `getEntryBySlug()`.
 *
 * @see [no-deprecated-getentrybyslug](https://ota-meshi.github.io/eslint-plugin-astro/rules/no-deprecated-getentrybyslug/)
 */
export interface NoDeprecatedGetentrybyslugRule {
  /**
   * Disallow using deprecated `getEntryBySlug()`.
   *
   * @see [no-deprecated-getentrybyslug](https://ota-meshi.github.io/eslint-plugin-astro/rules/no-deprecated-getentrybyslug/)
   */
  'astro/no-deprecated-getentrybyslug': NoDeprecatedGetentrybyslugRuleConfig;
}
