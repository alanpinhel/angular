import { InputPropertyComponent } from './input-property/input-property.component';
import { MeuFormComponent } from './meu-form/meu-form.component';
import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [
          AppComponent,
          DataBindingComponent,
          MeuFormComponent,
          InputPropertyComponent
        ],
        imports: [FormsModule]
      }).compileComponents();
    })
  );
  it(
    'should create the app',
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    })
  );
});
