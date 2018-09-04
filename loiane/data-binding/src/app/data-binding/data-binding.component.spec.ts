import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuFormComponent } from '../meu-form/meu-form.component';
import { InputPropertyComponent } from '../input-property/input-property.component';
import { DataBindingComponent } from './data-binding.component';
import { FormsModule } from '@angular/forms';
import { OutputPropertyComponent } from '../output-property/output-property.component';

describe('DataBindingComponent', () => {
  let component: DataBindingComponent;
  let fixture: ComponentFixture<DataBindingComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [
          DataBindingComponent,
          MeuFormComponent,
          InputPropertyComponent,
          OutputPropertyComponent
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
