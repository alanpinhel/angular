import { InputPropertyComponent } from '../input-property/input-property.component';
import { MeuFormComponent } from '../meu-form/meu-form.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingComponent } from './data-binding.component';
import { FormsModule } from '@angular/forms';

describe('DataBindingComponent', () => {
  let component: DataBindingComponent;
  let fixture: ComponentFixture<DataBindingComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [
          DataBindingComponent,
          MeuFormComponent,
          InputPropertyComponent
        ],
        imports: [FormsModule]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
