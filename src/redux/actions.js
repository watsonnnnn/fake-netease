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
export const spreadSongListCategory = (operation) => {// operation: spread展开 collapse收起
    return {
        type: 'operateSongListCategory',
        operation
    }
}