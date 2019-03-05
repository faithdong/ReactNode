import React from 'react'
import { connect } from 'react-redux'
import { Card, WingBlank } from 'antd-mobile'
import { getUserList } from '../../redux/chatuser.redux'
//import UserCard from '../usercard/usercard'

@connect(
  state => state.chatuser,
  { getUserList }
)
class Boss extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    this.props.getUserList('genius');
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <WingBlank>
          {this.state.data.map(v => (
            v.avatar ? <Card key={v._id}>
              <Card.Header
                title={v.user}
                thumb={require(`../img/${v.avatar}.png`)}
                extra={<span>{v.title}</span>}
              />
              <Card.Body>
                {v.desc.split('\n').map(v => (<div key={v.key}>{v}</div>))}
              </Card.Body>
              <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
            </Card> : null

          ))}
        </WingBlank>
      </div>
    )
  }

}
export default Boss