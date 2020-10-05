import PropTypes from 'prop-types'
import React from 'react'
import wm from '../images/wm.png'
import app from '../images/app.png'
import jquery from '../images/jquery.png'
import javascript from '../images/javascript.png'
import nodejs from '../images/nodejs.png'
import pic from '../images/pic.jpg'
import { API } from 'aws-amplify';

const initialFormValue = {
  name: '',
  email: '',
  message: ''
};

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialFormValue;
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit = async e => {
    e.preventDefault()
    let body = {
      name: this.state.name,
      email: this.state.email,
      content: this.state.message
    }

    try {
      const response = await API.post('email', '/email/send', { body })
      console.log('Response: ', response)
      this.setState(initialFormValue)
      this.props.onCloseArticle()
    } catch (e) {
      console.log(e)
    }
  }

  handleReset = e => {
    e.preventDefault()
    this.setState(initialFormValue)
  }


  render() {
    console.log('Name: ', this.state.name)
    console.log('Email: ', this.state.email)
    console.log('Message: ', this.state.message)
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <p>
            Hi, my name is Becky and I love to write code. I specialize in Javascript, React,
            React Hooks and several others. I really enjoy backend but work on full stack mostly.
            I am open to new ideas and am always up to a challenge. By the way, check out my awesome work.
          </p>
          {close}
          <span className="image main">
            <img src={jquery} alt="" />
            <img src={nodejs} alt="" />
          </span>
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <p>
            I engineered a React.js progressive web application called <a href="https://master.djb4a0m29g84r.amplifyapp.com/">Comfort Foods</a> to provide actionable dietary information for seniors. This was done by engaging in user research to identify the best experience for the baby boomer generation. The application delivers a creative dietary plan/recommendation list for adding new ingredients to your staple dishes, based on your health needs. This was accomplished with persisted application content in a GraphQL-like database, using Sanity.io. Then deployed the application to the internet using AWS Cloudfront and Amplify.
          </p>
          <span>
            <img src={app} alt="" />
          </span>
          <p>
            Here is an ecommerce site created for <a href="https://woollymammothshoes.com/">Wooly Mammoth Shoes</a>.
          </p>
          {close}
          <span>
            <img src={wm} alt="" />
          </span>
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <p>
            I live in the greater Seattle area and studied at Skagit Valley College as well as Tacoma
            Community College. I am a member of Phi Theta Kappa and graduated with high honors.
          </p>
          {close}
          <span className="image main">
            <img src={pic} alt="" />
          </span>
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="https://77jlbmen1k.execute-api.us-east-1.amazonaws.com/dev/email/send/json">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" value={this.state.name} id="name" onChange={this.handleChange} />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" onChange={this.handleChange} />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4" onChange={this.handleChange} ></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" onClick={this.handleSubmit} value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" onClick={this.handleReset} />
              </li>
            </ul>
          </form>
          <ul className="icons">
            {/* <li>
              <a
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li> */}
            {/* <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li> */}
            {/* <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li> */}
            <li>
              <a
                href="https://github.com/jebeni777"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
