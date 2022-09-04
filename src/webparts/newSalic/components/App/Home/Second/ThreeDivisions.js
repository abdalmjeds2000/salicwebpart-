import React, { useCallback, useContext, useEffect, useState } from 'react';
import './ThreeDivisions.css';
import { NavLink } from 'react-router-dom';
import { Timeline, Tweet } from 'react-twitter-widgets';
import ImageViewer from 'react-simple-image-viewer';
import { AlertFilled } from '@ant-design/icons';
import { AppCtx } from '../../App';

import VideoPoster from '../../../../assets/images/media_center/gallery1.png'
import Image1 from '../../../../assets/images/media_center/gallery2.png'
import Image2 from '../../../../assets/images/media_center/gallery3.png'
import Image3 from '../../../../assets/images/media_center/gallery4.png'
import Image4 from '../../../../assets/images/media_center/gallery5.png'

import DefualtUserIcon from '../../../../assets/images/default-profile-icon.svg'
import { includes } from 'lodash';
const boxsIcons = {
  Policies: <svg xmlns="http://www.w3.org/2000/svg" width="18.165" height="19.91" viewBox="0 0 18.165 19.91">
              <g id="Document" transform="translate(-0.001 0)">
                <path id="Stroke_1" data-name="Stroke 1" d="M7.22,1.25H0A.75.75,0,1,1,0-.25H7.22a.75.75,0,0,1,0,1.5Z" transform="translate(5.496 13.723)" fill="#fff"/>
                <path id="Stroke_2" data-name="Stroke 2" d="M7.22,1.25H0A.75.75,0,1,1,0-.25H7.22a.75.75,0,0,1,0,1.5Z" transform="translate(5.496 9.537)" fill="#fff"/>
                <path id="Stroke_3" data-name="Stroke 3" d="M2.755,1.25H0A.75.75,0,0,1,0-.25H2.755a.75.75,0,0,1,0,1.5Z" transform="translate(5.496 5.36)" fill="#fff"/>
                <path id="Stroke_4" data-name="Stroke 4" d="M12.158-.75h0A5.185,5.185,0,0,1,15.994.738a5.419,5.419,0,0,1,1.421,3.869v9.2a5.419,5.419,0,0,1-1.41,3.854,5.173,5.173,0,0,1-3.806,1.5l-7.693,0A5.184,5.184,0,0,1,.67,17.672,5.42,5.42,0,0,1-.75,13.8v-9.2A5.418,5.418,0,0,1,.659.753a5.172,5.172,0,0,1,3.805-1.5ZM4.506,17.66l7.689,0a3.5,3.5,0,0,0,3.72-3.854v-9.2A3.5,3.5,0,0,0,12.158.75l-7.689,0A3.5,3.5,0,0,0,.75,4.607v9.2A3.5,3.5,0,0,0,4.506,17.66Z" transform="translate(0.751 0.75)" fill="#fff"/>
              </g>
            </svg>,
  Circulations: <svg xmlns="http://www.w3.org/2000/svg" width="25.024" height="21.704" viewBox="0 0 25.024 21.704">
                  <g id="Group_719" data-name="Group 719" transform="translate(-165.989 -176.305)">
                    <g id="Group_719-2" data-name="Group 719" transform="translate(165.989 176.305)">
                      <path id="Path_5080" data-name="Path 5080" d="M171.432,178.967a10.82,10.82,0,0,0-3.542,6.3h-1.9l2.465,3.678,2.738-3.678h-1.747a9.269,9.269,0,0,1,18.121-.257l.074.319,1.211-1.38-.028-.091a10.905,10.905,0,0,0-10.3-7.555A10.786,10.786,0,0,0,171.432,178.967Z" transform="translate(-165.989 -176.305)" fill="#fff"/>
                    </g>
                    <g id="Group_720" data-name="Group 720" transform="translate(168.158 185.368)">
                      <path id="Path_5081" data-name="Path 5081" d="M192.311,216.215h1.748a9.252,9.252,0,0,1-9.08,7.446h0a9.363,9.363,0,0,1-9.037-7.17l-.074-.317-1.21,1.38.029.09a10.909,10.909,0,0,0,10.292,7.536,10.794,10.794,0,0,0,10.633-8.963h1.9l-2.466-3.678Z" transform="translate(-174.659 -212.537)" fill="#fff"/>
                    </g>
                  </g>
                </svg>,
  Offers: <svg id="Iconly_Light_Discount" data-name="Iconly/Light/Discount" xmlns="http://www.w3.org/2000/svg" width="19.998" height="19.999" viewBox="0 0 19.998 19.999">
            <g id="Discount" transform="translate(0 -0.001)">
              <path id="Stroke_1" data-name="Stroke 1" d="M9.25,19.249a2.993,2.993,0,0,1-2.124-.876l-.73-.729a1.521,1.521,0,0,0-1.063-.438H4.305a3.014,3.014,0,0,1-3.011-3.011V13.165A1.515,1.515,0,0,0,.855,12.1l-.719-.72a3.011,3.011,0,0,1-.01-4.257L.855,6.4a1.5,1.5,0,0,0,.439-1.064V4.305A3.015,3.015,0,0,1,4.305,1.293H5.334A1.5,1.5,0,0,0,6.4.854L7.115.136A3.012,3.012,0,0,1,11.358.112l.026.024.72.72a1.5,1.5,0,0,0,1.063.437h1.028a3.015,3.015,0,0,1,3.012,3.012V5.332A1.5,1.5,0,0,0,17.645,6.4l.718.718a3.015,3.015,0,0,1,.01,4.257l-.731.731a1.514,1.514,0,0,0-.437,1.062v1.029a3.015,3.015,0,0,1-3.012,3.011H13.166a1.519,1.519,0,0,0-1.064.44l-.719.718A2.987,2.987,0,0,1,9.25,19.249ZM4.305,2.793A1.513,1.513,0,0,0,2.794,4.305V5.332a2.994,2.994,0,0,1-.876,2.122l-.73.731A1.511,1.511,0,0,0,1.2,10.321l.721.722a3.025,3.025,0,0,1,.877,2.122v1.029a1.513,1.513,0,0,0,1.511,1.511H5.334a2.993,2.993,0,0,1,2.121.876l.73.73a1.511,1.511,0,0,0,2.136-.007l.722-.721a2.99,2.99,0,0,1,2.123-.877h1.028a1.513,1.513,0,0,0,1.512-1.511V13.165a3.025,3.025,0,0,1,.876-2.122l.73-.73A1.513,1.513,0,0,0,17.3,8.178l-.721-.721a3,3,0,0,1-.877-2.124V4.305a1.514,1.514,0,0,0-1.512-1.512H13.166a2.989,2.989,0,0,1-2.122-.875l-.707-.707-.022-.021A1.512,1.512,0,0,0,8.178,1.2l-.72.721a2.994,2.994,0,0,1-2.124.877Z" transform="translate(0.75 0.751)" fill="#fff"/>
              <path id="Stroke_3" data-name="Stroke 3" d="M0,5.89a.748.748,0,0,1-.53-.22.75.75,0,0,1,0-1.061L4.61-.53a.75.75,0,0,1,1.061,0A.75.75,0,0,1,5.67.53L.53,5.67A.748.748,0,0,1,0,5.89Z" transform="translate(7.43 7.43)" fill="#fff"/>
              <path id="Fill_5" data-name="Fill 5" d="M.75,1.49a.749.749,0,0,1-.53-.22.821.821,0,0,1-.16-.25A.668.668,0,0,1,0,.74.717.717,0,0,1,.06.45.776.776,0,0,1,.22.21a.774.774,0,0,1,1.06,0,.807.807,0,0,1,.17.24A.929.929,0,0,1,1.5.74a.863.863,0,0,1-.05.28.852.852,0,0,1-.17.25.749.749,0,0,1-.53.22" transform="translate(11.817 11.832)" fill="#fff"/>
              <path id="Fill_7" data-name="Fill 7" d="M.75,1.491A.672.672,0,0,1,.47,1.43a.818.818,0,0,1-.25-.159.963.963,0,0,1-.16-.25A.674.674,0,0,1,0,.741.714.714,0,0,1,.06.451.674.674,0,0,1,.22.211a.772.772,0,0,1,1.06,0,.748.748,0,0,1,.22.53.666.666,0,0,1-.05.28,1.006,1.006,0,0,1-.17.25.773.773,0,0,1-.24.159.718.718,0,0,1-.29.061" transform="translate(6.677 6.692)" fill="#fff"/>
            </g>
          </svg>,
  UserGuides: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                <g id="Iconly_Light_Info_Square" data-name="Iconly/Light/Info Square" transform="translate(20 20) rotate(180)">
                  <g id="Info_Square" data-name="Info Square" transform="translate(-0.001 0)">
                    <path id="Stroke_1" data-name="Stroke 1" d="M.5,5.169a.75.75,0,0,1-.75-.75V0a.75.75,0,1,1,1.5,0V4.419A.75.75,0,0,1,.5,5.169Z" transform="translate(9.49 9.377)" fill="#fff"/>
                    <path id="Stroke_2" data-name="Stroke 2" d="M.5,1.25H.5a.75.75,0,0,1,0-1.5H.5a.75.75,0,0,1,0,1.5Z" transform="translate(9.495 5.704)" fill="#fff"/>
                    <path id="Stroke_3" data-name="Stroke 3" d="M4.915-.75h8.669A5.489,5.489,0,0,1,17.727.937,6.064,6.064,0,0,1,19.25,5.166v8.168a6.063,6.063,0,0,1-1.523,4.229,5.49,5.49,0,0,1-4.144,1.687H4.915A5.487,5.487,0,0,1,.772,17.563,6.065,6.065,0,0,1-.75,13.334V5.166A6.061,6.061,0,0,1,.776.937,5.487,5.487,0,0,1,4.915-.75Zm8.668,18.5c2.531,0,4.167-1.733,4.167-4.416V5.166C17.75,2.483,16.115.75,13.584.75H4.915C2.385.75.75,2.483.75,5.166v8.168c0,2.683,1.635,4.416,4.165,4.416Z" transform="translate(0.751 0.75)" fill="#fff"/>
                  </g>
                </g>
              </svg>,
  Research: <svg xmlns="http://www.w3.org/2000/svg" width="20.264" height="20.722" viewBox="0 0 20.264 20.722">
              <g id="Search" transform="translate(-0.028 -0.028)">
                <path id="Ellipse_739" d="M8.989-.75A9.739,9.739,0,1,1-.75,8.989,9.75,9.75,0,0,1,8.989-.75Zm0,17.977A8.239,8.239,0,1,0,.75,8.989,8.248,8.248,0,0,0,8.989,17.227Z" transform="translate(0.778 0.778)" fill="#fff"/>
                <path id="Line_181" d="M3.524,4.265a.748.748,0,0,1-.53-.219L-.53.531a.75.75,0,0,1,0-1.061.75.75,0,0,1,1.061,0L4.054,2.984a.75.75,0,0,1-.53,1.281Z" transform="translate(16.018 16.485)" fill="#fff"/>
              </g>
            </svg>,
  SALICTemplates: <svg xmlns="http://www.w3.org/2000/svg" width="20.264" height="20.722" viewBox="0 0 20.264 20.722">
                    <g id="Search" transform="translate(-0.028 -0.028)">
                      <path id="Ellipse_739" d="M8.989-.75A9.739,9.739,0,1,1-.75,8.989,9.75,9.75,0,0,1,8.989-.75Zm0,17.977A8.239,8.239,0,1,0,.75,8.989,8.248,8.248,0,0,0,8.989,17.227Z" transform="translate(0.778 0.778)" fill="#fff"/>
                      <path id="Line_181" d="M3.524,4.265a.748.748,0,0,1-.53-.219L-.53.531a.75.75,0,0,1,0-1.061.75.75,0,0,1,1.061,0L4.054,2.984a.75.75,0,0,1-.53,1.281Z" transform="translate(16.018 16.485)" fill="#fff"/>
                    </g>
                  </svg>,
}
const communityNewsBoxs = [
  {id: 0, name: 'Policies', icon: boxsIcons.Policies},
  {id: 1, name: 'Circulations', icon: boxsIcons.Circulations},
  {id: 2, name: 'Offers', icon: boxsIcons.Offers},
  {id: 3, name: 'User Guides', icon: boxsIcons.UserGuides},
  {id: 4, name: 'Research', icon: boxsIcons.Research},
  {id: 5, name: 'SALIC Templates', icon: boxsIcons.SALICTemplates},
];
function getWindowSize() {
  const {innerWidth, innerHeight} = typeof window !== "undefined" ? window : null;
  return {innerWidth, innerHeight};
}


const ThreeDivisions = (props) => {
  const { news_list, media_center } = useContext(AppCtx);

  // Image Viewer Code
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = media_center.Row?.filter(r => !['mp4', 'avi'].includes(r.File_x0020_Type)).map(r => r.EncodedAbsUrl);
  const videos = media_center.Row?.filter(r => ['mp4', 'avi'].includes(r.File_x0020_Type)).map(r => r.EncodedAbsUrl);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);
  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

   // Get Window Size
  const [windowSize, setWindowSize] = useState(getWindowSize());
  useEffect(() => {
    function handleWindowResize() {setWindowSize(getWindowSize());}
    window.addEventListener('resize', handleWindowResize);
  }, []);


  

  return (
    <div className="three-divisions">
      <div className="media-center">
        <div className="header">
          <h3>Media Center</h3>
          <a href="/">See All</a>
        </div>
        <div className="gallerys">
          {/* Video Section */}
          <div className="gallery gallery1">
            {/* <iframe width="100%" height="100%" src="https://www.youtube.com/embed/RB0k4KlehYE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            <video controls poster={VideoPoster}>
              <source src={videos[0]}></source>
            </video>
          </div>
          {/* Images Section */}
          {images.slice(-4).reverse().map((src, index) => (
            <div
              src={src}
              onClick={ () => openImageViewer(index) }
              key={ index }
              className={`gallery gallery${index+2}`}
              style={{backgroundImage: `url(${src})`}}
            ></div>
          ))}
          {isViewerOpen && (
            <ImageViewer
              src={ images.reverse() }
              currentIndex={ currentImage }
              disableScroll={ true }
              closeOnClickOutside={ true }
              onClose={ closeImageViewer }
            />
          )}
        </div>
      </div>

      <div className="community-news">
        <div className="news_organization_container">
          <div className="news">
            <div className="header">
              <h3>Community News</h3>
              <NavLink to="/community-news">See All</NavLink>
            </div>
            {
              news_list?.slice(0, windowSize.innerWidth > 1750 ? 3 : 2).map((row, i) => {
                return (
                  <div className="box" key={i}>
                    <h3 className="title">{row.Subject}</h3>
                    <p className="description">{row.Description.replace(/<[^>]*>?/gm, '').replace(/&(nbsp|amp|quot|lt|gt);/g, "")}</p>
                    <div className="by">
                    <img src={row.Photos !== null? row.Photos : DefualtUserIcon} alt="" />
                      <div>
                        <p>{row.Author.Title}</p>
                        <p>HR Manager</p>
                      </div>
                    </div>
                  </div>
                )
              })
            }
            <div className="organization-documents-container">
              <div className="header">
                <h3>Organization Documents</h3>
              </div>
              <div className="boxs">
                {communityNewsBoxs.map(box => {
                  return <div key={box.id} className="oranization-documents">
                    <div>
                      {box.icon}
                    </div>
                    <p>{box.name}</p>
                  </div>
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="twitter-wid">
        <div className="header">
          <h3>Social Media</h3>
        </div>
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'KSA_SALIC'
          }}
          options={{
            height: 'calc(100vh - 125px)'
          }}
        />
      </div>
    </div>
  )
}

export default ThreeDivisions