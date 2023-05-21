import type { ActionFunction } from '@remix-run/node';
import { UploadTemplateAction } from '~/utils/aws/actions.server';

export const action: ActionFunction = UploadTemplateAction;
