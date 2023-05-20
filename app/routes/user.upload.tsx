import type { ActionFunction } from '@remix-run/node';
import { UploadAction } from '~/utils/aws/actions.server';

export const action: ActionFunction = UploadAction;
