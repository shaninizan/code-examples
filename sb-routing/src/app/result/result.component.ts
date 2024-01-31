import { Component, Input, inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './result.component.html',
  styleUrl: './result.component.css',
})
export class ResultComponent {
  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    const finNumVal = this.route.snapshot.queryParamMap.get('finNum');
    if (finNumVal) this.finNum = finNumVal;
    else this.finNum = '';

    this.finValue = convertFinNum(this.finNum);

    function convertFinNum(num: string) {
      if (Number(num)) return num;
      else {
        let numericalPart = num.match(/^\d*\.?\d+/);
        let numeral = numericalPart && numericalPart[0];
        let multiplierPart = num.match(/[b|g|k|m|t]/i);
        let multiplier = multiplierPart && multiplierPart[0];
        let result = '';

        switch (multiplier) {
          case 'b':
          case 'B':
            result = (Number(numeral) * 1000000000).toLocaleString();
            break;
          case 'g':
          case 'k':
          case 'G':
          case 'K':
            result = (Number(numeral) * 1000).toLocaleString();
            break;
          case 'm':
          case 'M':
            result = (Number(numeral) * 1000000).toLocaleString();
            break;
          case 't':
          case 'T':
            result = (Number(numeral) * 1000000000000).toLocaleString();
            break;
        }

        return result;
      }
    }
  }

  // console.log('finNum', finNum);

  finNum!: string;
  finValue!: string; // TODO... is this needed, does it need to be defined: https://stackblitz.com/run?file=src%2Fapp%2Fhome%2Fhome.component.ts
  // finNum: FinNum = { value: '555m' }; // TODO... is this needed, does it need to be defined: https://stackblitz.com/run?file=src%2Fapp%2Fhome%2Fhome.component.ts
}
