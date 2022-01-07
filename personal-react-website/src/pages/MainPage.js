import React from "react";
import {
  HeaderBar,
  Video,
  ZoomPanel,
  SlidePanel,
  ViewportZoomMainPageIcon,
  ViewportZoomPanel,
} from "../components/index";
import { Grid, Text, Image } from "../elements";
import "./MainPage.css";

const MainPage = (props) => {
  return (
    <React.Fragment>
      <Grid height="100vh" width="100%">
        <div style={{ width: "50%", transform: "translate(50%, 0%)" }}>
          <HeaderBar />
        </div>
        {/* <div style={{ overflow: "hidden", height: "600px" }}>
          <Video
            playing="true"
            muted={true}
            controls={false}
            className="main-page-video"
          />
        </div> */}
        <Grid height="100vh" width="100%">
          <div style={{ width: "50%", transform: "translate(50%, 0%)" }}>
            <ViewportZoomPanel
              width={"100%"}
              height={"200px"}
              initDelayCount={0}
            />
          </div>
        </Grid>
        {/* <Grid height='90px' marginTop='20px' bg='black'>
                    <SlidePanel textArray={data.SlidePanelContent} textSize={'53px'}/>
                </Grid> */}
        {/* <Grid height="210px">
          <div class="main-page-self-image">
            <hr />
            <div className="image-wrapper">
              <Image size="200" />
            </div>
            <hr />
          </div>
        </Grid> */}
        {/* <Grid height='300px' bg='black'>
                    <Text color='white' align='center'> Woojin Park</Text>
                    <Text color='white' align='center'> wj36park@gmail.com</Text>
                    <Text color='white' align='center'> wj36park@gmail.com</Text>
                </Grid> */}
        <div className="main-page-fixed-icons">
          <ViewportZoomMainPageIcon width={55} initDelayCount={0} />
        </div>
      </Grid>
    </React.Fragment>
  );
};

export default MainPage;
