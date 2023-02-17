import { Node } from './node';

export interface Tenant extends Node {
  name: string;
  domains: string[];
}