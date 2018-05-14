import React, { Component } from 'react'
import Header from './Header'
import NewsList from './NewsList'
import '../App.css'

import { Tabs } from 'antd'
const TabPane = Tabs.TabPane

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Tabs style={{ textAlign: 'center' }}>
          <TabPane tab="要闻" key="1">
          </TabPane>
          <TabPane tab="北京" key="2">
          </TabPane>
          <TabPane tab="社会" key="3">
          </TabPane>
          <TabPane tab="国内" key="4">
          </TabPane>
          <TabPane tab="国际" key="5">
          </TabPane>
          <TabPane tab="独家" key="6">
          </TabPane>
          <TabPane tab="军事" key="7">
          </TabPane>
          <TabPane tab="财经" key="8">
          </TabPane>
          <TabPane tab="娱乐" key="9">
          </TabPane>
        </Tabs>
        <NewsList></NewsList>

      </div>
    )
  }
}

export default App;