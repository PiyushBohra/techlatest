import { Helmet } from "react-helmet";

function HomePage() {
  return (
    <>
      <Helmet>
        <title>My Awesome Website - Home</title>
        <meta name="description" content="This is the homepage of My Awesome Website built with React." />
      </Helmet>
      <h1>Welcome to Home Page</h1>
    </>
  );
}
