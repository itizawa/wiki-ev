// import global css
import "../style/global.scss";

// Custom App to wrap it with context provider
export default (pageProps) => {
  return (
    <div className="row no-gutters justify-content-end">
      <div className="col-12 col-md-9 col-xl-10">
        <pageProps.Component {...pageProps} />
      </div>
    </div>
  );
};
