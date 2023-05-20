import type { ActionFunction } from '@remix-run/node';
import { UpdateUserAction } from '~/utils/admin/actions.server';

export const action: ActionFunction = UpdateUserAction;
