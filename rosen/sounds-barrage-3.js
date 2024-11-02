
function sound()
{
	// 対象となるID名
	var id = 'sound-file' ;

	// 初回以外だったら音声ファイルを巻き戻す
	if( typeof( document.getElementById( id ).currentTime ) != 'undefined' )
	{
		document.getElementById( id ).currentTime = 0;
	}

	// [ID:sound-file]の音声ファイルを再生[play()]する
	document.getElementById( id ).play() ;
	
}

function sleep(waitMsec) {
  var startMsec = new Date();
 
  // 指定ミリ秒間だけループさせる（CPUは常にビジー状態）
  while (new Date() - startMsec < waitMsec);
}

function reset(){
	// 対象となるID名
	var id = 'sound-file' ;
	var id2 = 'sound-file2' ;

     sleep((document.getElementById( id ).duration-document.getElementById( id ).currentTime)*1000);

    document.getElementById( id ).pause();
    document.getElementById( id ).currentTime = 0;
    document.getElementById( id2 ).play() ;
    document.getElementById( id2 ).currentTime = 0;
}