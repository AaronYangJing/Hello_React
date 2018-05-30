import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

class ALabel extends Component {

    render() {
        const hostName = "linda";

        return (
            <div className={"label1"}>
                <h3>this is {hostName} costumed label</h3>
            </div>
        );
    }
}

class Title extends Component {

    handleClickOnTitle(word, title, e) {
        alert(word + " & " + title);
    }

    render() {

        const name = "aaron";

        return (
            <div>
                <h1 onClick={this.handleClickOnTitle.bind(this, "hello", "world")}>react study</h1>
            </div>
        );
    }
}

class AZan extends Component {

    constructor() {
        super()
        this.state = {
            isLiked: false
        }
    }

    dianzan() {
        this.setState({
            isLiked: !this.state.isLiked
        });
    }


    render() {
        return (
            <div>
                <button onClick={this.dianzan.bind(this)}>{this.state.isLiked ? "取消" : "点赞"}</button>
            </div>
        )
    }

}

class APlus extends Component {

    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    triPlus() {
        //  state 内容改变后，会将改变后的内容暂存到消息队列中统一更新
        // this.setState({
        //     count : this.state.count + 1
        // })
        // this.setState({
        //     count : this.state.count + 1
        // })
        // this.setState({
        //     count : this.state.count + 1
        // })
        this.setState(function (prevState) {
            return {count: this.state.count + 1};
        });
        this.setState(function (prevState) {
            return {count: prevState.count + 1};
        });
        this.setState(function (prevState) {
            return {count: prevState.count + 1};
        });
    }

    render() {
        return (
            <div>
                <h4>
                <span>my count = {this.state.count}&nbsp;&nbsp;</span>
                <button onClick={this.triPlus.bind(this)}>triplus</button>
                </h4>
            </div>
        );
    }

}

class GroupLabel extends Component {
    render() {
        return (
            <div>
                <Title/>
                <ALabel/>
                <AZan/>
                <APlus/>
            </div>
        );
    }
}

ReactDOM.render(
    <div>
        <GroupLabel/>
    </div>,
    document.getElementById('root'));
