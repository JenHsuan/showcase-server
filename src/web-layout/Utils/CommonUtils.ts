const urlMap = {
  github: [
    'https://raw.githubusercontent.com/JenHsuan/web-layout-practice/master',
    'index.html',
  ],
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
            window.location.href = githubUrl
          })
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

export const getIcons = (): string[] => {
  return [
    `
  <div class='github-icon'>
  <i class='fa fa-github'></i>
  </div>`,
  ];
};

export const getIconsStyle = (): string[] => {
  return [
    '.github-icon { border:none;cursor:pointer;z-index: 10000;z-index: 10000; position:absolute; top: calc(100vh - 50px); left: calc(100vw - 50px); display:flex;justify-items:center;align-items:center;flex-direction:column;font-weight:600; font-size: 36px;border-radius:50%;background-color:#fff;width:35px;height:35px;}',
  ];
};

export const getNavigationButtonsStyle = (): string[] => {
  return [
    'body:hover .nav-btn { opacity:.7}',
    '.previous-btn { position:absolute; top: 50vh; left: 25px;}',
    '.next-btn { position:absolute; top: 50vh;left:calc(100vw - 50px);}',
    '.nav-btn {opacity:0;box-shadow: 0px 1px 4px #000; border:none;cursor:pointer;z-index: 10000; border-radius:50%;background-color:#fff;width:25px;height:25px;display:flex;justify-items:center;align-items:center;flex-direction:column;font-weight:600;}',
    '.nav-btn:hover {background-color:rgba(0,0,0,.5); color:#fff;border:1px solid #fff;}',
  ];
};

export const getRealUrl = (name: string, key: string): string => {
  if (!urlMap.hasOwnProperty(key)) {
    return '';
  }
  const fragments = [...urlMap[key]];
  fragments.splice(fragments.length - 1, 0, name);
  console.log(fragments.join('/'));
  return fragments.join('/');
};

export const getCssLinks = (): string[] => {
  return [
    '<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">',
  ];
};

export const ListMap = {
  github: ['introduction', 'sideMenu', 'square'],
};
