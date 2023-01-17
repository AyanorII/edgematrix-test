export interface User {
  gender: Gender;
  name: Name;
  location: Location;
  email: string;
  dob: DateOfBirth;
  phone: string;
  cell: string;
  picture: Picture;
  nat: string;
  bio: string;
  id: string;
}

export interface DateOfBirth {
  date: string;
  age: number;
}

export enum Gender {
  Female = "female",
  Male = "male",
}

export interface Location {
  street: Street;
  city: string;
  state: string;
  country: string;
  postcode: string | number;
  timezone: Timezone;
}

export interface Street {
  number: number;
  name: string;
}

export interface Timezone {
  offset: string;
  description: string;
}

export interface Name {
  title: string;
  first: string;
  last: string;
}

export interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}
