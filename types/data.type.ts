export interface ILinks {
  title: string;
  href: string;
}

export interface ICategoryLinks extends ILinks {
  image: string;
}

export interface IAdsBanners extends ICategoryLinks {
  id: string;
  price: number;
}

export interface IAdsImagesBanners {
  href: string;
  image: string;
}

export interface IBlogsBanner extends ILinks {
  image: string;
  description: string;
}

export interface INavigationLinks {
  title: string;
  href: string;
  nested?: INavigationLinks[];
}
