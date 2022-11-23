import React, { Component } from 'react'
import ComponentC from './ContextAPI/ComponentC'
import { UserProvider } from './ContextAPI/UserContext'

// import Ch1 from './HOC/ch1'
// import Ch2 from './HOC/ch2'
// import ClickCounter from './HOC/ClickCounter'
// import HoverCounter from './HOC/HoverCounter'
// import ParentComp from './purecomponents/ParentComp'
// import LifecycleA from './LifeCycleMethods/LifecycleA'
// import Updating from './LifeCycleMethods/Updating'
// import Form from './Form/Form'
// import Index_key from './list_keys/Index_key'
// import NameList from './list_keys/NameList'
// import Parent from './method_as_props/Parent'
// import Props from './topics/Props'
// import States from './topics/States'
// import Setstate from './topics/Setstate'
// import Event from './topics/Event'
// import Classevent from './topics/Classevent'
// import Eventbind from './topics/Eventbind'


export class App extends Component {
  render() {
    return (
      <div >
        {/* <Props name='Muni' />
        <Props  name='Dhanu' />
        <Props   name='Mahi'/> */}
        {/* <States /> */}
        {/* <Setstate /> */}
        {/* <Event /> */}
        {/* <Classevent /> */}
        {/* <Eventbind/> */}
        {/* <Parent/> */}
        {/* <NameList/> */}
        {/* <Index_key/> */}
        {/* <Form/> */}
        {/* <LifecycleA/> */}
        {/* <Updating/> */}
        {/* <ParentComp/> */}
        {/* <ClickCounter/>
        <HoverCounter/> */}
        {/* <Ch1 />
        <Ch2/> */}
        <UserProvider value='Muniraj'>
           <ComponentC/>
        </UserProvider>
        
        
       
        
      </div>
    )
  }
}

export default App