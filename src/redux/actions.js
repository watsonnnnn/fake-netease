/**
 * Created by Administrator on 2017/8/11.
 */
export const indexAction = () => {
    return {
        type: 'index',
        value: 999
    }
}
export const activeTab = (tab) => {
    return {
        type: 'activeTab',
        currentTab: tab
    }
}