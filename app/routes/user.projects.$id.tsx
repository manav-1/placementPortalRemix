import { type ActionFunction } from '@remix-run/node';
import { DeleteProject } from '~/utils/user/actions.server';

export const action: ActionFunction = DeleteProject;
