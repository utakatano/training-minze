import Minze, { MinzeElement } from 'minze'

class MyTemplateElement extends MinzeElement {
  html = () => `
    <slot></slot>
    <slot name="my-slot"></slot>
  `
}

class MyConditionalElement extends MinzeElement {
  isVisible = true

  whenVisible = () => {
    if (this.isVisible) return `<div>Hello Minze!</div>`
    else return ''
  }

  html = () => `
    ${this.isVisible ? '<div>Hello Minze!</div>': ''}
    ${this.whenVisible()}
  `
}

Minze.defineAll([MyTemplateElement, MyConditionalElement])