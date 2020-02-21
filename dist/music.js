const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    mutex: true,
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
      },
	{
        name: '冬眠',
        artist: '司南',
        url: 'https://music.163.com/song/media/outer/url?id=1398663411.mp3',
        cover: 'http://p2.music.126.net/4KDBaQXnQywQovmqvjx-8Q==/109951164444131697.jpg?param=130y130',
      },
{
        name: '国王与乞丐',
        artist: '华晨宇 / 杨宗纬',
        url: 'https://music.163.com/song/media/outer/url?id=32835565.mp3',
        cover: 'http://p2.music.126.net/UsSAd3Bdf77DjhCuTSEvUw==/109951163077613693.jpg?param=130y130',
      },
{
        name: '说散就散',
        artist: '袁娅维',
        url: 'https://music.163.com/song/media/outer/url?id=523251118.mp3',
        cover: 'http://p1.music.126.net/Yj2g6u9X6UCZPaRLCoJ5mQ==/109951163169027515.jpg?param=130y130',
      },
{
        name: '出山',
        artist: '花粥 / 王胜娚',
        url: 'https://music.163.com/song/media/outer/url?id=1313354324.mp3',
        cover: 'http://p2.music.126.net/xUAfdMHdXhu3BmO4g8nOYA==/109951163573311341.jpg?param=130y130',
      },
{
        name: '理想三旬',
        artist: '陈鸿宇',
        url: 'https://music.163.com/song/media/outer/url?id=31445772.mp3',
        cover: 'http://p1.music.126.net/cqTTEPAaxXG3cOwaE4E_-g==/109951163104103366.jpg?param=130y130',
      }
    ]
});