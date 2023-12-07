var UIComponent = UIComponent||{};
var allmenu;
var historyBack;

UIComponent.base = function(){
	function init(){
		allmenu = new UIComponent.allmenu();
		historyBack = new UIComponent.historyBack();
	};

	init();
};

UIComponent.allmenu = function(){
	var _self = this;
	var _container = document.getElementsByClassName("gnb")[0];

	function init(){
		setAllMenuBtn();
		setCloseBtn();
		setD1Menu();
		gnbDimmed();
	};

	function setAllMenuBtn(){
		$(".btn-allmenu").click(function(){
			_self.open();
		});
	};

	function setCloseBtn(){
		$(".gnb-aside").find(".btn-close").click(function(){
			_self.close();
		});

		$(".btn-logout").click(function(){
			//alert("aaaa"); 2020-09-18 개발요청으로 삭제
		});
	}

	//2020-11-16 gnb-dimmed 추가
	function gnbDimmed(){
		$(".gnb-dimmed").click(function(){
			_self.close();
		});
	}

	function setD1Menu(){
		console.log("setD1Menu");
		$(".gnb-menu").find("button.btn-d1").click(function(){
			$(this).closest('.d1-list').toggleClass("on");
		});
	}

	this.open = function(){
		_container.classList.add("on");
	};

	this.close = function(){
		_container.classList.remove("on");
	}

	init();
};

UIComponent.historyBack = function(){
	var _self = this;
	function init(){
		_self.reload();
	}

	this.reload = function(){
		if( $('.btn-area').children().length > 0 ){
			$('.floating-menu').addClass('bottom-margin-1');
		}
		else{
			$('.floating-menu').removeClass('bottom-margin-1');
		}
	}

	init();
}

UIComponent.accordion = function(prop){
	var _self = this;
	if(prop==undefined) return;

	var $button = prop["button"];
	var $content = prop["content"];

	var _state=false;

	function init(){
		setButton();
	}

	function setButton(){
		$button.click(function(){
			if(_state){
				_state = false;
				_self.close();
			}
			else{
				_state = true;
				_self.open();
			}
		});
	}

	this.open = function(){
		$button.addClass("accordion-open");
		$content.addClass("accordion-open");
	}

	this.close = function(){
		$button.removeClass("accordion-open");
		$content.removeClass("accordion-open");
	}

	init();
}

$(document).ready(function(){
	UIComponent.base();
});