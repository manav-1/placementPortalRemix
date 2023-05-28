import type { ActionFunction } from '@remix-run/node';
import { ContactEmailAction } from '~/utils/admin/actions.server';

export const action: ActionFunction = ContactEmailAction;
