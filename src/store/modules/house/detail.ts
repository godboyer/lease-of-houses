import { defineStore } from "pinia";
import HouseFetch from "@/service/api/house";
const {fetchHouseInfo} = new HouseFetch();


export const useHouseDetailStore = defineStore("houseDetailStore", {
  state: (): {
    HouseDetail: HouseManagement.HouseInfo | null;
    HomeownerInfo: Auth.UserInfo | null;
  } => {
    return { HouseDetail: null,HomeownerInfo:null };
  },
  actions: {
    /**
     * 获取房源详情信息
     * @param payload 查询参数---房源sID
     */
    async getHouseDetail(id: string) {
      let { error, data } = await fetchHouseInfo(id)
      
      if (!error) { 
        this.HouseDetail = data as unknown as HouseManagement.HouseInfo;
        this.HomeownerInfo = this.HouseDetail?.owner_id as unknown as Auth.UserInfo;
      }

    },
  },
  getters: {
    // getHouseDetail: (state) => state.HouseDetail,
    // getRoommateInfo: (state) => state.HouseDetail?.Roommate_Info,
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: `HouseDetail`, //自定义 Key值
        storage: localStorage, // 选择存储方式
      },
    ],
  },
});
