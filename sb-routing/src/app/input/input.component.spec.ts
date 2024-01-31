import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputComponent } from './input.component';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have button disabled by default', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('label')?.textContent).toContain(
      'Enter a number'
    );
    expect(compiled.querySelector('button')?.textContent).toContain(
      'Calculate'
    );
    expect(compiled.querySelector('button')?.disabled).toBe(true);
  });

  it('should accept valid inputs', () => {
    let finNumInput = fixture.nativeElement.querySelector('input');
    finNumInput.value = '100';
    finNumInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(finNumInput.value).toBe('100');
    expect(fixture.nativeElement.querySelector('button')?.disabled).toBe(false);

    finNumInput.value = '20 m';
    finNumInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(finNumInput.value).toBe('20 m');
    expect(fixture.nativeElement.querySelector('button')?.disabled).toBe(false);

    finNumInput.value = '1.5G';
    finNumInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(finNumInput.value).toBe('1.5G');
    expect(fixture.nativeElement.querySelector('button')?.disabled).toBe(false);
  });

  it('should not accept invalid inputs', () => {
    let finNumInput = fixture.nativeElement.querySelector('input');
    finNumInput.value = 'k';
    finNumInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    let compiled = fixture.nativeElement as HTMLElement;
    expect(finNumInput.value).toBe('k');
    expect(
      compiled.querySelector('div.alert')?.textContent
    ).toContain(
      'Input should be numerals and optionally a single letter: B, G, K, M, or T.'
    );
    expect(fixture.nativeElement.querySelector('button')?.disabled).toBe(true);

    finNumInput.value = '3 trillion';
    finNumInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(finNumInput.value).toBe('3 trillion');
    expect(
      fixture.nativeElement.querySelector('div.alert')?.textContent
    ).toContain(
      'Input should be numerals and optionally a single letter: B, G, K, M, or T.'
    );
    expect(fixture.nativeElement.querySelector('button')?.disabled).toBe(true);

    finNumInput.value = '867 x';
    finNumInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(finNumInput.value).toBe('867 x');
    expect(
      compiled.querySelector('div.alert')?.textContent
    ).toContain(
      'Input should be numerals and optionally a single letter: B, G, K, M, or T.'
    );
    expect(fixture.nativeElement.querySelector('button')?.disabled).toBe(true);

    finNumInput.value = '$282';
    finNumInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(finNumInput.value).toBe('$282');
    expect(
      compiled.querySelector('div.alert')?.textContent
    ).toContain(
      'Input should be numerals and optionally a single letter: B, G, K, M, or T.'
    );
    expect(fixture.nativeElement.querySelector('button')?.disabled).toBe(true);

  });
});
