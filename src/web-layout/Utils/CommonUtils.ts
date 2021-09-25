const urlMap = {
  github: ["https://raw.githubusercontent.com/JenHsuan/web-layout-practice/master", "index.html"],
};

export const getNavagationButtonsScript = (): string[] => {
  return [
    `let pathName = window.location.pathname.split('/')
     pathName = pathName[pathName.length - 1]
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
  return ['<script>', '</script>'];
};

export const getNavigationButtons = (): string[] => {
  return [
    '<div class="previous-btn nav-btn" title="previous"><</div>',
    '<div class="next-btn nav-btn" title="next">></div>',
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
  ];
};

export const getIconsStyle = (): string[] => {
  return [
    ".github-icon { box-shadow: 0px 1px 4px #000;border:none;cursor:pointer;z-index: 10000;z-index: 10000; position:absolute; top: calc(100vh - 50px); left: calc(100vw - 60px); display:flex;justify-items:center;align-items:center;flex-direction:column;font-weight:600; font-size: 36px;border-radius:50%;background-color:#fff;width:35px;height:35px;}",
    ".alayman-icon { box-shadow: 0px 1px 4px #000;border:none;cursor:pointer;z-index: 10000;z-index: 10000; position:absolute; top: calc(100vh - 50px); left: calc(100vw - 120px); display:flex;justify-items:center;align-items:center;flex-direction:column;font-weight:600; font-size: 36px;border-radius:50%;background-color:transparent;width:35px;height:35px;}",
    ".alayman-icon img{width:100%}",
  ];
};

export const getCirclesStyle = (): string[] => {
  return [
    ".circle-group {opacity:0;z-index: 10000;display:flex;position:absolute; width:200px;left:calc((100% - 200px)/2);top:calc(100vh - 80px);}",
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
  ],
};
