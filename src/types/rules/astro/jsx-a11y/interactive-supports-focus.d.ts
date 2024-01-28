import type { RuleConfig } from '../../rule-config';

/**
 * Option.
 */
export interface JsxA11YInteractiveSupportsFocusOption {
  /**
   * @minItems 0
   */
  tabbable?: (
    | 'button'
    | 'checkbox'
    | 'columnheader'
    | 'combobox'
    | 'grid'
    | 'gridcell'
    | 'link'
    | 'listbox'
    | 'menu'
    | 'menubar'
    | 'menuitem'
    | 'menuitemcheckbox'
    | 'menuitemradio'
    | 'option'
    | 'progressbar'
    | 'radio'
    | 'radiogroup'
    | 'row'
    | 'rowheader'
    | 'scrollbar'
    | 'searchbox'
    | 'slider'
    | 'spinbutton'
    | 'switch'
    | 'tab'
    | 'tablist'
    | 'textbox'
    | 'tree'
    | 'treegrid'
    | 'treeitem'
    | 'doc-backlink'
    | 'doc-biblioref'
    | 'doc-glossref'
    | 'doc-noteref'
  )[];
  [k: string]: any;
}

/**
 * Options.
 */
export type JsxA11yInteractiveSupportsFocusOptions = [
  JsxA11yInteractiveSupportsFocusOption?,
];

/**
 * Apply `jsx-a11y/interactive-supports-focus` rule to Astro components.
 *
 * @see [jsx-a11y/interactive-supports-focus](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/interactive-supports-focus/)
 */
export type JsxA11yInteractiveSupportsFocusRuleConfig =
  RuleConfig<JsxA11yInteractiveSupportsFocusOptions>;

/**
 * Apply `jsx-a11y/interactive-supports-focus` rule to Astro components.
 *
 * @see [jsx-a11y/interactive-supports-focus](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/interactive-supports-focus/)
 */
export interface JsxA11yInteractiveSupportsFocusRule {
  /**
   * Apply `jsx-a11y/interactive-supports-focus` rule to Astro components.
   *
   * @see [jsx-a11y/interactive-supports-focus](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/interactive-supports-focus/)
   */
  'astro/jsx-a11y/interactive-supports-focus': JsxA11yInteractiveSupportsFocusRuleConfig;
}
