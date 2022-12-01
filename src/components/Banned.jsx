import MainLayout from "./MainLayout";

const Banned = ({ history }) => (
  <MainLayout history={history}>
    <div className="text-center">
      <h1>Stream Banned</h1>
      <img src="/image/beand.jpg" className="img-top-margin" />
    </div>
  </MainLayout>
);

export default Banned;
