import { ConversionHistory } from "./conversion-history";
import { Messages } from "./messages";

export function Welcome() {
  return (
    <div className="bg-white p-6 border-gray-200 border-r">
      <div className="space-y-3 mt-20">
        <div className="flex justify-center items-center bg-blue-600 rounded-4xl size-20">
          <span className="font-bold text-white text-6xl">C</span>
        </div>
        <div>
          <h1 className="font-light text-gray-400 text-2xl">Welcome,</h1>
          <h2 className="font-semibold text-2xl">CRAFTUI</h2>
        </div>
      </div>
      <Messages />
      <ConversionHistory />
    </div>
  );
}
