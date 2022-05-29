import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReportAbusePage } from './report-abuse.page';

describe('ReportAbusePage', () => {
  let component: ReportAbusePage;
  let fixture: ComponentFixture<ReportAbusePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportAbusePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReportAbusePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
