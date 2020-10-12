import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Card, Divider, Table, Col, Row, Button, Checkbox, Form, Input, Select, Upload, message } from "antd";
import axios from 'axios';
import { editmember, clearrole, updaterole, roledelete, deleted, putmember, getmember, updatemember, cleardeletemember, deletemember } from "../../appRedux/actions/Crud";
import SweetAlert from "react-bootstrap-sweetalert";
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

const Member = (props) => {
    const memberid = useSelector(({ crud }) => crud.memberid);
    const ifdeleted = useSelector(({ crud }) => crud.deletedmember);
    const member = useSelector(({ crud }) => crud.member);
    const [role, setrole] = useState('');
    const [imge, setimge] = useState('');
    const [loading, setloading] = useState(false);
    const [imageUrl, setimageUrl] = useState('');
    const [edit, setedit] = useState(0);
    const [stop, setstop] = useState(0);
    const [custom, setcustom] = useState(false);
    const [name, setname] = useState(false);
    const [text, settext] = useState(false);
    const [links, setlinks] = useState(false);
    const [lat, setlat] = useState(false);
    const [lon, setlon] = useState(false);
    const [deleteid, setdeleteid] = useState(false);
    const red_data = useSelector(({ crud }) => crud.getrole);
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const [deletesuccess, setdeletesuccess] = useState(false);
    const [deletes, setdeletes] = useState(0);
    const { Option } = Select;
    useEffect(() => {
        if (stop === 0) {
            dispatch(getmember())
        }
        setstop(1)
    })
    useEffect(() => {
        if (memberid !== '') {
            if (edit !== 0) {
                // console.log(memberid)
                form.setFieldsValue({
                    uname: memberid.data[0].name == 'undefined' ? '' : memberid.data[0].name,
                    lat: memberid.data[0].lat == 'undefined' ? '' : memberid.data[0].lat,
                    lon: memberid.data[0].lon == 'undefined' ? '' : memberid.data[0].lon,
                    text: memberid.data[0].text == 'undefined' ? '' : memberid.data[0].text,
                    link: memberid.data[0].link == 'undefined' ? '' : memberid.data[0].link,
                })
                setname(memberid.data[0].name)
                setlat(memberid.data[0].lat)
                setlon(memberid.data[0].lon)
                settext(memberid.data[0].text)
                setlinks(memberid.data[0].link)
                setedit(0)
            }
        }
    })
    // useEffect(()=>{
    //   if(deleteid != '' ){
    //     setcustom(true)
    //   }
    // })
    useEffect(() => {
        if (ifdeleted == 'success') {
            if (deletes != 0) {
                setdeletesuccess(true)
                dispatch(cleardeletemember(''))
                setdeletes(1)
            }
        }
    })
    function Edit(e) {
        dispatch(editmember(e.target.getAttribute('data-id')))
        setedit(1)
    }
    function Delete(e) {
        setdeleteid(e.target.getAttribute('data-id'))
        setcustom(true)
    }
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    const onFinish = values => {
        if (memberid == '') {
            dispatch(putmember(
                {
                    "name": name,
                    'text': text,
                    'lat': lat,
                    'lon': lon,
                    'link': links,
                    // 'icon' : imge
                }
            ))
        }
        else if (memberid != '') {
            dispatch(updatemember(
                {
                    "name": name,
                    'text': text,
                    'lat': lat,
                    'lon': lon,
                    'link': links,
                    'id': memberid.data[0].id
                }
            ))
            setedit(0);
            dispatch(clearrole(''))

        }
        form.resetFields();
    };
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Text',
            dataIndex: 'text',
            key: 'text',
        },
        {
            title: 'Lattitude',
            dataIndex: 'lat',
            key: 'lat',
        },
        {
            title: 'Link',
            dataIndex: 'link',
            key: 'link',
        },
        {
            title: 'Longitude',
            dataIndex: 'long',
            key: 'long',
        },
        {
            title: 'Icon',
            dataIndex: 'icon',
            key: 'icon',
        },

        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
        }
    ];
    let data = [];
    // console.log('getroles')
    console.log(member)
    if (member.length > 0) {
        data = member.map((item, i) => {
            return {
                name: item.name,
                icon: item.icon,
                text: item.text,
                link: item.link,
                lat: item.lat,
                lon: item.lon,
                action: (<><div style={{ display: 'flex' }}><i style={{ marginRight: '7px', height: '15px' }} onClick={Edit} data-id={item.id} className="icon icon-edit" /><i data-id={item.id} onClick={Delete} style={{ height: '15px' }} className="icon icon-trash" /></div></>),
                index: item.id,
                key: item.id
            }
        });
    }

    function deleteconfirm() {
        setcustom(false)
        dispatch(deletemember({ id: deleteid, status: 2 }))
        setdeletes(1)
    }
    function deletecancel() {
        setcustom(false)
    }
    function deletestatus() {
        setdeletesuccess(false)
    }
    function getBase64(img, callback) {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }
    function handleChange ( info){
        setimge(info)
        if (info.file.status === 'uploading') {
            setloading(true);
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            console.log(info.file.originFileObj)
            getBase64(info.file.originFileObj, imageUrl =>
{                setimageUrl(imageUrl)
                setloading(false)
                // this.setState({
                //     imageUrl,
                //     ,
                // }),
            }
            );
        }
    };
    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );
    return (
        <div>
            <Form
                form={form}
                initialValues={{ remember: true }}
                name="usercreation"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                className="gx-signin-form gx-form-row0">
                <Row>
                    <Col xl={8} lg={8} md={8} sm={24} xs={24}>
                        <Form.Item
                            rules={[{ required: true, message: 'User Name is required' }]} name="uname">
                            <Input value={name} onChange={(e) => {
                                setname(e.target.value)
                                console.log(red_data)
                            }} placeholder="Name" />
                        </Form.Item>
                    </Col>
                    <Col xl={8} lg={8} md={8} sm={24} xs={24}>
                        <Form.Item
                            rules={[{ required: true, message: 'User Name is required' }]} name="text">
                            <Input value={text} onChange={(e) => {
                                settext(e.target.value)
                                console.log(red_data)
                            }} placeholder="Text" />
                        </Form.Item>
                    </Col>
                    <Col xl={8} lg={8} md={8} sm={24} xs={24}>
                        <Form.Item
                            rules={[{ required: true, message: 'User Name is required' }]} name="link">
                            <Input value={links} onChange={(e) => {
                                setlinks(e.target.value)
                                console.log(red_data)
                            }} placeholder="Link" />
                        </Form.Item>

                    </Col>
                </Row>
                <Row>
                    <Col xl={8} lg={8} md={8} sm={24} xs={24}>
                        <Form.Item
                            rules={[{ required: true, message: 'User Name is required' }]} name="lat">
                            <Input value={lat} onChange={(e) => {
                                setlat(e.target.value)
                                console.log(red_data)
                            }} placeholder="Lattitude" />
                        </Form.Item>
                    </Col>
                    <Col xl={8} lg={8} md={8} sm={24} xs={24}>
                        <Form.Item
                            rules={[{ required: true, message: 'User Name is required' }]} name="lon">
                            <Input value={lon} onChange={(e) => {
                                setlon(e.target.value)
                                console.log(red_data)
                            }} placeholder="Longitude" />
                        </Form.Item>
                    </Col>
                    <Col xl={8} lg={8} md={8} sm={24} xs={24}>
                        {/* <Upload
                            name="avatar"
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            // beforeUpload={beforeUpload}
                            onChange={handleChange}
                        >
                            {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                        </Upload> */}
                    </Col>
                </Row>
                <Col xl={4} lg={4} md={4} sm={24} xs={24}>
                    <Form.Item>
                        <Button type="primary" className="gx-mb-0" htmlType="submit">
                            Submit
              </Button>
                    </Form.Item>
                </Col>
            </Form>
            <Card title="Roles">
                <Table className="gx-table-responsive" columns={columns} dataSource={data} />
            </Card>
            <SweetAlert show={custom}
                custom
                showCancel
                confirmBtnText={`OK`}
                cancelBtnText={`Cancel`}
                confirmBtnBsStyle="primary"
                cancelBtnBsStyle="default"
                // customIcon={"https://via.placeholder.com/500X330"}
                title={`Do you want to delete?`}
                onConfirm={deleteconfirm}
                onCancel={deletecancel}
            >
                {/* <IntlMessages id="sweetAlerts.youWillFind"/> */}
            </SweetAlert>
            <SweetAlert show={deletesuccess} success title={`Deleted Successfully`}
                onConfirm={deletestatus}>
                {/* <IntlMessages id="sweetAlerts.btnClicked"/> */}
            </SweetAlert>
        </div>
    );
};

export default Member; 
