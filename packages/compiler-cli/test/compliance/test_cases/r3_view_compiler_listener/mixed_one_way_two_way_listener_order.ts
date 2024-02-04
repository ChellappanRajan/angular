import {Component, Directive, Input, Output} from '@angular/core';

@Directive({standalone: true, selector: '[dir]'})
export class Dir {
  @Input() a: unknown;
  @Output() aChange: unknown;

  @Output() b: unknown;

  @Input() c: unknown;
  @Output() cChange: unknown;

  @Output() d: unknown;
}

@Component({
  standalone: true,
  imports: [Dir],
  template: `
    <div dir [(a)]="value" (b)="noop()" [(c)]="value" (d)="noop()"></div>
  `,
})
export class App {
  value = 'hi';
  noop = () => {};
}
