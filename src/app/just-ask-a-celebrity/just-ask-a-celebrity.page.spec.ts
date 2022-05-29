import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JustAskACelebrityPage } from './just-ask-a-celebrity.page';

describe('JustAskACelebrityPage', () => {
  let component: JustAskACelebrityPage;
  let fixture: ComponentFixture<JustAskACelebrityPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ JustAskACelebrityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JustAskACelebrityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
