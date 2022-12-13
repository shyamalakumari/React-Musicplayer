import React, { useEffect } from 'react';
import axios from "axios";
import styles from "../styles/home.module.scss";
import { Input } from 'antd';
import {
  AudioOutlined,
BellOutlined,
SettingOutlined,
  UserOutlined,
  DownOutlined
} from '@ant-design/icons';
import { useState } from "react";
import { useDispatch, useSelector} from 'react-redux';
import PlayList from "../components/playList";
import { fetch } from '../redux/slice/playListSlice';


function Home() {

  const [inputvalue, setinput] = useState();

  const { Search } = Input;

  const dispatch = useDispatch()

  useEffect(()=>{

    dispatch(fetch({input : inputvalue}))
  },[inputvalue])

 const data1 = axios.get(`https://saavn.me/search/songs?query=${inputvalue}`)


const data = useSelector(state => state.List.value)


  return (
  <div className={styles.home}>
    <div className={styles.header}>
    
    <div>
      <Search style={{width:"450px",height:"40px",}}
        placeholder=" search"
       
        onSearch={data}
        onChange={(e) => setinput(e.target.value)}
      />
      
    </div>
    <div className={styles.outline}>
    <p style={{fontSize:"25px"}}> <BellOutlined /></p>

      <p style={{fontSize:"25px",marginRight:"3rem"}}><SettingOutlined /></p>
      
    </div>
    </div>
    <div className={styles.list}><PlayList/></div>
  </div>
  )
}
export default Home;