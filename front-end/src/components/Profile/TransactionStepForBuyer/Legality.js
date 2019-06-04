import React, { Component } from 'react'
import { Descriptions, Modal } from 'antd'
import { Image } from 'react-bootstrap'

export default class Legality extends Component {
    constructor(props) {
        super(props)

        this.state = {
            previewImage: false,
            previewUrl: ''
        }
    }

    onHandleCancel = () => {
        this.setState({ previewImage: false })
    }

    onHandleOpenImageThumbnail = (event) => {
        this.setState({ previewImage: true, previewUrl: event.target.src })
    }

    onShowImageList = (images) => {
        var result = null
        if (images && images.length > 0)
            result = images.map((index, image) => {
                return (
                    <Image
                        key={index}
                        className="imagepreview"
                        src={image.url}
                        thumbnail
                        style={{ width: "150px", height: "100px", cursor: "pointer" }}
                        onClick={this.onHandleOpenImageThumbnail}
                    ></Image>
                )
            })
        else result = (<span style={{ display: "flex", alignContent: "center", justifyContent: "center" }}>Không có hình ảnh</span>)
        return result
    }
    render() {
        var { previewImage, previewUrl } = this.state
        return (
            <div className="container">
                <div className="col-lg-8 col-md-8 col-sm-12">
                    <Descriptions title="Kiểm tra tính pháp lý của bất động sản" column={1}>
                        <Descriptions label="Hình ảnh xác thực từ chính quyền địa phương: ">

                        </Descriptions>
                        <Descriptions label="Hình ảnh xác thực từ hợp đồng mua bán: ">

                        </Descriptions>
                        <Descriptions label="Hình ảnh xác thực từ giấy chứng nhận quyền sử dụng đất: ">

                        </Descriptions>

                    </Descriptions>
                </div>
                <Modal visible={previewImage} footer={null} onCancel={this.onHandleCancel} width="800px" style={{ height: "500px" }}>
                    <img alt="example" src={previewUrl} style={{ width: "750px", height: "500px" }} />
                </Modal>
            </div >
        )
    }
}
