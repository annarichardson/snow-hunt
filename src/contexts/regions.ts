export type Region = {
  name: string;
  states: string[];
};

export const REGIONS: Region[] = [
  {
    name: 'northwest',
    states: ['AK', 'ID', 'OR', 'WA'],
  },
  {
    name: 'southwest',
    states: ['AZ', 'CA', 'NV'],
  },
  {
    name: 'rockies',
    states: ['CO', 'MT', 'NM', 'UT', 'WY'],
  },
  {
    name: 'midwest',
    states: ['IA', 'IL', 'IN', 'MI', 'MN', 'MO', 'ND', 'OH', 'SD', 'WI'],
  },
  {
    name: 'northeast',
    states: ['CT', 'MA', 'ME', 'NH', 'NJ', 'NY', 'PA', 'RI', 'VT'],
  },
  {
    name: 'southeast',
    states: ['AL', 'GA', 'MD', 'NC', 'TN', 'VA', 'WV'],
  },
];

export type State = {
  fullName: string;
  abbreviation: string;
}

export const STATES: State[] = [
  {
    fullName: 'Alabama',
    abbreviation: 'AL',
  },
  {
    fullName: 'Alaska',
    abbreviation: 'AK',
  },
  {
    fullName: 'Arizona',
    abbreviation: 'AZ',
  },
  {
    fullName: 'California',
    abbreviation: 'CA',
  },
  {
    fullName: 'Colorado',
    abbreviation: 'CO',
  },
  {
    fullName: 'Connecticut',
    abbreviation: 'CT',
  },
  {
    fullName: 'Georgia',
    abbreviation: 'GA',
  },
  {
    fullName: 'Iowa',
    abbreviation: 'IA',
  },
  {
    fullName: 'Idaho',
    abbreviation: 'ID',
  },
  {
    fullName: 'Illinois',
    abbreviation: 'IL',
  },
  {
    fullName: 'Indiana',
    abbreviation: 'IN',
  },
  {
    fullName: 'Massachusetts',
    abbreviation: 'MA',
  },
  {
    fullName: 'Maryland',
    abbreviation: 'MD',
  },
  {
    fullName: 'Maine',
    abbreviation: 'ME',
  },
  {
    fullName: 'Michigan',
    abbreviation: 'MI',
  },
  {
    fullName: 'Minnesota',
    abbreviation: 'MN',
  },
  {
    fullName: 'Missouri',
    abbreviation: 'MO',
  },
  {
    fullName: 'Montana',
    abbreviation: 'MT',
  },
  {
    fullName: 'North Carolina',
    abbreviation: 'NC',
  },
  {
    fullName: 'North Dakota',
    abbreviation: 'ND',
  },
  {
    fullName: 'New Hampshire',
    abbreviation: 'NH',
  },
  {
    fullName: 'New Jersey',
    abbreviation: 'NJ',
  },
  {
    fullName: 'New Mexico',
    abbreviation: 'NM',
  },
  {
    fullName: 'Nevada',
    abbreviation: 'NV',
  },
  {
    fullName: 'New York',
    abbreviation: 'NY',
  },
  {
    fullName: 'Ohio',
    abbreviation: 'OH',
  },
  {
    fullName: 'Oregon',
    abbreviation: 'OR',
  },
  {
    fullName: 'Pennsylvania',
    abbreviation: 'PA',
  },
  {
    fullName: 'Rhode Isalnd',
    abbreviation: 'RI',
  },
  {
    fullName: 'South Dakota',
    abbreviation: 'SD',
  },
  {
    fullName: 'Tennessee',
    abbreviation: 'TN',
  },
  {
    fullName: 'Utah',
    abbreviation: 'UT',
  },
  {
    fullName: 'Virginia',
    abbreviation: 'VA',
  },
  {
    fullName: 'Vermont',
    abbreviation: 'VT',
  },
  {
    fullName: 'Washington',
    abbreviation: 'WA',
  },
  {
    fullName: 'Wisconsin',
    abbreviation: 'WI',
  },
  {
    fullName: 'West Virginia',
    abbreviation: 'WV',
  },
  {
    fullName: 'Wyoming',
    abbreviation: 'WY',
  },
];
