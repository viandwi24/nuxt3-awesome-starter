---
title: 'Hello World'
description: 'Hello !!!, this is a post about hello world hand demo Syntax Highlight Code.'
date: '2022-06-29'
author: 'viandwi24'
---

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

:::div{.mt-6}
  ::awesome-tabs
    :::awesome-tab{name="ts" title="TypeScript"}
      ```ts
      import React from 'react';
      import { render } from 'react-dom';
      import { Provider } from 'react-redux';
      import { createStore } from 'redux';
      import { enthusiasm } from './reducers/index';
      import { StoreState } from './types/index';
      import App from './components/App';
      import './index.css';

      const store = createStore<StoreState>(enthusiasm, {
        enthusiasmLevel: 1,
        languageName: 'TypeScript',
      });

      render(
        <Provider store={store}>
          <App />
        </Provider>,
        document.getElementById('root')
      );
      ```
    :::
    :::awesome-tab{name="rs" title="rust"}
      ```rs
      fn main() {
        // Statements here are executed when the compiled binary is called.

        // Print text to the console.
        println!("Hello World!");
      }
      ```
    :::
  ::
:::
