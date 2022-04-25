//named export so i need to use {} when importing
export const Header = function () {
  return (
    <>
      <header>
        <div className="header-left">
          <h1> RESTy </h1>
        </div>
        <div className="header-right">
          <nav>
          <a href="/"> Home </a>
          <a href="/"> History</a>
          <a href="/"> Help</a>
          </nav>
        </div>
      </header>
    </>
  );
};
