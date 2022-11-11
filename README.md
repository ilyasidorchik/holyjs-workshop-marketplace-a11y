# Воркшоп. Улучшаем доступность маркетплейса для незрячих, учитывая опыт большого e-commerce проекта

Илья Сидорчик со своей командой сделал Яндекс Маркет доступнее для незрячих покупателей и тех, кто пользуется сайтом с клавиатуры. В процессе разработчики столкнулись с неочевидными проблемами: почему трудно найти кнопку на видном месте? Как удаление `role="button"` у кликабельного элемента может сделать лучше? Почему в VoiceOver работает, а в NVDA нет?

Мы разрешим эти проблемы, улучшив доступность маркетплейса вместе по шагам:
- Исправим главные баги.
- Доработаем UI Kit (заголовок, картинку, попап и др.).
- Сделаем навигацию с клавиатуры.
- Поправим тачовую версию.
- Протестируем вручную и автоматически.

## Локальный запуск проекта

1. Устанавливаем зависимости:
```
npm install
```

2. Запускаем:
```
npm start
```

## Ветки для ознакомления
- После первого часа запушим в ветку `slot1` ([Гитхаб](https://github.com/ilyasidorchik/holyjs-workshop-marketplace-a11y/tree/slot1))
- После второго часа в ветку `slot2` ([Гитхаб](https://github.com/ilyasidorchik/holyjs-workshop-marketplace-a11y/tree/slot2))
- Готовый код уже в `a11y-fix` ([Гитхаб](https://github.com/ilyasidorchik/holyjs-workshop-marketplace-a11y/tree/a11y-fix))

## Гайд по скринридерам

- [Мак. Voice Over](./workshop/screen-readers/mac-voiceover.md)
- [Виндоус. NVDA](./workshop/screen-readers/windows-nvda.md)
- [Линукс. Orca](./workshop/screen-readers/linux-orca.md)


## См. также

- [Окружение](./workshop/environment.md)
- [Список багов](./workshop/todo.md)
- [Вспомогательный код](./workshop/help-code.md)
