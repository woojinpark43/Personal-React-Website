import React from "react";
import { HeaderBar, Video, ZoomPanel, SlidePanel, ViewportZoomPanel } from '../components/index';
import { Grid, Text, Image } from "../elements";
import './MainPage.css'

const data = {
    SlidePanelContent: 
    [
        'Welcome to my personal React website!',
        '제 리액트 웹사이트에 오신것을 환영합니다!',
        '欢迎浏览我的个人React网站'
    ]
    ,
    ZoomPanelContent:
    [
        'first\n content',
        'second content',
        'third content',
    ]
}

const MainPage = (props) => {
    return(
        <React.Fragment>
            <Grid height='100vh' width='100%'>
                <Grid height='50px' bg='#99ccff' position='relative'>
                    <HeaderBar/>
                </Grid>
                <div style={{ overflow: 'hidden', height: '600px' }}>
                    <Video playing='true' muted={true} controls={false} className='main-page-video'/>
                </div>
                <Grid height='210px' marginTop='20px'>
                    <div class="main-page-self-image">
                        <hr />
                            <div className='image-wrapper'>
                                <Image size='200'/>
                            </div>
                        <hr />
                    </div>
                </Grid>
                <Grid height='90px' marginTop='20px' bg='black'>
                    <SlidePanel textArray={data.SlidePanelContent} textSize={'53px'}/>
                </Grid>
                <div style={{ width: '80%', transform: 'translate(12.5%, 0%)' }}>
                    <ViewportZoomPanel content={data.ZoomPanelContent} width={'400px'} height={'500px'}/>
                </div>
                <Grid height='300px' bg='black'>
                    <Text color='white' align='center'> Woojin Park</Text>
                    <Text color='white' align='center'> wj36park@gmail.com</Text>
                    <Text color='white' align='center'> wj36park@gmail.com</Text>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default MainPage;