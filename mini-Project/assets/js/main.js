const ct = $('#catImg');

    $("#btn").click(function(){
        axios({
            method:'get',
            url:"https://aws.random.cat/meow"
        
        }).then(function(data){
          ct.css('background-image',`url(${data.data.file})`);
        }).catch(function(){
          alert("REQUEST IS NOT PAWSIBBLE");
        })
      });


