import {
  ComponentRef,
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import {
  Overlay,
  OverlayConfig,
  OverlayPositionBuilder,
  OverlayRef,
  PositionStrategy,
} from '@angular/cdk/overlay';
import { AppTooltipComponent } from './app-tooltip.component';
import { ComponentPortal } from '@angular/cdk/portal';

@Directive({ selector: '[appTooltip]' })
export class AppTooltipDirective implements OnInit {
  @Input('appTooltip') text = '';
  private overlayRef: OverlayRef;

  positionStrategy: PositionStrategy = this.overlayPositionBuilder
    .flexibleConnectedTo(this.elementRef)
    .withPositions([
      {
        // originX: 'center',
        // originY: 'top',
        // overlayX: 'center',
        // overlayY: 'bottom',
        // offsetY: -8,
        originX: 'end',
        originY: 'center',
        overlayX: 'start',
        overlayY: 'center',
        offsetX: 10,
      },
    ]);

  constructor(
    private overlay: Overlay,
    private overlayPositionBuilder: OverlayPositionBuilder,
    private elementRef: ElementRef
  ) {}

  ngOnInit(): void {
    const config = new OverlayConfig({
      positionStrategy: this.positionStrategy,
    });
    this.overlayRef = this.overlay.create(config);
  }

  @HostListener('mouseenter')
  show() {
    const tooltipRef: ComponentRef<AppTooltipComponent> =
      this.overlayRef.attach(new ComponentPortal(AppTooltipComponent));
    tooltipRef.instance.text = this.text;
  }

  @HostListener('mouseout')
  hide() {
    this.overlayRef.detach();
  }
}
