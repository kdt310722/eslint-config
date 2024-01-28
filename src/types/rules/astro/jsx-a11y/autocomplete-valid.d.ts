import type { RuleConfig } from '../../rule-config';

/**
 * Option.
 */
export interface JsxA11YAutocompleteValidOption {
  inputComponents?: string[];
  [k: string]: any;
}

/**
 * Options.
 */
export type JsxA11yAutocompleteValidOptions = [JsxA11yAutocompleteValidOption?];

/**
 * Apply `jsx-a11y/autocomplete-valid` rule to Astro components.
 *
 * @see [jsx-a11y/autocomplete-valid](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/autocomplete-valid/)
 */
export type JsxA11yAutocompleteValidRuleConfig =
  RuleConfig<JsxA11yAutocompleteValidOptions>;

/**
 * Apply `jsx-a11y/autocomplete-valid` rule to Astro components.
 *
 * @see [jsx-a11y/autocomplete-valid](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/autocomplete-valid/)
 */
export interface JsxA11yAutocompleteValidRule {
  /**
   * Apply `jsx-a11y/autocomplete-valid` rule to Astro components.
   *
   * @see [jsx-a11y/autocomplete-valid](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/autocomplete-valid/)
   */
  'astro/jsx-a11y/autocomplete-valid': JsxA11yAutocompleteValidRuleConfig;
}
