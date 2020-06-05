const kyun = `ゆ❤️き❤️や❤️きゅ〜っきゅっきゅｷｭｷｭｷｭｷｭｷｭｷｭCueCueCueCueキュンゆきやッキュｷｭｷｭﾝ❤️キュンッ❤️キュッキュッキュッ❤️ｷｭｷｭﾝ❤️
#インターネット帯域の無駄
https://kyun.yukiya.me/`;
const encodedKyun = encodeURIComponent(kyun);

const openShare = () => {
  const domain = document.getElementById('server-domain').value;
  const link = `https://${domain}/share?text=${encodedKyun}`;

  window.open(link, '', 'width=500,height=400');
};

// ページ読み込み完了時にロード
window.onload = () => {
  // kyun-link classのついたリンクに対して文字列を挿入
  Array.from(document.getElementsByClassName('kyun-link')).forEach(element => {
    element.href = element.href.replace('{kyun}', encodedKyun);
  });
};
window.openShare = openShare;
