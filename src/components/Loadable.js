import loadable from "react-loadable";
import Loading from "./Loading";

const Loadable = () => (opts) =>
  loadable({
    loading: Loading,
    ...opts,
  });

const LoadableMap = () => (opts) => ({
  loading: Loading,
  ...opts,
});

Loadable.Map = LoadableMap;

export default Loadable;
