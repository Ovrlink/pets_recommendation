import { useRouteError } from "react-router-dom";
import Header from "./Header";
function ErrorPage() {
  const error = useRouteError();

  let title = "An error occurred!";
  let message = "Something went wrong!";

  if (error.status === 500) {
    message = JSON.parse(error.data).message;
  }

  if (error.status === 404) {
    title = "Not found!";
    message = "Could not find resource or page.";
  }

  return (
    <>
      <Header text="Результат тесту: " />
      <div className="result-message error">
        <h3>{title}</h3>
        <p>{message}</p>
      </div>
    </>
  );
}

export default ErrorPage;
