import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultComponent } from './result.component';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';

describe('ResultComponent', () => {
  let component: ResultComponent;
  let fixture: ComponentFixture<ResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideRouter([{ path: '', component: ResultComponent }])],
      imports: [ResultComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display `invalid` message when not passed a value', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p.alert')?.textContent).toContain(
      'Invalid input!'
    );
  });

  it('should display original input and mathematical output for valid input with capital letter', async () => {
    const harness = await RouterTestingHarness.create();
    const activatedComponent = await harness.navigateByUrl(
      '/?finNum=250K',
      ResultComponent
    );
    expect(activatedComponent).toBeInstanceOf(ResultComponent);

    const compiled = harness.routeNativeElement as HTMLElement;

    expect(compiled.querySelector('p')?.textContent).toContain('250K');
    expect(compiled.querySelector('strong')?.textContent).toContain('250,000');
  });

  it('should display original input and mathematical output for valid input with a space and lowercase letter', async () => {
    const harness = await RouterTestingHarness.create();
    const activatedComponent = await harness.navigateByUrl(
      '/?finNum=10%20m',
      ResultComponent
    );
    expect(activatedComponent).toBeInstanceOf(ResultComponent);

    const compiled = harness.routeNativeElement as HTMLElement;

    expect(compiled.querySelector('p')?.textContent).toContain('10 m');
    expect(compiled.querySelector('strong')?.textContent).toContain('10,000,000');
  });

  it('should display original input and mathematical output for valid input with decimal', async () => {
    const harness = await RouterTestingHarness.create();
    const activatedComponent = await harness.navigateByUrl(
      '/?finNum=.5b',
      ResultComponent
    );
    expect(activatedComponent).toBeInstanceOf(ResultComponent);

    const compiled = harness.routeNativeElement as HTMLElement;

    expect(compiled.querySelector('p')?.textContent).toContain('.5b');
    expect(compiled.querySelector('strong')?.textContent).toContain('500,000,000');
  });

  it('should display `invalid` message when bad data is passed in', async () => {
    const harness = await RouterTestingHarness.create();
    const activatedComponent = await harness.navigateByUrl(
      '/?finNum=hello',
      ResultComponent
    );
    expect(activatedComponent).toBeInstanceOf(ResultComponent);

    const compiled = harness.routeNativeElement as HTMLElement;

    expect(compiled.querySelector('p')?.textContent).toContain('hello');
    expect(compiled.querySelector('p.alert')?.textContent).toContain(
      'Invalid input!'
    );
  });

});
