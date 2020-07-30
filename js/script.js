$(function() {

  //back内の<a>タグがクリックされたときの処理
	$('#back a').on('click',function(event){

		//animate()はアニメーション効果を設定するjQueryの関数
    $('body, html').animate({

      //変化対象のプロパティ:変化値
			scrollTop:0

      //動作時間
      //ミリ秒指定以外にもslow normal fastで指定も可能
		},800);

    //<a>タグを無効にするメソッド
		event.preventDefault();
	});
});