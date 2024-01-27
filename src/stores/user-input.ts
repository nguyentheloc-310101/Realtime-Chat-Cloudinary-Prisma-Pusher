import { create } from 'zustand';
interface IDateRange {
  start: string;
  end: string;
}
interface State {
  userActive: boolean;
  place: string;
  dateRange: IDateRange;
}
type Action = {
  setUserActive: (userActive: State['userActive']) => void;
  setPlace: (place: State['place']) => void;
  setDateRange: (dateRange: State['dateRange']) => void;
};

const useUserInputStore = create<State & Action>((set) => ({
  place: '',
  setPlace: (place) => set(() => ({ place: place })),
  dateRange: { start: '', end: '' },
  setDateRange: (dateRange) => set(() => ({ dateRange: dateRange })),
  userActive: false,
  setUserActive: (userActive) => set(() => ({ userActive: userActive })),
}));

function useUserInput() {
  let place = useUserInputStore((state) => state.place);
  let setPlace = useUserInputStore((state) => state.setPlace);

  let dateRange = useUserInputStore((state) => state.dateRange);
  let setDateRange = useUserInputStore((state) => state.setDateRange);

  let userActive = useUserInputStore((state) => state.userActive);
  let setUserActive = useUserInputStore((state) => state.setUserActive);
  return {
    place,
    setPlace,
    dateRange,
    setDateRange,
    userActive,
    setUserActive,
  };
}
export default useUserInput;
