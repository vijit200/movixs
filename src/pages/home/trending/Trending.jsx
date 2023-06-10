import React from 'react';
import "./style.scss";
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
// import { fetchDataFromApi } from '../../../utils/api';
import SwitchTab from '../../../components/switchTabs/SwitchTab';
import { useState } from 'react';
import useFetch from "../../../hooks/useFetch"
import Carousel from '../../../components/carousel/Carousel';
function Trending() {
    const [endpoint,setEndpoint] = useState("day")

    const {data,loading} =useFetch(`/trending/all/${endpoint}`)

    // console.log(data);




    const onTabChange = (tab) =>{
        setEndpoint(tab === "Day"?"day":"week")
    }
  return (
    <div className='carouselSection'>
        <ContentWrapper>
            <span className='carouselTitle'>
                Trendiing
            </span>
            <SwitchTab data={["Day","Week"]}
            onTabChange ={onTabChange}
            />
        </ContentWrapper>
        <Carousel data={data?.results} loading={loading}/>
      
    </div>
  )
}

export default Trending
