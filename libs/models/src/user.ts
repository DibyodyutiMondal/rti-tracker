import { DateTime } from 'luxon';
import { TypeOf } from 'zod';
import { Node } from './node';

export const FCM_TOKEN_QTY_LIMIT = 10;
export const FCM_TOKEN_TIME_LIMIT_MONTHS = 2;

export const USER_SETUP_FLAG = 'settingUp';

const ROLES = [
  'Global Administrator',
  'Tenant Administrator',
] as const;
export type UserRole = typeof ROLES[number];

export interface User extends Node {
  uid: string;
  disabled: boolean;

  displayName: string | null;
  photoUrl: string | null;

  email: string | null;
  phoneNumber: string | null;

  tenants: UserTenantData[];
}

export interface UserClaims {
  id: string;
  roles: UserRole[];
  tenantId: string | null;
}

export interface UserTenantData {
  id: string;
  roles: UserRole[]
}

export interface DeviceToken {
  userId: string;
  token: string;
  updated: DateTime;
}