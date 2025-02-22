 let s = 0
        let r1 = 1 + Math.floor(Math.random() * 11);
        let r2 = Math.floor(Math.random() * 11);

        document.getElementById('min2').innerHTML = r1;
        document.getElementById('min3').innerHTML = r2;

        document.getElementById('min1').innerHTML = s;

        function fun(ch) {

            let a = r1 * r2
            let tfr = parseInt(document.getElementsByTagName('input')[0].value)


            if (tfr == a) {
                s++
                document.getElementById('min1').innerHTML = s
            }
            else if (tfr != a) {
                s--
                document.getElementById('min1').innerHTML = s
            }
            document.getElementsByTagName('input')[0].value = ""
           //again gen
            r1 = Math.floor(Math.random() * 11)
            r2 = Math.floor(Math.random() * 11)

            document.getElementById('min2').innerHTML = r1
            document.getElementById('min3').innerHTML = r2
        }
