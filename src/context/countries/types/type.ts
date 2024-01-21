
export interface IContinent{
    code:string;
    name:string;
}
export interface ICountry {
  code: string;
  name: string;
  continent: IContinent;
  emoji: string;
  imageUrl?:string|undefined;
  capital?:string;
  languages?:any;
  currencies?:any;
  subdivisions?:any;
}
export interface State{
  countries:ICountry[],
  countryActive:ICountry|null
}
export interface IAction{
  type:string
  payload:ICountry|ICountry[]|null
}
export type TypeCountry = {
  countries: ICountry[];
  countryActive:ICountry|null;
  dispatch:React.Dispatch<IAction>;
};
