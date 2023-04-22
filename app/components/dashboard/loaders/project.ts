import { redirect, type LoaderFunction } from "@remix-run/node";

export const ProjectLoader: LoaderFunction = async ({ request }) => {
  console.log("PortfolioLoader", request.method);
  return redirect("/dashboard/profile");
};
