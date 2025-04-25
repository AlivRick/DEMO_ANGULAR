import { Component, Input, TemplateRef, ViewChild, ContentChild } from '@angular/core';

@Component({
  selector: 'app-tab-panel',
  standalone: true,
  template:``,
})
export class TabPanelComponent {
  @Input() title!: string;
  isActive = false;

  @ContentChild(TemplateRef, { static: true, read: TemplateRef }) explicitBody!: TemplateRef<unknown>;

  get panelBody(): TemplateRef<unknown> {
    return this.explicitBody;
  }
} 