import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { createGlobalStyle } from "styled-components";
import { Link, useLocation, BrowserRouter as Router } from "react-router-dom";
import { getdata, seteditor, putpage, getwebpage } from "../../appRedux/actions/Crud";
import "./demo.css";
function Web() {
    const [start, setstart] = useState(0);
    const [check, setcheck] = useState(0);
    const [pending, setpending] = useState(0);
    const [page,setpage] = useState(<div className={`show_output`}>
    </div>)
    const dispatch = useDispatch();
    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }
    let query = useQuery();
    const red_data = useSelector(({ crud }) => crud.seteditor);
    const geta_page = useSelector(({ crud }) => crud.get_webpage);
    const h_credentials = useSelector(({ crud }) => crud.h_credentials);

    useEffect(() => {
    if (geta_page.length > 0) {
        if(start == 0){
            if (geta_page.length > 0) {
                const Mystyles = createGlobalStyle`${geta_page[0].web_css}`
                setpage(
                    <div className={`show_output`}>
                        <Mystyles />
                        <div className={`demo`} dangerouslySetInnerHTML={createMarkup(geta_page[0].web_html)}>
                        </div>
                    </div>
                )
            }
            setstart(1)
        }
    }
    })
    useEffect(() => {
        let locations = window.location.pathname;
        if (locations.indexOf('web') != -1) {
            let nav_h = document.getElementsByClassName('navbar')[0].offsetHeight;
            let total_h = document.getElementsByClassName('blogpage')[0].offsetHeight - nav_h + 15;
            // let height_calc = total_h - nav_h - 22;
            if(document.getElementsByClassName('show_output').length > 0){
                document.getElementsByClassName('show_output')[0].style.height = `${total_h}px`
            }

        }
        else {
            document.getElementsByClassName('show_output')[0].style.flex = 'auto';
            // document.getElementsByClassName('show_output')[0].style.height = '100%';
        }
    })

    useEffect(() => {
if(pending == 0){
    dispatch(getwebpage(query.get("id")))
}
                setpending(1)
            
    })
    function createMarkup(drag) { return { __html: drag }; };
    return page

}
export default Web;