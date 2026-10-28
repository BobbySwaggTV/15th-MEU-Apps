export const metadata = {
  title: "404 Error",
};

export default function Error404() {
  return (
    <div>
      <h1>404 Error</h1>
      <h2>Oh no! you have encountered a page that does not exist!</h2>
      <h3>
        If you believe this is in error, please contact staff on the{" "}
        <a href="https://15thmeu.org">15th MEU forum</a>. Otherwise, please
        enjoy this sick music!
      </h3>
      <iframe
        title="Vampires"
        width="420"
        height="315"
        src="https://www.youtube.com/embed/QNrPkAS3utA"
      />
    </div>
  );
}
