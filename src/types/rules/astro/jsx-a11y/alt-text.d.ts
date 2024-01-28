import type { RuleConfig } from '../../rule-config';

/**
 * Option.
 */
export interface JsxA11YAltTextOption {
  elements?: string[];
  img?: string[];
  object?: string[];
  area?: string[];
  'input[type="image"]'?: string[];
  [k: string]: any;
}

/**
 * Options.
 */
export type JsxA11yAltTextOptions = [JsxA11yAltTextOption?];

/**
 * Apply `jsx-a11y/alt-text` rule to Astro components.
 *
 * @see [jsx-a11y/alt-text](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/alt-text/)
 */
export type JsxA11yAltTextRuleConfig = RuleConfig<JsxA11yAltTextOptions>;

/**
 * Apply `jsx-a11y/alt-text` rule to Astro components.
 *
 * @see [jsx-a11y/alt-text](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/alt-text/)
 */
export interface JsxA11yAltTextRule {
  /**
   * Apply `jsx-a11y/alt-text` rule to Astro components.
   *
   * @see [jsx-a11y/alt-text](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/alt-text/)
   */
  'astro/jsx-a11y/alt-text': JsxA11yAltTextRuleConfig;
}
