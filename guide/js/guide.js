var UI_GUIDE = UI_GUIDE||{};
UI_GUIDE.GNB = {
    init : function(){
        this.setButton();
        this.setAllMenuButton();
        this.setAllMenuCloseButton();
    },
    reset : function(){
        $(".GNB>ul>li").each(function(index, item){
            $(item).removeClass("on");
        });
    },
    setAllMenuButton : function(){
        var _self=this;
        $(".btn-allmenu").click(function(e){
            _self.open();
        });
    },
    setAllMenuCloseButton : function(){
        var _self=this;
        $(".btn-allmenu-close").click(function(e){
            _self.close();
        });
    },
    setButton : function(){
        var _self = this;
        $(".GNB>ul>li").click(function(e){
            _self.reset();
            var id = $(this).attr("id");
            switch(id){
                case "styleGuide":
                    UI_GUIDE.content.load("./style_guide.html");
                    break;
                case "component":
                    UI_GUIDE.content.load("./component.html");
                    break;
                case "template":
                    UI_GUIDE.content.load("./template.html");
                    break;
                case "pages":
                    UI_GUIDE.content.load("./pages.html");
                    break;
                default:
                    UI_GUIDE.content.load("./main.html");
                    break;
            }
            $(this).addClass("on");
            _self.close();
        });

        $(".title>h2").click(function(e){
            _self.reset();
            UI_GUIDE.content.load("./main.html");
            _self.close();
        });

        $(".title>h2").trigger( "click" );
    },
    open : function(){
        $(".GNB").addClass("on");
    },
    close : function(){
        $(".GNB").removeClass("on");
    }
};
UI_GUIDE.LNB = {
    init : function(){
        this.setButton();
    },
    setButton : function(){
        var _self = this;
        $(".LNB>ul>li").click(function(e){
            console.log("ddddd");
            setTimeout(function(){
                $(window).scrollLeft(0);
            },10);
        });
    }
};
UI_GUIDE.content = {
    init : function(){
        $(".btn-lnb").click(function(){
            $(".wrap").toggleClass("lnb");
        });
    },
    load : function(url){
        $(".contents>iframe").attr("src",url)
    }
};
UI_GUIDE.page = {
    init : function(){
        this.setList();
        this.setOdsList();
        this.setAdminList();
    },
    setList : function(){
        var cnt = 0;
        var tag = "";

        for( var i=0;i<guide_data.length;i++){
            try{
                cnt++;
                tag += "<tr>";
                tag += "<td>"+cnt+"</td>";
                tag += "<td>"+guide_data[i]["id"]+"</td>";
                if(guide_data[i]["class"] == undefined){
                    guide_data[i]["class"] = "";
                };
                tag += "<td>"+guide_data[i]["class"]+"</td>";
                tag += "<td>"+guide_data[i]["1depth"]+"</td>";
                tag += "<td>"+guide_data[i]["pageName"]+"</td>";
                if(guide_data[i]["type"] == undefined){
                    guide_data[i]["type"] = "page"
                }
                tag += "<td>"+guide_data[i]["type"]+"</td>";
                tag += "<td>"+guide_data[i]["name"]+"</td>";
                tag += "<td>"+guide_data[i]["start_date"]+"</td>";
                tag += "<td>"+guide_data[i]["end_date"]+"</td>";
                tag += "<td>"+guide_data[i]["progress"]+"%</td>";
                tag += "<td>";
                if(guide_data[i]["update"] == undefined){
                    guide_data[i]["update"] = "";
                };
                tag += guide_data[i]["update"] + "</td>";
                tag += "<td><a href='"+guide_data[i]["url"]+"' target='_blank'>"+guide_data[i]["url"]+"</a>";
                if(guide_data[i]["type"] == "popup"){
                    tag += "<a href='../guide/popupView.html?url="+guide_data[i]["url"]+"' target='_blank'>팝업보기</a>";
                }else if(guide_data[i]["type"] == "popup_loading"){
                    tag += "<a href='../guide/popupView.html?url="+guide_data[i]["url"]+"&type=loading' target='_blank'>팝업보기</a>";
                }
                tag += "</td>";
                if(guide_data[i]["memo"] == undefined){
                    guide_data[i]["memo"] = "";
                };
                tag += "<td>"+guide_data[i]["memo"]+"</td>";
                tag += "</tr>";
            }catch(e){
                console.log(e.message)
            }

        }

        $("#pageList>tbody").append(tag);
    },
    setOdsList : function(){
        var cnt = 0;
        var tag = "";

        for( var i=0;i<guide_data2.length;i++){
            try{
                cnt++;
                tag += "<tr>";
                tag += "<td>"+cnt+"</td>";
                tag += "<td>"+guide_data2[i]["id"]+"</td>";
                if(guide_data2[i]["class"] == undefined){
                    guide_data2[i]["class"] = "";
                };
                tag += "<td>"+guide_data2[i]["class"]+"</td>";
                tag += "<td>"+guide_data2[i]["1depth"]+"</td>";
                tag += "<td>"+guide_data2[i]["pageName"]+"</td>";
                if(guide_data2[i]["type"] == undefined){
                    guide_data2[i]["type"] = "page"
                }
                tag += "<td>"+guide_data2[i]["type"]+"</td>";
                tag += "<td>"+guide_data2[i]["name"]+"</td>";
                tag += "<td>"+guide_data2[i]["start_date"]+"</td>";
                tag += "<td>"+guide_data2[i]["end_date"]+"</td>";
                tag += "<td>"+guide_data2[i]["progress"]+"%</td>";
                tag += "<td>";
                if(guide_data2[i]["update"] == undefined){
                    guide_data2[i]["update"] = "";
                };
                tag += guide_data2[i]["update"] + "</td>";
                tag += "<td><a href='"+guide_data2[i]["url"]+"' target='_blank'>"+guide_data2[i]["url"]+"</a>";
                if(guide_data2[i]["type"] == "popup"){
                    tag += "<a href='../guide/popupView.html?url="+guide_data2[i]["url"]+"' target='_blank'>팝업보기</a>";
                }else if(guide_data2[i]["type"] == "popup_loading"){
                    tag += "<a href='../guide/popupView.html?url="+guide_data2[i]["url"]+"&type=loading' target='_blank'>팝업보기</a>";
                }
                tag += "</td>";
                if(guide_data2[i]["memo"] == undefined){
                    guide_data2[i]["memo"] = "";
                };
                tag += "<td>"+guide_data2[i]["memo"]+"</td>";
                tag += "</tr>";
            }catch(e){
                console.log(e.message)
            }

        }

        $("#pageList2>tbody").append(tag);
    },
    setAdminList : function(){
        var cnt = 0;
        var tag = "";

        for( var i=0;i<guide_data3.length;i++){
            try{
                cnt++;
                tag += "<tr>";
                tag += "<td>"+cnt+"</td>";
                tag += "<td>"+guide_data3[i]["id"]+"</td>";
                if(guide_data3[i]["class"] == undefined){
                    guide_data3[i]["class"] = "";
                };
                tag += "<td>"+guide_data3[i]["class"]+"</td>";
                tag += "<td>"+guide_data3[i]["1depth"]+"</td>";
                tag += "<td>"+guide_data3[i]["pageName"]+"</td>";
                if(guide_data3[i]["type"] == undefined){
                    guide_data3[i]["type"] = "page"
                }
                tag += "<td>"+guide_data3[i]["type"]+"</td>";
                tag += "<td>"+guide_data3[i]["name"]+"</td>";
                tag += "<td>"+guide_data3[i]["start_date"]+"</td>";
                tag += "<td>"+guide_data3[i]["end_date"]+"</td>";
                tag += "<td>"+guide_data3[i]["progress"]+"%</td>";
                tag += "<td>";
                if(guide_data3[i]["update"] == undefined){
                    guide_data3[i]["update"] = "";
                };
                tag += guide_data3[i]["update"] + "</td>";
                tag += "<td><a href='"+guide_data3[i]["url"]+"' target='_blank'>"+guide_data3[i]["url"]+"</a>";
                if(guide_data3[i]["type"] == "popup"){
                    tag += "<a href='../guide/popupView.html?url="+guide_data3[i]["url"]+"' target='_blank'>팝업보기</a>";
                }else if(guide_data3[i]["type"] == "popup_loading"){
                    tag += "<a href='../guide/popupView.html?url="+guide_data3[i]["url"]+"&type=loading' target='_blank'>팝업보기</a>";
                }
                tag += "</td>";
                if(guide_data3[i]["memo"] == undefined){
                    guide_data3[i]["memo"] = "";
                };
                tag += "<td>"+guide_data3[i]["memo"]+"</td>";
                tag += "</tr>";
            }catch(e){
                console.log(e.message)
            }

        }

        $("#pageList3>tbody").append(tag);
    }
}