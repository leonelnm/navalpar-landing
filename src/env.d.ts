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
  header: Header;
  services: Service[];
  legends: Legend[];
}