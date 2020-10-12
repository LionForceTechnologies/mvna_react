import React, { useEffect, useState } from 'react';
import GoogleApiWrapper from './GoogleApiWrapper.js';
import { Card, Divider, Table, Col, Row, Button, Checkbox, Form, Input, Select } from "antd";
function Members() {
    const { Option } = Select;
    return (
        <>
            <section id="iee433" class="flex-sect">
                <div id="ihvaeo" class="container-width">
                    <div id="ih51x7" class="flex-title">Members</div>
                </div>
            </section>
            <div className={`mapwrapper `}>
                <GoogleApiWrapper />
            </div>
            <div className={`filters`}>
                <p>Filter by</p>
                <Form.Item className={`filter_bys`} name="role">
                    <Select
                        className={`filter_by`}
                        placeholder="All Country"
                    >
                        <Option value={'admin'}>{'admin'}</Option>
                        <Option value={'user'}>{'user'}</Option>
                        <Option value={'superadmin'}>{'superadmin'}</Option>

                    </Select>
                </Form.Item>
            </div>
            <div className={`uline`}>-</div>
            <Row>
                <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                    <Card className={`member_card`}>
                        <div className={`members_wrapper`}>
                            <div className={`parent_member`}> <img className={`member_logo_image`} style={{ marginBottom: '8px' }} src="/images/MVNA_Logo_Color.png"></img></div>
                            <p >Lorem ipsum dolor sit amet,
                            consetetur sadipscing elitr,
sed diam nonumy eirmod</p>
                        </div>
                        <div className={`member_bottom`}><p className={`click_explore`}>click to explore</p></div>
                    </Card>
                </Col>
                <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                    <Card className={`member_card`}>
                        <div className={`members_wrapper`}>
                            <div className={`parent_member`}> <img className={`member_logo_image`} style={{ marginBottom: '8px' }} src="/images/MVNA_Logo_Color.png"></img></div>
                            <p >Lorem ipsum dolor sit amet,
                            consetetur sadipscing elitr,
sed diam nonumy eirmod</p>
                        </div>
                        <div className={`member_bottom`}><p className={`click_explore`}>click to explore</p></div>
                    </Card>
                </Col>
                <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                    <Card className={`member_card`}>
                        <div className={`members_wrapper`}>
                            <div className={`parent_member`}> <img className={`member_logo_image`} style={{ marginBottom: '8px' }} src="/images/MVNA_Logo_Color.png"></img></div>
                            <p >Lorem ipsum dolor sit amet,
                            consetetur sadipscing elitr,
sed diam nonumy eirmod</p>
                        </div>
                        <div className={`member_bottom`}><p className={`click_explore`}>click to explore</p></div>
                    </Card>
                </Col>
                <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                    <Card className={`member_card`}>
                        <div className={`members_wrapper`}>
                            <div className={`parent_member`}> <img className={`member_logo_image`} style={{ marginBottom: '8px' }} src="/images/MVNA_Logo_Color.png"></img></div>
                            <p >Lorem ipsum dolor sit amet,
                            consetetur sadipscing elitr,
sed diam nonumy eirmod</p>
                        </div>
                        <div className={`member_bottom`}><p className={`click_explore`}>click to explore</p></div>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                    <Card className={`member_card`}>
                        <div className={`members_wrapper`}>
                            <div className={`parent_member`}> <img className={`member_logo_image`} style={{ marginBottom: '8px' }} src="/images/MVNA_Logo_Color.png"></img></div>
                            <p >Lorem ipsum dolor sit amet,
                            consetetur sadipscing elitr,
sed diam nonumy eirmod</p>
                        </div>
                        <div className={`member_bottom`}><p className={`click_explore`}>click to explore</p></div>
                    </Card>
                </Col>
                <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                    <Card className={`member_card`}>
                        <div className={`members_wrapper`}>
                            <div className={`parent_member`}> <img className={`member_logo_image`} style={{ marginBottom: '8px' }} src="/images/MVNA_Logo_Color.png"></img></div>
                            <p >Lorem ipsum dolor sit amet,
                            consetetur sadipscing elitr,
sed diam nonumy eirmod</p>
                        </div>
                        <div className={`member_bottom`}><p className={`click_explore`}>click to explore</p></div>
                    </Card>
                </Col>
                <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                    <Card className={`member_card`}>
                        <div className={`members_wrapper`}>
                            <div className={`parent_member`}> <img className={`member_logo_image`} style={{ marginBottom: '8px' }} src="/images/MVNA_Logo_Color.png"></img></div>
                            <p >Lorem ipsum dolor sit amet,
                            consetetur sadipscing elitr,
sed diam nonumy eirmod</p>
                        </div>
                        <div className={`member_bottom`}><p className={`click_explore`}>click to explore</p></div>
                    </Card>
                </Col>
                <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                    <Card className={`member_card`}>
                        <div className={`members_wrapper`}>
                            <div className={`parent_member`}> <img className={`member_logo_image`} style={{ marginBottom: '8px' }} src="/images/MVNA_Logo_Color.png"></img></div>
                            <p >Lorem ipsum dolor sit amet,
                            consetetur sadipscing elitr,
sed diam nonumy eirmod</p>
                        </div>
                        <div className={`member_bottom`}><p className={`click_explore`}>click to explore</p></div>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                    <Card className={`member_card`}>
                        <div className={`members_wrapper`}>
                            <div className={`parent_member`}> <img className={`member_logo_image`} style={{ marginBottom: '8px' }} src="/images/MVNA_Logo_Color.png"></img></div>
                            <p >Lorem ipsum dolor sit amet,
                            consetetur sadipscing elitr,
sed diam nonumy eirmod</p>
                        </div>
                        <div className={`member_bottom`}><p className={`click_explore`}>click to explore</p></div>
                    </Card>
                </Col>
                <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                    <Card className={`member_card`}>
                        <div className={`members_wrapper`}>
                            <div className={`parent_member`}> <img className={`member_logo_image`} style={{ marginBottom: '8px' }} src="/images/MVNA_Logo_Color.png"></img></div>
                            <p >Lorem ipsum dolor sit amet,
                            consetetur sadipscing elitr,
sed diam nonumy eirmod</p>
                        </div>
                        <div className={`member_bottom`}><p className={`click_explore`}>click to explore</p></div>
                    </Card>
                </Col>
                <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                    <Card className={`member_card`}>
                        <div className={`members_wrapper`}>
                            <div className={`parent_member`}> <img className={`member_logo_image`} style={{ marginBottom: '8px' }} src="/images/MVNA_Logo_Color.png"></img></div>
                            <p >Lorem ipsum dolor sit amet,
                            consetetur sadipscing elitr,
sed diam nonumy eirmod</p>
                        </div>
                        <div className={`member_bottom`}><p className={`click_explore`}>click to explore</p></div>
                    </Card>
                </Col>
                <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                    <Card className={`member_card`}>
                        <div className={`members_wrapper`}>
                            <div className={`parent_member`}> <img className={`member_logo_image`} style={{ marginBottom: '8px' }} src="/images/MVNA_Logo_Color.png"></img></div>
                            <p >Lorem ipsum dolor sit amet,
                            consetetur sadipscing elitr,
sed diam nonumy eirmod</p>
                        </div>
                        <div className={`member_bottom`}><p className={`click_explore`}>click to explore</p></div>
                    </Card>
                </Col>
            </Row>


        </>
    )
}
export default Members;