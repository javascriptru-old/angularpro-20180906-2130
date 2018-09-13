# angularpro-20180906-2130

Как задавать вопрос:
- групповой чат
- @stepan
- лично в slack/email


Дополнительные вопросы
- передача динамического компонента как контент для динамического компонента
- compodoc: написание документации
- тесты на jest
- работа с indexedDB

- schematics & typescript compile api: встречаются такие ситауции когда например у меня есть файл src/lib/hello.ts с таким содержанием
```
import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';

export const COMPONENTS = [
  LayoutComponent
];

@NgModule({
  declarations: [...COMPONENTS]
})
export class Hello {}
```
И вот мне нужно через schematics создать новый компонент, подключить его через import и добавить в массив COMPONENTS.
С помощью typescript compile api можно прочитать исходный файл, пройтись по дереву Node и найти идентификатор COMPONENTS но находится два идентификатора. **Вопросы:** Как найти именно определение константы? Как в массив добавить новый идентификатор и как это все сохранить?
P.S. Почему-то по schematics и typescript compile api очень мало информации.

- сборка с помощью bazel
