import React, { useMemo, useState,useRef, useEffect} from 'react';
import { Tabs, Button, Divider } from 'antd';
import './App.css'
import Child1 from './child/Child1'


const { TabPane } = Tabs;


const OperationsSlot = {
  left: <Button className="tabs-extra-demo-button">Left Extra Action</Button>,
  right: <Button>Right Extra Action</Button>,
};

const options = ['left', 'right'];

function App() {
  const parentRef = useRef();

  

  const [childFade,setChildFade] = useState()

  useEffect(()=>{
    setChildFade(parentRef.current.btns())
  },[parentRef]);


  return (
    <div>
      <Tabs tabBarExtraContent={childFade}>
        <TabPane tab="Tab 1" key="1">
          <Child1 ref={parentRef}>
            <div>
              我是父组件Tab1
            </div>
          </Child1>
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          <div>
            我是父组件Tab2
      </div>
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          <div>
            我是父组件Tab3
      </div>
        </TabPane>
      </Tabs>
    </div>
  )
}

export default App;