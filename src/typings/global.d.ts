import { RootState } from "@/store/reducers";
export declare global {
  interface Window {
    context: {
      state: RootState;
    };
  }
}
