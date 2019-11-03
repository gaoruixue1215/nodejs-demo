#!/usr/bin/node

const http = require('http'),
      fs = require('fs'),
      url = require('url'),
      qs = require('querystring');

http.createServer(function(req,res){
    var urls = '';
    if(req.url!== "/favicon.ico"){
        urls = req.url;
    }
    var url1 = urls.split('/')[1];
    //console.log(url1);
    var url2 = urls.split('/')[2];
    var url3 = urls.split('/')[3];

    //列表页
    if(urls==='/list'){
        res.writeHead(200,{'Content-Type':'text/html'});
        fs.readFile('./chapterList.html',(err,data)=>{
            if(err){
                console.log(err.message);
                process.exit(1);
            }    
            else{
                res.write(data.toString('utf-8'));
                res.end();        
            }
        });
    }

    if(url1==='css'){
        res.writeHead(200,{'Content-Type':'text/css'});
        fs.readFile('./css/'+url2,(err,data)=>{
            if(err){
                console.log(err.message);
                process.exit(1);
            }else{
                res.write(data.toString('utf-8'));
                res.end();                       
            }
        });
    }

    if(urls ==='/js/baiduTemplate.js'){
        res.writeHead(200,{'Content-Type':'text/javascript'});
        fs.readFile('./js/baiduTemplate.js',(err,data)=>{
            if(err){
                console.log(err.message);
                process.exit(1);
            }    
            else{
                res.write(data.toString('utf-8'));
                res.end();        
            }
        });
    }

    if(url1==='images'){//图片加载
        res.writeHead(200,{'Content-Type':'image/jpeg'});
        if(url2 !== 'img'){
            fs.readFile('./images/'+url2,'binary',function(err,data){
                if(err){
                    console.log(err.message);
                    process.exit(1);
                }else{
                    res.write(data,'binary');
                    res.end();
                }
            });
        }else{
            fs.readFile('./images/img/'+url3,'binary',(err,data)=>{
                if(err){
                    console.log(err.message);
                    process.exit(1);
                }else{
                    res.write(data,'binary');
                    res.end();
                }
            });
        }
    }


    //博客详情页
    if(urls === '/detail'){
        res.writeHead(200,{'Content-Type':'text/html'});
        fs.readFile('./addChapter.html',(err,data)=>{
            if(err){
                console.log(err.message);
                process.exit(1);
            }    
            else{
                res.write(data.toString('utf-8'));
                res.end();        
            }
        });
    }


    //后台登录页面
    //console.log(urls);-------    /login    /login_bg.jpg
    if(urls === '/login'){
        res.writeHead(200,{'Content-Type':'text/html'});
        fs.readFile('./login.html',(err,data)=>{
            if(err){
                console.log(err.message);
                process.exit(1);
            }    
            else{
                res.write(data.toString('utf-8'));
                res.end();        
            }
        });
    }

    if(urls === '/login_bg.jpg'){
        res.writeHead(200,{'Content-Type':'images/jpeg'});
        fs.readFile('./login_bg.jpg','binary',(err,data)=>{
            if(err){
                console.log(err.message);
                process.exit(1);
            }    
            else{
                res.write(data,'binary');
                res.end();        
            }
        });
    }

    //后台文章列表页面
    //console.log(urls);
    if(urls === '/listmanager'){
        res.writeHead(200,{'Content-Type':'text/html'});
        fs.readFile('./list.html',(err,data)=>{
            if(err){
                console.log(err.message);
                process.exit(1);
            }    
            else{
                res.write(data.toString('utf-8'));
                res.end();        
            }
        });
    }


    //后台添加文章页面
    if(urls === '/addChapter'){
        res.writeHead(200,{'Content-Type':'text/html'});
        fs.readFile('./addChapter.html',(err,data)=>{
            if(err){
                console.log(err.message);
                process.exit(1);
            }    
            else{
                res.write(data.toString('utf-8'));
                res.end();        
            }
        });
    }

    
    //添加文章
    if(urls === '/add'){
        req.on('data',(data)=>{
            var da= data.toString('utf8');
            var text = qs.parse(da);
            var length = chapterList.length+1;
            var date = new Date();
            var chapter = {
                "chapterId": length,
                "chapterName": text.title,
                "imgPath": "images/1442457564979540.jpeg",
                "chapterDes": text.title,
                "chapterContent": text.content,
                "publishTimer": date.getFullYear()+'-'+ (date.getMonth()+1)+'-'+date.getDate(),
                "author": "admin",
                "views": 402

            }
            chapterList.push(chapter);

        })
        res.end();
    }

    //用户登录验证
    if(urls==='/loginCheck'){
        req.on('data',(data)=>{
            var da= data.toString('utf8');
            var user = qs.parse(da);
            //console.log(user);
            for(var i = 0;i<userList.length;i++){
                if(userList[i].username === user.username && userList[i].pwd === user.pwd){
                    res.end();
                }
            }
        });
    }

    //阅读全文
    if(urls.indexOf("/detail?chapterId=")==0){
        res.writeHead(200,{'Content-Type':'text/html'});
        fs.readFile('./chapter.html',(err,data)=>{
            if(err){
                console.log(err.message);
                process.exit(1);
            }    
            else{
                res.write(data.toString('utf-8'));
                res.end();        
            }
        });
    }
    if(urls.indexOf("/getDetail?chapterId=")==0){
        var data = qs.parse(urls,"?",null,{maxKeys:2});
        var id = chapterList[data.chapterId-1];
        var json = JSON.stringify(id);
        res.write(json);    
        res.end();
    }

    if(urls === '/list_load'){
        var json = JSON.stringify(chapterList);
        res.write(json);    
        res.end(); 
    }

}).listen(8083);

var chapterList = [
    {
        "chapterId": 1,
        "chapterName": "hello ,这是后台取到的数据",
        "imgPath": "images/1442457564979540.jpeg",
        "chapterDes": "注定，有些路，只能一个人走；有些事，",
        "chapterContent": "有人说，生活生活，就是生下来活下去，也有人说，生容易，活容易，生活不容易。有个朋友曾经和我说，这个世界，大多数人都没有生活，他们有的仅仅是生存。我赞同这种说法吧，只是生存，对于我们可能都是一种奢侈。每个人都在努力，努力为着这个本来不属于我们的生活和努力。对于含着金钥匙而成长的人，我们又羡慕又嫉妒。可我们没有想过，他们的先人在斩荆棘的时候，付出的艰辛和艰苦，才有了后代荣华。生活是什么,其实在我看来，生活是一种需要，在你最需要亲人的时候，亲人已经突然不在了。子欲养而亲不待，说得成其深，对于我们是一种思考。他们的离开，对于我们都是一种打击，可也是一种思考。离开时痛苦的，可是生活就是有生老病死，当你一直都习惯存在的人已经离开的时候，慢慢地，你会看透很多，这就是你面对生活所需要的。生活是什么？其实在我看来，生活就是一种打拼，当过年过节的时候你看着别人的父母带着自己的孩子快乐的回家的时候、尔你还只能在大街上流浪的时候。许多游子和打工的人或许都有这种感觉吧，为了赚钱，为了养家。当我们看到留守儿童那迷茫孤寂的眼神，不由得心痛的时候，或许你能理解那份父母为了儿女在外打拼的奔波吧。其实在我看来，生活就是一种漠然，当你真正遇到困难而朋友都不能帮你的时候、怕你还不了钱的时候。你只能自己默默面对这一切，这一切让你十分无奈，可是你明白了一个道理，借给你是道理，不借给你是合理。人之常情，所以，想怪不能怪的时候，你留下的只是无奈。</p><p>生活是什么？</p><p>其实生活就是无奈的活着，不得不无奈的活着。我们活在这个世界上，为的只是寻找一个目标，而生活，给我们的感受，却是无奈与绝望的迷茫。这时候你不能说生活是美好和美满的吧？可是正因为有痛苦，无奈与悲伤，我们才有开心的日子。也正因为有了生存，才有了生活。</p><p>无奈的生活，才给我们无奈的心情，无奈的心情才有了悠然见南山的豁达与开朗，这就是生活，这种生活才会有着无限的魅力，也只有这种魅力才能吸引我们一直向前",
        "publishTimer": "2019-08-19",
        "author": "admin",
        "views": 1022
    },
    {
        "chapterId": 2,
        "chapterName": "那些不是事",
        "imgPath": "images/1442201163344838-lp.jpg",
        "chapterDes": "人生，原本就该这样。再大的事，无非是个经历而己。明天的太阳照样升起，就像罗俊杰个人博客​的时候水来土掩，兵来将挡。任何事情都会成为过去，只要有好的心态，就可以面对人生的.",
        "chapterContent": "有人说，生活生活，就是生下来活下去，也有人说，生容易，活容易，生活不容易。有个朋友曾经和我说，这个世界，大多数人都没有生活，他们有的仅仅是生存。我赞同这种说法吧，只是生存，对于我们可能都是一种奢侈。每个人都在努力，努力为着这个本来不属于我们的生活和努力。对于含着金钥匙而成长的人，我们又羡慕又嫉妒。可我们没有想过，他们的先人在斩荆棘的时候，付出的艰辛和艰苦，才有了后代荣华。生活是什么,其实在我看来，生活是一种需要，在你最需要亲人的时候，亲人已经突然不在了。子欲养而亲不待，说得成其深，对于我们是一种思考。他们的离开，对于我们都是一种打击，可也是一种思考。离开时痛苦的，可是生活就是有生老病死，当你一直都习惯存在的人已经离开的时候，慢慢地，你会看透很多，这就是你面对生活所需要的。生活是什么？其实在我看来，生活就是一种打拼，当过年过节的时候你看着别人的父母带着自己的孩子快乐的回家的时候、尔你还只能在大街上流浪的时候。许多游子和打工的人或许都有这种感觉吧，为了赚钱，为了养家。当我们看到留守儿童那迷茫孤寂的眼神，不由得心痛的时候，或许你能理解那份父母为了儿女在外打拼的奔波吧。其实在我看来，生活就是一种漠然，当你真正遇到困难而朋友都不能帮你的时候、怕你还不了钱的时候。你只能自己默默面对这一切，这一切让你十分无奈，可是你明白了一个道理，借给你是道理，不借给你是合理。人之常情，所以，想怪不能怪的时候，你留下的只是无奈。</p><p>生活是什么？</p><p>其实生活就是无奈的活着，不得不无奈的活着。我们活在这个世界上，为的只是寻找一个目标，而生活，给我们的感受，却是无奈与绝望的迷茫。这时候你不能说生活是美好和美满的吧？可是正因为有痛苦，无奈与悲伤，我们才有开心的日子。也正因为有了生存，才有了生活。</p><p>无奈的生活，才给我们无奈的心情，无奈的心情才有了悠然见南山的豁达与开朗，这就是生活，这种生活才会有着无限的魅力，也只有这种魅力才能吸引我们一直向前",
        "publishTimer": "2019-08-19",
        "author": "admin",
        "views": 102
    },
    {
        "chapterId": 3,
        "chapterName": "只想，留住心中的那份静美",
        "imgPath": "images/1442642178239101-lp.jpg",
        "chapterDes": "在这个鸟语花香的季节,踏着早晨罗俊杰个人博客的一缕光芒在小路间走着,呼吸着这自然的清晰空气，只想，衣袂飘飘，信步于绿荫小道，或俯首听花开，或低眉赏花香，盈脉脉春意，于眼波中...",
        "chapterContent": "有人说，生活生活，就是生下来活下去，也有人说，生容易，活容易，生活不容易。有个朋友曾经和我说，这个世界，大多数人都没有生活，他们有的仅仅是生存。我赞同这种说法吧，只是生存，对于我们可能都是一种奢侈。每个人都在努力，努力为着这个本来不属于我们的生活和努力。对于含着金钥匙而成长的人，我们又羡慕又嫉妒。可我们没有想过，他们的先人在斩荆棘的时候，付出的艰辛和艰苦，才有了后代荣华。生活是什么,其实在我看来，生活是一种需要，在你最需要亲人的时候，亲人已经突然不在了。子欲养而亲不待，说得成其深，对于我们是一种思考。他们的离开，对于我们都是一种打击，可也是一种思考。离开时痛苦的，可是生活就是有生老病死，当你一直都习惯存在的人已经离开的时候，慢慢地，你会看透很多，这就是你面对生活所需要的。生活是什么？其实在我看来，生活就是一种打拼，当过年过节的时候你看着别人的父母带着自己的孩子快乐的回家的时候、尔你还只能在大街上流浪的时候。许多游子和打工的人或许都有这种感觉吧，为了赚钱，为了养家。当我们看到留守儿童那迷茫孤寂的眼神，不由得心痛的时候，或许你能理解那份父母为了儿女在外打拼的奔波吧。其实在我看来，生活就是一种漠然，当你真正遇到困难而朋友都不能帮你的时候、怕你还不了钱的时候。你只能自己默默面对这一切，这一切让你十分无奈，可是你明白了一个道理，借给你是道理，不借给你是合理。人之常情，所以，想怪不能怪的时候，你留下的只是无奈。</p><p>生活是什么？</p><p>其实生活就是无奈的活着，不得不无奈的活着。我们活在这个世界上，为的只是寻找一个目标，而生活，给我们的感受，却是无奈与绝望的迷茫。这时候你不能说生活是美好和美满的吧？可是正因为有痛苦，无奈与悲伤，我们才有开心的日子。也正因为有了生存，才有了生活。</p><p>无奈的生活，才给我们无奈的心情，无奈的心情才有了悠然见南山的豁达与开朗，这就是生活，这种生活才会有着无限的魅力，也只有这种魅力才能吸引我们一直向前",
        "publishTimer": "2019-08-19",
        "author": "admin",
        "views": 202
    },
    {
        "chapterId": 4,
        "chapterName": "所以才会美",
        "imgPath": "images/1442539025939884-lp.jpg",
        "chapterDes": "人，越简单就会越快乐;水，掺杂东西越少才会显得清澈靓丽。大自然越安静,才会体现它的本质。人生就是这样，倘若有运，不用祈求，因为祈求也是无用。倘若无运，无需悲伤，因为悲...",
        "chapterContent": "有人说，生活生活，就是生下来活下去，也有人说，生容易，活容易，生活不容易。有个朋友曾经和我说，这个世界，大多数人都没有生活，他们有的仅仅是生存。我赞同这种说法吧，只是生存，对于我们可能都是一种奢侈。每个人都在努力，努力为着这个本来不属于我们的生活和努力。对于含着金钥匙而成长的人，我们又羡慕又嫉妒。可我们没有想过，他们的先人在斩荆棘的时候，付出的艰辛和艰苦，才有了后代荣华。生活是什么,其实在我看来，生活是一种需要，在你最需要亲人的时候，亲人已经突然不在了。子欲养而亲不待，说得成其深，对于我们是一种思考。他们的离开，对于我们都是一种打击，可也是一种思考。离开时痛苦的，可是生活就是有生老病死，当你一直都习惯存在的人已经离开的时候，慢慢地，你会看透很多，这就是你面对生活所需要的。生活是什么？其实在我看来，生活就是一种打拼，当过年过节的时候你看着别人的父母带着自己的孩子快乐的回家的时候、尔你还只能在大街上流浪的时候。许多游子和打工的人或许都有这种感觉吧，为了赚钱，为了养家。当我们看到留守儿童那迷茫孤寂的眼神，不由得心痛的时候，或许你能理解那份父母为了儿女在外打拼的奔波吧。其实在我看来，生活就是一种漠然，当你真正遇到困难而朋友都不能帮你的时候、怕你还不了钱的时候。你只能自己默默面对这一切，这一切让你十分无奈，可是你明白了一个道理，借给你是道理，不借给你是合理。人之常情，所以，想怪不能怪的时候，你留下的只是无奈。</p><p>生活是什么？</p><p>其实生活就是无奈的活着，不得不无奈的活着。我们活在这个世界上，为的只是寻找一个目标，而生活，给我们的感受，却是无奈与绝望的迷茫。这时候你不能说生活是美好和美满的吧？可是正因为有痛苦，无奈与悲伤，我们才有开心的日子。也正因为有了生存，才有了生活。</p><p>无奈的生活，才给我们无奈的心情，无奈的心情才有了悠然见南山的豁达与开朗，这就是生活，这种生活才会有着无限的魅力，也只有这种魅力才能吸引我们一直向前",
        "publishTimer": "2019-08-19",
        "author": "admin",
        "views": 102
    }
]

var userList = [
    {username: "admin", pwd: "admin"}
]