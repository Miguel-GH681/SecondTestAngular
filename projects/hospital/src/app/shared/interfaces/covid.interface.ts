export interface Covid {
    provinceState?: any;
    countryRegion: string;
    lastUpdate: number;
    lat: number;
    long: number;
    confirmed: number;
    deaths: number;
    recovered?: any;
    active?: any;
    admin2?: any;
    fips?: any;
    combinedKey: string;
    incidentRate: number;
    peopleTested?: any;
    peopleHospitalized?: any;
    uid: number;
    iso3: string;
    cases28Days: number;
    deaths28Days: number;
    iso2: string;
}