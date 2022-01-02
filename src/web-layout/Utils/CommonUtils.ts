import { type } from "os";

const urlMap = {
  github: ["https://raw.githubusercontent.com/JenHsuan/web-layout-practice/master", "index.html"],
};

export const getNavagationButtonsScript = (): string[] => {
  return [
    `let pathName = window.location.pathname.split('/')
     pathName = pathName[pathName.length - 1]
     let showSideMenu = false;
     fetch('/web-layout/list')
      .then(res => res.json())
      .then(res => {
          let list = res.content;
          let index = list.findIndex(ele => ele === pathName)
          let next = list[index]
          index = index !== -1 ? index : 0;
          var btns = document.getElementsByClassName('nav-btn')
          btns[0].addEventListener("click", event => {
            index = (index + list.length + 1) % list.length;
            next = list[index]
            window.location.href = '/web-layout/web-layout/' + next
          })
          btns[1].addEventListener("click", event => {
            index = (index + list.length - 1) % list.length;
            next = list[index]
            window.location.href = '/web-layout/web-layout/' + next
          })

          var githubBtn = document.getElementsByClassName('github-icon')[0]
          githubBtn.addEventListener("click", event => {
            next = list[index]
            let githubUrl = 'https://github.com/JenHsuan/web-layout-practice/tree/master/' + next
            window.open(githubUrl, '_blank');
          })

          var alaymanBtn = document.getElementsByClassName('alayman-icon')[0]
          alaymanBtn.addEventListener("click", event => {
            let alaymanUrl = 'https://daily-learning.herokuapp.com/'
            window.location.href = alaymanUrl
          })

          var menuBtn = document.getElementsByClassName('menu-icon')[0]
          menuBtn.addEventListener("click", event => {
            let child = document.getElementsByClassName('web-layout-side-menu')[0]
            if (showSideMenu) {
              showSideMenu = false;
              child.setAttribute("style", "transform: translateX(-100%)");
            } else {
              showSideMenu = true;
              child.setAttribute("style", "transform: translateX(0)");
            }
          })
          let sideMenu = document.getElementsByClassName('web-layout-side-menu')[0]
          let sideMenuItem = document.createElement('div');
          sideMenuItem.setAttribute("style", "width: 200px; margin: 50px auto;");

          list.forEach(ele => {
              let child = document.createElement('div');
              child.setAttribute("style", "color: #fff; margin-left:5px; margin-bottom: 5px;cursor: pointer;");
              child.setAttribute("class", "web-layout-side-menu-item");
              child.addEventListener("click", event => {
                  window.location.href = '/web-layout/web-layout/' + ele
              })
              child.innerHTML = ele;
              sideMenuItem.appendChild(child)
          })
          sideMenu.appendChild(sideMenuItem)
          var circleGroup = document.getElementsByClassName('circle-group')[0]
          list.forEach(ele => {
              let child = document.createElement('span');
              child.setAttribute("class", "circle");
              child.setAttribute("style", "margin-left:5px; border:  solid #fff; box-shadow: 0px 1px 4px #000;border:1px solid #fff;cursor:pointer;z-index: 10000;border-radius:50%;background-color:rgba(0,0,0,.3);width:10px;height:10px;");
              circleGroup.appendChild(child)
          })

          var circle = document.getElementsByClassName('circle')[list.length - 1 - index];
          circle.setAttribute("style","margin-left:5px; box-shadow: 0px 1px 4px #000;border:1px solid #fff;cursor:pointer;z-index: 10000;border-radius:50%;;width:10px;height:10px;background-color:#fff;");
      })
  `,
  ];
};

export const getScriptSections = (): string[] => {
  return ["<script>", "</script>"];
};

export const getNavigationButtons = (): string[] => {
  return [
    '<div class="previous-btn nav-btn" title="previous"><</div>',
    '<div class="next-btn nav-btn" title="next">></div>',
  ];
};

export const getAlaymanIcon = (): string[] => {
  return [
    "<link rel='icon' href='https://raw.githubusercontent.com/JenHsuan/ALayman/master/views/images/alaymanicon.png' type='image/x-icon' /> ",
  ];
};

export const getPreviewContents = (): string[] => {
  return [
    '<meta property="og:title" content="Carousel for web layout practices" />',
    '<meta property="og:url" content = "https://nestjs-showcase-delegator.herokuapp.com/" /> ',
    '<meta property = "og:image" content = "https://raw.githubusercontent.com/JenHsuan/showcase-server/master/images/cover.png" /> ',
    '<meta property = "og:description" content = "It\'s a web site built by Nestjs for showing the practices that I learned from the internet" /> ',
    '<meta name = "keywords" content = "CSS, Nest.js, JavaScript" /> ',
    '<meta name = "author" content = "Jen-Hsuan Hsieh (Sean Hsieh)" />',
  ];
};

export const getCircleGroups = (): string[] => {
  return ['<div class="circle-group"></div>'];
};

export const getSideMenu = (): string[] => {
  return ['<div class="web-layout-side-menu"></div>'];
};

export const getIcons = (): string[] => {
  return [
    `
  <div class='github-icon' title="Github">
  <i class='fa fa-github'></i>
  </div>`,
    `
  <div class='alayman-icon' title="A Layman">
  <img src='https://raw.githubusercontent.com/JenHsuan/ALayman/master/views/images/alaymanicon.png'>
  </div>
  `,
    `
  <div class='menu-icon' title="Medium">
  <i class='fa fa-compass'></i>
  </div>
  `,
  ];
};

export const getIconsStyle = (): string[] => {
  return [
    ".github-icon { box-shadow: 0px 1px 4px #000;border:none;cursor:pointer;z-index: 10000;z-index: 10000; position:absolute; top: calc(100vh - 50px); left: calc(100vw - 60px); display:flex;justify-items:center;align-items:center;flex-direction:column;font-weight:600; font-size: 36px;border-radius:50%;background-color:#fff;width:35px;height:35px;}",
    ".alayman-icon { box-shadow: 0px 1px 4px #000;border:none;cursor:pointer;z-index: 10000;z-index: 10000; position:absolute; top: calc(100vh - 50px); left: calc(100vw - 120px); display:flex;justify-items:center;align-items:center;flex-direction:column;font-weight:600; font-size: 36px;border-radius:50%;background-color:transparent;width:35px;height:35px;}",
    ".alayman-icon img{width:100%}",
    ".menu-icon { box-shadow: 0px 1px 4px #000;border:none;cursor:pointer;z-index: 10000;z-index: 10000; position:absolute; top: calc(100vh - 50px); left: calc(100vw - 180px); display:flex;justify-items:center;align-items:center;flex-direction:column;font-weight:600; font-size: 36px;border-radius:50%;background-color:#fff;width:35px;height:35px;}",
  ];
};

export const getCirclesStyle = (): string[] => {
  return [
    ".circle-group {opacity:0;z-index: 10000;display:flex;position:absolute; width:450px;left:calc((100% - 400px)/2);top:calc(100vh - 80px);}",
  ];
};

export const getSideMenuStyle = (): string[] => {
  return [
    ".web-layout-side-menu {width:300px; min-height: 100%; box-shadow: 1px 2px 3px #ccc; background-color:rgba(0, 0, 0, .9); position:absolute; z-index:100000; transition: .3s; transform: translateX(-100%);}",
    ".web-layout-side-menu-item:hover {font-weight: 600}",
  ];
};

export const getNavigationButtonsStyle = (): string[] => {
  return [
    "body:hover .nav-btn { opacity:.7}",
    "body:hover .circle-group { opacity:7}",
    ".previous-btn { position:absolute; top: 50vh; left: 40px;}",
    ".next-btn { position:absolute; top: 50vh;left:calc(100vw - 50px);}",
    ".nav-btn {opacity:0;box-shadow: 0px 1px 4px #000; border:none;cursor:pointer;z-index: 10000; border-radius:50%;background-color:#fff;width:40px;height:40px;display:flex;justify-items:center;align-items:center;flex-direction:column;font-weight:400;line-height:40px; font-size:24px;}",
    ".nav-btn:hover {background-color:rgba(0,0,0,.5); color:#fff;border:1px solid #fff;}",
  ];
};

export const getRealUrl = (name: string, key: string): string => {
  if (!urlMap.hasOwnProperty(key)) {
    return "";
  }
  const fragments = [...urlMap[key]];
  fragments.splice(fragments.length - 1, 0, name);
  return fragments.join("/");
};

export const getCssLinks = (): string[] => {
  return ['<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">'];
};

export const ListMap = {
  github: [
    "introduction",
    "card-with-text",
    "full-layout",
    "breadCrumbs",
    "sideMenuSwitch",
    "cross",
    "footer",
    "sideMenuMultiLayers",
    "general-landscape",
    "square",
    "progressBar",
    "sideMenu",
    "login",
    "messageRecord",
    "timeline",
    "rotateSquare",
    "break",
    "specialBorder",
    "article_1",
    "article_2",
    "article_3",
    "article_4",
    "article_5",
    "article_6",
    "article_7",
    "article_8",
    "article_9",
    "article_10",
    "article_11",
    "article_12",
  ],
};
