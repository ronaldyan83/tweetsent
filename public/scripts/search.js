//local script browser

var stopwords = ["a","","https","http","abbastanza","abbia","abbiamo","abbiano","abbiate","accidenti","ad","adesso","affinche","agl","agli","ahime","ahimã¨","ahimè","ai","al","alcuna","alcuni","alcuno","all","alla","alle","allo","allora","altre","altri","altrimenti","altro","altrove","altrui","anche","ancora","anni","anno","ansa","anticipo","assai","attesa","attraverso","avanti","avemmo","avendo","avente","aver","avere","averlo","avesse","avessero","avessi","avessimo","aveste","avesti","avete","aveva","avevamo","avevano","avevate","avevi","avevo","avrai","avranno","avrebbe","avrebbero","avrei","avremmo","avremo","avreste","avresti","avrete","avrà","avrò","avuta","avute","avuti","avuto","basta","ben","bene","benissimo","berlusconi","brava","bravo","buono","c","casa","caso","cento","certa","certe","certi","certo","che","chi","chicchessia","chiunque","ci","ciascuna","ciascuno","cima","cinque","cio","cioe","cioã¨","cioè","circa","citta","città","cittã","ciã²","ciò","co","codesta","codesti","codesto","cogli","coi","col","colei","coll","coloro","colui","come","cominci","comprare","comunque","con","concernente","conciliarsi","conclusione","consecutivi","consecutivo","consiglio","contro","cortesia","cos","cosa","cosi","cosã¬","così","cui","d","da","dagl","dagli","dai","dal","dall","dalla","dalle","dallo","dappertutto","davanti","degl","degli","dei","del","dell","della","delle","dello","dentro","detto","deve","devo","di","dice","dietro","dire","dirimpetto","diventa","diventare","diventato","dopo","doppio","dov","dove","dovra","dovrà","dovrã","dovunque","due","dunque","durante","e","ebbe","ebbero","ebbi","ecc","ecco","ed","effettivamente","egli","ella","entrambi","eppure","era","erano","eravamo","eravate","eri","ero","esempio","esse","essendo","esser","essere","essi","ex","fa","faccia","facciamo","facciano","facciate","faccio","facemmo","facendo","facesse","facessero","facessi","facessimo","faceste","facesti","faceva","facevamo","facevano","facevate","facevi","facevo","fai","fanno","farai","faranno","fare","farebbe","farebbero","farei","faremmo","faremo","fareste","faresti","farete","farà","farò","fatto","favore","fece","fecero","feci","fin","finalmente","finche","fine","fino","forse","forza","fosse","fossero","fossi","fossimo","foste","fosti","fra","frattempo","fu","fui","fummo","fuori","furono","futuro","generale","gente","gia","giacche","giorni","giorno","giu","già","giã","gli","gliela","gliele","glieli","glielo","gliene","governo","grande","grazie","gruppo","ha","haha","hai","hanno","ho","i","ie","ieri","il","improvviso","in","inc","indietro","infatti","inoltre","insieme","intanto","intorno","invece","io","l","la","lasciato","lato","lavoro","le","lei","li","lo","lontano","loro","lui","lungo","luogo","là","lã","ma","macche","magari","maggior","mai","male","malgrado","malissimo","mancanza","marche","me","medesimo","mediante","meglio","meno","mentre","mesi","mezzo","mi","mia","mie","miei","mila","miliardi","milioni","minimi","ministro","mio","modo","molta","molti","moltissimo","molto","momento","mondo","mosto","nazionale","ne","negl","negli","nei","nel","nell","nella","nelle","nello","nemmeno","neppure","nessun","nessuna","nessuno","niente","no","noi","nome","non","nondimeno","nonostante","nonsia","nostra","nostre","nostri","nostro","novanta","nove","nulla","nuovi","nuovo","o","od","oggi","ogni","ognuna","ognuno","oltre","oppure","ora","ore","osi","ossia","ottanta","otto","paese","parecchi","parecchie","parecchio","parte","partendo","peccato","peggio","per","perche","perchã¨","perchè","perché","percio","perciã²","perciò","perfino","pero","persino","persone","perã²","però","piedi","pieno","piglia","piu","piuttosto","piã¹","più","po","pochissimo","poco","poi","poiche","possa","possedere","posteriore","posto","potrebbe","preferibilmente","presa","press","prima","primo","principalmente","probabilmente","promesso","proprio","puo","pure","purtroppo","puã²","può","qua","qualche","qualcosa","qualcuna","qualcuno","quale","quali","qualunque","quando","quanta","quante","quanti","quanto","quantunque","quarto","quasi","quattro","quel","quella","quelle","quelli","quello","quest","questa","queste","questi","questo","qui","quindi","quinto","realmente","recente","recentemente","registrazione","relativo","riecco","rispetto","salvo","sara","sarai","saranno","sarebbe","sarebbero","sarei","saremmo","saremo","sareste","saresti","sarete","sarà","sarã","sarò","scola","scopo","scorso","se","secondo","seguente","seguito","sei","sembra","sembrare","sembrato","sembrava","sembri","sempre","senza","sette","si","sia","siamo","siano","siate","siete","sig","solito","solo","soltanto","sono","sopra","soprattutto","sotto","spesso","srl","sta","stai","stando","stanno","starai","staranno","starebbe","starebbero","starei","staremmo","staremo","stareste","staresti","starete","starà","starò","stata","state","stati","stato","stava","stavamo","stavano","stavate","stavi","stavo","stemmo","stessa","stesse","stessero","stessi","stessimo","stesso","steste","stesti","stette","stettero","stetti","stia","stiamo","stiano","stiate","sto","su","sua","subito","successivamente","successivo","sue","sugl","sugli","sui","sul","sull","sulla","sulle","sullo","suo","suoi","tale","tali","talvolta","tanto","te","tempo","terzo","th","ti","titolo","torino","tra","tranne","tre","trenta","triplo","troppo","trovato","tu","tua","tue","tuo","tuoi","tutta","tuttavia","tutte","tutti","tutto","uguali","ulteriore","ultimo","un","una","uno","uomo","va","vai","vale","vari","varia","varie","vario","verso","vi","via","RT","rt","vicino","visto","vita","voi","volta","volte","vostra","vostre","vostri","vostro","ã¨","è"]



//event listner for search argument
$("#button-addon3").on("click", function(){

    //progress barr
    $('.progress').remove();
    $('#progressbar').append(' <div class="progress" > <div id="bar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="width: 25%"></div></div>')
    //retrieve user input
    var search = $("#inputsearch").val();
    //ajax call for search tweets
    $.get('/search?' + search, function(data) {
        //callback from ajax call
        $('#bar').attr("style", "width:40%")
        chartPrint(data);
        $('#bar').attr("style", "width:60%")
        wordTweet(data);
        $('#bar').attr("style", "width:80%")
        hashtagTweet(data);
        $('#bar').attr("style", "width:100%")
  });
});

$("#formsearch").submit(function(event){

    //progress barr
    $('.progress').remove();
    $('#progressbar').append(' <div class="progress" > <div id="bar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="width: 25%"></div></div>')
    //retrieve user input
    var search = $("#inputsearch").val();
    //ajax call for search tweets
    $.get('/search?' + search, function(data) {
        //callback from ajax call
        $('#bar').attr("style", "width:40%")
        chartPrint(data);
        $('#bar').attr("style", "width:60%")
        wordTweet(data);
        $('#bar').attr("style", "width:80%")
        hashtagTweet(data);
        $('#bar').attr("style", "width:100%")

    });
    event.preventDefault();
});


//function for print chart pie of sentiment
function chartPrint(item){
    Highcharts.chart('charts', {
        chart: {
          type: 'pie',
          options3d: {
            enabled: true,
            alpha: 45,
            beta: 0
          }
        },
        title: {
          text: 'Negative, Positive and Neutral Sentiment'
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            depth: 35,
            dataLabels: {
              enabled: true,
              format: '{point.name}'
            }
          }
        },
        series: [{
          type: 'pie',
          name: 'Sentiment',
          data: [
            ['Positive', item.pos],
            {
              name: 'Negative',
              y: item.neg,
              sliced: true,
              selected: true
            },
            ['Neutral', item.neu]
          ]
        }]
    }); //end hart function
}


// function for print wordtweet word cloud
function wordTweet(data){
  // var temp = data.text.replace(/[^a-zA-Z ]/g, " ");
  // replace data receive with regex
  var temp = data.text.replace(/[`~!@#$%^&*()_|+\-=÷¿?;:'",.<>\{\}\[\]\\\/]/gi, '');
  temp = temp.toLowerCase();
  // remove word not important
  temp = remove_stopwords(temp);
  var lines = temp.split(/[,\. ]+/g);
  var result = Highcharts.reduce(lines, function (arr, word) {
        var obj = Highcharts.find(arr, function (obj) {
            return obj.name === word;
        });
        if (obj) {
            obj.weight += 1;
        } else {
            obj = {
                name: word,
                weight: 1
            };
            arr.push(obj);
        }
        return arr;
}, []);
//delete one weight object
for (var i=0; i < result.length; i++){
      if(result[i].weight == 1){
        result.splice(i,1);
        i--;
      }
}
Highcharts.chart('worldtweet', {
    series: [{
        type: 'wordcloud',
        data: result,
        name: 'Occurrences',
        allowExtendPlayingField: false,
        maxFontSize: 36,
        minFontSize: 6
    }],
    title: {
        text: 'Wordcloud of Word Tweet'
    }
});
}

//function for print hashtag word cloud
function hashtagTweet(data){
  var temp = data.hashtags.toLowerCase();
  var lines = temp.split(/[,\. ]+/g);

  var result = Highcharts.reduce(lines, function (arr, word) {
        var obj = Highcharts.find(arr, function (obj) {
            return obj.name === word;
        });
        if (obj) {
            obj.weight += 1;
        } else {
            obj = {
                name: word,
                weight: 1
            };
            arr.push(obj);
        }
        return arr;
    }, []);
  //remove one weight object
  for (var i=0; i < result.length; i++){
        if( result[i].weight == 1){
          result.splice(i,1);
          i--;
        }
  }
  Highcharts.chart('hashtagtweet', {
    series: [{
        type: 'wordcloud',
        data: result,
        name: 'Occurrences'
    }],
    title: {
        text: 'Wordcloud of HashTag Tweet'
    }
});
}


function remove_stopwords(str) {
    res = []
    words = str.split(' ')
    for(i=0;i<words.length;i++) {
        if(!stopwords.includes(words[i])) {
            res.push(words[i])
        }
    }
    return(res.join(' '))
  }
