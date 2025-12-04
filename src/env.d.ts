type CompanyInfo = {
  name: string;
  cif: string;
  address: string;
  email: string;
  phoneNumbers: string[];
  workingHours: string[];
  socialObject: string[];
  activity: string;
}

type SeoInfo = {
  title: string;
  description: string;
}

type Seo = {
  default: SeoInfo;
  index: SeoInfo;
  privacy: SeoInfo;
  legal: SeoInfo;
}

type Service = {
  title: string;
  description: string;
  iconName: IconName;
  imageUrl: string;
}

type Header = {
  title: string;
  description: string;
  imageUrl?: string;
}

type IconName =
  'carpenter'
  | 'construction'
  | 'electric_bolt'
  | 'euro'
  | 'format_paint'
  | 'home_repair_service'
  | 'location_on'
  | 'mail'
  | 'phone'
  | 'schedule'
  | 'support_agent'
  | 'verified'
  | 'water_drop'

type Legend = {
  title: string;
  description: string;
  iconName: IconName
}

type Data = {
  companyInfo: CompanyInfo;
  seo: Seo;
  header: Header;
  services: Service[];
  legends: Legend[];
}