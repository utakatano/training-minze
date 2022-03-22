import Minze, { MinzeElement } from 'minze'

class MyTemplateElement extends MinzeElement {
  html = () => `
    <slot></slot>
    <slot name="my-slot"></slot>
  `
}

Minze.defineAll([MyTemplateElement])