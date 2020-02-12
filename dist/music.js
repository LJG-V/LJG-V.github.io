const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
	{
         name: "你的答案",
        artist: '阿冗',
        url: 'https://music.163.com/song/media/outer/url?id=1400256289.mp3',
        cover: 'http://p1.music.126.net/OlX-4S4L0Hdkyy_DQ27zag==/109951164459621658.jpg?param=130y130',
      },
	  {
        name: '不找了',
        artist: '郭旭',
        url: 'https://music.163.com/song/media/outer/url?id=29850531.mp3',
        cover: 'http://p1.music.126.net/o25ptaSygDb2rVdTpIKexw==/17793396672429120.jpg?param=130y130',
      },
      {
        name: '十二',
        artist: '留声玩具',
        url: 'https://music.163.com/song/media/outer/url?id=404465600.mp3',
        cover: 'http://p1.music.126.net/Ns7tXM8elBnTT6RKwik-Gw==/16586132905149606.jpg?param=130y130',
      },
	  {
        name: 'I won’t cry tonight',
        artist: '柳维尼Weeney / Adolf Jack',
        url: 'https://music.163.com/song/media/outer/url?id=1340493127.mp3',
        cover: 'http://p2.music.126.net/eJ-1q2yDvOunuQLh33Hc2w==/109951163826278397.jpg?param=130y130',
      },
      {
        name: '句号',
        artist: 'G.E.M.邓紫棋',
        url: 'https://music.163.com/song/media/outer/url?id=1405283464.mp3',
        cover: 'http://p2.music.126.net/KTo5oSxH3CPA5PBTeFKDyA==/109951164581432409.jpg?param=130y130',
      }
    ]
});