export default `
  <my-element></my-element>
  <my-custom-registration></my-custom-registration>
  <my-data-this-element></my-data-this-element>
  <my-reactive-properties-element></my-reactive-properties-element>
  <my-attr-element my-second-attribute="Hello Minze!"></my-attr-element>
  <my-method-element></my-method-element>
  <my-template-element>
    <div>Hello Minze!</div>
    <div slot="my-slot">Hello Minze again!</div>
  </my-template-element>
  <my-conditional-element></my-conditional-element>
  <my-conditional-attribute></my-conditional-attribute>
  <my-list-rendering></my-list-rendering>
  <my-destructure-element></my-destructure-element>
  <my-loading-element></my-loading-element>
  <my-patching-element></my-patching-element>
  <my-css-element></my-css-element>
  <my-conditional-styling-element></my-conditional-styling-element>
  <my-styling-host-element></my-styling-host-element>

  <div class="light">
    <my-styling-host-context-element></my-styling-host-context-element>
  </div>

  <div class="dark">
    <my-styling-host-context-element></my-styling-host-context-element>
  </div>

  <my-slots-element>
    <div slot="slot-1">Hello Minze!</div>
    <div slot="slot-2">Hello Minze!</div>
  </my-slots-element>

  <minze-counter></minze-counter>
`
