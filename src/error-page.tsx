import { useRouteError } from "react-router-dom";
import React from "react";
import { Page } from "./components/page";

export const ErrorPage: React.FC = () => {
  const error = useRouteError() as Record<string, string>;
  console.error(error);

  return (
    <Page>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </Page>
  );
};
