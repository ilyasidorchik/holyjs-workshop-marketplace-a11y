# Вспомогательный материал

## 1. Главные баги
## Красивый SkipToContent
```(css)
padding: 0.9rem 1.25rem 1.25rem;
background-color: #000;

border: 1px solid #999;
border-radius: 8px;
box-shadow:
  0 0.5rem 1.25rem -5px rgb(255 255 255 / 40%);
```

## 2. UI Kit

### Рецепт доступной карточки товара
https://inclusive-components.design/cards/


## 5. Тестирование
### Статическое
#### CSS

Статическое: `npm i -ED stylelint stylelint-config-prettier stylelint-config-standard-scss stylelint-a11y`
```
{
  "extends": [
    "stylelint-config-prettier",
    "stylelint-config-standard-scss"
  ],
  "plugins": ["stylelint-a11y"],
  "rules": {
    "selector-class-pattern": null,
    "no-eol-whitespace": null,
    "block-closing-brace-newline-before": null,

    "a11y/selector-pseudo-class-focus": true,
    "a11y/media-prefers-reduced-motion": true,
    "a11y/no-outline-none": true,
  }
}
```

Расширение: https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint

#### JS
Если нет Еслинта: `npm i -D eslint`
Плагин: `npm i -D eslint-plugin-jsx-a11y`

##### Правила Поиска Яндекса
```
"jsx-a11y/alt-text": "error",
"jsx-a11y/anchor-has-content": "error",
"jsx-a11y/anchor-is-valid": "error",
"jsx-a11y/aria-activedescendant-has-tabindex": "error",
"jsx-a11y/aria-props": "error",
"jsx-a11y/aria-proptypes": "error",
"jsx-a11y/aria-role": [
    "error",
    {
        "allowedInvalidRoles": ["text"]
    }
],
"jsx-a11y/aria-unsupported-elements": "error",
"jsx-a11y/autocomplete-valid": "error",
"jsx-a11y/click-events-have-key-events": "warn",
"jsx-a11y/heading-has-content": "error",
"jsx-a11y/html-has-lang": "error",
"jsx-a11y/iframe-has-title": "error",
"jsx-a11y/img-redundant-alt": "error",
"jsx-a11y/interactive-supports-focus": "error",
"jsx-a11y/label-has-associated-control": "error",
"jsx-a11y/lang": "error",
"jsx-a11y/mouse-events-have-key-events": "error",
"jsx-a11y/no-distracting-elements": "error",
"jsx-a11y/no-interactive-element-to-noninteractive-role": "error",
"jsx-a11y/no-noninteractive-element-interactions": [
    "error",
    {
        "handlers": [
            "onClick",
            "onMouseDown",
            "onMouseUp",
            "onKeyPress",
            "onKeyDown",
            "onKeyUp"
        ]
    }
],
"jsx-a11y/no-noninteractive-element-to-interactive-role": "error",
"jsx-a11y/no-noninteractive-tabindex": "error",
"jsx-a11y/no-redundant-roles": "error",
"jsx-a11y/no-static-element-interactions": "warn",
"jsx-a11y/role-has-required-aria-props": "error",
"jsx-a11y/role-supports-aria-props": "error",
"jsx-a11y/scope": "error",
"jsx-a11y/tabindex-no-positive": "error"
```

### Модульное, интеграционное и e2e

Тесты: `@testing-library/react`
Матчеры: `@testing-library/jest-dom`
```(js)
// In your own jest-setup.js (or any other name)
import '@testing-library/jest-dom'

// In jest.config.js add (if you haven't already)
setupFilesAfterEnv: ['<rootDir>/jest-setup.js']
```

### Деградация доступности

Lighthouse
https://github.com/GoogleChrome/lighthouse/blob/main/docs/readme.md#using-programmatically
https://github.com/GoogleChrome/lighthouse-ci
