import { SVGS } from "@/assets/SVGS";
import ButtonForm from "@/components/button/ButtonForm";
import TextInput from "@/components/input/TextInput";
import TextSelect from "@/components/select/TextSelect";
import React, { useEffect, useState } from "react";

interface IOptions {
  label: string;
  value: string;
}
interface IPayload {
  provider: string;
  key: string;
}
function APIKeys() {
  const [providers, setProvider] = useState<IOptions[]>([
    { label: "Paystack", value: "paystack" },
    { label: "Flutterwave", value: "flutterwave" },
  ]);
  const [credentials, setCredentials] = useState<IPayload[]>([]);
  const [keyPayload, setKeyPayload] = useState<IPayload>({
    provider: "",
    key: "", //PUB_KEY_psye34093478340
  });

  useEffect(() => {
    const _providers: IOptions[] = [];
    providers.forEach((provider) => {
      let isProvidedAlreadyAdded = false;
      credentials.forEach((credential) => {
        if (credential.provider === provider.value) {
          isProvidedAlreadyAdded = true;
        }
      });
      if (!isProvidedAlreadyAdded) {
        _providers.push(provider);
      }
    });
    setProvider(_providers);
  }, []);

  const handleChange = (e: any) => {
    const { value, name } = e.target;
    setKeyPayload({
      ...keyPayload,
      [name]: value,
    });
  };
  const addApiKeyHandler = () => {
    setCredentials((previousState) => ({
      ...previousState,
      keyPayload,
    }));
  };
  return (
    <div className="w-full">
      <div className="header flex items-start gap-3 mt-5">
        <div className="mt-2">
          <SVGS.SettingIcon />
        </div>
        <div>
          <h4 className="text-[20px] font-semibold">API Key setting</h4>
          <p className="-mt-2 text-sm">
            Manage your finance with your desire provider.
          </p>
        </div>
      </div>
      <div className="w-full md:w-[440px]">
        <div className="w-full h-40 flex-center flex-col">
          {JSON.stringify(credentials)}
          <p className="text-sm text-gray-400">No API credential added yet!</p>
        </div>

        <div>
          <TextSelect
            options={providers}
            value={keyPayload.provider}
            name="provider"
            onChange={handleChange}
            label="Select Provider"
          />
        </div>
        <div className="mt-7">
          <TextInput
            value={keyPayload.key}
            name="key"
            type="text"
            onChange={handleChange}
            label="API Public key"
            placeholder={`Enter your public key`}
          />
        </div>
        <div className="w-full md:w-[440px] md:px-5 mt-3">
          <ButtonForm
            onClick={addApiKeyHandler}
            type="submit"
            text="Add API Keys"
            className="w-full h-14 bg-primary-blue"
          />
        </div>
      </div>
    </div>
  );
}

export default APIKeys;
