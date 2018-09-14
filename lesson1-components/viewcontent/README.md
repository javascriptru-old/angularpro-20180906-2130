structural directive


<div *ngIf="hero" class="name">{{hero.name}}</div>

<ng-template [ngIf]="hero">
  <div class="name">{{hero.name}}</div>
</ng-template>