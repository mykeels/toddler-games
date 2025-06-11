import { App } from "./main.app";
import { getModuleFederationEntry, ModuleFederationEntry } from "./utils/mfe.utils";


const Entry: ModuleFederationEntry<never> = getModuleFederationEntry(() => {
  return <App />;
});

export default Entry;