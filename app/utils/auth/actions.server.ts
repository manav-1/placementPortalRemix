import { type ActionFunction } from '@remix-run/server-runtime';
import { UserRole } from '@prisma/client';
import { notFound, serverError, unauthorized, forbidden } from 'remix-utils';
import type createHttpError from 'http-errors';
import { login, register } from './auth.server';
import { LoginSchema, RegisterSchema } from './types';

export const LoginAction: ActionFunction = async ({ request }) => {
  try {
    const form = await request.formData();
    const email = form.get('email');
    const password = form.get('password');
    LoginSchema.parse({ email, password });
    const user = await login({
      email: email as string,
      password: password as string,
    });
    return user;
  } catch (err: any) {
    const { message, statusCode } = err as createHttpError.HttpError;
    if (statusCode === 404) return notFound(message);
    if (statusCode === 401) return unauthorized(message);
    return serverError(message);
  }
};

export const RegisterAction: ActionFunction = async ({ request }) => {
  try {
    const form = await request.formData();
    const email = form.get('email') as string;
    const password = form.get('password') as string;
    const name = form.get('name') as string;
    const mobile = form.get('mobile') as string;
    const role = UserRole.USER;

    const body = { email, password, name, mobile, role };

    RegisterSchema.parse(body);
    const user = await register(body);
    return user;
  } catch (err) {
    const { message, statusCode } = err as createHttpError.HttpError;
    if (statusCode === 403) return forbidden(message);
    if (statusCode === 401) return unauthorized(message);
    return serverError(message);
  }
};
