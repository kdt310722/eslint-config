import type { RuleConfig } from '../rule-config';

/**
 * Disallow using deprecated `Astro.fetchContent()`.
 *
 * @see [no-deprecated-astro-fetchcontent](https://ota-meshi.github.io/eslint-plugin-astro/rules/no-deprecated-astro-fetchcontent/)
 */
export type NoDeprecatedAstroFetchcontentRuleConfig = RuleConfig<[]>;

/**
 * Disallow using deprecated `Astro.fetchContent()`.
 *
 * @see [no-deprecated-astro-fetchcontent](https://ota-meshi.github.io/eslint-plugin-astro/rules/no-deprecated-astro-fetchcontent/)
 */
export interface NoDeprecatedAstroFetchcontentRule {
  /**
   * Disallow using deprecated `Astro.fetchContent()`.
   *
   * @see [no-deprecated-astro-fetchcontent](https://ota-meshi.github.io/eslint-plugin-astro/rules/no-deprecated-astro-fetchcontent/)
   */
  'astro/no-deprecated-astro-fetchcontent': NoDeprecatedAstroFetchcontentRuleConfig;
}
