import type { JsxA11yAltTextRule } from './jsx-a11y/alt-text';
import type { JsxA11yAnchorAmbiguousTextRule } from './jsx-a11y/anchor-ambiguous-text';
import type { JsxA11yAnchorHasContentRule } from './jsx-a11y/anchor-has-content';
import type { JsxA11yAnchorIsValidRule } from './jsx-a11y/anchor-is-valid';
import type { JsxA11yAriaActivedescendantHasTabindexRule } from './jsx-a11y/aria-activedescendant-has-tabindex';
import type { JsxA11yAriaPropsRule } from './jsx-a11y/aria-props';
import type { JsxA11yAriaProptypesRule } from './jsx-a11y/aria-proptypes';
import type { JsxA11yAriaRoleRule } from './jsx-a11y/aria-role';
import type { JsxA11yAriaUnsupportedElementsRule } from './jsx-a11y/aria-unsupported-elements';
import type { JsxA11yAutocompleteValidRule } from './jsx-a11y/autocomplete-valid';
import type { JsxA11yClickEventsHaveKeyEventsRule } from './jsx-a11y/click-events-have-key-events';
import type { JsxA11yControlHasAssociatedLabelRule } from './jsx-a11y/control-has-associated-label';
import type { JsxA11yHeadingHasContentRule } from './jsx-a11y/heading-has-content';
import type { JsxA11yHtmlHasLangRule } from './jsx-a11y/html-has-lang';
import type { JsxA11yIframeHasTitleRule } from './jsx-a11y/iframe-has-title';
import type { JsxA11yImgRedundantAltRule } from './jsx-a11y/img-redundant-alt';
import type { JsxA11yInteractiveSupportsFocusRule } from './jsx-a11y/interactive-supports-focus';
import type { JsxA11yLabelHasAssociatedControlRule } from './jsx-a11y/label-has-associated-control';
import type { JsxA11yLangRule } from './jsx-a11y/lang';
import type { JsxA11yMediaHasCaptionRule } from './jsx-a11y/media-has-caption';
import type { JsxA11yMouseEventsHaveKeyEventsRule } from './jsx-a11y/mouse-events-have-key-events';
import type { JsxA11yNoAccessKeyRule } from './jsx-a11y/no-access-key';
import type { JsxA11yNoAriaHiddenOnFocusableRule } from './jsx-a11y/no-aria-hidden-on-focusable';
import type { JsxA11yNoAutofocusRule } from './jsx-a11y/no-autofocus';
import type { JsxA11yNoDistractingElementsRule } from './jsx-a11y/no-distracting-elements';
import type { JsxA11yNoInteractiveElementToNoninteractiveRoleRule } from './jsx-a11y/no-interactive-element-to-noninteractive-role';
import type { JsxA11yNoNoninteractiveElementInteractionsRule } from './jsx-a11y/no-noninteractive-element-interactions';
import type { JsxA11yNoNoninteractiveElementToInteractiveRoleRule } from './jsx-a11y/no-noninteractive-element-to-interactive-role';
import type { JsxA11yNoNoninteractiveTabindexRule } from './jsx-a11y/no-noninteractive-tabindex';
import type { JsxA11yNoRedundantRolesRule } from './jsx-a11y/no-redundant-roles';
import type { JsxA11yNoStaticElementInteractionsRule } from './jsx-a11y/no-static-element-interactions';
import type { JsxA11yPreferTagOverRoleRule } from './jsx-a11y/prefer-tag-over-role';
import type { JsxA11yRoleHasRequiredAriaPropsRule } from './jsx-a11y/role-has-required-aria-props';
import type { JsxA11yRoleSupportsAriaPropsRule } from './jsx-a11y/role-supports-aria-props';
import type { JsxA11yScopeRule } from './jsx-a11y/scope';
import type { JsxA11yTabindexNoPositiveRule } from './jsx-a11y/tabindex-no-positive';
import type { NoConflictSetDirectivesRule } from './no-conflict-set-directives';
import type { NoDeprecatedAstroCanonicalurlRule } from './no-deprecated-astro-canonicalurl';
import type { NoDeprecatedAstroFetchcontentRule } from './no-deprecated-astro-fetchcontent';
import type { NoDeprecatedAstroResolveRule } from './no-deprecated-astro-resolve';
import type { NoDeprecatedGetentrybyslugRule } from './no-deprecated-getentrybyslug';
import type { NoSetHtmlDirectiveRule } from './no-set-html-directive';
import type { NoSetTextDirectiveRule } from './no-set-text-directive';
import type { NoUnusedCssSelectorRule } from './no-unused-css-selector';
import type { NoUnusedDefineVarsInStyleRule } from './no-unused-define-vars-in-style';
import type { PreferClassListDirectiveRule } from './prefer-class-list-directive';
import type { PreferObjectClassListRule } from './prefer-object-class-list';
import type { PreferSplitClassListRule } from './prefer-split-class-list';
import type { SemiRule } from './semi';
import type { ValidCompileRule } from './valid-compile';

/**
 * All Astro rules.
 */
export type AstroRules = NoConflictSetDirectivesRule &
  NoDeprecatedAstroCanonicalurlRule &
  NoDeprecatedAstroFetchcontentRule &
  NoDeprecatedAstroResolveRule &
  NoDeprecatedGetentrybyslugRule &
  NoSetHtmlDirectiveRule &
  NoSetTextDirectiveRule &
  NoUnusedCssSelectorRule &
  NoUnusedDefineVarsInStyleRule &
  PreferClassListDirectiveRule &
  PreferObjectClassListRule &
  PreferSplitClassListRule &
  SemiRule &
  ValidCompileRule &
  JsxA11yAltTextRule &
  JsxA11yAnchorAmbiguousTextRule &
  JsxA11yAnchorHasContentRule &
  JsxA11yAnchorIsValidRule &
  JsxA11yAriaActivedescendantHasTabindexRule &
  JsxA11yAriaPropsRule &
  JsxA11yAriaProptypesRule &
  JsxA11yAriaRoleRule &
  JsxA11yAriaUnsupportedElementsRule &
  JsxA11yAutocompleteValidRule &
  JsxA11yClickEventsHaveKeyEventsRule &
  JsxA11yControlHasAssociatedLabelRule &
  JsxA11yHeadingHasContentRule &
  JsxA11yHtmlHasLangRule &
  JsxA11yIframeHasTitleRule &
  JsxA11yImgRedundantAltRule &
  JsxA11yInteractiveSupportsFocusRule &
  JsxA11yLabelHasAssociatedControlRule &
  JsxA11yLangRule &
  JsxA11yMediaHasCaptionRule &
  JsxA11yMouseEventsHaveKeyEventsRule &
  JsxA11yNoAccessKeyRule &
  JsxA11yNoAriaHiddenOnFocusableRule &
  JsxA11yNoAutofocusRule &
  JsxA11yNoDistractingElementsRule &
  JsxA11yNoInteractiveElementToNoninteractiveRoleRule &
  JsxA11yNoNoninteractiveElementInteractionsRule &
  JsxA11yNoNoninteractiveElementToInteractiveRoleRule &
  JsxA11yNoNoninteractiveTabindexRule &
  JsxA11yNoRedundantRolesRule &
  JsxA11yNoStaticElementInteractionsRule &
  JsxA11yPreferTagOverRoleRule &
  JsxA11yRoleHasRequiredAriaPropsRule &
  JsxA11yRoleSupportsAriaPropsRule &
  JsxA11yScopeRule &
  JsxA11yTabindexNoPositiveRule;
