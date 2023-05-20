import type { ActionFunction } from '@remix-run/node';
import { AddPortfolio } from '~/utils/user/actions.server';

export const action: ActionFunction = AddPortfolio;
