type Wildcard<T> = T & { [key: string]: unknown };
export interface ContainerIF {
  className: string;
  children: React.ReactNode;
  style: Wildcard<any>;
}
