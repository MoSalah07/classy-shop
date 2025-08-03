export interface ILinks {
  title: string;
  href: string;
}

export interface ICategoryLinks extends ILinks {
  image: string;
}

export interface INavigationLinks {
  title: string;
  href: string;
  nested?: INavigationLinks[];
}
