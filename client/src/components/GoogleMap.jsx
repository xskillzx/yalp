import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import {GOOGLE_MAPS_API_KEY} from '../../config/yelp.js';
import React from 'react'; 
 
export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      businesses: []
    }
    
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onInfoWindowClose = this.onInfoWindowClose.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    this.setState({businesses: this.props.businesses});
  }

  onMarkerClick(props, marker, e) {
    this.setState({
      showingInfoWindow: true,
      activeMarker: marker,
      selectedPlace: props,
    })
  }

  onInfoWindowClose() {
    this.setState ({
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    })
  }

  render() {
    const style = {
      width: '80vw',
      height: '55vh'
    }
    return (
      <Map google={this.props.google} zoom={14} style={style}>

        {this.state.businesses.map( result => (
          <Marker onClick = {this.onMarkerClick}
                  name = {result.name}
                  img = {result.icon}
                  title = {'I am the title!'} 
                  position = {result.geometry.location}
                  formatted_address = {result.formatted_address}
                  price_level = {result.price_level}
                  />
        ))}

        <InfoWindow onClose={this.onInfoWindowClose}
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h3>{this.state.selectedPlace.name} <span style={{"color": "grey"}}>- ({'$'.repeat(this.state.selectedPlace.price_level)})</span></h3>
              <p style={{"color": "grey"}}>{this.state.selectedPlace.formatted_address}</p>
            </div>
        </InfoWindow>
      </Map>
    );
  }

}

export default GoogleApiWrapper({
  apiKey: (GOOGLE_MAPS_API_KEY)
})(MapContainer);






const fakeData = [
  {
      "formatted_address": "1550 Howard St, San Francisco, CA 94103, United States",
      "geometry": {
          "location": {
              "lat": 37.7724812,
              "lng": -122.4165526
          },
          "viewport": {
              "northeast": {
                  "lat": 37.7737797802915,
                  "lng": -122.4151122697085
              },
              "southwest": {
                  "lat": 37.7710818197085,
                  "lng": -122.4178102302915
              }
          }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
      "id": "2e83708877ebf188f215a0bbcae97e8cf2b98751",
      "name": "Big Chef Tom's Belly Burgers",
      "opening_hours": {
          "open_now": true,
          "weekday_text": []
      },
      "photos": [
          {
              "height": 1365,
              "html_attributions": [
                  "<a href=\"https://maps.google.com/maps/contrib/106509786899818830432/photos\">Big Chef Tom&#39;s Belly Burgers</a>"
              ],
              "photo_reference": "CmRaAAAAQIVtPbGmhMnsBmFNhjQu4reuCRFKWLjfdza0lCspqh2WRhYQvQETnauoloferD3_U7CwaYVP_agfULL2wTCxmcMpXYVJd_ft0_YZkWgHSRe1sGLTCbLAh8o3f2lSyHd7EhAVjfvZNrcDfgnQRl4f84DMGhSMq2iNneWHTmE47BGiIM1Y13Lukw",
              "width": 2048
          }
      ],
      "place_id": "ChIJx_nSZSd-j4ARs_kyfr_Keu8",
      "price_level": 1,
      "rating": 4.3,
      "reference": "CmRSAAAAwzaIJJ75MimsXfav4uMm8CuBXxk5t9jf_-SwETPAcyZtw6KxM0cA8eNssPcG8V2e90Kosj-drRhZ44eZhgCc7IK8M17Iv_fSv3evP8QhHo4X5WtYFlRLKI3N9Elvz2MhEhBE2jZVfL02CWaui3hV7lR-GhSVxU69jWlkbxrujpw9LJy4gSpd_Q",
      "types": [
          "restaurant",
          "food",
          "point_of_interest",
          "establishment"
      ]
  },
  {
      "formatted_address": "465 Grove St, San Francisco, CA 94102, United States",
      "geometry": {
          "location": {
              "lat": 37.7776202,
              "lng": -122.4239165
          },
          "viewport": {
              "northeast": {
                  "lat": 37.7790229802915,
                  "lng": -122.4225780197085
              },
              "southwest": {
                  "lat": 37.7763250197085,
                  "lng": -122.4252759802915
              }
          }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
      "id": "07ddda2d1a7aeca55f1a3daa9ce4503beb9108d1",
      "name": "Double Decker",
      "opening_hours": {
          "open_now": true,
          "weekday_text": []
      },
      "photos": [
          {
              "height": 3265,
              "html_attributions": [
                  "<a href=\"https://maps.google.com/maps/contrib/111467914044376256007/photos\">Frank Ong</a>"
              ],
              "photo_reference": "CmRaAAAAtlmV4frOicJKDD2VvgT7o43dOOZE2z1MS_Nggnj0WCQkgJdFzY913qRZqiMasrdy3_1Abds3JDdff9f48qJbeLsQ5p2YyYloFPo0X8yo7lypy35huCFjRK0Er2tNIPDpEhCR6RoJqQ92Iul664MDFBHoGhTAK2HGfZwvWpOCUJ6Aw5pTMEbpgg",
              "width": 4898
          }
      ],
      "place_id": "ChIJH22heKKAhYARr6lbxkSf81U",
      "price_level": 1,
      "rating": 4,
      "reference": "CmRRAAAATpp9DBrC99MJetO0DCCiDwLsuwooXuc3f2TO7oWAHknYnwyap6pcPWB9uLeKPMPy4945naNcIsPPoGfNOvrshmnB9P9BfENMDpInvmdFSwUoIF3eOpzbKvfT7VwvcwUhEhAg4vxdrMCyLOBe_JREJTs1GhQysEbZvewQ4s4De-993NetWCHVhA",
      "types": [
          "restaurant",
          "food",
          "point_of_interest",
          "establishment"
      ]
  },
  {
      "formatted_address": "998 Market St, San Francisco, CA 94102, United States",
      "geometry": {
          "location": {
              "lat": 37.7825164,
              "lng": -122.4104056
          },
          "viewport": {
              "northeast": {
                  "lat": 37.7837776802915,
                  "lng": -122.4089471697085
              },
              "southwest": {
                  "lat": 37.7810797197085,
                  "lng": -122.4116451302915
              }
          }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
      "id": "ea70e5f37cd2179fe4c7efa0d6f31012dd710c34",
      "name": "Popsons Burgers",
      "opening_hours": {
          "open_now": true,
          "weekday_text": []
      },
      "photos": [
          {
              "height": 3024,
              "html_attributions": [
                  "<a href=\"https://maps.google.com/maps/contrib/101298654776720277425/photos\">Ariel L</a>"
              ],
              "photo_reference": "CmRaAAAAZOrcxBlKdNe8J053Z6CgdlRyN_p1rX6E9uyz39o3QPOjhd6nWtVdkBp3wfKjtPeBIzY17VK7nGBdxJR7ij0QwAf_4ChjR38jgIxAKR3SCDouPgegsnV0Rlc-jRTRDZpzEhCKiBpLdPJAA9HHfDxseEI1GhSXlaWUdF1NHWcdYYgR6CfD10Fpkw",
              "width": 4032
          }
      ],
      "place_id": "ChIJYbpOD4WAhYARbOASyN_S8EU",
      "price_level": 1,
      "rating": 4.2,
      "reference": "CmRRAAAAjSmuW8mgLoF5EZLxOlLC8OMdeFzd2wkPJ1B8ZFkaruz5OJa-lO7HjpedxLMduv1Bxa4e5bixKDEbcGeyt7xeDqkAMHXGwRaf0h_M1yR4QlR20SJ8oIXh7_IwfoqMiQsCEhC_ivdK0cgBzXH1oqJlOOUYGhTcVe4zXfOQGw_3wWb6VqeNT9Wzdg",
      "types": [
          "restaurant",
          "food",
          "point_of_interest",
          "establishment"
      ]
  },
  {
      "formatted_address": "708 Post St, San Francisco, CA 94109, United States",
      "geometry": {
          "location": {
              "lat": 37.7878212,
              "lng": -122.4136995
          },
          "viewport": {
              "northeast": {
                  "lat": 37.7890814802915,
                  "lng": -122.4123318197085
              },
              "southwest": {
                  "lat": 37.7863835197085,
                  "lng": -122.4150297802915
              }
          }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
      "id": "d4a2221975e28c4e79cebc29cfefa746cc6ea190",
      "name": "Pearl's Deluxe Burgers",
      "opening_hours": {
          "open_now": true,
          "weekday_text": []
      },
      "photos": [
          {
              "height": 599,
              "html_attributions": [
                  "<a href=\"https://maps.google.com/maps/contrib/114050159007613470994/photos\">Pearl&#39;s Deluxe Burgers</a>"
              ],
              "photo_reference": "CmRaAAAALIE49dthz2iQm_-abOZKM54RZSMZGCXrS-5KmSWokqHEfJtStfjnn40Siuiul_wuTo901AapXhWAlLDzt0X9gFkXzzS_w7TxjzfoXev43KVrBNC91ey3WQvBXJv1mh9oEhCD63g4dVRe1JqMy69G4VsFGhSWrenrlY0pl7usMO4gHht0NHkYuQ",
              "width": 950
          }
      ],
      "place_id": "ChIJX_mq8ZGAhYARnz8KMjewbCs",
      "price_level": 1,
      "rating": 4.5,
      "reference": "CmRRAAAA-eEgb7tOUuTj_oWKCmz0HpHkO1Ylp7eaL8AcNJ5tKRZYd4KTMrHVnq2LgBq_rTS8LSKEZ2Lfki34qPoa6flR4saKjgV8P3Tj9_U3fPyeJifdzecUMNs_lpePsMwnl7M7EhB-DITQgKpuNFatLiysFzchGhRscHiqJaMRx39T8FSrqjImCZtyBg",
      "types": [
          "restaurant",
          "food",
          "point_of_interest",
          "establishment"
      ]
  },
  {
      "formatted_address": "700 S Van Ness Ave, San Francisco, CA 94110, United States",
      "geometry": {
          "location": {
              "lat": 37.76181710000001,
              "lng": -122.4174394
          },
          "viewport": {
              "northeast": {
                  "lat": 37.7631736302915,
                  "lng": -122.4159668197085
              },
              "southwest": {
                  "lat": 37.76047566970851,
                  "lng": -122.4186647802915
              }
          }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
      "id": "2436aaea6e14cad024b89d00cc80a5626f7520c0",
      "name": "Whiz Burgers Drive-In",
      "opening_hours": {
          "open_now": true,
          "weekday_text": []
      },
      "photos": [
          {
              "height": 3024,
              "html_attributions": [
                  "<a href=\"https://maps.google.com/maps/contrib/110689843711687125253/photos\">Jason Ouellette</a>"
              ],
              "photo_reference": "CmRaAAAAUiPGLTJKCYVmv9fEdAGAQa0EuIEgsHgajOnqWP2FC6KH9uuJ26zZHhKnvnXWRkq3N4Q-roRQaimVzpdBVCCzBrXSpIhcEgE620K9l3VK0pKlOBFG8jOALHK4lqL7g8veEhAtDRpLVdyi4C-iNQ_x7MkzGhTMuxCrxBMfMM5USkuooNUfAhmasw",
              "width": 4032
          }
      ],
      "place_id": "ChIJSeZaajt-j4ARfH4wp-Nb8DU",
      "price_level": 1,
      "rating": 4.1,
      "reference": "CmRRAAAAFZtlfkbFSun57VSSLHE4exCRoXQVdyTSvzY_qipJ1j0m4pxgngUYAi21YMdRkl8-KZ-W7GOspUfCL2bLaKRj12wTGHgRpikjPWR3-TvB60ImHK7BI1sRFj7WYiCFWFVBEhBic-arXcUbCdv2YO1G_vsUGhSzZJiB8silTQorYTi2UAR56QHEyg",
      "types": [
          "restaurant",
          "food",
          "point_of_interest",
          "establishment"
      ]
  },
  {
      "formatted_address": "2304 Market St, San Francisco, CA 94114, United States",
      "geometry": {
          "location": {
              "lat": 37.763997,
              "lng": -122.433679
          },
          "viewport": {
              "northeast": {
                  "lat": 37.7653002802915,
                  "lng": -122.4322797197085
              },
              "southwest": {
                  "lat": 37.7626023197085,
                  "lng": -122.4349776802915
              }
          }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
      "id": "0962ad5e3ee5258ad703391aa93b97ed6454369e",
      "name": "Super Duper Burgers",
      "opening_hours": {
          "open_now": true,
          "weekday_text": []
      },
      "photos": [
          {
              "height": 612,
              "html_attributions": [
                  "<a href=\"https://maps.google.com/maps/contrib/117707659361390367756/photos\">Super Duper Burgers</a>"
              ],
              "photo_reference": "CmRaAAAAE4Jap5M40Gj6WJ5DnYPisU_0ZWFzVrQPKjA6P9dhEfR6K_covV_aIAMmHMrrI6W-zdPxdI8HvMlxpQkhITHtANc1yZO10HOG6siWQhuNadogo_VMH3Oi4p8sjQVKFspiEhBr7t1WtMvp7Zyt2qexjAXYGhTT5baEsltPneGPD1vludUR9RLwng",
              "width": 612
          }
      ],
      "place_id": "ChIJE8IQlBx-j4ARurzdrE3v_Lk",
      "price_level": 1,
      "rating": 4.4,
      "reference": "CmRSAAAAyrMTmDvKIUMZSGXJjdabOOrrQrI5jknzYHsiOylpyEGqQK0psg05X4mJ3cErqgBSEbFw2g_-zgBT7n1qJSWUKz7iV4VqEOHrPFyl6Y6d8DWbMr9ecHT0rQ9Qzu58AilFEhAGJDeyJdqR6iEF9dtZm22EGhS-iTgJ9nKaa6vDvqsaimhVVlCDtA",
      "types": [
          "restaurant",
          "food",
          "point_of_interest",
          "establishment"
      ]
  },
  {
      "formatted_address": "237 Powell St, San Francisco, CA 94102, United States",
      "geometry": {
          "location": {
              "lat": 37.7869602,
              "lng": -122.4084262
          },
          "viewport": {
              "northeast": {
                  "lat": 37.7883255302915,
                  "lng": -122.4069459697085
              },
              "southwest": {
                  "lat": 37.7856275697085,
                  "lng": -122.4096439302915
              }
          }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
      "id": "c710e10c9216b3bb1573e80fbf3708edbf1fd800",
      "name": "Burger House",
      "opening_hours": {
          "open_now": true,
          "weekday_text": []
      },
      "photos": [
          {
              "height": 3024,
              "html_attributions": [
                  "<a href=\"https://maps.google.com/maps/contrib/111659259334448968849/photos\">Jonathan</a>"
              ],
              "photo_reference": "CmRaAAAAFy57E8Vl9AiIBLkEfZZh9TDkDBtAXSwVLe6vA7B4K6Th_1BtIR5NrHckiZ6O_ycUKlPQBkVs-GGj-jujc1PRPgwvZUdiYSdZSs9JqO-GhAqZAXn_dzBfoaRV4UG_lh5iEhDvrYZUClFamnrL3N_1XaSSGhTLe6JSUbfJwX4EhjnK1tQUXyKk0A",
              "width": 4032
          }
      ],
      "place_id": "ChIJFR6rI4-AhYAR7C9RLHJ4TwI",
      "rating": 4,
      "reference": "CmRRAAAAtbfIm36h3ktpUX3OadNrkZ1_6Fg1oDgS6v4ySGwGa21xFIy45yveLxOPoD9fhb7nYKfUk8Kn4EG8tEQQcFAtRcvHBBgdkE3TAQhBwKQFy_4BoEyluNhQ-FJU9INPudnSEhCSt5TRSy2vKWWx0aiFlNCmGhSTaTr4t-tAkD6ynSZahUN0JR_ujw",
      "types": [
          "restaurant",
          "food",
          "point_of_interest",
          "establishment"
      ]
  },
  {
      "formatted_address": "6, 251 Geary St, San Francisco, CA 94102, United States",
      "geometry": {
          "location": {
              "lat": 37.7872996,
              "lng": -122.4074353
          },
          "viewport": {
              "northeast": {
                  "lat": 37.78864858029149,
                  "lng": -122.4060863197085
              },
              "southwest": {
                  "lat": 37.7859506197085,
                  "lng": -122.4087842802915
              }
          }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
      "id": "36f4b2cea0e7359f9b5111e33d6b4e3125ff9fd1",
      "name": "Burger Bar",
      "opening_hours": {
          "open_now": true,
          "weekday_text": []
      },
      "photos": [
          {
              "height": 1365,
              "html_attributions": [
                  "<a href=\"https://maps.google.com/maps/contrib/104111246635874032234/photos\">ZAGAT</a>"
              ],
              "photo_reference": "CmRaAAAAYXHFbjyPOQX7EC0DvgG1OcwTfsUcleGUUj3ePHG7fE_kci0QB7xRXC1ITaboTOoGmKGPI_xfyU3LJHQWZ8Gf_XlcC5hkMift1t752nizfM6tyHYAGfIPFEY-M9fpNIjUEhDDsv_sMFNmSEedJ_6r-dmqGhTmHieraSbkq8p3XeXW4p-uD0K0Fw",
              "width": 2048
          }
      ],
      "place_id": "ChIJJQ1ZKY-AhYARKCrOAKx7EZA",
      "price_level": 2,
      "rating": 3.4,
      "reference": "CmRSAAAAyelI4UrHBa1OESBRu69d8-WgYZ4UMAG0e3pgHMLlFGk6CZ75QXNgxJYho86TmHWqjikKtwF_isSu7hfe444VvwNwdNqfufLzC6NBkVSOapKLflg5rmNUH42oQ49l9_fAEhDrPpsh6ZAn3LAAwJaO-6whGhQ1AMa3pgZ0ha01TehCNumJse0tSg",
      "types": [
          "restaurant",
          "food",
          "point_of_interest",
          "establishment"
      ]
  },
  {
      "formatted_address": "1428 Polk St, San Francisco, CA 94109, United States",
      "geometry": {
          "location": {
              "lat": 37.7900772,
              "lng": -122.4202211
          },
          "viewport": {
              "northeast": {
                  "lat": 37.79140358029149,
                  "lng": -122.4190542697085
              },
              "southwest": {
                  "lat": 37.78870561970849,
                  "lng": -122.4217522302915
              }
          }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
      "id": "ccf29fd84816a1f6853725860ad2efa7381f086e",
      "name": "Dijon Burger",
      "opening_hours": {
          "open_now": true,
          "weekday_text": []
      },
      "photos": [
          {
              "height": 3024,
              "html_attributions": [
                  "<a href=\"https://maps.google.com/maps/contrib/109271458438056675547/photos\">Martin Minkus</a>"
              ],
              "photo_reference": "CmRaAAAAoJp0aWge_lS4XM1V2kLh9YAgzMIlUkXG1uQsTi3WCRvZqHMpHG9dsBs86RK1w9r3pWMlkqPgL0NbSbJpfjjbbF5-zyE6WZryGw4BX8EcPMYctT5F2XnuZzMn955r4nHDEhDWozay6oWPvGFt0-EBGUyLGhS0gM-k8eeBzAOvVYBRyl5v5FvAgQ",
              "width": 4032
          }
      ],
      "place_id": "ChIJxe4ZxJSAhYARpypolJapWTM",
      "price_level": 2,
      "rating": 3.9,
      "reference": "CmRRAAAAG-5HKz36n78oHgZG8sywNo1zsf0nbgGWGNLPqpNPS2bHTn3Hi_3IwrBIB9tzTHNTuwjnWp9PmSfwoVed6xuAKgl066o4dsbuiPF6zsGyVddYwj2khBxFaK6Z7aLBnTnMEhBc8eDK7PsZClR0LmFMv37EGhTVqE8UPwhuJsJ7NEQYWpDqK2qNFQ",
      "types": [
          "restaurant",
          "food",
          "point_of_interest",
          "establishment"
      ]
  },
  {
      "formatted_address": "807 Valencia St, San Francisco, CA 94110, United States",
      "geometry": {
          "location": {
              "lat": 37.75990280000001,
              "lng": -122.4212954
          },
          "viewport": {
              "northeast": {
                  "lat": 37.76124788029151,
                  "lng": -122.4200129697085
              },
              "southwest": {
                  "lat": 37.75854991970851,
                  "lng": -122.4227109302915
              }
          }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
      "id": "c53a18402f528d1b067dbb93983ffc9f625eb0a6",
      "name": "Burger Joint",
      "opening_hours": {
          "open_now": true,
          "weekday_text": []
      },
      "photos": [
          {
              "height": 2048,
              "html_attributions": [
                  "<a href=\"https://maps.google.com/maps/contrib/109205144679654268249/photos\">Amy Higgins</a>"
              ],
              "photo_reference": "CmRaAAAA6SjuwxgcTxdja7fgKRAQGMTuyo5723SW2NeLk7hPLThH0itakwah1XLiuLVPIrqeiWUkucuImQ42paBQhvuYD58lRa362t9eijU2L7FQLcpoOpso8C3gAEhhBDNdaXCSEhB1AvzbcSsi6xiKPG42qJARGhQJXPshAy2rPIZIE81zi1JUCfICkw",
              "width": 1536
          }
      ],
      "place_id": "ChIJqSv0AT1-j4AR8uV92VqIzU8",
      "price_level": 1,
      "rating": 3.7,
      "reference": "CmRRAAAAXNtGqGc50X8-DCojtq6mO8QhbM7mWlNjEvmQCjdkH3AyM_5Lm_gOcF4ZZsjyVGa6AU087yQmADbne_Sz2Fh1QT7-azOcdX-ngxsszSDTrlw4e93bnwKAA73ql_qO6MBZEhD4e6g6DbOlX7NPy2toZ-8rGhSj6brATw-Wck-Ya8DD67gTSgcEoA",
      "types": [
          "restaurant",
          "food",
          "point_of_interest",
          "establishment"
      ]
  },
  {
      "formatted_address": "783 Mission St, San Francisco, CA 94103, United States",
      "geometry": {
          "location": {
              "lat": 37.7848331,
              "lng": -122.4035458
          },
          "viewport": {
              "northeast": {
                  "lat": 37.7862348302915,
                  "lng": -122.4022387197085
              },
              "southwest": {
                  "lat": 37.7835368697085,
                  "lng": -122.4049366802915
              }
          }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
      "id": "3504db0f5c6ba7792691c7d4a6fe838b62c062e2",
      "name": "Super Duper Burgers",
      "opening_hours": {
          "open_now": true,
          "weekday_text": []
      },
      "photos": [
          {
              "height": 345,
              "html_attributions": [
                  "<a href=\"https://maps.google.com/maps/contrib/108972208690648608408/photos\">Super Duper Burgers</a>"
              ],
              "photo_reference": "CmRaAAAApGUya1eqski6ddl8WaMe6sW94KylRmtpwC_j5i7eGNpMBMhGPX-iNHIN2NeU_7VU-Tndz3sgcJ5-OVqjHDfdC3JHTyM-9qBIO8M9wxTAfNPpP2n61IMNMv13LPlZWooyEhAkCFWHggXiVY87pZygmvSmGhT9iwpByTxXhdzaeGs5LYrczL9w9A",
              "width": 620
          }
      ],
      "place_id": "ChIJ19UEuoeAhYARhJZP3hwsoS4",
      "price_level": 1,
      "rating": 4.4,
      "reference": "CmRRAAAAbI4AwM0YoXyzTBn2hJbN778OEr-3yYKwEFpfHHqGtD4uK7baKPNTfqXUej-TZsURorYFTsnLJNR_taRi0g6h-Mtk84rv9STOuvrj1nBYoyfNzPgaGtWg-YKLz3WhanKREhAOYsSR4O_cZPIKXL_FwIazGhS8XdQLiJZaX_06VK-GbBDUhGYwQA",
      "types": [
          "restaurant",
          "food",
          "point_of_interest",
          "establishment"
      ]
  },
  {
      "formatted_address": "721 Market St, San Francisco, CA 94103, United States",
      "geometry": {
          "location": {
              "lat": 37.786957,
              "lng": -122.404029
          },
          "viewport": {
              "northeast": {
                  "lat": 37.7883705302915,
                  "lng": -122.4027609197085
              },
              "southwest": {
                  "lat": 37.7856725697085,
                  "lng": -122.4054588802915
              }
          }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
      "id": "a46ea2dc78f3248b98b569711475bf9dccdd91c5",
      "name": "Super Duper Burgers",
      "opening_hours": {
          "open_now": true,
          "weekday_text": []
      },
      "photos": [
          {
              "height": 345,
              "html_attributions": [
                  "<a href=\"https://maps.google.com/maps/contrib/111878725292575130096/photos\">Super Duper Burgers</a>"
              ],
              "photo_reference": "CmRaAAAAUXEe8xVb1bTjcP0_yEr571pBoztrk_DKACjmYGJRYrp6KhHEkfVVBra006BtJww6s0hrS2zgptfTShMIimUZdg-pYbVPr2sNiCoIvRD8K4sW40arKCS_k3d4d3k0AF7qEhDs6l4lwZF8JZX1pY7ErtZQGhTv5UXRuD_GL9e8x7PuCBeUKoqxmQ",
              "width": 620
          }
      ],
      "place_id": "ChIJLVgtY4iAhYARoO_UxqNv5Bw",
      "price_level": 1,
      "rating": 4.4,
      "reference": "CmRRAAAAeCUIZV1MLwC5Pb5fmbnVhrU1dzhpPbcLRhOJNVukGZ0cWO7eOC4Z003mihvAQ0r4RsNb7ZIWLru0q9yEsDYiDQ56qoNAgtDDtQwibmdXFW9U6_Ht0YdtHs6OwZFzLXJAEhDekHjNE6VHu9szs683v7uBGhQQl0J34-U9F1eIzTiCi67D5jHTGA",
      "types": [
          "restaurant",
          "food",
          "point_of_interest",
          "establishment"
      ]
  },
  {
      "formatted_address": "1923 Fillmore St, San Francisco, CA 94115, United States",
      "geometry": {
          "location": {
              "lat": 37.7877018,
              "lng": -122.4337081
          },
          "viewport": {
              "northeast": {
                  "lat": 37.78905633029149,
                  "lng": -122.4323151197085
              },
              "southwest": {
                  "lat": 37.78635836970849,
                  "lng": -122.4350130802915
              }
          }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
      "id": "96c4288669589249ea86305fd0d4d106f191238f",
      "name": "Roam Artisan Burgers",
      "opening_hours": {
          "open_now": true,
          "weekday_text": []
      },
      "photos": [
          {
              "height": 2268,
              "html_attributions": [
                  "<a href=\"https://maps.google.com/maps/contrib/103666074851791940552/photos\">Rebecca Reizner</a>"
              ],
              "photo_reference": "CmRaAAAAEKT_Yfy2q6zbvJPcj82WoEck0fGFL9rF0NkqZlDGrRFw2xVWtS0fOR72ccse_9GnP0YPrDTdTccYwduN9X0nd9P2fNdGw06YlXxzZYadUpw2gA6oH69sbi3EKBoeNrrkEhD16X12_FWkPqVqwKOq6ocAGhRT_uaFD0dj_CSLOmnduSNcWCIrRw",
              "width": 3024
          }
      ],
      "place_id": "ChIJ8aZslMeAhYARk2BJNvkVPyc",
      "price_level": 1,
      "rating": 4.5,
      "reference": "CmRRAAAAt7xt60YrdglLAqf2oI9zmF9dJ7dD5q_aS8c_nUQ-5w1H8Uy380RJhKupF7P8EzRvmTJwOZ6aJwOEGEBbrXUOJl5XEX5Lg2HcgqltxLos8eFFIiEJb68_RzhVqCSwaO66EhA0xdcfcjEzT2S8f6a4Y8VvGhSQQScWwDdniABdQaMxYZIhtNp_-w",
      "types": [
          "restaurant",
          "food",
          "point_of_interest",
          "establishment"
      ]
  },
  {
      "formatted_address": "242 King St, San Francisco, CA 94107, United States",
      "geometry": {
          "location": {
              "lat": 37.7775846,
              "lng": -122.3929775
          },
          "viewport": {
              "northeast": {
                  "lat": 37.77887563029149,
                  "lng": -122.3915549697085
              },
              "southwest": {
                  "lat": 37.7761776697085,
                  "lng": -122.3942529302915
              }
          }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
      "id": "1c9222f8ec41a84a8a31fc0216231cac80704331",
      "name": "Umami Burger Soma",
      "opening_hours": {
          "open_now": true,
          "weekday_text": []
      },
      "photos": [
          {
              "height": 3036,
              "html_attributions": [
                  "<a href=\"https://maps.google.com/maps/contrib/102091407454651158797/photos\">Alexander Cusworth</a>"
              ],
              "photo_reference": "CmRaAAAAPQ5frw8hWX0LvDnszPkUloszKJ6yWgOIAs2ooQGf3eGIwrH5C_PeRNwnQFwyPp1OEF4W067CS7ZV2yUV__QryzOVy6_oV2IkLB0Mno6zBezAcAPZW5Ows5VGqTDYxN1JEhArmwG6a0D-MgPsrBZrVGz8GhTzZOP3ICgZ4-LV7tbRrFMq7U9I2w",
              "width": 4048
          }
      ],
      "place_id": "ChIJk7RqAtd_j4ARI-eYtG2TIn0",
      "price_level": 1,
      "rating": 3.8,
      "reference": "CmRRAAAA7mjSrkDYKqS0k4gH5fFIDQDGu0NsUoirBG-j6xUtjWuPwX3462_jpm2enTxTeRwsTJurZ317E6-l-p8nuqW0IUgCOpKJICH4ixQIHS7sErWXuCLMaco0VyjT3jVMAM3lEhBkz8EYyaehLom2xEi2p8ywGhQ47vNgDbQFXsPXvPG9kyDeC0uoWw",
      "types": [
          "bar",
          "restaurant",
          "food",
          "point_of_interest",
          "establishment"
      ]
  },
  {
      "formatted_address": "346 Kearny St, San Francisco, CA 94108, United States",
      "geometry": {
          "location": {
              "lat": 37.7914591,
              "lng": -122.4040447
          },
          "viewport": {
              "northeast": {
                  "lat": 37.79279813029149,
                  "lng": -122.4027781197085
              },
              "southwest": {
                  "lat": 37.7901001697085,
                  "lng": -122.4054760802915
              }
          }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
      "id": "853b2fec77e6a8ea3d9cbb679378cf6aec958f8b",
      "name": "Super Duper Burgers",
      "opening_hours": {
          "open_now": true,
          "weekday_text": []
      },
      "photos": [
          {
              "height": 1365,
              "html_attributions": [
                  "<a href=\"https://maps.google.com/maps/contrib/115117318510293584866/photos\">Super Duper Burgers</a>"
              ],
              "photo_reference": "CmRaAAAAEL-OUyMt3V-ls_Q262syVTJ8LSYDU0CL3A6eJzTF_KBT9A_jt7XOdLXKna_pvyB2FIJbqQ2cHg3bxumv4b7agyQ83zUJOnHJ9FzULE_WhUknoxMWh6f5hbuCFEkWmk6cEhB-DSW4ZMpYV6oIkXlAjW-vGhRiVz8wG6lj4VE_4Hd_m5Lr5SP7tQ",
              "width": 2048
          }
      ],
      "place_id": "ChIJmeJyLIqAhYARv3zg0AC0jaA",
      "price_level": 1,
      "rating": 4.5,
      "reference": "CmRSAAAAgJeF236OoVRrRO2tMszFlUeLvSDA10dp-OoEw53kuWgQZo6GIBWQTmNxo1OwFHv_ItLsjh6af3aa-fXYQ3ArXizrGafju3p2qeY65kacj-7BUWIaRmWY-bk1m8a1PyRSEhBc6wI_49iinm8ss9hoJ8UAGhS0LgvQAJbzL7OiE2XdPsYNcH02Yg",
      "types": [
          "restaurant",
          "food",
          "point_of_interest",
          "establishment"
      ]
  },
  {
      "formatted_address": "3392 24th St, San Francisco, CA 94110, United States",
      "geometry": {
          "location": {
              "lat": 37.752222,
              "lng": -122.4203757
          },
          "viewport": {
              "northeast": {
                  "lat": 37.75352833029149,
                  "lng": -122.4190232197085
              },
              "southwest": {
                  "lat": 37.7508303697085,
                  "lng": -122.4217211802915
              }
          }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
      "id": "12a02679cad9f752427222b815450a6167231914",
      "name": "Big Mouth Burgers",
      "opening_hours": {
          "open_now": true,
          "weekday_text": []
      },
      "photos": [
          {
              "height": 3024,
              "html_attributions": [
                  "<a href=\"https://maps.google.com/maps/contrib/107517663419261362139/photos\">Joe Bob F.</a>"
              ],
              "photo_reference": "CmRaAAAAEZ9oEY71ydRQklFNbp6dLPOSa-p2-xv5oLMV49z75fC_xekIMjiUXmb0fQOCurBUz0B8gLBIzI_mVJQVsPfsbu4ilvZSQyt7Hy4Nk8Xybg3SbKksJ5lURkboETCg4V2hEhBAZmVNvCuB0VjGJMyns7SAGhTZA-BeKyE7nB3AjKMtEsMVoaSQeQ",
              "width": 4032
          }
      ],
      "place_id": "ChIJdaafmkB-j4ARr10033hiElY",
      "price_level": 2,
      "rating": 3.9,
      "reference": "CmRRAAAAWwbGxAqO1j0uH39qWr2PlULKYkMPzG5pVBJlvpM6XVKnC8GgX_yhlAXGy3OBNQwdvELIrWsbtOP3RcgGYjwFS4UplO7gnjV9IcR-M-KKJSSjLl5KXsgn3B7qhpRPrv_2EhDfAUKvCEuddKdh-GkTanylGhQDKlKnotJXboiygoPVG_KrrVUmjg",
      "types": [
          "restaurant",
          "food",
          "point_of_interest",
          "establishment"
      ]
  },
  {
      "formatted_address": "98 Mission St, San Francisco, CA 94105, United States",
      "geometry": {
          "location": {
              "lat": 37.7928305,
              "lng": -122.3941084
          },
          "viewport": {
              "northeast": {
                  "lat": 37.7941012802915,
                  "lng": -122.3926597697085
              },
              "southwest": {
                  "lat": 37.7914033197085,
                  "lng": -122.3953577302915
              }
          }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
      "id": "974142cdc8a9a79d5e384bb17c2a64b52514258c",
      "name": "Super Duper Burgers",
      "opening_hours": {
          "open_now": true,
          "weekday_text": []
      },
      "photos": [
          {
              "height": 345,
              "html_attributions": [
                  "<a href=\"https://maps.google.com/maps/contrib/113284296721158617041/photos\">Super Duper Burgers</a>"
              ],
              "photo_reference": "CmRaAAAAo21YR2ggATJzdDVa_eLw84_1vW5UeQvPt81UUUxuiZHe3Ha_pgKmaWYcKX11ko5QBj9443f-xYqFmoRXz-bonRk_0a1uj8vOzizVYC42tm5HeudXY4ssQI5LC_BuCqF4EhCKi4tffQeE4-HFvYhg_pzqGhScGpqC6lieXAMy6N1t5d7pr-NLuw",
              "width": 620
          }
      ],
      "place_id": "ChIJo58bQWSAhYAR4huClHKWNmc",
      "price_level": 1,
      "rating": 4.4,
      "reference": "CmRRAAAACJuY5NiyJGsIJ1eMa-EuuyTxxiEbx5VLEEO5J2cNcCym4c3uIGofKRwQclpxpKx6Is5bNAymhVKUCcsQidE7hqvb-MqOej-Ly1bA1ZwRMfr6CLMdKLrUXxbTzcoal6UGEhBTOvEcj1q_Vmoq0kWG2BajGhTZzJ1N0EREl796x3Ef--oEKBtP8A",
      "types": [
          "restaurant",
          "food",
          "point_of_interest",
          "establishment"
      ]
  },
  {
      "formatted_address": "1785 Union St, San Francisco, CA 94123, United States",
      "geometry": {
          "location": {
              "lat": 37.79786980000001,
              "lng": -122.4285801
          },
          "viewport": {
              "northeast": {
                  "lat": 37.7992733302915,
                  "lng": -122.4272429197085
              },
              "southwest": {
                  "lat": 37.7965753697085,
                  "lng": -122.4299408802915
              }
          }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
      "id": "7e33e73fb5152b45abaf0f5c6a0ce48beba24ee5",
      "name": "Roam Artisan Burgers",
      "opening_hours": {
          "open_now": true,
          "weekday_text": []
      },
      "photos": [
          {
              "height": 3973,
              "html_attributions": [
                  "<a href=\"https://maps.google.com/maps/contrib/104096781519454808462/photos\">Marc Becker</a>"
              ],
              "photo_reference": "CmRaAAAAagYu_m2E3L9-K0pkax_CSBGyR3HDZH9RM9p_WARcJEF4TffTgrjb-RTcV83YaGlUwc0cwSUadNKBF83pG2DpNq-IUVycK121GeZbOW7FCHlpUTzbuh9wxUFV9l6rN9ptEhCW0qPR68dqOhjbT4X2Hfy7GhTdCAexMSMGA0tFZ7zdgG-g9v8s_Q",
              "width": 5989
          }
      ],
      "place_id": "ChIJbzXMtNyAhYAR9bDkoIa3BaI",
      "price_level": 1,
      "rating": 4.4,
      "reference": "CmRSAAAARJeaKbqBL0cwTKb08zGDHhMDoMh8qYk6zmKrO7vZHhv3_c5yHxwrIkwUPqt1D3p8c1uaarzyj_0vLMK1AVyKEcfYufjz2zfoYSHpBFvLAG8mGgRyccvqnR4o06Hyi-vNEhAp1sIQGnARNkGqcY4TiipUGhSKoLEf80G6kvq3VXOH1ID8o2VYAA",
      "types": [
          "restaurant",
          "food",
          "point_of_interest",
          "establishment"
      ]
  },
  {
      "formatted_address": "2184 Union St, San Francisco, CA 94123, United States",
      "geometry": {
          "location": {
              "lat": 37.7972471,
              "lng": -122.4351631
          },
          "viewport": {
              "northeast": {
                  "lat": 37.7985450802915,
                  "lng": -122.4338035697085
              },
              "southwest": {
                  "lat": 37.7958471197085,
                  "lng": -122.4365015302915
              }
          }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
      "id": "142552f97d8ecbf4ce464cf34fbba4cbf43dbe87",
      "name": "Umami Burger Marina",
      "opening_hours": {
          "open_now": true,
          "weekday_text": []
      },
      "photos": [
          {
              "height": 2160,
              "html_attributions": [
                  "<a href=\"https://maps.google.com/maps/contrib/101049060214730823338/photos\">HAMA UT</a>"
              ],
              "photo_reference": "CmRaAAAAQOiiNDrZ7VWw6MULnlEOjDAbUONIZX0nPQU-j8Lz9PHCEBOYjQl2uygr2hry8rtxgjPH4ClmUiVelV-CV0S2cnLKjpBUkgGhNAXcXYLSaf_PNWz4dhse45iQDvPXF1LNEhDFimTdz8wJ4dgJOm3rVYoeGhQzKoUVJb8448Oj-wbZekH_jkqh-w",
              "width": 3840
          }
      ],
      "place_id": "ChIJ5R8Cn9qAhYAR97rbI4enNm8",
      "price_level": 2,
      "rating": 4.2,
      "reference": "CmRRAAAA5qlU5E2h-a6EE7nJWkqjN8iaDxQrQvG4BrdMceOCPPyPXo9eOWedrXbf2s9O4hfyLXdsw2TS0eb1Kz4smEtXoZlx3C7iguHWJlxrJiEgIsqK0Wcr1E5q-ahkp5YP5iZ1EhCWMfnyoJZGWrHDJPznUzKsGhQy0KByj_oufnFNZ-VbvezVvWTJ_g",
      "types": [
          "bar",
          "restaurant",
          "food",
          "point_of_interest",
          "establishment"
      ]
  },
  {
      "formatted_address": "21 Drumm St, San Francisco, CA 94111, United States",
      "geometry": {
          "location": {
              "lat": 37.7939825,
              "lng": -122.3967264
          },
          "viewport": {
              "northeast": {
                  "lat": 37.7953429302915,
                  "lng": -122.3952842697085
              },
              "southwest": {
                  "lat": 37.7926449697085,
                  "lng": -122.3979822302915
              }
          }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
      "id": "f8c7a326e0ae4062cdb78eefdc22c1e671c972f9",
      "name": "Ziggy's Burgers",
      "opening_hours": {
          "open_now": true,
          "weekday_text": []
      },
      "photos": [
          {
              "height": 3024,
              "html_attributions": [
                  "<a href=\"https://maps.google.com/maps/contrib/117588552233950426654/photos\">Anthony Rahayel</a>"
              ],
              "photo_reference": "CmRaAAAAk0a2dN2Msm8rnKV4ALlcuo-4itHI7lwTDv1eIIZU8HXdPH1buq7MWTpykXqH8mspXQLBSBvjgJ0jMIyPHBt1B_4TIZzy5EuwPOw4dT2nXrKrhxS7YtMKyeScPzR8qyReEhDxIAF3RDyV_z95-E0adHxyGhQOZ_2oasBuohXlHmgy3CYk6zxvGg",
              "width": 4032
          }
      ],
      "place_id": "ChIJ-XIpW2GAhYARSAi87-NegX0",
      "price_level": 2,
      "rating": 4.1,
      "reference": "CmRRAAAAsCDjcuD9peSf3ClUOshglYSVdArMAoVUd3dQcvTCXMdgs2W_m4gDspOAgqeRyN11bfrqXwcYgez16cefQ1kU2cKy84Q5U48D3wFw_wfspA4gvIJtkbIkp-nYba3L2gbWEhBiS-Ny-cuKUPfp0oEmbPzRGhQCfOkPRZAMT-pYW-VBioz1LTw2-w",
      "types": [
          "restaurant",
          "food",
          "point_of_interest",
          "establishment"
      ]
  }
]