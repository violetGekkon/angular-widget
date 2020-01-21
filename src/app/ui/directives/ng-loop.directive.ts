import {Directive, Input, OnChanges, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {} from '@angular/compiler/src/render3/r3_ast';
// https://medium.com/@adrianfaciu/creating-structural-directives-in-angular-ff17211c7b28
// https://netbasal.com/the-power-of-structural-directives-in-angular-bfe4d8c44fb1

@Directive({
  selector: '[appNgLoop]'
})
export class NgLoopDirective implements OnInit, OnChanges {

  @Input() appNgLoop: Array<any>;

  constructor(private vcr: ViewContainerRef,
              private tpl: TemplateRef<any>) {
  }

  ngOnInit(): void {
    this.vcr.createEmbeddedView(this.tpl);
  }

  ngOnChanges() {
    for (const input of this.appNgLoop) {
      this.vcr.createEmbeddedView(this.tpl);
    }
  }


}
