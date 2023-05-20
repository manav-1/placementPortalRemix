import type { ActionFunction } from '@remix-run/node';
import { AddProjects } from '~/utils/user/actions.server';

export const action: ActionFunction = AddProjects;
