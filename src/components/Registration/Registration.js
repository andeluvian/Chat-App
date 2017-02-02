import React, {Component} from 'react';

class Registration extends Component {

  constructor(props){
super(props);

this.submitReg=this.submitReg.bind(this);


  }
static defaultProps ={
black : []

}
    render() {

        return (
            <div>
                <h3>
                    Registration
                </h3>
                <form>
                    <div>
                        <label>
                            Woot</label>
                        <input type="text" ref="title"></input>
                    </div>

                </form>

            </div>

        );

    }

}
