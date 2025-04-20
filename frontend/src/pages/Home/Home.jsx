import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import ExploreCategory from '../../components/ExploreCategory/ExploreCategory'
import MedicineDisplay from '../../components/MedicineDisplay/MedicineDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'

const Home = () => {
    const [category, setcategory] = useState("All")

    return (
        <div>
            <Header />
            <ExploreCategory category={category} setcategory={setcategory} />
            <MedicineDisplay category={category} />
            <AppDownload />
        </div>
    )
}

export default Home
