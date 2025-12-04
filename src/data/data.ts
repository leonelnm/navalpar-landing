import jsonData from "../data/data.json";

const typedJsonData = jsonData as Data;

export const data = (): Data => typedJsonData;
export const companyInfo = (): CompanyInfo => typedJsonData.companyInfo;
export const seo = (): Seo => typedJsonData.seo;
export const header = (): Header => typedJsonData.header;
export const legends = (): Legend[] => typedJsonData.legends;
export const services = (): Service[] => typedJsonData.services;
