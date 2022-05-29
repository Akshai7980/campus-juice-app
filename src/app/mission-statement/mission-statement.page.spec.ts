import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MissionStatementPage } from './mission-statement.page';

describe('MissionStatementPage', () => {
  let component: MissionStatementPage;
  let fixture: ComponentFixture<MissionStatementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissionStatementPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MissionStatementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
