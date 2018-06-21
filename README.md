 Batrang vs Augury

#- Local reference, viewChild - access local reference of view in component code

In development mode angular dirty checks twice

Bindings:
  String interpolation - {{ }}
  Property binding - [ ]
  Event binding - ( )
  Two-way binding - [( )]
  
Directives:
  * - structural directive - *ngIf
  - attribute directive - [ ngStyle]={}
  
String interpolation vs Property binding:
  src={{recipe.imagePath}}
  [src]="recipe.imagePath"
  
Component communication:
  Child to Parent -  @input - broadcasting - property binding
  Parent to Child - @output - emitting - event binding
  
View encapsulation:
  Shadow DOM - emulated, native, none
