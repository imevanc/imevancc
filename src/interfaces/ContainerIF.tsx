import { Wildcard } from "@/types/Wildcard";

export interface ContainerIF {
  className?: string;
  children: React.ReactNode;
  style?: Wildcard<any>;
}
