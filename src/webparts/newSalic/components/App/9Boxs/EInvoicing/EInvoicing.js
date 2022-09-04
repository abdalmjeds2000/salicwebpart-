import React, { useContext } from 'react'

import HistoryNavigation from '../../Global/HistoryNavigation/HistoryNavigation';
import SimpleUserPanel from '../../Global/SimpleUserPanel/SimpleUserPanel';
import { AppCtx } from '../../App';
import WorldBG from '../../../../assets/images/world.svg';

const icons = {
  CreateInvoiceRequest: <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 512 512" fill="#fff"><g>
                          <g xmlns="http://www.w3.org/2000/svg">
                            <g>
                              <rect x="86.588" y="472.785" width="331.294" height="37.647" fill="#FFFFFF"   ></rect>
                            </g>
                          </g>
                          <g xmlns="http://www.w3.org/2000/svg">
                            <g>
                              <path d="M311.843,169.726H195.765c-10.397,0-18.824,8.427-18.824,18.824s8.427,18.824,18.824,18.824h116.078    c10.397,0,18.824-8.427,18.824-18.824S322.24,169.726,311.843,169.726z" fill="#FFFFFF"   ></path>
                            </g>
                          </g>
                          <g xmlns="http://www.w3.org/2000/svg">
                            <g>
                              <path d="M399.686,257.569H195.765c-10.397,0-18.824,8.427-18.824,18.824s8.427,18.824,18.824,18.824h203.922    c10.397,0,18.823-8.427,18.823-18.824S410.083,257.569,399.686,257.569z" fill="#FFFFFF"   ></path>
                            </g>
                          </g>
                          <g xmlns="http://www.w3.org/2000/svg">
                            <g>
                              <path d="M500.907,3.86c-6.758-3.037-14.657-1.838-20.204,3.062l-52.712,46.632L375.216,6.363c-7.147-6.394-17.951-6.394-25.098,0    l-52.706,47.134L244.7,6.363c-7.147-6.394-17.945-6.394-25.092,0l-52.775,47.191L114.121,6.922    c-5.54-4.894-13.446-6.093-20.204-3.062c-6.751,3.043-11.093,9.757-11.093,17.161v335.059h-64C8.427,356.079,0,364.506,0,374.903    v45.804c0,49.474,40.251,89.725,89.725,89.725v-37.647c-28.718,0-52.078-23.366-52.078-52.078v-26.98h294.902v26.98    c0,49.474,40.251,89.726,89.725,89.726c49.474,0,89.725-40.251,89.725-89.725V21.02C512,13.616,507.658,6.903,500.907,3.86z     M474.353,420.707c0,28.712-23.366,52.078-52.078,52.078s-52.078-23.366-52.078-52.078v-45.804    c0-10.397-8.427-18.824-18.824-18.824H120.471V62.802l33.964,30.049c7.153,6.325,17.907,6.293,25.016-0.069l52.706-47.134    l52.706,47.128c7.147,6.394,17.951,6.394,25.098,0l52.712-47.134l52.706,47.134c7.115,6.362,17.87,6.387,25.016,0.069    l33.958-30.042V420.707z" fill="#FFFFFF"   ></path>
                            </g>
                          </g>
                          <g xmlns="http://www.w3.org/2000/svg">
                          </g>
                          <g xmlns="http://www.w3.org/2000/svg">
                          </g>
                          <g xmlns="http://www.w3.org/2000/svg">
                          </g>
                          <g xmlns="http://www.w3.org/2000/svg">
                          </g>
                          <g xmlns="http://www.w3.org/2000/svg">
                          </g>
                          <g xmlns="http://www.w3.org/2000/svg">
                          </g>
                          <g xmlns="http://www.w3.org/2000/svg">
                          </g>
                          <g xmlns="http://www.w3.org/2000/svg">
                          </g>
                          <g xmlns="http://www.w3.org/2000/svg">
                          </g>
                          <g xmlns="http://www.w3.org/2000/svg">
                          </g>
                          <g xmlns="http://www.w3.org/2000/svg">
                          </g>
                          <g xmlns="http://www.w3.org/2000/svg">
                          </g>
                          <g xmlns="http://www.w3.org/2000/svg">
                          </g>
                          <g xmlns="http://www.w3.org/2000/svg">
                          </g>
                          <g xmlns="http://www.w3.org/2000/svg">
                          </g>
                          </g>
                        </svg>,
  ReceiveOrderItems:  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 512.039 512.039" fill="#fff"><g>
                        <g xmlns="http://www.w3.org/2000/svg" transform="translate(-1)">
                          <g>
                            <g>
                              <path d="M512.606,315.853c-0.018-0.089-0.036-0.178-0.055-0.266c-0.129-0.599-0.278-1.198-0.462-1.797     c-0.049-0.161-0.109-0.316-0.161-0.475c-0.087-0.262-0.169-0.525-0.267-0.786l-64-170.667     c-3.122-8.326-11.082-13.843-19.975-13.843h-64c-11.782,0-21.333,9.551-21.333,21.333c0,11.782,9.551,21.333,21.333,21.333     h49.216l48,128h-97.216c-11.782,0-21.333,9.551-21.333,21.333v42.667H171.686v-42.667c0-11.782-9.551-21.333-21.333-21.333     H53.137l48-128h49.216c11.782,0,21.333-9.551,21.333-21.333c0-11.782-9.551-21.333-21.333-21.333h-64     c-8.893,0-16.853,5.516-19.975,13.843l-64,170.667c-0.098,0.261-0.179,0.522-0.266,0.784c-0.053,0.16-0.113,0.316-0.162,0.478     c-0.184,0.598-0.332,1.197-0.462,1.796c-0.019,0.089-0.037,0.178-0.055,0.268c-0.332,1.639-0.466,3.273-0.413,4.879v169.954     c0,11.782,9.551,21.333,21.333,21.333h469.333c11.782,0,21.333-9.551,21.333-21.333V320.733     C513.072,319.127,512.939,317.493,512.606,315.853z M470.353,469.353H43.686v-128h85.333v42.667     c0,11.782,9.551,21.333,21.333,21.333h213.333c11.782,0,21.333-9.551,21.333-21.333v-42.667h85.333V469.353z" fill="#FFFFFF" data-original="#000000" class=""></path>
                              <path d="M208.104,100.438l27.582-27.582v204.497c0,11.782,9.551,21.333,21.333,21.333c11.782,0,21.333-9.551,21.333-21.333     V72.856l27.582,27.582c8.331,8.331,21.839,8.331,30.17,0c8.331-8.331,8.331-21.839,0-30.17l-64-64     c-0.004-0.004-0.008-0.006-0.011-0.01c-0.494-0.493-1.012-0.96-1.552-1.403c-0.247-0.203-0.507-0.379-0.761-0.569     c-0.303-0.227-0.6-0.462-0.916-0.673c-0.304-0.203-0.619-0.379-0.931-0.565c-0.286-0.171-0.565-0.35-0.859-0.508     c-0.318-0.17-0.644-0.314-0.969-0.467c-0.307-0.145-0.609-0.298-0.923-0.429c-0.315-0.13-0.637-0.236-0.957-0.35     c-0.337-0.121-0.669-0.25-1.013-0.354c-0.32-0.097-0.646-0.168-0.969-0.249c-0.351-0.089-0.698-0.187-1.055-0.258     c-0.375-0.074-0.753-0.119-1.13-0.173c-0.311-0.044-0.617-0.104-0.933-0.135c-1.4-0.138-2.811-0.138-4.211,0     c-0.315,0.031-0.621,0.09-0.933,0.135c-0.377,0.054-0.756,0.098-1.13,0.173c-0.358,0.071-0.704,0.169-1.055,0.258     c-0.324,0.081-0.649,0.152-0.969,0.249c-0.344,0.104-0.677,0.233-1.013,0.354c-0.32,0.115-0.642,0.22-0.957,0.35     c-0.315,0.13-0.616,0.284-0.923,0.429c-0.324,0.153-0.651,0.297-0.969,0.467c-0.294,0.158-0.573,0.337-0.859,0.508     c-0.312,0.186-0.627,0.362-0.931,0.565c-0.316,0.211-0.612,0.446-0.916,0.673c-0.254,0.19-0.514,0.366-0.761,0.569     c-0.54,0.443-1.059,0.91-1.552,1.403c-0.004,0.004-0.008,0.006-0.011,0.01l-64,64c-8.331,8.331-8.331,21.839,0,30.17     S199.773,108.769,208.104,100.438z" fill="#FFFFFF" data-original="#000000" class=""></path>
                            </g>
                          </g>
                        </g>
                        <g xmlns="http://www.w3.org/2000/svg">
                        </g>
                        <g xmlns="http://www.w3.org/2000/svg">
                        </g>
                        <g xmlns="http://www.w3.org/2000/svg">
                        </g>
                        <g xmlns="http://www.w3.org/2000/svg">
                        </g>
                        <g xmlns="http://www.w3.org/2000/svg">
                        </g>
                        <g xmlns="http://www.w3.org/2000/svg">
                        </g>
                        <g xmlns="http://www.w3.org/2000/svg">
                        </g>
                        <g xmlns="http://www.w3.org/2000/svg">
                        </g>
                        <g xmlns="http://www.w3.org/2000/svg">
                        </g>
                        <g xmlns="http://www.w3.org/2000/svg">
                        </g>
                        <g xmlns="http://www.w3.org/2000/svg">
                        </g>
                        <g xmlns="http://www.w3.org/2000/svg">
                        </g>
                        <g xmlns="http://www.w3.org/2000/svg">
                        </g>
                        <g xmlns="http://www.w3.org/2000/svg">
                        </g>
                        <g xmlns="http://www.w3.org/2000/svg">
                        </g>
                        </g>
                      </svg>,
}
const services = [
  {icon: icons.CreateInvoiceRequest, bgColor: '#6edb72', text: 'Create Invoice Request', href: 'https://supplierp.salic.com/default/create/ap'},
  {icon: icons.ReceiveOrderItems, bgColor: '#eb673d', text: 'Recieve Order Item', href: 'https://supplierp.salic.com/default/createReceipt/ap'},
];


function EInvoicing() {
  const { user_data, notifications_count, mail_count } = useContext(AppCtx);

  return (
    <>
      <HistoryNavigation>
        <p>Financial Services Center</p>
      </HistoryNavigation>
      <div className='services-page-container'>
        <img src={WorldBG} className='img-bg' alt="world background" />

        <SimpleUserPanel
          userImage={`https://salic.sharepoint.com/sites/newsalic/_layouts/15/userphoto.aspx?size=M&username=${user_data.Data?.Mail}`}
          userName={user_data.Data?.DisplayName}
          notificationsCount={notifications_count}
          mailCount={mail_count}
        />


        <div className="header">
          <h2>Financial Service Request</h2>
        </div>
        <div className='services-body-container'>
          <div className="services-boxs-container">
            {services.map((service, i) => {
              return ( 
                <a 
                  data-application-name={service.dataApplicationName}
                  target='_blank' 
                  className='box' 
                  key={i}
                  href={service.href} 
                >
                  <div style={{backgroundColor: service.bgColor}}>
                    {service.icon}
                  </div>
                  <h3>{service.text}</h3>
                </a>
              )
            })}
          </div>

        </div>
      </div>
    </>
  )
}

export default EInvoicing