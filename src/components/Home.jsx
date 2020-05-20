import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { switchTheme } from '../actions/theme'
import { darkTheme, lightTheme } from '../styles/theme'
import { GlobalStyles } from '../styles/global'
import Hero from './Hero.jsx'


class Home extends React.Component {
  render () {
    return (
      <ThemeProvider theme={this.props.theme}>
        <GlobalStyles />
        <div className='container mt-5'>
          <h1>Home</h1>
          <Hero image="https://via.placeholder.com/800x400.png?text=Home800" tabupimage="https://via.placeholder.com/1200x400.png?text=Home1200" />
          <p>Playing with using Redux to switch Homepage themes: (console logging out to look at actions/reducers)</p>
          {this.props.theme.mode === 'light' ? (
            <button className="btn btn-switcher" onClick={() => this.props.switchTheme(darkTheme)}>Switch Homepage to Dark Theme</button>
          ) : (
            <button className="btn btn-switcher" onClick={() => this.props.switchTheme(lightTheme)}>Switch Homepage to Light Theme</button>
          )}
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet nisi maximus lectus malesuada vehicula non at magna. Aliquam erat volutpat. Donec et libero aliquet, ullamcorper urna id, ornare turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id faucibus tellus. Aenean pretium convallis nisi, et porttitor felis sagittis ut. Praesent porta turpis vitae neque egestas, pharetra porttitor tortor sodales. Donec pretium eros sed tellus bibendum euismod. Curabitur ac enim sed arcu convallis imperdiet.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet nisi maximus lectus malesuada vehicula non at magna. Aliquam erat volutpat. Donec et libero aliquet, ullamcorper urna id, ornare turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id faucibus tellus. Aenean pretium convallis nisi, et porttitor felis sagittis ut. Praesent porta turpis vitae neque egestas, pharetra porttitor tortor sodales. Donec pretium eros sed tellus bibendum euismod. Curabitur ac enim sed arcu convallis imperdiet.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet nisi maximus lectus malesuada vehicula non at magna. Aliquam erat volutpat. Donec et libero aliquet, ullamcorper urna id, ornare turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id faucibus tellus. Aenean pretium convallis nisi, et porttitor felis sagittis ut. Praesent porta turpis vitae neque egestas, pharetra porttitor tortor sodales. Donec pretium eros sed tellus bibendum euismod. Curabitur ac enim sed arcu convallis imperdiet.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet nisi maximus lectus malesuada vehicula non at magna. Aliquam erat volutpat. Donec et libero aliquet, ullamcorper urna id, ornare turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id faucibus tellus. Aenean pretium convallis nisi, et porttitor felis sagittis ut. Praesent porta turpis vitae neque egestas, pharetra porttitor tortor sodales. Donec pretium eros sed tellus bibendum euismod. Curabitur ac enim sed arcu convallis imperdiet.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet nisi maximus lectus malesuada vehicula non at magna. Aliquam erat volutpat. Donec et libero aliquet, ullamcorper urna id, ornare turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id faucibus tellus. Aenean pretium convallis nisi, et porttitor felis sagittis ut. Praesent porta turpis vitae neque egestas, pharetra porttitor tortor sodales. Donec pretium eros sed tellus bibendum euismod. Curabitur ac enim sed arcu convallis imperdiet.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet nisi maximus lectus malesuada vehicula non at magna. Aliquam erat volutpat. Donec et libero aliquet, ullamcorper urna id, ornare turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id faucibus tellus. Aenean pretium convallis nisi, et porttitor felis sagittis ut. Praesent porta turpis vitae neque egestas, pharetra porttitor tortor sodales. Donec pretium eros sed tellus bibendum euismod. Curabitur ac enim sed arcu convallis imperdiet.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet nisi maximus lectus malesuada vehicula non at magna. Aliquam erat volutpat. Donec et libero aliquet, ullamcorper urna id, ornare turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id faucibus tellus. Aenean pretium convallis nisi, et porttitor felis sagittis ut. Praesent porta turpis vitae neque egestas, pharetra porttitor tortor sodales. Donec pretium eros sed tellus bibendum euismod. Curabitur ac enim sed arcu convallis imperdiet.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet nisi maximus lectus malesuada vehicula non at magna. Aliquam erat volutpat. Donec et libero aliquet, ullamcorper urna id, ornare turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id faucibus tellus. Aenean pretium convallis nisi, et porttitor felis sagittis ut. Praesent porta turpis vitae neque egestas, pharetra porttitor tortor sodales. Donec pretium eros sed tellus bibendum euismod. Curabitur ac enim sed arcu convallis imperdiet.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet nisi maximus lectus malesuada vehicula non at magna. Aliquam erat volutpat. Donec et libero aliquet, ullamcorper urna id, ornare turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id faucibus tellus. Aenean pretium convallis nisi, et porttitor felis sagittis ut. Praesent porta turpis vitae neque egestas, pharetra porttitor tortor sodales. Donec pretium eros sed tellus bibendum euismod. Curabitur ac enim sed arcu convallis imperdiet.</p>
        </div>
      </ThemeProvider>
    )
  }
}

const mapStateToProps = state => ({
  theme: state.themeReducer.theme
})

const mapDispatchToProps = dispatch => ({
  switchTheme: bindActionCreators(switchTheme, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)


