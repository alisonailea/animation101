import React, { Component } from 'react';
import classNames from 'classnames';
import Button from 'lucid-ui/Button';
import bgImg from './1.jpg';
import '../node_modules/lucid-ui/dist/index.css';
import './Base.css';
import './transitionAnimation.css';

const cx = classNames;

class App extends Component {
  constructor(props) {
		super(props);

		this.state = {
			isHovered: false,
		};
	}

  setHover() {
		this.setState({ isHovered: !this.state.isHovered });
	}

  render() {
    return (
      <div className="App">
        <img
          src={bgImg}
          className='Background-image'
          className={cx('Background-image', {
						'Background-image-blur': this.state.isHovered,
					})}
          alt="an image of blured lines connecting buildings across a city"
        />
        <div className='App-content'>
          <div className="App-header">
            <h2
              onMouseEnter={() => this.setHover()}
              onMouseLeave={() => this.setHover()}
            >
              Animation 101
            </h2>
          </div>
          <div className="App-animations">
            <Button className='Button'>Animate!</Button>
          </div>
        </div>

      </div>
    );
  }
}

export default App;

