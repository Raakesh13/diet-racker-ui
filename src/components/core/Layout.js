import React, {useEffect} from 'react'


const Layout = ({ title = 'Title', description = 'Description', className, children }) => {
    useEffect(()=>{
        document.title = title
    })
  return (
<div></div>
  )
}

export default Layout
