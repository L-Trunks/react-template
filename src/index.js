import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {
    ConfigProvider
} from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import { Provider } from 'react-redux'
import store from './store'
import './mock'
//全局样式
import '@/assets/style/base.less'


const antdConfig = {
    locale: zhCN,
}

ReactDOM.render( 
    <ConfigProvider {...antdConfig}>
        <Provider store={store}>
            <App />
        </Provider>
    </ConfigProvider>,
    document.getElementById('root')
)