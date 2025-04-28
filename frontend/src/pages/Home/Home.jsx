import React, { useContext, useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import ExploreCategory from '../../components/ExploreCategory/ExploreCategory'
import AppDownload from '../../components/AppDownload/AppDownload'
import HomeMedicines from '../../components/HomeMedicines/HomeMedicines'
import { StoreContext } from '../../context/StoreContext'

const Home = () => {
    const { setpage } = useContext(StoreContext);
      
    useEffect(() => { 
        setpage("Home");
    },[])

    return (
        <div>
            <Header />
            <ExploreCategory />
            <HomeMedicines />
            <AppDownload />
        </div>
    )
}

export default Home
