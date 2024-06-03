import PropTypes from "prop-types";

export default function Navbar(props) {
  console.log(props);
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary  "
        data-bs-theme={props.mode}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  {props.page1}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  {props.page2}
                </a>
              </li>
              <li className="nav-item">
                <div className="nav-link">
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                      onClick={props.toggleMode}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexSwitchCheckDefault"
                    >
                      {(props.mode==="dark")?"LIGHTMODE":"DARKMODE"}
                    </label>
                  </div>
                </div>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />

              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  page1: PropTypes.string,
  page2: PropTypes.string,
};

Navbar.defaultProps = {
  // title : "Title",
  page1: "Home",
  page2: "About",
};
