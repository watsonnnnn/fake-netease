import React from 'react'
class SongCategories extends React.Component{
    render(){
        return (
        <div className='songcategories'>
            <div className="header">
            <a onClick={()=>{this.props.onClick();document.body.style.overflow='inherit'}}>取消</a>
            <span>筛选歌单</span>
            </div>
            <div className="allsongs bgwhite">
                <div>
                    全部歌单
                </div>
            </div>

            <div className='bgwhite mt10 mb10'>
                <table width="100%" className="nolrborder">
                    <tbody>
                    <tr>
                        <td rowSpan="2" className="nolrborder">
                            语种
                        </td>
                        <td>
                            华语
                        </td>
                        <td>
                            欧美
                        </td>
                        <td className="nolrborder">
                            日语
                        </td>
                    </tr>
                    <tr>
                        <td className="nolrborder">
                            韩语
                        </td>
                        <td>
                            粤语
                        </td>
                        <td className="nolrborder">
                            小语种
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <div className='bgwhite'>
                <table width="100%" className="nolrborder">
                    <tbody>
                    <tr>
                        <td rowSpan="2" className="nolrborder">
                            风格
                        </td>
                        <td>
                            华语
                        </td>
                        <td>
                            欧美
                        </td>
                        <td className="nolrborder">
                            日语
                        </td>
                    </tr>
                    <tr>
                        <td className="nolrborder">
                            韩语
                        </td>
                        <td>
                            粤语
                        </td>
                        <td className="nolrborder">
                            小语种
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        )
    }
}
export default SongCategories