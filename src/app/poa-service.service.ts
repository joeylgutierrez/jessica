import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PoaServiceService {

  constructor() { }

  getStates(): Observable<State[]> {
    return of([
      {
        'value': 'Alabama',
        'id': 'AL'
      },
      {
        'value': 'Alaska',
        'id': 'AK'
      },
      {
        'value': 'Arizona',
        'id': 'AZ'
      },
      {
        'value': 'Arkansas',
        'id': 'AR'
      },
      {
        'value': 'California',
        'id': 'CA'
      },
      {
        'value': 'Colorado',
        'id': 'CO'
      },
      {
        'value': 'Connecticut',
        'id': 'CT'
      },
      {
        'value': 'Delaware',
        'id': 'DE'
      },
      {
        'value': 'District Of Columbia',
        'id': 'DC'
      },
      {
        'value': 'Florida',
        'id': 'FL'
      },
      {
        'value': 'Georgia',
        'id': 'GA'
      },
      {
        'value': 'Guam',
        'id': 'GU'
      },
      {
        'value': 'Hawaii',
        'id': 'HI'
      },
      {
        'value': 'Idaho',
        'id': 'ID'
      },
      {
        'value': 'Illinois',
        'id': 'IL'
      },
      {
        'value': 'Indiana',
        'id': 'IN'
      },
      {
        'value': 'Iowa',
        'id': 'IA'
      },
      {
        'value': 'Kansas',
        'id': 'KS'
      },
      {
        'value': 'Kentucky',
        'id': 'KY'
      },
      {
        'value': 'Louisiana',
        'id': 'LA'
      },
      {
        'value': 'Maine',
        'id': 'ME'
      },
      {
        'value': 'Maryland',
        'id': 'MD'
      },
      {
        'value': 'Massachusetts',
        'id': 'MA'
      },
      {
        'value': 'Michigan',
        'id': 'MI'
      },
      {
        'value': 'Minnesota',
        'id': 'MN'
      },
      {
        'value': 'Mississippi',
        'id': 'MS'
      },
      {
        'value': 'Missouri',
        'id': 'MO'
      },
      {
        'value': 'Montana',
        'id': 'MT'
      },
      {
        'value': 'Nebraska',
        'id': 'NE'
      },
      {
        'value': 'Nevada',
        'id': 'NV'
      },
      {
        'value': 'New Hampshire',
        'id': 'NH'
      },
      {
        'value': 'New Jersey',
        'id': 'NJ'
      },
      {
        'value': 'New Mexico',
        'id': 'NM'
      },
      {
        'value': 'New York',
        'id': 'NY'
      },
      {
        'value': 'North Carolina',
        'id': 'NC'
      },
      {
        'value': 'North Dakota',
        'id': 'ND'
      },
      {
        'value': 'Ohio',
        'id': 'OH'
      },
      {
        'value': 'Oklahoma',
        'id': 'OK'
      },
      {
        'value': 'Oregon',
        'id': 'OR'
      },
      {
        'value': 'Palau',
        'id': 'PW'
      },
      {
        'value': 'Pennsylvania',
        'id': 'PA'
      },
      {
        'value': 'Rhode Island',
        'id': 'RI'
      },
      {
        'value': 'South Carolina',
        'id': 'SC'
      },
      {
        'value': 'South Dakota',
        'id': 'SD'
      },
      {
        'value': 'Tennessee',
        'id': 'TN'
      },
      {
        'value': 'Texas',
        'id': 'TX'
      },
      {
        'value': 'Utah',
        'id': 'UT'
      },
      {
        'value': 'Vermont',
        'id': 'VT'
      },
      {
        'value': 'Virginia',
        'id': 'VA'
      },
      {
        'value': 'Washington',
        'id': 'WA'
      },
      {
        'value': 'West Virginia',
        'id': 'WV'
      },
      {
        'value': 'Wisconsin',
        'id': 'WI'
      },
      {
        'value': 'Wyoming',
        'id': 'WY'
      }
    ]);
  }
}
