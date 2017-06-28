import React, { Component } from 'react';
import classNames from 'classnames';
import Button from 'lucid-ui/Button';
import bgImg from './1.jpg';
import '../node_modules/lucid-ui/dist/index.css';
import './Base.css';
import './keyframeAnimation.css';

const cx = classNames;

class App extends Component {
  constructor(props) {
		super(props);

		this.state = {
			animateBackground: false,
      animateButton: false,
		};
	}

  setBackground() {
		this.setState({ animateBackground: !this.state.animateBackground });
	}
  setButton() {
		this.setState({ animateButton: !this.state.animateButton });
	}

  render() {
    return (
      <div className="App">
        <img
          src={bgImg}
          className='Background-image'
          className={cx('Background-image', {
						'Background-image-blur': this.state.animateBackground,
					})}
          alt="an image of blured lines connecting buildings across a city"
        />
        <div className='App-content'>
          <div className="App-header">
            <h2
              onMouseEnter={() => this.setBackground()}
              onMouseLeave={() => this.setBackground()}
            >
              Animation 101
            </h2>
          </div>
          <div className="App-animations">
            <Button
              className='Button'
              onMouseEnter={() => this.setButton()}
              onMouseLeave={() => this.setButton()}
              className={cx('Button', {
                'Button_hover': this.state.animateButton,
              })}>Animate!</Button>

            <h3>Additonal Resources</h3>
            <p classname='text'>
              <a href="https://github.com/daneden/animate.css/">https://github.com/daneden/animate.css/</a>
            </p>
          </div>
        </div>

      </div>
    );
  }
}

export default App;

