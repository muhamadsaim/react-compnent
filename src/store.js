import { atom, selector } from "recoil";
export const ChartDataAtom = atom({
  key: "ChartData",
  default: null,
});
export const fetchDataSelector = selector({
  key: "fetchDataSelector",
  get: async ({ get }) => {
    try {
      const response = await fetch(
        "https://render.alipay.com/p/yuyan/180020010001215413/antd-charts/column-column.json"
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  },
});
