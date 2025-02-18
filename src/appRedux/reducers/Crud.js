const INIT_STATE = {
data : [],
subdata : [],
menu_id : '',
submenu_id : '',
menudeleteMessage : '',
submenudeleteMessage : '',
checksubmenu : '',
seteditor : '',
getpage : '',
getrole : '',
role_id : '',
deleted : '',
spinner : '0',
webmenu : [],
member : [],
memberid : '',
deletedmember : '',
ucreationid : '',
ucreation : [],
deleteducreation : '',
pagepermission : [],
rolepermissionid : '',
rolepermission : [] ,
deletepermissionid : '',
get_webpage : '',
h_credentials : '',
startlogin : 'end',
logsuccess : '',
getfooterdata : '',
update : 0,
  };

export default (state = INIT_STATE, action) => {
    switch (action.type) {
      case 'menuadd': {
        return {
          ...state,
         data: action.payload,
        }
      }
      case 'menuedit': {
        return {
          ...state,
          menu_id: action.payload
        }
      }
      case 'submenuadd': {
        return {
          ...state,
          subdata: action.payload
        }
      }
      case 'submenuedit': {
        return {
          ...state,
          submenu_id : action.payload
        }
      }
      case 'menudeleteMessage': {
        return {
          ...state,
          menudeleteMessage : action.payload
        }
      }
      case 'submenudeleteMessage': {
        return {
          ...state,
          submenudeleteMessage : action.payload
        }
      }
      case 'checksubmenu': {
        return {
          ...state,
          checksubmenu : action.payload
        }
      }
      case 'seteditor' : {
        return {
          ...state,
          seteditor : action.payload
        }
      }
      case 'getpage' : {
        return {
          ...state,
          getpage : action.payload
        }
      }
      case 'getrole' : {
        return {
          ...state,
          getrole : action.payload
        }
      }
      case 'roledit' : {
        return {
          ...state,
          role_id : action.payload
        }
      }
      case 'deleted' : {
        return {
          ...state,
          deleted : action.payload
        }
      }
      case 'setspinner' : {
        return {
          ...state,
          spinner : action.payload
        }
      }
      case 'webmenu' : {
        return {
          ...state,
          webmenu : action.payload
        }
      }
      case 'getmember' : {
        return {
          ...state,
          member : action.payload
        }
      }
      case 'editmember' : {
        return {
          ...state,
          memberid : action.payload
        }
      }
      case 'deletedmember' : {
        return {
          ...state,
          deletedmember : action.payload
        }
      }
      case 'editucreation' : {
        return {
          ...state,
          ucreationid : action.payload
        }
      }
      case 'getucreation' : {
        return {
          ...state,
          ucreation : action.payload
        }
      }
      case 'deleteducreation' : {
        return {
          ...state,
          deleteducreation : action.payload
        }
      }
      case 'pagepermission' : {
        return {
          ...state,
          pagepermission : action.payload
        }
      }
      case 'editrolepermission' : {
        return {
          ...state,
          rolepermissionid : action.payload
        }
      }
      case 'getrolepermission' : {
        return {
          ...state,
          rolepermission : action.payload
        }
      }
      case 'deletepermission' : {
        return {
          ...state,
          deletepermissionid : action.payload
        }
      }
      case 'get_webpage' : {
        return {
          ...state,
          get_webpage : action.payload
        }
      }
      case 'hcredentials' : {
        return {
          ...state,
          h_credentials : action.payload
        }
      }
      case 'startlogin' : {
        return {
          ...state,
          startlogin : action.payload
        }
      }
      case 'logsuccess' : {
        return {
          ...state,
          logsuccess : action.payload
        }
      }
      case 'getfooter' : {
        return {
          ...state,
          getfooterdata : action.payload
        }
      }
      case 'update' : {
        return {
          ...state,
          update : action.payload
        }
      }
      default:
        return state;
    }
  }
  