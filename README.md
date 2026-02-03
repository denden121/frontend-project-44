# Brain Games

Набор консольных игр для проверки арифметики и логики. Каждая игра задаёт три вопроса; для победы нужно ответить правильно на все.

## Требования

- Node.js не ниже 18

## Установка и запуск

```bash
git clone https://github.com/denden121/frontend-project-44.git
cd frontend-project-44
make install
```

Запуск игр:

```bash
make brain-games    # приветствие
make brain-even     # чётность
make brain-calc     # калькулятор
make brain-gcd      # НОД
make brain-progression  # арифметическая прогрессия
make brain-prime    # простое число
```

Через npm: `npm link` в корне проекта, затем в любом месте доступны команды `brain-even`, `brain-calc` и т.д.

## Проверка

### Hexlet tests and linter status:
[![Actions Status](https://github.com/denden121/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/denden121/frontend-project-44/actions)

[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=denden121_frontend-project-44&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=denden121_frontend-project-44)

### brain-even (Проверка на чётность)
Запись с запуском и разными исходами игры: [asciinema](https://asciinema.org/a/BSAhCeGA6Gswdcf2)

### brain-calc (Калькулятор)
Запись с запуском и разными исходами игры: [asciinema](https://asciinema.org/a/8XeFT44Ihq8N4Bbh)

### brain-gcd (НОД)
Запись с запуском и разными исходами игры: [asciinema](https://asciinema.org/a/lxSuqaDeYueouT4W)

### brain-progression (Арифметическая прогрессия)
Запись с запуском и разными исходами игры: [asciinema](https://asciinema.org/a/ZtHqL6U5kQhZqYAe)

### brain-prime (Простое ли число?)
Запись с запуском и разными исходами игры: [asciinema](https://asciinema.org/a/e1pa0A1tjE4RmkYU)
