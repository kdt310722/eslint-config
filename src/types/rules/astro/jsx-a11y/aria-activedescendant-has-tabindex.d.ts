import type { RuleConfig } from '../../rule-config';

/**
 * Option.
 */
export interface JsxA11YAriaActivedescendantHasTabindexOption {
  [k: string]: any;
}

/**
 * Options.
 */
export type JsxA11yAriaActivedescendantHasTabindexOptions = [
  JsxA11yAriaActivedescendantHasTabindexOption?,
];

/**
 * Apply `jsx-a11y/aria-activedescendant-has-tabindex` rule to Astro components.
 *
 * @see [jsx-a11y/aria-activedescendant-has-tabindex](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/aria-activedescendant-has-tabindex/)
 */
export type JsxA11yAriaActivedescendantHasTabindexRuleConfig =
  RuleConfig<JsxA11yAriaActivedescendantHasTabindexOptions>;

/**
 * Apply `jsx-a11y/aria-activedescendant-has-tabindex` rule to Astro components.
 *
 * @see [jsx-a11y/aria-activedescendant-has-tabindex](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/aria-activedescendant-has-tabindex/)
 */
export interface JsxA11yAriaActivedescendantHasTabindexRule {
  /**
   * Apply `jsx-a11y/aria-activedescendant-has-tabindex` rule to Astro components.
   *
   * @see [jsx-a11y/aria-activedescendant-has-tabindex](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/aria-activedescendant-has-tabindex/)
   */
  'astro/jsx-a11y/aria-activedescendant-has-tabindex': JsxA11yAriaActivedescendantHasTabindexRuleConfig;
}
