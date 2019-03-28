import React, { Component } from 'react';

class Detail extends Component {
    render() {
        let {user} = this.props;
        console.log(user);
        return (
            <div>
                <div className="my-address">
                    <div className="main-title-2">
                        <h1><span>Advanced</span> Search</h1>
                    </div>
                    <form action="http://themevessel-item.s3-website-us-east-1.amazonaws.com/nest/index.html" method="GET">
                        <div className="form-group">
                            <label>Your Name</label>
                            <input type="text" className="input-text" name="your name" placeholder="John Antony" value={user.fullname}/>
                        </div>
                        <div className="form-group">
                            <label>Your Title</label>
                            <input type="text" className="input-text" name="agent" placeholder="Your title" />
                        </div>
                        <div className="form-group">
                            <label>Phone</label>
                            <input type="text" className="input-text" name="phone" placeholder="+55 4XX-634-7071" />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="input-text" name="email" placeholder="johndoe@gmail.com" />
                        </div>
                        <div className="form-group">
                            <label>About Me</label>
                            <textarea className="input-text" name="message" placeholder="Etiam luctus malesuada quam eu aliquet. Donec eget mollis tortor. Donec pellentesque eros a nisl euismod, ut congue orci ultricies. Fusce aliquet metus non arcu varius ullamcorper a sit amet nunc. Donec in lacus neque. Vivamus ullamcorper sed ligula vitae " defaultValue={""} />
                        </div>
                        <a href="true" className="btn button-md button-theme">Save Changes</a>
                    </form>
                </div>
            </div>
        );
    }
}

export default Detail;