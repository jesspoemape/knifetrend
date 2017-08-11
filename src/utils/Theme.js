import { injectGlobal } from 'styled-components';
import ReactModal from 'react-modal';

export default {
  main: '#E2131D',
  secondary: '#404040',
  shadow: '0 4px 4px -1px rgba(0,0,0,.2)',
  mainFont: ({weight, color}) => (`
      font-family: mr-eaves-xl-modern, sans-serif;
      font-style: normal;
      font-weight: ${weight || '200'};
      color: ${color || '#404040'};
    `),
  secondaryFont: ({weight, color}) => (`
      font-family: league-gothic, sans-serif;
      font-style: normal;
      font-weight: ${weight || '200'};
      color: ${color || '#404040'};
    `),
  media: {
    xl: '@media(min-width: 1250px)',
    desktop: '@media(min-width: 950px)',
    tablet: '@media(min-width: 768px)',
    phone: '@media(min-width: 414px)'
  }
}

// REACT MODAL GLOBAL STYLING //
// Remove all default inline styles
ReactModal.defaultStyles = {}
// Default css styling, injected globally just after reset.css below
const ReactModalDefaultStyle = `
  .ReactModal__Body--open {
    overflow: hidden;
  }

  .ReactModal__Overlay {
    position: fixed;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    background-color: rgba(0, 0, 0, 0.65);
    overflow: auto;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }
  
  .ReactModal__Content {
    margin: 40px 0 ;
    outline: none;
    color: inherit;
    overflow: initial;
    position: relative;
    left: auto;
    right: auto;
    bottom: auto;
    top: auto;
    @media(max-width: 414px) {
      margin: 0;
    }
  }
`

// Inject reset.css into main style sheet;
export const inject = injectGlobal`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video, input{
  	margin: 0;
  	padding: 0;
  	border: 0;
  	font-size: 100%;
  	font: inherit;
    font-family: mr-eaves-xl-modern;
  	vertical-align: baseline;
    box-sizing: border-box;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
  	display: block;
  }
  body {
  	line-height: 1;
  }
  ol, ul {
  	list-style: none;
  }
  blockquote, q {
  	quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
  	content: '';
  	content: none;
  }
  table {
  	border-collapse: collapse;
  	border-spacing: 0;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  input {
    outline: none;
  }

  ${ReactModalDefaultStyle}
`
