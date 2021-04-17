function update( _v ) // input tag を更新する関数
    {
        document.querySelector( 'input' ).value = _v
    }

    function append( _v ) // 数字ボタンが押されたので数字を後ろに追加する
    {
        document.querySelector( 'input' ).value += _v
    }