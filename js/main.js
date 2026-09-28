/**
 * 買取アルト 赤穂店 LP
 *
 * 1. クリック計測の準備
 *    data-track 属性を持つリンクがクリックされると、dataLayer にイベントを送ります。
 *    GTM / GA4 を導入するまでは何も送信されず、ページの動作にも影響しません。
 *
 *    送信される内容の例：
 *      { event: "line_click", cta_location: "hero", link_url: "https://lin.ee/xJC2f2J" }
 *
 *    イベント名（data-track の値）：
 *      line_click    … LINEボタン
 *      tel_click     … 電話ボタン
 *      select_self   … 相談入口「ご自身の家を片付けたい方」
 *      select_family … 相談入口「親御さん・ご実家のことでお悩みの方」
 *      select_care   … 相談入口「ケアマネジャー・介護事業者様」
 *      select_hobby  … 相談入口「トレカ・ゲーム・ホビーを売りたい方」
 *      map_click     … Googleマップのリンク
 *
 * 2. スマホ用の固定CTA
 *    ページ内の相談ボタン（data-cta-area）が画面に見えている間は、
 *    同じボタンが二重に並ばないよう画面下の固定CTAを隠します。
 */
(function () {
  'use strict';

  window.dataLayer = window.dataLayer || [];

  function trackClick(el) {
    var eventName = el.getAttribute('data-track');
    var params = {
      cta_location: el.getAttribute('data-track-location') || '',
      link_url: el.getAttribute('href') || ''
    };

    window.dataLayer.push(Object.assign({ event: eventName }, params));

    // GA4（gtag.js）を直接導入した場合にも送信する
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, params);
    }
  }

  document.addEventListener('click', function (e) {
    var el = e.target.closest('[data-track]');
    if (el) trackClick(el);
  });

  // 固定CTAの表示切り替え（非対応ブラウザでは常に表示）
  var ctaAreas = document.querySelectorAll('[data-cta-area]');
  if ('IntersectionObserver' in window && ctaAreas.length) {
    var visible = new Set();
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) visible.add(entry.target);
        else visible.delete(entry.target);
      });
      document.body.classList.toggle('is-cta-in-view', visible.size > 0);
    }, { threshold: 0.5 });

    ctaAreas.forEach(function (area) { observer.observe(area); });
  }
})();
