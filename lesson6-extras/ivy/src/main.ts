import * as core from '@angular/core'

//ɵ
export class AppComponent {
  name = 'John';



  static ngComponentDef = core.ɵdefineComponent({
    type: AppComponent,
    selectors: [['app-root']],
    factory: () => new AppComponent(),
    template: (renderFlags: core.ɵRenderFlags, ctx:AppComponent) => {
      if(renderFlags & 1) {
        core.ɵE(0, 'p');
        core.ɵT(1, 'Hello,');
        core.ɵT(2);
        core.ɵE(3, 'input');
        core.ɵL('input', $e => ctx.name = $e.target.value);
        core.ɵe();
      }
      if(renderFlags & 2) {
        core.ɵt(2, ctx.name);
        core.ɵp(3, 'value', ctx.name);
      }

    }
  });
}

core.ɵrenderComponent(AppComponent);