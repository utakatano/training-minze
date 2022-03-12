import { MinzeElement } from 'minze'

export class MyElement extends MinzeElement {
  html = () => `<div>My very own component!</div>`

  css = () => `
    div {
      background: rgb(55 245 220);
      padding: 1rem;
    }
  `
}