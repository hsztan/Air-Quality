const countries = {
  AF: [
    {
      name: 'Algeria',
      iso2: 'DZ',
      long: 3,
      lat: 28,
    },
    {
      name: 'Angola',
      iso2: 'AO',
      long: 18.5,
      lat: -12.5,
    },
    {
      name: 'Benin',
      iso2: 'BJ',
      long: 2.25,
      lat: 9.5,
    },
    {
      name: 'Botswana',
      iso2: 'BW',
      long: 24,
      lat: -22,
    },
    {
      name: 'Burkina Faso',
      iso2: 'BF',
      long: -2,
      lat: 13,
    },
    {
      name: 'Burundi',
      iso2: 'BI',
      long: 30,
      lat: -3.5,
    },
    {
      name: 'Cameroon',
      iso2: 'CM',
      long: 12,
      lat: 6,
    },
    {
      name: 'Cape Verde',
      iso2: 'CV',
      long: -24,
      lat: 16,
    },
    {
      name: 'Central African Republic',
      iso2: 'CF',
      long: 21,
      lat: 7,
    },
    {
      name: 'Chad',
      iso2: 'TD',
      long: 19,
      lat: 15,
    },
    {
      name: 'Comoros',
      iso2: 'KM',
      long: 44.25,
      lat: -12.1667,
    },
    {
      name: 'Congo',
      iso2: 'CG',
      long: 15,
      lat: -1,
    },
    {
      name: 'Congo, The Democratic Republic of the',
      iso2: 'CD',
      long: 25,
      lat: '0',
    },
    {
      name: 'Ivory Coast',
      iso2: 'CI',
      long: -5,
      lat: 8,
    },
    {
      name: 'Djibouti',
      iso2: 'DJ',
      long: 43,
      lat: 11.5,
    },
    {
      name: 'Egypt',
      iso2: 'EG',
      long: 30,
      lat: 27,
    },
    {
      name: 'Equatorial Guinea',
      iso2: 'GQ',
      long: 10,
      lat: 2,
    },
    {
      name: 'Eritrea',
      iso2: 'ER',
      long: 39,
      lat: 15,
    },
    {
      name: 'Ethiopia',
      iso2: 'ET',
      long: 38,
      lat: 8,
    },
    {
      name: 'Gabon',
      iso2: 'GA',
      long: 11.75,
      lat: -1,
    },
    {
      name: 'Gambia',
      iso2: 'GM',
      long: -16.5667,
      lat: 13.4667,
    },
    {
      name: 'Ghana',
      iso2: 'GH',
      long: -2,
      lat: 8,
    },
    {
      name: 'Guinea',
      iso2: 'GN',
      long: -10,
      lat: 11,
    },
    {
      name: 'Guinea-Bissau',
      iso2: 'GW',
      long: -15,
      lat: 12,
    },
    {
      name: 'Kenya',
      iso2: 'KE',
      long: 38,
      lat: 1,
    },
    {
      name: 'Lesotho',
      iso2: 'LS',
      long: 28.5,
      lat: -29.5,
    },
    {
      name: 'Liberia',
      iso2: 'LR',
      long: -9.5,
      lat: 6.5,
    },
    {
      name: 'Libyan Arab Jamahiriya',
      iso2: 'LY',
      long: 17,
      lat: 25,
    },
    {
      name: 'Madagascar',
      iso2: 'MG',
      long: 47,
      lat: -20,
    },
    {
      name: 'Malawi',
      iso2: 'MW',
      long: 34,
      lat: -13.5,
    },
    {
      name: 'Mali',
      iso2: 'ML',
      long: -4,
      lat: 17,
    },
    {
      name: 'Mauritania',
      iso2: 'MR',
      long: -12,
      lat: 20,
    },
    {
      name: 'Mauritius',
      iso2: 'MU',
      long: 57.55,
      lat: -20.2833,
    },
    {
      name: 'Mayotte',
      iso2: 'YT',
      long: 45.1667,
      lat: -12.8333,
    },
    {
      name: 'Morocco',
      iso2: 'MA',
      long: -5,
      lat: 32,
    },
    {
      name: 'Mozambique',
      iso2: 'MZ',
      long: 35,
      lat: -18.25,
    },
    {
      name: 'Namibia',
      iso2: 'NA',
      long: 17,
      lat: -22,
    },
    {
      name: 'Niger',
      iso2: 'NE',
      long: 8,
      lat: 16,
    },
    {
      name: 'Nigeria',
      iso2: 'NG',
      long: 8,
      lat: 10,
    },
    {
      name: 'Réunion',
      iso2: 'RE',
      long: 55.6,
      lat: -21.1,
    },
    {
      name: 'Rwanda',
      iso2: 'RW',
      long: 30,
      lat: -2,
    },
    {
      name: 'Saint Helena, Ascension and Tristan Da Cunha',
      iso2: 'SH',
      long: -5.7,
      lat: -15.9333,
    },
    {
      name: 'Sao Tome and Principe',
      iso2: 'ST',
      long: 7,
      lat: 1,
    },
    {
      name: 'Senegal',
      iso2: 'SN',
      long: -14,
      lat: 14,
    },
    {
      name: 'Seychelles',
      iso2: 'SC',
      long: 55.6667,
      lat: -4.5833,
    },
    {
      name: 'Sierra Leone',
      iso2: 'SL',
      long: -11.5,
      lat: 8.5,
    },
    {
      name: 'Somalia',
      iso2: 'SO',
      long: 49,
      lat: 10,
    },
    {
      name: 'South Africa',
      iso2: 'ZA',
      long: 24,
      lat: -29,
    },
    {
      name: 'Sudan',
      iso2: 'SD',
      long: 30,
      lat: 15,
    },
    {
      name: 'Swaziland',
      iso2: 'SZ',
      long: 31.5,
      lat: -26.5,
    },
    {
      name: 'Tanzania, United Republic of',
      iso2: 'TZ',
      long: 35,
      lat: -6,
    },
    {
      name: 'Togo',
      iso2: 'TG',
      long: 1.1667,
      lat: 8,
    },
    {
      name: 'Tunisia',
      iso2: 'TN',
      long: 9,
      lat: 34,
    },
    {
      name: 'Uganda',
      iso2: 'UG',
      long: 32,
      lat: 1,
    },
    {
      name: 'Western Sahara',
      iso2: 'EH',
      long: -13,
      lat: 24.5,
    },
    {
      name: 'Zambia',
      iso2: 'ZM',
      long: 30,
      lat: -15,
    },
    {
      name: 'Zimbabwe',
      iso2: 'ZW',
      long: 30,
      lat: -20,
    },
  ],
  AN: [
    {
      name: 'Antarctica',
      iso2: 'AQ',
      long: '0',
      lat: -90,
    },
    {
      name: 'Bouvet Island',
      iso2: 'BV',
      long: 3.4,
      lat: -54.4333,
    },
    {
      name: 'French Southern and Antarctic Lands',
      iso2: 'TF',
      long: 67,
      lat: -43,
    },
    {
      name: 'Heard Island and McDonald Islands',
      iso2: 'HM',
      long: 72.5167,
      lat: -53.1,
    },
    {
      name: 'South Georgia and the South Sandwich Islands',
      iso2: 'GS',
      long: -37,
      lat: -54.5,
    },
  ],
  AS: [
    {
      name: 'Afghanistan',
      iso2: 'AF',
      long: 65,
      lat: 33,
    },
    {
      name: 'Armenia',
      iso2: 'AM',
      long: 45,
      lat: 40,
    },
    {
      name: 'Azerbaijan',
      iso2: 'AZ',
      long: 47.5,
      lat: 40.5,
    },
    {
      name: 'Bahrain',
      iso2: 'BH',
      long: 50.55,
      lat: 26,
    },
    {
      name: 'Bangladesh',
      iso2: 'BD',
      long: 90,
      lat: 24,
    },
    {
      name: 'Bhutan',
      iso2: 'BT',
      long: 90.5,
      lat: 27.5,
    },
    {
      name: 'British Indian Ocean Territory',
      iso2: 'IO',
      long: 71.5,
      lat: -6,
    },
    {
      name: 'Brunei Darussalam',
      iso2: 'BN',
      long: 114.6667,
      lat: 4.5,
    },
    {
      name: 'Cambodia',
      iso2: 'KH',
      long: 105,
      lat: 13,
    },
    {
      name: 'China',
      iso2: 'CN',
      long: 105,
      lat: 35,
    },
    {
      name: 'Christmas Island',
      iso2: 'CX',
      long: 105.6667,
      lat: -10.5,
    },
    {
      name: 'Cocos (Keeling) Islands',
      iso2: 'CC',
      long: 96.8333,
      lat: -12.5,
    },
    {
      name: 'Georgia',
      iso2: 'GE',
      long: 43.5,
      lat: 42,
    },
    {
      name: 'Hong Kong',
      iso2: 'HK',
      long: 114.1667,
      lat: 22.25,
    },
    {
      name: 'India',
      iso2: 'IN',
      long: 77,
      lat: 20,
    },
    {
      name: 'Indonesia',
      iso2: 'ID',
      long: 120,
      lat: -5,
    },
    {
      name: 'Iran, Islamic Republic of',
      iso2: 'IR',
      long: 53,
      lat: 32,
    },
    {
      name: 'Iraq',
      iso2: 'IQ',
      long: 44,
      lat: 33,
    },
    {
      name: 'Israel',
      iso2: 'IL',
      long: 34.75,
      lat: 31.5,
    },
    {
      name: 'Japan',
      iso2: 'JP',
      long: 138,
      lat: 36,
    },
    {
      name: 'Jordan',
      iso2: 'JO',
      long: 36,
      lat: 31,
    },
    {
      name: 'Kazakhstan',
      iso2: 'KZ',
      long: 68,
      lat: 48,
    },
    {
      name: 'North Korea',
      iso2: 'KP',
      long: 127,
      lat: 40,
    },
    {
      name: 'South Korea',
      iso2: 'KR',
      long: 127.5,
      lat: 37,
    },
    {
      name: 'Kuwait',
      iso2: 'KW',
      long: 47.6581,
      lat: 29.3375,
    },
    {
      name: 'Kyrgyzstan',
      iso2: 'KG',
      long: 75,
      lat: 41,
    },
    {
      name: 'Laos',
      iso2: 'LA',
      long: 105,
      lat: 18,
    },
    {
      name: 'Lebanon',
      iso2: 'LB',
      long: 35.8333,
      lat: 33.8333,
    },
    {
      name: 'Macau',
      iso2: 'MO',
      long: 113.55,
      lat: 22.1667,
    },
    {
      name: 'Malaysia',
      iso2: 'MY',
      long: 112.5,
      lat: 2.5,
    },
    {
      name: 'Maldives',
      iso2: 'MV',
      long: 73,
      lat: 3.25,
    },
    {
      name: 'Mongolia',
      iso2: 'MN',
      long: 105,
      lat: 46,
    },
    {
      name: 'Myanmar',
      iso2: 'MM',
      long: 98,
      lat: 22,
    },
    {
      name: 'Nepal',
      iso2: 'NP',
      long: 84,
      lat: 28,
    },
    {
      name: 'Oman',
      iso2: 'OM',
      long: 57,
      lat: 21,
    },
    {
      name: 'Pakistan',
      iso2: 'PK',
      long: 70,
      lat: 30,
    },
    {
      name: 'Palestinian Territory, Occupied',
      iso2: 'PS',
      long: 35.25,
      lat: 32,
    },
    {
      name: 'Philippines',
      iso2: 'PH',
      long: 122,
      lat: 13,
    },
    {
      name: 'Qatar',
      iso2: 'QA',
      long: 51.25,
      lat: 25.5,
    },
    {
      name: 'Saudi Arabia',
      iso2: 'SA',
      long: 45,
      lat: 25,
    },
    {
      name: 'Singapore',
      iso2: 'SG',
      long: 103.8,
      lat: 1.3667,
    },
    {
      name: 'Sri Lanka',
      iso2: 'LK',
      long: 81,
      lat: 7,
    },
    {
      name: 'Syria',
      iso2: 'SY',
      long: 38,
      lat: 35,
    },
    {
      name: 'Taiwan',
      iso2: 'TW',
      long: 121,
      lat: 23.5,
    },
    {
      name: 'Tajikistan',
      iso2: 'TJ',
      long: 71,
      lat: 39,
    },
    {
      name: 'Thailand',
      iso2: 'TH',
      long: 100,
      lat: 15,
    },
    {
      name: 'Turkey',
      iso2: 'TR',
      long: 35,
      lat: 39,
    },
    {
      name: 'Turkmenistan',
      iso2: 'TM',
      long: 60,
      lat: 40,
    },
    {
      name: 'United Arab Emirates',
      iso2: 'AE',
      long: 54,
      lat: 24,
    },
    {
      name: 'Uzbekistan',
      iso2: 'UZ',
      long: 64,
      lat: 41,
    },
    {
      name: 'Vietnam',
      iso2: 'VN',
      long: 106,
      lat: 16,
    },
    {
      name: 'Yemen',
      iso2: 'YE',
      long: 48,
      lat: 15,
    },
  ],
  EU: [
    {
      name: 'Albania',
      iso2: 'AL',
      long: 20,
      lat: 41,
    },
    {
      name: 'Andorra',
      iso2: 'AD',
      long: 1.6,
      lat: 42.5,
    },
    {
      name: 'Austria',
      iso2: 'AT',
      long: 13.3333,
      lat: 47.3333,
    },
    {
      name: 'Belarus',
      iso2: 'BY',
      long: 28,
      lat: 53,
    },
    {
      name: 'Belgium',
      iso2: 'BE',
      long: 4,
      lat: 50.8333,
    },
    {
      name: 'Bosnia and Herzegovina',
      iso2: 'BA',
      long: 18,
      lat: 44,
    },
    {
      name: 'Bulgaria',
      iso2: 'BG',
      long: 25,
      lat: 43,
    },
    {
      name: 'Croatia',
      iso2: 'HR',
      long: 15.5,
      lat: 45.1667,
    },
    {
      name: 'Cyprus',
      iso2: 'CY',
      long: 33,
      lat: 35,
    },
    {
      name: 'Czech Republic',
      iso2: 'CZ',
      long: 15.5,
      lat: 49.75,
    },
    {
      name: 'Denmark',
      iso2: 'DK',
      long: 10,
      lat: 56,
    },
    {
      name: 'Estonia',
      iso2: 'EE',
      long: 26,
      lat: 59,
    },
    {
      name: 'Faroe Islands',
      iso2: 'FO',
      long: -7,
      lat: 62,
    },
    {
      name: 'Finland',
      iso2: 'FI',
      long: 26,
      lat: 64,
    },
    {
      name: 'France',
      iso2: 'FR',
      long: 2,
      lat: 46,
    },
    {
      name: 'Germany',
      iso2: 'DE',
      long: 9,
      lat: 51,
    },
    {
      name: 'Gibraltar',
      iso2: 'GI',
      long: -5.3667,
      lat: 36.1833,
    },
    {
      name: 'Guernsey',
      iso2: 'GG',
      long: -2.56,
      lat: 49.5,
    },
    {
      name: 'Vatican City State (Holy See)',
      iso2: 'VA',
      long: 12.45,
      lat: 41.9,
    },
    {
      name: 'Hungary',
      iso2: 'HU',
      long: 20,
      lat: 47,
    },
    {
      name: 'Iceland',
      iso2: 'IS',
      long: -18,
      lat: 65,
    },
    {
      name: 'Ireland',
      iso2: 'IE',
      long: -8,
      lat: 53,
    },
    {
      name: 'Isle of Man',
      iso2: 'IM',
      long: -4.55,
      lat: 54.23,
    },
    {
      name: 'Italy',
      iso2: 'IT',
      long: 12.8333,
      lat: 42.8333,
    },
    {
      name: 'Jersey',
      iso2: 'JE',
      long: -2.13,
      lat: 49.21,
    },
    {
      name: 'Latvia',
      iso2: 'LV',
      long: 25,
      lat: 57,
    },
    {
      name: 'Liechtenstein',
      iso2: 'LI',
      long: 9.5333,
      lat: 47.1667,
    },
    {
      name: 'Lithuania',
      iso2: 'LT',
      long: 24,
      lat: 56,
    },
    {
      name: 'Luxembourg',
      iso2: 'LU',
      long: 6.1667,
      lat: 49.75,
    },
    {
      name: 'Macedonia, The Former Yugoslav Republic of',
      iso2: 'MK',
      long: 22,
      lat: 41.8333,
    },
    {
      name: 'Malta',
      iso2: 'MT',
      long: 14.5833,
      lat: 35.8333,
    },
    {
      name: 'Moldova, Republic of',
      iso2: 'MD',
      long: 29,
      lat: 47,
    },
    {
      name: 'Monaco',
      iso2: 'MC',
      long: 7.4,
      lat: 43.7333,
    },
    {
      name: 'Montenegro',
      iso2: 'ME',
      long: 19,
      lat: 42,
    },
    {
      name: 'Netherlands',
      iso2: 'NL',
      long: 5.75,
      lat: 52.5,
    },
    {
      name: 'Norway',
      iso2: 'NO',
      long: 10,
      lat: 62,
    },
    {
      name: 'Poland',
      iso2: 'PL',
      long: 20,
      lat: 52,
    },
    {
      name: 'Portugal',
      iso2: 'PT',
      long: -8,
      lat: 39.5,
    },
    {
      name: 'Romania',
      iso2: 'RO',
      long: 25,
      lat: 46,
    },
    {
      name: 'Russia',
      iso2: 'RU',
      long: 100,
      lat: 60,
    },
    {
      name: 'San Marino',
      iso2: 'SM',
      long: 12.4167,
      lat: 43.7667,
    },
    {
      name: 'Serbia',
      iso2: 'RS',
      long: 21,
      lat: 44,
    },
    {
      name: 'Slovakia',
      iso2: 'SK',
      long: 19.5,
      lat: 48.6667,
    },
    {
      name: 'Slovenia',
      iso2: 'SI',
      long: 15,
      lat: 46,
    },
    {
      name: 'Spain',
      iso2: 'ES',
      long: -4,
      lat: 40,
    },
    {
      name: 'Svalbard and Jan Mayen',
      iso2: 'SJ',
      long: 20,
      lat: 78,
    },
    {
      name: 'Sweden',
      iso2: 'SE',
      long: 15,
      lat: 62,
    },
    {
      name: 'Switzerland',
      iso2: 'CH',
      long: 8,
      lat: 47,
    },
    {
      name: 'Ukraine',
      iso2: 'UA',
      long: 32,
      lat: 49,
    },
    {
      name: 'United Kingdom',
      iso2: 'GB',
      long: -2,
      lat: 54,
    },
  ],
  NA: [
    {
      name: 'Anguilla',
      iso2: 'AI',
      long: -63.1667,
      lat: 18.25,
    },
    {
      name: 'Antigua and Barbuda',
      iso2: 'AG',
      long: -61.8,
      lat: 17.05,
    },
    {
      name: 'Aruba',
      iso2: 'AW',
      long: -69.9667,
      lat: 12.5,
    },
    {
      name: 'Bahamas',
      iso2: 'BS',
      long: -76,
      lat: 24.25,
    },
    {
      name: 'Barbados',
      iso2: 'BB',
      long: -59.5333,
      lat: 13.1667,
    },
    {
      name: 'Belize',
      iso2: 'BZ',
      long: -88.75,
      lat: 17.25,
    },
    {
      name: 'Bermuda',
      iso2: 'BM',
      long: -64.75,
      lat: 32.3333,
    },
    {
      name: 'Canada',
      iso2: 'CA',
      long: -95,
      lat: 60,
    },
    {
      name: 'Cayman Islands',
      iso2: 'KY',
      long: -80.5,
      lat: 19.5,
    },
    {
      name: 'Costa Rica',
      iso2: 'CR',
      long: -84,
      lat: 10,
    },
    {
      name: 'Cuba',
      iso2: 'CU',
      long: -80,
      lat: 21.5,
    },
    {
      name: 'Dominica',
      iso2: 'DM',
      long: -61.3333,
      lat: 15.4167,
    },
    {
      name: 'Dominican Republic',
      iso2: 'DO',
      long: -70.6667,
      lat: 19,
    },
    {
      name: 'El Salvador',
      iso2: 'SV',
      long: -88.9167,
      lat: 13.8333,
    },
    {
      name: 'Greenland',
      iso2: 'GL',
      long: -40,
      lat: 72,
    },
    {
      name: 'Grenada',
      iso2: 'GD',
      long: -61.6667,
      lat: 12.1167,
    },
    {
      name: 'Guadeloupe',
      iso2: 'GP',
      long: -61.5833,
      lat: 16.25,
    },
    {
      name: 'Guatemala',
      iso2: 'GT',
      long: -90.25,
      lat: 15.5,
    },
    {
      name: 'Haiti',
      iso2: 'HT',
      long: -72.4167,
      lat: 19,
    },
    {
      name: 'Honduras',
      iso2: 'HN',
      long: -86.5,
      lat: 15,
    },
    {
      name: 'Jamaica',
      iso2: 'JM',
      long: -77.5,
      lat: 18.25,
    },
    {
      name: 'Martinique',
      iso2: 'MQ',
      long: -61,
      lat: 14.6667,
    },
    {
      name: 'Mexico',
      iso2: 'MX',
      long: -102,
      lat: 23,
    },
    {
      name: 'Montserrat',
      iso2: 'MS',
      long: -62.2,
      lat: 16.75,
    },
    {
      name: 'Nicaragua',
      iso2: 'NI',
      long: -85,
      lat: 13,
    },
    {
      name: 'Panama',
      iso2: 'PA',
      long: -80,
      lat: 9,
    },
    {
      name: 'Puerto Rico',
      iso2: 'PR',
      long: -66.5,
      lat: 18.25,
    },
    {
      name: 'Saint Kitts and Nevis',
      iso2: 'KN',
      long: -62.75,
      lat: 17.3333,
    },
    {
      name: 'Saint Lucia',
      iso2: 'LC',
      long: -61.1333,
      lat: 13.8833,
    },
    {
      name: 'Saint Pierre and Miquelon',
      iso2: 'PM',
      long: -56.3333,
      lat: 46.8333,
    },
    {
      name: 'Saint Vincent and the Grenadines',
      iso2: 'VC',
      long: -61.2,
      lat: 13.25,
    },
    {
      name: 'Trinidad and Tobago',
      iso2: 'TT',
      long: -61,
      lat: 11,
    },
    {
      name: 'Turks and Caicos Islands',
      iso2: 'TC',
      long: -71.5833,
      lat: 21.75,
    },
    {
      name: 'United States',
      iso2: 'US',
      long: -97,
      lat: 38,
    },
    {
      name: 'Virgin Islands, British',
      iso2: 'VG',
      long: -64.5,
      lat: 18.5,
    },
    {
      name: 'Virgin Islands, U.S.',
      iso2: 'VI',
      long: -64.8333,
      lat: 18.3333,
    },
  ],
  OC: [
    {
      name: 'AmericanSamoa',
      iso2: 'AS',
      long: -170,
      lat: -14.3333,
    },
    {
      name: 'Australia',
      iso2: 'AU',
      long: 133,
      lat: -27,
    },
    {
      name: 'Cook Islands',
      iso2: 'CK',
      long: -159.7667,
      lat: -21.2333,
    },
    {
      name: 'Fiji',
      iso2: 'FJ',
      long: 175,
      lat: -18,
    },
    {
      name: 'French Polynesia',
      iso2: 'PF',
      long: -140,
      lat: -15,
    },
    {
      name: 'Guam',
      iso2: 'GU',
      long: 144.7833,
      lat: 13.4667,
    },
    {
      name: 'Kiribati',
      iso2: 'KI',
      long: 173,
      lat: 1.4167,
    },
    {
      name: 'Marshall Islands',
      iso2: 'MH',
      long: 168,
      lat: 9,
    },
    {
      name: 'Micronesia, Federated States of',
      iso2: 'FM',
      long: 158.25,
      lat: 6.9167,
    },
    {
      name: 'Nauru',
      iso2: 'NR',
      long: 166.9167,
      lat: -0.5333,
    },
    {
      name: 'New Caledonia',
      iso2: 'NC',
      long: 165.5,
      lat: -21.5,
    },
    {
      name: 'New Zealand',
      iso2: 'NZ',
      long: 174,
      lat: -41,
    },
    {
      name: 'Niue',
      iso2: 'NU',
      long: -169.8667,
      lat: -19.0333,
    },
    {
      name: 'Norfolk Island',
      iso2: 'NF',
      long: 167.95,
      lat: -29.0333,
    },
    {
      name: 'Northern Mariana Islands',
      iso2: 'MP',
      long: 145.75,
      lat: 15.2,
    },
    {
      name: 'Palau',
      iso2: 'PW',
      long: 134.5,
      lat: 7.5,
    },
    {
      name: 'Papua New Guinea',
      iso2: 'PG',
      long: 147,
      lat: -6,
    },
    {
      name: 'Pitcairn',
      iso2: 'PN',
      long: -127.4,
      lat: -24.7,
    },
    {
      name: 'Samoa',
      iso2: 'WS',
      long: -172.3333,
      lat: -13.5833,
    },
    {
      name: 'Solomon Islands',
      iso2: 'SB',
      long: 159,
      lat: -8,
    },
    {
      name: 'Timor-Leste',
      iso2: 'TL',
      long: 125.5167,
      lat: -8.55,
    },
    {
      name: 'Tokelau',
      iso2: 'TK',
      long: -172,
      lat: -9,
    },
    {
      name: 'Tonga',
      iso2: 'TO',
      long: -175,
      lat: -20,
    },
    {
      name: 'Tuvalu',
      iso2: 'TV',
      long: 178,
      lat: -8,
    },
    {
      name: 'United States Minor Outlying Islands',
      iso2: 'UM',
      long: 166.6,
      lat: 19.2833,
    },
    {
      name: 'Vanuatu',
      iso2: 'VU',
      long: 167,
      lat: -16,
    },
    {
      name: 'Wallis and Futuna',
      iso2: 'WF',
      long: -176.2,
      lat: -13.3,
    },
  ],
  SA: [
    {
      name: 'Argentina',
      iso2: 'AR',
      long: -64,
      lat: -34,
    },
    {
      name: 'Bolivia, Plurinational State of Bolivia',
      iso2: 'BO',
      long: -65,
      lat: -17,
    },
    {
      name: 'Brazil',
      iso2: 'BR',
      long: -55,
      lat: -10,
    },
    {
      name: 'Chile',
      iso2: 'CL',
      long: -71,
      lat: -30,
    },
    {
      name: 'Colombia',
      iso2: 'CO',
      long: -72,
      lat: 4,
    },
    {
      name: 'Ecuador',
      iso2: 'EC',
      long: -77.5,
      lat: -2,
    },
    {
      name: 'Falkland Islands',
      iso2: 'FK',
      long: -59,
      lat: -51.75,
    },
    {
      name: 'Guyana',
      iso2: 'GY',
      long: -59,
      lat: 5,
    },
    {
      name: 'Paraguay',
      iso2: 'PY',
      long: -58,
      lat: -23,
    },
    {
      name: 'Peru',
      iso2: 'PE',
      long: -76,
      lat: -10,
    },
    {
      name: 'Suriname',
      iso2: 'SR',
      long: -56,
      lat: 4,
    },
    {
      name: 'Uruguay',
      iso2: 'UY',
      long: -56,
      lat: -33,
    },
    {
      name: 'Venezuela, Bolivarian Republic of',
      iso2: 'VE',
      long: -66,
      lat: 8,
    },
  ],
};

export default countries;

export const countryCodes = {
  AF: 'Afghanistan',
  AL: 'Albania',
  DZ: 'Algeria',
  AD: 'Andorra',
  AO: 'Angola',
  AG: 'Antigua and Barbuda',
  AR: 'Argentina',
  AM: 'Armenia',
  AU: 'Australia',
  AT: 'Austria',
  AZ: 'Azerbaijan',
  BS: 'Bahamas',
  BH: 'Bahrain',
  BD: 'Bangladesh',
  BB: 'Barbados',
  BY: 'Belarus',
  BE: 'Belgium',
  BZ: 'Belize',
  BJ: 'Benin',
  BT: 'Bhutan',
  BO: 'Bolivia (Plurinational State of)',
  BA: 'Bosnia and Herzegovina',
  BW: 'Botswana',
  BR: 'Brazil',
  BN: 'Brunei Darussalam',
  BG: 'Bulgaria',
  BF: 'Burkina Faso',
  BI: 'Burundi',
  CV: 'Cabo Verde',
  KH: 'Cambodia',
  CM: 'Cameroon',
  CA: 'Canada',
  CF: 'Central African Republic',
  TD: 'Chad',
  CL: 'Chile',
  CN: 'China',
  CO: 'Colombia',
  KM: 'Comoros',
  CG: 'Congo',
  CD: 'Congo, Democratic Republic of the',
  CR: 'Costa Rica',
  CI: "Côte d'Ivoire",
  HR: 'Croatia',
  CU: 'Cuba',
  CY: 'Cyprus',
  CZ: 'Czechia',
  DK: 'Denmark',
  DJ: 'Djibouti',
  DM: 'Dominica',
  DO: 'Dominican Republic',
  EC: 'Ecuador',
  EG: 'Egypt',
  SV: 'El Salvador',
  GQ: 'Equatorial Guinea',
  ER: 'Eritrea',
  EE: 'Estonia',
  SZ: 'Eswatini',
  ET: 'Ethiopia',
  FJ: 'Fiji',
  FI: 'Finland',
  FR: 'France',
  GA: 'Gabon',
  GM: 'Gambia',
  GE: 'Georgia',
  DE: 'Germany',
  GH: 'Ghana',
  GR: 'Greece',
  GD: 'Grenada',
  GT: 'Guatemala',
  GN: 'Guinea',
  GW: 'Guinea-Bissau',
  GY: 'Guyana',
  HT: 'Haiti',
  HN: 'Honduras',
  HU: 'Hungary',
  IS: 'Iceland',
  IN: 'India',
  ID: 'Indonesia',
  IR: 'Iran (Islamic Republic of)',
  IQ: 'Iraq',
  IE: 'Ireland',
  IL: 'Israel',
  IT: 'Italy',
  JM: 'Jamaica',
  JP: 'Japan',
  JO: 'Jordan',
  KZ: 'Kazakhstan',
  KE: 'Kenya',
  KI: 'Kiribati',
  KP: "Korea (Democratic People's Republic of)",
  KR: 'Korea, Republic of',
  KW: 'Kuwait',
  KG: 'Kyrgyzstan',
  LA: "Lao People's Democratic Republic",
  LV: 'Latvia',
  LB: 'Lebanon',
  LS: 'Lesotho',
  LR: 'Liberia',
  LY: 'Libya',
  LI: 'Liechtenstein',
  LT: 'Lithuania',
  LU: 'Luxembourg',
  MG: 'Madagascar',
  MW: 'Malawi',
  MY: 'Malaysia',
  MV: 'Maldives',
  ML: 'Mali',
  MT: 'Malta',
  MH: 'Marshall Islands',
  MR: 'Mauritania',
  MU: 'Mauritius',
  MX: 'Mexico',
  FM: 'Micronesia (Federated States of)',
  MD: 'Moldova, Republic of',
  MC: 'Monaco',
  MN: 'Mongolia',
  ME: 'Montenegro',
  MA: 'Morocco',
  MZ: 'Mozambique',
  MM: 'Myanmar',
  NA: 'Namibia',
  NR: 'Nauru',
  NP: 'Nepal',
  NL: 'Netherlands',
  NZ: 'New Zealand',
  NI: 'Nicaragua',
  NE: 'Niger',
  NG: 'Nigeria',
  MK: 'North Macedonia',
  NO: 'Norway',
  OM: 'Oman',
  PK: 'Pakistan',
  PW: 'Palau',
  PA: 'Panama',
  PG: 'Papua New Guinea',
  PY: 'Paraguay',
  PE: 'Peru',
  PH: 'Philippines',
  PL: 'Poland',
  PT: 'Portugal',
  QA: 'Qatar',
  RO: 'Romania',
  RU: 'Russian Federation',
  RW: 'Rwanda',
  KN: 'Saint Kitts and Nevis',
  LC: 'Saint Lucia',
  VC: 'Saint Vincent and the Grenadines',
  WS: 'Samoa',
  SM: 'San Marino',
  ST: 'Sao Tome and Principe',
  SA: 'Saudi Arabia',
  SN: 'Senegal',
  RS: 'Serbia',
  SC: 'Seychelles',
  SL: 'Sierra Leone',
  SG: 'Singapore',
  SK: 'Slovakia',
  SI: 'Slovenia',
  SB: 'Solomon Islands',
  SO: 'Somalia',
  ZA: 'South Africa',
  SS: 'South Sudan',
  ES: 'Spain',
  LK: 'Sri Lanka',
  SD: 'Sudan',
  SR: 'Suriname',
  SE: 'Sweden',
  CH: 'Switzerland',
  SY: 'Syrian Arab Republic',
  TJ: 'Tajikistan',
  TZ: 'Tanzania, United Republic of',
  TH: 'Thailand',
  TL: 'Timor-Leste',
  TG: 'Togo',
  TO: 'Tonga',
  TT: 'Trinidad and Tobago',
  TN: 'Tunisia',
  TR: 'Turkey',
  TM: 'Turkmenistan',
  TV: 'Tuvalu',
  UG: 'Uganda',
  UA: 'Ukraine',
  AE: 'United Arab Emirates',
  GB: 'United Kingdom of Great Britain and Northern Ireland',
  US: 'United States of America',
  UY: 'Uruguay',
  UZ: 'Uzbekistan',
  VU: 'Vanuatu',
  VE: 'Venezuela (Bolivarian Republic of)',
  VN: 'Viet Nam',
  YE: 'Yemen',
  ZM: 'Zambia',
  ZW: 'Zimbabwe',
};

export const continentsNames = {
  AF: {
    name: 'Africa',
    image:
      'https://en.wikipedia.org/wiki/Asia#/media/File:Asia_(orthographic_projection).svg',
  },
  AN: {
    name: 'Antarctica',
    image:
      'https://en.wikipedia.org/wiki/Asia#/media/File:Asia_(orthographic_projection).svg',
  },
  AS: {
    name: 'Asia',
    image:
      'https://en.wikipedia.org/wiki/Asia#/media/File:Asia_(orthographic_projection).svg',
  },
  EU: {
    name: 'Europe',
    image:
      'https://en.wikipedia.org/wiki/Asia#/media/File:Asia_(orthographic_projection).svg',
  },
  NA: {
    name: 'North America',
    image:
      'https://en.wikipedia.org/wiki/Asia#/media/File:Asia_(orthographic_projection).svg',
  },
  OC: {
    name: 'Oceania',
    image:
      'https://en.wikipedia.org/wiki/Asia#/media/File:Asia_(orthographic_projection).svg',
  },
  SA: {
    name: 'South America',
    image:
      'https://en.wikipedia.org/wiki/Asia#/media/File:Asia_(orthographic_projection).svg',
  },
};

export const airQualityIndex = {
  1: 'Good',
  2: 'Moderate',
  3: 'Unhealthy for Sensitive Groups',
  4: 'Unhealthy',
  5: 'Very Unhealthy',
  6: 'Hazardous',
};