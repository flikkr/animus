

	var text = "...girls magnet...liquid crystal...black water...anima...animus...lilith......"
                    var speed = 100
                    var x = 0
                 function bb() {
                    var a = text.substring(0,x)
                    var b = text.substring(x,x+1).toUpperCase()
                    var c = text.substring(x+1,text.length)
                    window.status = a
                    if (x == text.length) {
                    x = 0
                    }
                    else {
                    x++
                    }
                    setTimeout("bb()",speed)
                    }
                 bb();
                 file:
