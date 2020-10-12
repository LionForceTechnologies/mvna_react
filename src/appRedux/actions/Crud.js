import axios from 'util/Api'
import {
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
  INIT_URL,
  SIGNOUT_USER_SUCCESS,
  USER_DATA,
  USER_TOKEN_SET
} from "../../constants/ActionTypes";
// axios.defaults.headers.common['Authorization'] = 11
// axios.defaults.headers.common['Authorization'] =  localStorage.getItem('token');
// axios.interceptors.response.eject(interceptor);

export const menuadd = (drag) => {

  return (dispatch) => {
    axios.post('http://astirs.com/admin/menu', {
      menu: drag.menu,
      place: drag.place,
      url: drag.url,
      serial: drag.serial,
      icon: drag.icon,
      parent_id: drag.parent_id
    }).then(({ res }) => {
      axios.get('http://astirs.com/admin/menu?items_per_page=&current_page_no=&search=&status_connection=1').then((res) => {
        dispatch({ type: 'menuadd', payload: res.data.data });
      })
    }).catch(function (error) {
      if (error.response) {
        alert(15)
      }
    });

  }
};
export const menuedit = (data) => {
  return (dispatch) => {
    axios.get(`http://astirs.com/admin/menu/${data}/edit`).then((res) => {
      console.log(res.data)
      dispatch({ type: 'menuedit', payload: res.data.data });
    }).catch(function (error) {
      // alert(aa.length)
    });
  }
};
export const checksubmenu = (data) => {
  return (dispatch) => {
    if (data == '') {
      dispatch({ type: 'checksubmenu', payload: '' });
    }
    else {

      axios.get(`http://astirs.com/admin/checkmenu?id=${data}`).then((res) => {
        if (res.data.total_count === 0) {
          dispatch({ type: 'checksubmenu', payload: 'false' });
        }
        else {
          dispatch({ type: 'checksubmenu', payload: 'true' });
        }
      }).catch(function (error) {

      });

    }


  }
};
export const menudelete = (data) => {
  return (dispatch) => {
    axios.get(`http://astirs.com/admin/menu/${data.id}/${data.status}`).then(({ res }) => {
      axios.get('http://astirs.com/admin/menu?items_per_page=&current_page_no=&search=&status_connection=1').then((res) => {
        dispatch({ type: 'menuadd', payload: res.data.data });
        dispatch({ type: 'menudeleteMessage', payload: 'success' });
      })
    }).catch(function (error) {
      dispatch({ type: 'menudeleteMessage', payload: 'failure' });
    });

  }
};
export const menuupdate = (drag) => {
  return (dispatch) => {
    axios.post('http://astirs.com/admin/menu', {
      menu: drag.menu,
      place: drag.place,
      url: drag.url,
      serial: drag.serial,
      icon: drag.icon,
      parent_id: `${drag.parent_id}`,
      id: drag.id
    }).then(({ res }) => {
      axios.get('http://astirs.com/admin/menu?items_per_page=&current_page_no=&search=&status_connection=1').then((res) => {
        dispatch({ type: 'menuadd', payload: res.data.data });
        dispatch({ type: 'menuedit', payload: '' });
      })
    }).catch(function (error) {
      // alert(aa.length)
    });

  }
};
export const getdata = () => {

  return (dispatch) => {
    axios.get('http://astirs.com/admin/menu?items_per_page=&current_page_no=&search=&status_connection=1').then((res) => {
      dispatch({ type: 'menuadd', payload: res.data.data });
    }).catch(function (error) {
      if (error.response) {
        if (error.response.status == 401) {
          dispatch({ type: FETCH_START });
          localStorage.removeItem("token");
          dispatch({ type: FETCH_SUCCESS });
          dispatch({ type: SIGNOUT_USER_SUCCESS });
        }
      }
    })
  }
};
export const submenuadd = (drag) => {
  return (dispatch) => {
    axios.post('http://astirs.com/admin/menu', {
      menu: drag.menu,
      place: drag.place,
      url: drag.url,
      serial: drag.serial,
      icon: drag.icon,
      parent_id: `${drag.parent_id}`
    }).then(({ res }) => {
      axios.get('http://astirs.com/admin/submenu?items_per_page=&current_page_no=&search=').then((res) => {
        dispatch({ type: 'submenuadd', payload: res.data.data });
      })
    }).catch(function (error) {
      // alert(aa.length)
    });

  }
};
export const submenupdate = (drag) => {
  return (dispatch) => {
    axios.post('http://astirs.com/admin/menu', {
      menu: drag.menu,
      place: drag.place,
      url: drag.url,
      serial: drag.serial,
      icon: drag.icon,
      parent_id: `${drag.parent_id}`,
      id: drag.id
    }).then(({ res }) => {
      axios.get('http://astirs.com/admin/submenu?items_per_page=&current_page_no=&search=').then((res) => {
        dispatch({ type: 'submenuadd', payload: res.data.data });
      })
    }).catch(function (error) {
      // alert(aa.length)
    });

  }
};

export const getsubmenu = () => {
  return (dispatch) => {
    axios.get('http://astirs.com/admin/submenu?items_per_page=&current_page_no=&search=').then((res) => {
      dispatch({ type: 'submenuadd', payload: res.data.data });
    })
  }
};
export const submenuedit = (data) => {
  return (dispatch) => {
    axios.get(`http://astirs.com/admin/menu/${data}/edit`).then((res) => {
      // console.log(res.data)
      dispatch({ type: 'submenuedit', payload: res.data.data });
    }).catch(function (error) {
    });
  }
};
export const submenudelete = (data) => {
  return (dispatch) => {
    axios.get(`http://astirs.com/admin/menu/${data.id}/${data.status}`).then(({ res }) => {
      axios.get('http://astirs.com/admin/submenu?items_per_page=&current_page_no=&search=').then((res) => {
        dispatch({ type: 'submenuadd', payload: res.data.data });
      })
      dispatch({ type: 'submenudeleteMessage', payload: 'success' })
    }).catch(function (error) {
      dispatch({ type: 'submenudeleteMessage', payload: 'failure' })
    });

  }
};
export const menudeleteMessage = (data) => {
  return {
    type: 'menudeleteMessage',
    payload: data

  }
};

export const clearsubmenu = (drag) => {
  return (dispatch) => {
    dispatch({ type: 'submenuedit', payload: '' });

  }
};
export const clearmenu = (drag) => {
  return (dispatch) => {
    dispatch({ type: 'menuedit', payload: '' });

  }
};
export const seteditor = (drag) => {
  return {
    type: 'seteditor',
    payload: drag

  }
};
export const putpage = (data) => {
  return (dispatch) => {
    dispatch({ type: 'setspinner', payload: '1' })
    axios.post('http://astirs.com/admin/final_content', data.havedata == 0 ? {
      "menu_id": data.id,
      "web_html": data.webHTML,
      "web_css": data.webCss,
      "slug": {},
      "mvna_html": data.webHTML,
      "mvna_css": data.gjs_css,
      "mvna_style": data.gjs_styles,
      "mvna_components": data.gjs_components,
      "mvna_assets": data.gjs_assets,
      // "status": 1,
    } : {
        "menu_id": data.id,
        "web_html": data.webHTML,
        "web_css": data.webCss,
        "slug": {},
        'id': data.havedata,
        "mvna_html": data.webHTML,
        "mvna_css": data.gjs_css,
        "mvna_style": data.gjs_styles,
        "mvna_components": data.gjs_components,
        "mvna_assets": data.gjs_assets,

      }, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    }).then((res) => {
      dispatch({ type: 'setspinner', payload: '0' })
      axios.get(`http://astirs.com/admin/final_content/${data.id}/edit`).then((res) => {
        dispatch({ type: 'getpage', payload: res.data })
      })
    }).catch(function (error) {
      dispatch({ type: 'setspinner', payload: '0' })
    });
  }
};
// export const putpage = (data) => {
//   return (dispatch) => {
//     axios.post('http://astirs.com/admin/custom_create',
//       data.havedata == 0 ? {
//         "menu_id": data.id,
//         "web_html": data.webHTML,
//         "web_css": data.webCss,
//         "slug": {},
//         // "status": 1,
//       } : {
//           "menu_id": data.id,
//           "web_html": data.webHTML,
//           "web_css": data.webCss,
//           "slug": {},
//           'id': data.havedata
//         }).then((res) => {
//           dispatch({ type: 'seteditor', payload: res.data.id })
//           axios.post('http://astirs.com/admin/custom_create',
//             {
//               'id': res.data.id,
//               "menu_id": res.data.menu_id,

//               "mvna_html": data.webHTML,
//               "mvna_css": data.gjs_css,
//               "mvna_style": data.gjs_styles,
//               // "mvna_components": data.gjs_components,
//               // "mvna_assets": data.gjs_assets,
//             }).then((res) => {

//               axios.post('http://astirs.com/admin/custom_create',
//                 {
//                   'id': res.data.id,
//                   "menu_id": res.data.menu_id,

//                   "mvna_components": data.gjs_components,
//                   // "mvna_assets": data.gjs_assets,
//                 }).then((res) => {
//                   axios.post('http://astirs.com/admin/custom_create',
//                     {
//                       'id': res.data.id,
//                       "menu_id": res.data.menu_id,

//                       // "mvna_components": data.gjs_components,
//                       "mvna_assets": data.gjs_assets,
//                     }).then((res) => {
//                       axios.get(`http://astirs.com/admin/final_content/${data.id}/edit`).then((res) => {
//                         dispatch({ type: 'getpage', payload: res.data })
//                       })

//                     })
//                 })

//             })
//         }).catch(function (error) {

//         });
//   }
// };
// http://astirs.com/admin/final_content/91/edit
// http://astirs.com/admin/final_content/${data}/edit
export const getpage = (data) => {
  return (dispatch) => {
    axios.get(`http://astirs.com/admin/final_content/${data}/edit`, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    }).then((res) => {
      // alert();
      // console.log(JSON.parse(res));
      if (res.data.length == 0) {
        dispatch({ type: 'seteditor', payload: '0' })
      }
      else {
        dispatch({ type: 'seteditor', payload: res.data[0].id })
        dispatch({ type: 'getpage', payload: res.data })
      }
    }).catch((error) => {

    })
  }
};

export const putrole = (data) => {
  return (dispatch) => {
    axios.post('http://astirs.com/admin/role',
      {
        "role": data.role,
      }
    ).then((res) => {
      axios.get('http://astirs.com/admin/role?items_per_page=&current_page_no=&search=&status_connection=1').then((res) => {
        dispatch({
          type: 'getrole',
          payload: res.data.data
        })
      }).catch(function (error) {

      });
    }).catch(function (error) {
    });

  }
};
export const updaterole = (data) => {
  return (dispatch) => {
    axios.post('http://astirs.com/admin/role',
      {
        "role": data.role,
        'id': data.id
      }
    ).then((res) => {
      axios.get('http://astirs.com/admin/role?items_per_page=&current_page_no=&search=&status_connection=1').then((res) => {
        dispatch({
          type: 'getrole',
          payload: res.data.data
        })
      }).catch(function (error) {

      });
    }).catch(function (error) {
    });

  }
};
export const clearrole = (drag) => {
  return (dispatch) => {
    dispatch({ type: 'roledit', payload: '' });

  }
};
export const getrole = (data) => {
  return (dispatch) => {
    axios.get('http://astirs.com/admin/role?items_per_page=&current_page_no=&search=&status_connection=1').then((res) => {
      dispatch({
        type: 'getrole',
        payload: res.data.data
      })
    }).catch(function (error) {

    });
  }
};
export const roleedit = (data) => {
  return (dispatch) => {
    axios.get(`http://astirs.com/admin/role/${data}/edit`).then((res) => {
      dispatch({
        type: 'roledit',
        payload: res.data
      })
    }).catch(function (error) {

    });
  }
};
export const roledelete = (data) => {
  console.log('sgsdfgfgdfg');
  console.log(data)
  return (dispatch) => {
    axios.get(`http://astirs.com/admin/role/${data.id}/${data.status}`).then((res) => {
      dispatch({
        type: 'deleted',
        payload: 'success'
      })
      axios.get('http://astirs.com/admin/role?items_per_page=&current_page_no=&search=&status_connection=1').then((res) => {
        dispatch({
          type: 'getrole',
          payload: res.data.data
        })
      }).catch(function (error) {

      });
    }).catch(function (error) {

    });
  }
};
export const deleted = (data) => {
  return (dispatch) => {
    dispatch({
      type: 'deleted',
      payload: ''
    })

  }
};
export const getwebmenu = (data) => {
  return (dispatch) => {
    axios.get('http://astirs.com/web_menu').then((res) => {
      dispatch({
        type: 'webmenu',
        payload: res.data.data
      })
    }).catch(function (error) {

    });

  }
};
// ********member creation**********
export const putmember = (data) => {
  return (dispatch) => {
    axios.post('http://astirs.com/admin/member', {
      "name": data.name,
      'text': data.text,
      'lat': data.lat,
      'lon': data.lon,
      'link': data.links,
      'icon': data.icon
    }).then((res) => {
      axios.get('http://astirs.com/admin/member?items_per_page=&current_page_no=&search=&status_connection=1').then((res) => {
        dispatch({
          type: 'getmember',
          payload: res.data.data
        })
      }).catch(function (error) {

      });
    }).catch(function (error) {

    });

  }
};
export const getmember = (data) => {
  return (dispatch) => {
    axios.get('http://astirs.com/admin/member?items_per_page=&current_page_no=&search=&status_connection=1').then((res) => {
      dispatch({
        type: 'getmember',
        payload: res.data.data
      })
    }).catch(function (error) {

    });
  }
};
export const updatemember = (data) => {
  return (dispatch) => {
    axios.post('http://astirs.com/admin/member', {
      "name": data.name,
      'text': data.text,
      'lat': data.lat,
      'lon': data.lon,
      'link': data.links,
      'id': data.id
    }).then((res) => {
      axios.get('http://astirs.com/admin/member?items_per_page=&current_page_no=&search=&status_connection=1').then((res) => {
        dispatch({
          type: 'getmember',
          payload: res.data.data
        })
      }).catch(function (error) {

      });
    }).catch(function (error) {

    });

  }
};
export const editmember = (data) => {
  return (dispatch) => {
    axios.get(`http://astirs.com/admin/member/${data}/edit`).then((res) => {
      dispatch({
        type: 'editmember',
        payload: res.data
      })
    }).catch(function (error) {

    });

  }
};
export const deletemember = (data) => {
  return (dispatch) => {
    axios.get(`http://astirs.com/admin/member/${data.id}/${data.status}`).then((res) => {
      dispatch({
        type: 'deletedmember',
        payload: 'success'
      })
      axios.get('http://astirs.com/admin/member?items_per_page=&current_page_no=&search=&status_connection=1').then((res) => {
        dispatch({
          type: 'getmember',
          payload: res.data.data
        })
      }).catch(function (error) {

      });


    }).catch(function (error) {

    });

  }
};
export const cleardeletemember = (data) => {
  return (dispatch) => {
    dispatch({
      type: 'deletedmember',
      payload: ''
    })

  }
};

// ********member creation**********


// ********user creation**********

export const putucreation = (data) => {
  return (dispatch) => {
    alert(data.name, data.email, data.contact, data.pass, data.role)
    axios.post('http://astirs.com/auth/register', {
      name: data.name,
      email: data.email,
      mobile_number: data.mobile_number,
      password: data.password,
      role_id: data.role_id,
    }).then((res) => {
      axios.get('http://astirs.com/admin/user?items_per_page=&current_page_no=&search=&status_connection=1').then((res) => {
        dispatch({
          type: 'getucreation',
          payload: res.data.data
        })
      }).catch(function (error) {

      });
    }).catch(function (error) {

    });

  }
};
export const getucreation = (data) => {
  return (dispatch) => {
    axios.get('http://astirs.com/admin/user?items_per_page=&current_page_no=&search=&status_connection=1').then((res) => {
      dispatch({
        type: 'getucreation',
        payload: res.data.data
      })
    }).catch(function (error) {

    });
  }
};
export const updateucreation = (data) => {
  return (dispatch) => {
    axios.post('http://astirs.com/auth/register', {
      name: data.name,
      email: data.email,
      mobile_number: data.mobile_number,
      password: data.password,
      role_id: data.role_id,
      'id': data.id
    }).then((res) => {
      axios.get('http://astirs.com/admin/user?items_per_page=&current_page_no=&search=&status_connection=1').then((res) => {
        dispatch({
          type: 'getucreation',
          payload: res.data.data
        })
      }).catch(function (error) {

      });
    }).catch(function (error) {

    });

  }
};
export const editucreation = (data) => {
  return (dispatch) => {
    axios.get(`http://astirs.com/admin/user/${data}/edit`).then((res) => {
      dispatch({
        type: 'editucreation',
        payload: res.data
      })
    }).catch(function (error) {

    });

  }
};
export const deleteucreation = (data) => {
  return (dispatch) => {
    axios.get(`http://astirs.com/admin/user/${data.id}/${data.status}`).then((res) => {
      dispatch({
        type: 'deleteducreation',
        payload: 'success'
      })
      axios.get('http://astirs.com/admin/user?items_per_page=&current_page_no=&search=&status_connection=1').then((res) => {
        dispatch({
          type: 'getucreation',
          payload: res.data.data
        })
      }).catch(function (error) {

      });


    }).catch(function (error) {

    });

  }
};
export const cleardeleteucreation = (data) => {
  return (dispatch) => {
    dispatch({
      type: 'deleteducreation',
      payload: ''
    })

  }
};

// ********user creation**********
// ********role permission**********

export const getpagepermission = (data) => {
  return (dispatch) => {
    axios.get('http://astirs.com/admin/final_content/custom').then((res) => {
      dispatch({
        type: 'pagepermission',
        payload: res.data.total_count
      })
    }).catch(function (error) {

    });

  }
};
export const getrolepermission = (data) => {
  return (dispatch) => {
    axios.get('http://astirs.com/admin/rolepermission?items_per_page=&current_page_no=&search=&status_connection=1').then((res) => {
      dispatch({
        type: 'getrolepermission',
        payload: res.data.data
      })
    }).catch(function (error) {

    });

  }
};
export const putpagepermission = (data) => {
  return (dispatch) => {
    axios.post('http://astirs.com/admin/rolepermission', {
      role_id: data.role_id,
      role_permission: data.role_permission

    }).then((res) => {


    }).catch(function (error) {


    });

  }
};
export const editrolepermission = (data) => {
  return (dispatch) => {
    axios.get(`http://astirs.com/admin/rolepermission/${data}/edit`).then((res) => {

      console.log('jkjfkgjkljkj874545456454564')
      if (res.data.data.length == 0) {
        dispatch({
          type: 'editrolepermission',
          payload: 'no data found'
        })
      } else {
        dispatch({
          type: 'editrolepermission',
          payload: res.data
        })
      }



    }).catch(function (error) {


    });

  }
};
export const updatepagepermission = (data) => {
  return (dispatch) => {
    axios.post(`http://astirs.com/admin/rolepermission`, {
      role_id: data.role_id,
      role_permission: data.role_permission,
      id: data.id
    }).then((res) => {

      axios.get('http://astirs.com/admin/rolepermission?items_per_page=&current_page_no=&search=&status_connection=1').then((res) => {
        dispatch({
          type: 'getrolepermission',
          payload: res.data.data
        })
      }).catch(function (error) {

      });


    }).catch(function (error) {


    });

  }
};
export const deletepermission = (data) => {
  return (dispatch) => {
    axios.get(`http://astirs.com/admin/rolepermission/${data.id}/${data.status}`).then((res) => {

      axios.get('http://astirs.com/admin/rolepermission/?items_per_page=&current_page_no=&search=&status_connection=1').then((res) => {
        dispatch({
          type: 'getrolepermission',
          payload: res.data.data
        })
      }).catch(function (error) {

      });
      dispatch({
        type: 'deletepermission',
        payload: 'success'
      })

    }).catch(function (error) {


    });

  }
};
export const cleardeleterolepermission = (data) => {
  return (dispatch) => {
    dispatch({
      type: 'deletepermission',
      payload: ''
    })

  }
};

// ********role permission**********

// ********getwebpage***************
export const getwebpage = (data) => {
  
  let header = {
    headers: {
      "Access-Control-Allow-Origin": "*",        
    }
  }
  // console.log('checking')
  // localStorage.removeItem('hcredentials')
  // JSON.parse(localStorage.getItem('hcredentials'))
  // if(JSON.parse(localStorage.getItem('hcredentials')) != null){
  //   header = {
  //     headers: {
  //       "Access-Control-Allow-Origin": "*",        
  //       role_id : JSON.parse(localStorage.getItem('hcredentials')).role_id,
  //       userlog_id : JSON.parse(localStorage.getItem('hcredentials')).role_id
  //     }
  //   } 
  // }
  // console.log()
  return (dispatch) => {
    axios.get(`http://astirs.com/admin/final_content/${data}/edit`, JSON.parse(localStorage.getItem('hcredentials')) != null ?{
      headers: {
        "Access-Control-Allow-Origin": "*",        
        role_id : JSON.parse(localStorage.getItem('hcredentials')).role_id,
        userlog_id : JSON.parse(localStorage.getItem('hcredentials')).role_id
      }
    } : {
      headers: {
        "Access-Control-Allow-Origin": "*",        
      }
    } ).then((res) => {
      // alert();
      // console.log(JSON.parse(res));
      if (res.data.length == 0) {
        dispatch({ type: 'seteditor', payload: '0' })
      }
      else {
        dispatch({ type: 'seteditor', payload: res.data[0].id })
        dispatch({ type: 'get_webpage', payload: res.data })
      }
    }).catch((error) => {

    })
  }
};

// ********getwebpage***************
// ********getfooter****************
export const getfooter = (data) => {
  return (dispatch) => {
    axios.get('http://astirs.com/admin/footer?items_per_page=10&current_page_no=1&search=&status_connection=1').then((res) => {
      dispatch({
        type: 'getfooter',
        payload: res.data
      })
    }).catch(function (error) {

    });

  }
};
export const putfooter = (data) => {
  return (dispatch) => {
    axios.post('http://astirs.com/admin/footer',{
      addressline1 : data.addressline1,
      addressline2 : data.addressline2,
      mobile : data.mobile,
      id : 1
    }).then((res) => {
      axios.get('http://astirs.com/admin/footer?items_per_page=&current_page_no=&search=&status_connection=1').then((res) => {
        dispatch({
          type: 'getfooter',
          payload: res.data
        })
        dispatch({
          type : 'update',
          payload : 1
        })
      }).catch(function (error) {
  
      });
    }).catch(function (error) {

    });

  }
};
export const clearupdate = (data) => {
  return (dispatch) => {
dispatch({
  type : 'update',
  payload : 0
})

  }
};
// ********getfooter****************


