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

class MyConditionalAttribute extends MinzeElement {
  isActive = true

  html = () => `
    <div ${this.isActive ? 'class="active"' : ''}>
      Hello Conditional Attribute
    </div>
  `
}

class MyListRendering extends MinzeElement {
  myList = [1, 2, 3]

  html = () => `
    <ul>
      ${this.myList.map((item) => `<li>${item}</li>`).join('')}
    </ul>
  `
}

Minze.defineAll([MyTemplateElement, MyConditionalElement, MyConditionalAttribute, MyListRendering])