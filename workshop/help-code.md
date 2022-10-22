# Вспомогательный код

## Красивый SkipToContent
```(css)
padding: 0.9rem 1.25rem 1.25rem;
background-color: #000;

border: 1px solid #999;
border-radius: 8px;
box-shadow:
  0 0.5rem 1.25rem -5px rgb(255 255 255 / 40%);
```

## Используемые библиотеки
Библиотека хуков: `@use-platform/react`

Статическое: `stylelint`
```
{
  "plugins": ["stylelint-a11y"],
  "rules": {
    "a11y/media-prefers-reduced-motion": true,
    "a11y/no-outline-none": true,
    "a11y/selector-pseudo-class-focus": true
  }
}
```

Тесты: `@testing-library/react`
Матчеры: `@testing-library/jest-dom`
```(js)
// In your own jest-setup.js (or any other name)
import '@testing-library/jest-dom'

// In jest.config.js add (if you haven't already)
setupFilesAfterEnv: ['<rootDir>/jest-setup.js']
```