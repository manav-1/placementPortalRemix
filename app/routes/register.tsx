import Signup from "~/components/auth/register";
import { RegisterAction } from "~/utils/auth/actions";

export default function Index() {
  return <Signup />;
}

export const action = RegisterAction;
