

        function wait(seconds) {
                var ms = seconds * 1000;
                var start = new Date().getTime();
                var end = start;
                while (end < start + ms) {
                        end = new Date().getTime();
                }
        }

        console.log('before');
        wait(4);  //7 seconds in milliseconds
        console.log('after');



