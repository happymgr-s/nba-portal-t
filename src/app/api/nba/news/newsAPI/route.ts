import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';
import { Article, NewsItem } from '@/types/news';
import { newsMockData } from '@/lib/mockData/newsMockData';

export type NewsApiResponse = {
  status: string;
  totalResults: number;
  articles: Article[];
};

export type GetNewsResponse = NewsItem[];

export async function GET(req: NextRequest) {
  const {} = req.nextUrl.searchParams;
  const newSearchParams = new URLSearchParams();

  newSearchParams.set('apiKey', process.env.NEWS_API_KEY || '');
  newSearchParams.set('q', 'NBA AND 日本');
  newSearchParams.set('pageSize', '10');
  newSearchParams.set('country', 'jp');
  //   newSearchParams.set('excludeDomains', 'Livedoor.jp,Arigato-ipod.com,Blog.jp');
  //   newSearchParams.set('domains', 'Nhk.or.jp');

  try {
    const GET_NEWS_API_Url = `https://newsapi.org/v2/top-headlines?${newSearchParams.toString()}`;
    const response = await fetch(GET_NEWS_API_Url);
    const responseJson = await response.json();

    return NextResponse.json(responseJson);
  } catch (error) {
    return NextResponse.json([]);
  }
}

const sample = {
  totalArticles: 6,
  articles: [
    {
      title: '大谷vsジャッジを「MLBは望んでいる」 米記者力説…不可欠なスター激突の"頂上決戦"',
      description:
        'スターの"頂上決戦"を野球界全体が望んでいる。ドジャースは20日（日本時間21日）、メッツとリーグ優勝決定シリーズ第6戦を戦う。大谷翔平投手にとって初のワールドシリーズまで残り1勝。ア・リーグではヤンキースが王手をかけており、東西の名門がぶつかる可能性が高まってきた。',
      content:
        'ヤンキースのアーロン・ジャッジ（左）とドジャース・大谷翔平【写真：ロイター】\n低下する米国での野球人気「日本の方がずっと人気」\nスターの“頂上決戦”を野球界全体が望んでいる。ドジャースは20日（日本時間21日）、メッツとリーグ優勝決定シリーズ第6戦を戦う。大谷翔平投手にとって初のワールドシリーズまで残り1勝。ア・リーグではヤンキースが王手をかけており、東西の名門がぶつかる可能性が高まってきた。\n今年のプレーオフは大谷以外にも多くの日本人選手が出場。中でも山本由伸、ダルビッシュ有両投手の投げ合いと... [866 chars]',
      url: 'https://full-count.jp/2024/10/20/post1640630/',
      image:
        'https://full-count.jp/wp-content/uploads/2024/10/20104638/20241020_judge_ohtani_reu-560x373.jpg',
      publishedAt: '2024-10-20T02:36:07Z',
      source: { name: 'Full-Count（フルカウント）', url: 'https://full-count.jp' },
    },
    {
      title: 'ＮＢＡ＝グリズリーズ、河村勇輝とのツーウエー契約を発表',
      description:
        '米プロバスケットボール協会（ＮＢＡ）のグリズリーズは１９日、開幕前のキャンプに参加していた河村勇輝（２３）とツーウエー契約を結んだと発表した。',
      content:
        'ＮＢＡのグリズリーズは１９日、開幕前のキャンプに参加していた河村勇輝（左）とツーウエー契約を結んだと発表した。米テネシー州メンフィスで１０日撮影（２０２４年 ロイター/Petre Thomas-Imagn Images）\nＮＢＡのグリズリーズは１９日、開幕前のキャンプに参加していた河村勇輝（左）とツーウエー契約を結んだと発表した。米テネシー州メンフィスで１０日撮影（２０２４年 ロイター/Petre Thomas-Imagn Images）\n［１９日 ロイター］ - 米プロバスケットボール協会（Ｎ... [373 chars]',
      url: 'https://jp.reuters.com/life/sports/7L4EZBUCTNL5DI5MD44MOE4ZFY-2024-10-20/',
      image:
        'https://www.reuters.com/resizer/v2/W3KEBSMYLZL4DFVJRAF3Z3LIQA.jpg?auth=2f9fbc23499a140c488fa54240dad86f9d142dd46d913411390d7a56248d936e&height=1005&width=1920&quality=80&smart=true',
      publishedAt: '2024-10-20T01:56:32Z',
      source: { name: 'ロイター (Reuters Japan)', url: 'https://jp.reuters.com' },
    },
    {
      title: 'バスケットボール総合情報サイト バスケットカウント BASKET COUNT',
      description:
        '琉球ゴールデンキングスは東アジアスーパーリーグ（EASL）がまだ構想段階だった時、日本で最初に参加を申し出たク',
      content:
        '琉球ゴールデンキングスは東アジアスーパーリーグ（EASL）がまだ構想段階だった時、日本で最初に参加を申し出たクラブであり、2017年夏の「The Super8」から今に至るまでEASLの大会の盛り上げに貢献してきた。そしてBリーグ初優勝を果たした直後の昨年夏には『沖縄を世界へ』というスローガンを掲げてもいる。琉球がなぜ『世界』を意識するのか、安永淳一GMに話を聞いた。\n「参加する意義を発信しながら戦っていく必要がある」\n──バスケはグローバルスポーツですが、Bリーグでは国内で勝つことを目指し、国... [2142 chars]',
      url: 'https://basket-count.com/article/detail/200550',
      image: 'https://basket-count.com/wp-content/uploads/2024/10/yng1002t1.jpg',
      publishedAt: '2024-10-16T03:00:00Z',
      source: { name: 'バスケットカウント', url: 'https://basket-count.com' },
    },
    {
      title: 'グリズリーズ番記者に聞く河村勇輝の評価「司令塔としての力量はすでに上質」',
      description:
        '2016年からメンフィス・グリズリーズを追ってきたベテランアナリストのクリス・ウォレス記者が河村勇輝の評価を語った。',
      content:
        'メンフィス・グリズリーズと無保証のエグジビット10契約を結ぶ河村勇輝（23）がプレシーズン戦でまずは好スタートを切っている。\n最初の2戦では第4クォーターにプレイタイムを得ると、12日、敵地でのシカゴ・ブルズ戦では第1クォーターにコートイン。不出場の主力が多かったこともあって23分48秒をプレイし、2得点（FG 0/5, 3P 0/5, FT 2/2）、8アシスト、1スティール、4ファウル、2ターンオーバーという成績を残した。\nこの日はショットこそ決まらなかったものの、アシストはチーム最多。チー... [3173 chars]',
      url: 'https://www.sportingnews.com/jp/nba/news/grizzlies-beat-michael-wallace-talks-about-yuki-kawamura/893979d156aaf0cb82b32465',
      image:
        'https://library.sportingnews.com/styles/crop_style_16_9_desktop/s3/2024-10/yuki-vs-bulls.jpg?h=920929c4&itok=xcBrrqYO',
      publishedAt: '2024-10-14T22:47:06Z',
      source: { name: 'Sporting News', url: 'https://www.sportingnews.com' },
    },
    {
      title:
        '河村勇輝がグリズリーズ入りする可能性はあるのか？ 河村がプレシーズンで証明すべきこととは？',
      description:
        '河村勇輝がメンフィス・グリズリーズの開幕ロスターに入るためにすべきことをスポーティングニュースのステフ・ノー記者が解説する',
      content:
        '身長5フィート8インチ（約173センチ）以下でNBAのコートに立った選手は過去20年間で2人しかいない。アール・ボイキンスは5フィート5インチ（約165センチ）のスコアリングガードとして堅実に13年間のキャリアを送り、5フィート7インチ（約170センチ）のマーキス・ノウェルは昨シーズン、トロント・ラプターズのルーキーとしてガベージタイムに4分間出場した。\nつまり、身長173センチの日本人ガードの河村勇輝にとって状況は不利だと言っていいだろう。\n河村はメンフィス・グリズリーズからトレーニングキャン... [2361 chars]',
      url: 'https://www.sportingnews.com/jp/nba/news/yuki-kawamura-make-grizzlies-roster-preseason/116947c658c6a997d740e741',
      image:
        'https://library.sportingnews.com/styles/crop_style_16_9_desktop/s3/2024-10/Yuki%20Kawamura%20100824.jpg?h=06bf8cfb&itok=GiwYQPW2',
      publishedAt: '2024-10-08T20:36:22Z',
      source: { name: 'Sporting News', url: 'https://www.sportingnews.com' },
    },
    {
      title:
        'グリズリーズの河村勇輝がNBAメディアデーの写真で注目 マグジー・ボーグスとマヌート・ボルの写真再現',
      description:
        'メンフィス・グリズリーズのトレーニングキャンプロスター入りを果たした河村勇輝と、新人ザック・イディーのメディアデーの写真が注目を集めている。かつての有名な写真を再現したようなかたちだ。',
      content:
        'NBAではトレーニングキャンプ前のメディアデーが非公式のシーズンスタートであり、最も楽しい日のひとつにもなる。\nメンフィス・グリズリーズは今季のメディアデーを大いに楽しんだ。その中心となったのが、新人ザック・イディーだ。新シーズンのNBAで最も高身長の選手のひとりであるイディーは、多くの新たなチームメイトと一緒に写真撮影と臨んだが、特にその中のひとりとの写真が注目された。\nそれはイディーと、同じく新人の河村勇輝との写真だ。彼らの間には大きな身長差がある。5フィート3インチ（約160センチ）のマグ... [921 chars]',
      url: 'https://www.sportingnews.com/jp/nba/news/zach-edey-yuki-kawamura-recreates-muggsy-bogues-manute-bol-photo/1ace3bd4bf1d4741264be97c',
      image:
        'https://library.sportingnews.com/styles/crop_style_16_9_desktop/s3/2024-10/Zach%20Edey%20and%20Yuki%20Kawamura%20100124.jpeg?h=920929c4&itok=JXaYOL4B',
      publishedAt: '2024-10-01T21:32:30Z',
      source: { name: 'Sporting News', url: 'https://www.sportingnews.com' },
    },
  ],
};
