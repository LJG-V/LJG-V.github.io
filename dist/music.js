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
        name: '你的酒馆对我打了烊',
        artist: '陈雪凝',
        url: 'https://music.163.com/song/media/outer/url?id=1341964346.mp3'，
        cover: 'http://p1.music.126.net/LiRR__0pJHSivqBHZzbMUw==/109951163816225567.jpg?param=130y130',
      },
	  {
        name: 'Something Just Like This',
        artist: 'The Chainsmokers',
        url: 'http://www.ytmp3.cn/down/50463.mp3',
        cover: 'http://p2.music.126.net/ggnyubDdMxrhpqYvpZbhEQ==/3302932937412681.jpg?param=130y130',
      },
      {
        name: 'Good Time',
        artist: 'Owl City&Carly Rae Jepsen',
        url: 'http://www.ytmp3.cn/down/34148.mp3',
        cover: 'http://p1.music.126.net/c5NVKUIAUcyN4BQUDbGnEg==/109951163221157827.jpg?param=130y130',
      }
    ]
});