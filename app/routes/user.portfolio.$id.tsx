import { type ActionFunction } from '@remix-run/node';
import { DeletePortfolio } from '~/utils/user/actions.server';

export const action: ActionFunction = DeletePortfolio;
