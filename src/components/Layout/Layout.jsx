import React from 'react'
import Header from '../Header/Header'


export default function Layout(props) {
  const {children} = props;
  return <>
    <Header/>
    {children}
  </>
}