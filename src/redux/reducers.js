/**
 * Created by Administrator on 2017/8/11.
 */
export const index = (state = [1, 2, 3], action) => {
    return state;
}
export const hidden = (state = false, action) => {
    return state
}

export const currentTab = (state = 'tab1', action) => {
    if (action.type === 'activeTab') {
        return action.currentTab
    } else {
        return state
    }
}

const SONGLIST_CATEGORY = {
    currentCategory: '全部歌单',
    isSonglistCategoryOpened: 'collapse'
}
export const songListCategory = (state = SONGLIST_CATEGORY, action) => {
    switch (action.type) {
        case 'operateSongListCategory':
            state.isSonglistCategoryOpened = action.operation
        default:
            return state
        return state
    }
}