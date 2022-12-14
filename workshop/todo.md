# Отчёт после тестирования Холи Маркета на доступность с незрячим тестировщиком

## Содержание
1. Главные баги
2. UI Kit
3. Навигация с клавиатуры
4. Тач
5. Тестирование

> ★ — Блокирующее

## 1. Главные баги
★[]Карточка модели (КМ). Нельзя найти
   кнопку «Добавить в корзину». Можно если знаешь,
   что ищешь, или с помощью зрячего ассистента.
[] Шапка. Меню. Нечётко понятно, какие пункты.
[] Шапка. Меню. Не понятно, какие пункты.
[] Выдача. Не понятно где.
[] Выдача. Фильтры. Неудобно переходить к ним    
   и выдаче.
[] Не озвучивается обновление корзины.

## 2. UI Kit
★[]Заголовки разделов не размечены как заголовки.
   Это делает навигацию по страницам
   практически невозможной.
[] Выдача. Альтернативный текст графических изображений
   товаров дублирует обычный.
[] КМ. Альтернативный текст графических изображений
   товаров дублирует обычный.
[] Карусели. Незрячий сталкивается в сниппете
   с «неподписанным изображением».
[] КМ. Описание. Графическое декоративное
   изображение не скрыто.
[] КМ. Магазин. Важная визуальная информация
   не озвучивается.
[] Выдача. Отсутствует информация
   о количестве товаров и текущей позиции среди них.
[] КМ. Отсутствует информация
   о количестве предложений и текущей позиции среди них.
[] КМ. Карусели. Отсутствует информация
   о количестве товаров и текущей позиции среди них.
[] Шапка, меню. Отсутствует информация о типе,
   количестве пунктов и текущей позиции среди них.
[] КМ. Хлебные крошки. Отсутствует информация о типе
   и количестве пунктов.
[] Старая цена. Важная визуальная информация
   не озвучивается.
[] Скидка. Важная визуальная информация
   не озвучивается.
[] Рейтинг. Важная визуальная информация
   не озвучивается.
[] Попап. Не понятно, что он открылся.
[] Попап. Не понятно, как перейти в него.

## 3. Навигация с клавиатуры
[] Невозможно передвигаться с клавиатуры по ссылкам.
[] Невозможно передвигаться с клавиатуры по кнопкам.
[] Невозможно с клавиатуры добавить товар в Избранное.
[] Невозможно передвигаться с клавиатуры по чекбоксам.
[] Невозможно передвигаться с клавиатуры
   по радиокнопкам.
[] Попап. Нужно делать дополнительный таб для открытии.
[] Попап. Можно случайно выйти.
[] Попап. При выходе приходится табать
   до предыдущего места.

## 4. Тач
[] Выдача. Затруднена навигация:
   невозможно передвигаться по заголовкам товаров.
[] Выдача. Товар. Невозможно перейти на КМ.

---

## 5. Тестирование
[] Нет статических тестов доступности на CSS.
[] Нет статических тестов доступности на Javascript.
[] Нет модульных, интеграционных и сквозных (e2e) 
   тестов доступности.
[] Нет инструмента предотвращения деградации
   доступности основных страниц.
