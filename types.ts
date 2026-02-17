export interface MenuItem {
  title: string;
  description?: string;
  price: string;
}

export interface MenuSectionData {
  title: string;
  subtitle?: string;
  items: MenuItem[];
  image: string;
  imagePosition: 'left' | 'right';
}

export interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  tag?: string;
}
