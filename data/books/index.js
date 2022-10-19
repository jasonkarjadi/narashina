const books = [
  {
    id: 1,
    title: { original: "國語學槪論", romanized: "kokugogakugairon" },
    author: { original: "橋本進吉", romanized: "hashimotoshinkichi" },
    publisher: { original: "岩波書店", romanized: "iwanamishoten" },
    note: "橋本進吉博士著作集第一册",
    year: 1946,
    month: 12,
    date: 10,
    marks: [3, 4],
    ratio: 1.4142,
    pages: [
      { id: 1, background: "#975A16" },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      {
        id: 5,
        body: "<div class='border-5 flex flex-col'><div class='flex'><h2 class='font-normal'>橋本進吉著</h2><p>橋本進吉博士著作集第一<span>册</span></p></div><div class='border-r'><h1><span>國</span>語<span>學</span><span>槪</span>論</h1></div><div class='border-r text-end'><h2 class='font-normal'>岩波書店刊行</h2></div></div>",
      },
      { id: 6 },
      {
        id: 7,
        pagemark: "三",
        body: "<div><h2>凡例</h2><p>一、本書は、橋本進吉博士著作集の大一<span>册</span>として、「<span>國</span>語<span>學</span><span>槪</span>論」「<span>國</span>語<span>學</span>研究法」「<span>國</span>語<span>學</span>と<span>國</span>語教育」「<span>國</span>語と<span>傳</span>統」の四篇を<span>收</span>めた。</p><p>一、「國語學<span>槪</span>論」は、「岩波講座日本文学」（岩波書店）の中の一篇（上下二册）として、昭和七年十月及び同八年一月に刊行されたものである。今、自筆で書入れられた校訂本を底本とし、欄外に書入れられたものは篇末に附記することとした。</p><p>一、「國語學研究法」は、「國語國文學講座」（雄山閣）の中の一篇として、昭和十年七月に刊行されたものである。今、自筆で書入れられた校訂本を底本とした。</p><p>一、「國語學と國語教育」は、「岩波講座國語教育」（岩波書店）の中の一篇として、昭和十二年九月に刊行されたものである。今、自筆で書入れられた校訂本を底本とした。</p><p>一、「國語と傳統」は、昭和十八年五月四日、日本諸<span>學</span>振興委員會國語國文<span>學</span>公開講演<span>會</span>（<span>神</span>田・共立講党）に於ける講演の速記で、「日本諸<span>學</span>講演集・第十一<span>輯</span>・<span>國</span>語<span>國</span>文<span>學</span>篇」の中に<span>收</span>めて、昭和十九年四月に刊行されたものである。<span>送</span><span>假</span>名その他に博士の慣用と異<span>つ</span>たものが見受けられるが、</p></div>",
      },
      {
        id: 8,
        pagemark: "四",
        body: "<p>今はあ<span>へ</span>て手を加<span>へ</span>なか<span>つ</span>た。</p><p>一、本書の解<span>説</span>は時枝誠記が執筆し、校正は林大があた<span>つ</span>た。</p>",
      },
      {
        id: 9,
        pagemark: "五",
        body: "<h2>目次</h2><h2><span>國</span>語<span>學</span><span>槪</span>論</h2><h3>第一章　<span>國</span>語<span>學</span>の<span>槪</span>念</h3>",
      },
      {
        id: 10,
        pagemark: "",
        body: "",
      },
    ],
  },
];

export default books;
