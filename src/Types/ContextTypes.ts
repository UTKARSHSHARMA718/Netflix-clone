import { SafeUser } from "./SafeTypes";

export interface GlobalContextType {
  isInfoModalOpen: boolean;
  movieOrSeriesId: string;
  commentsData: any;
  userData: SafeUser | null;
}

export type GlobalStateType = {
  globalState: GlobalContextType;
  setGlobalState: (v: any) => void;
  reFetchUserData: () => void;
};
