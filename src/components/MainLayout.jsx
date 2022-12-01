import "../css/MainLayout.scss";

const MainLayout = ({ children }) => (
  <div className="main-layout d-flex ">
    <div className="d-flex flex-column flex-grow-1" style={{ width: "100%" }}>
      {children}
    </div>
  </div>
);
export default MainLayout;
