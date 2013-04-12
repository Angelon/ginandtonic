/* Author:

*/

if(typeof String.prototype.trim !== 'function') {
  String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, ''); 
  }
}

$(document).ready(function() {
    var swiper = $("#home-slider").swiper();

    $("#home-icons .navitem").bind("click", function(){
        $("#home-icons .navitem .icon").removeClass("active");
        $(this).children(".icon").addClass("active");
        $("#home-slider").animate({"opacity":"1"});
        var index = parseInt($(this).attr("contentindex"));
        swiper.swipeTo(index);
    });

    $("#home-slider .close-button").bind("click", function(){
        $("#home-icons .navitem .icon").removeClass("active");
        $("#home-slider").animate({"opacity":"0"});
    });
    /*$(".home-images").fancybox({
        openEffect  : 'none',
        closeEffect : 'none',
        wrapCSS : 'home-images',
        afterLoad : function (e){
            console.log("SOmething");
            console.log(e);
            console.log(this);
            var itemName = e.href.replace("img/home/","").replace(".png","");
            console.log(itemName);
            $(".container.home .content #home-icons .navitem .icon").removeClass("active");
            $(".container.home .content #home-icons .navitem .icon."+itemName).addClass("active");
        },
        afterClose : function (e){
            $(".container.home .content #home-icons .navitem .icon").removeClass("active");
        }
    });*/

    $(".study-nav-button").click(function(){
        var studyName = $(this).attr("study");
        showStudy(studyName);
    });
   //console.log(window.location);
    $(".header .navitem").click(function(){
        var destination = $(this).attr("destination");
        var currentHash = window.location.hash.replace("#", "");
        if(currentHash == destination){
            goToSection(destination);
        }
        window.location = window.location.protocol + "//" + window.location.hostname + window.location.pathname + "#" + destination;
    });

    $(".container").css("min-height",$(window).height());
    $(window).bind('hashchange', function(e) {
        e.preventDefault();
        var targetName = window.location.hash.replace("#","");
        goToSection(targetName);
    });

    
});

function goToSection(targetName){
    var element = $(".container."+targetName);
    $(window).scrollTo(element, 800);
    $(".header .navitem").removeClass("active");
    $(".header .navitem[destination="+targetName+"]").addClass("active");
}

function showStudy(studyName){
    $(".study").hide();
    $("[title='"+studyName+"']").show();

    $(".creative-study").attr("class","container creative-study");
    $(".creative-study").addClass(studyName);

    $(".container.creative-study .content .navigation .navitem").removeClass("active");
    $(".container.creative-study .content .navigation .navitem[study="+studyName+"]").addClass("active");
}


(function ($) {
 
    var workitems = [
        { name: "Out Of Town.TV", header: "Duke Tip Rebrand", html5url: "0123456789", flashurl: "anemail@me.com", type : "website", screenshot : "out-of-town-tv.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales odio nec justo semper tristique. Donec iaculis sollicitudin est. Nulla pulvinar risus eget ante vehicula at venenatis sem rutrum. Morbi dignissim justo in orci gravida at laoreet dui tempus. Duis ac libero mi, non venenatis felis. Aliquam lectus ipsum, congue et gravida vel, gravida et elit." },

        { name: "ESPN Endless Drama", header: "Duke Tip Rebrand", html5url: "0123456789", flashurl: "anemail@me.com", type : "website", screenshot : "espn-endless-drama.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales odio nec justo semper tristique. Donec iaculis sollicitudin est. Nulla pulvinar risus eget ante vehicula at venenatis sem rutrum. Morbi dignissim justo in orci gravida at laoreet dui tempus. Duis ac libero mi, non venenatis felis. Aliquam lectus ipsum, congue et gravida vel, gravida et elit." },

        { name: "Duke Tip", header: "Duke Tip Rebrand", html5url: "0123456789", flashurl: "anemail@me.com", type : "website", screenshot : "duke-tip.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales odio nec justo semper tristique. Donec iaculis sollicitudin est. Nulla pulvinar risus eget ante vehicula at venenatis sem rutrum. Morbi dignissim justo in orci gravida at laoreet dui tempus. Duis ac libero mi, non venenatis felis. Aliquam lectus ipsum, congue et gravida vel, gravida et elit." },

        { name: "Scott Safety", header: "Duke Tip Rebrand", html5url: "0123456789", flashurl: "anemail@me.com", type : "website", screenshot : "scott-safety.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales odio nec justo semper tristique. Donec iaculis sollicitudin est. Nulla pulvinar risus eget ante vehicula at venenatis sem rutrum. Morbi dignissim justo in orci gravida at laoreet dui tempus. Duis ac libero mi, non venenatis felis. Aliquam lectus ipsum, congue et gravida vel, gravida et elit." },

        { name: "FGI Research", header: "Duke Tip Rebrand", html5url: "0123456789", flashurl: "anemail@me.com", type : "website", screenshot : "fgi-research.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales odio nec justo semper tristique. Donec iaculis sollicitudin est. Nulla pulvinar risus eget ante vehicula at venenatis sem rutrum. Morbi dignissim justo in orci gravida at laoreet dui tempus. Duis ac libero mi, non venenatis felis. Aliquam lectus ipsum, congue et gravida vel, gravida et elit." },

        { name: "Instyle Trendsetters", header: "Duke Tip Rebrand", html5url: "0123456789", flashurl: "anemail@me.com", type : "website", screenshot : "instyle-trendsetters.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales odio nec justo semper tristique. Donec iaculis sollicitudin est. Nulla pulvinar risus eget ante vehicula at venenatis sem rutrum. Morbi dignissim justo in orci gravida at laoreet dui tempus. Duis ac libero mi, non venenatis felis. Aliquam lectus ipsum, congue et gravida vel, gravida et elit." },

        { name: "Target Redcard", header: "Duke Tip Rebrand", html5url: "0123456789", flashurl: "anemail@me.com", type : "website", screenshot : "target-redcard.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales odio nec justo semper tristique. Donec iaculis sollicitudin est. Nulla pulvinar risus eget ante vehicula at venenatis sem rutrum. Morbi dignissim justo in orci gravida at laoreet dui tempus. Duis ac libero mi, non venenatis felis. Aliquam lectus ipsum, congue et gravida vel, gravida et elit." },

        { name: "3:10 To Yuma", header: "Duke Tip Rebrand", html5url: "0123456789", flashurl: "anemail@me.com", type : "website", screenshot : "310-to-yuma.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales odio nec justo semper tristique. Donec iaculis sollicitudin est. Nulla pulvinar risus eget ante vehicula at venenatis sem rutrum. Morbi dignissim justo in orci gravida at laoreet dui tempus. Duis ac libero mi, non venenatis felis. Aliquam lectus ipsum, congue et gravida vel, gravida et elit." },

        { name: "Polaris Duel", header: "Duke Tip Rebrand", html5url: "0123456789", flashurl: "anemail@me.com", type : "website", screenshot : "polaris.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales odio nec justo semper tristique. Donec iaculis sollicitudin est. Nulla pulvinar risus eget ante vehicula at venenatis sem rutrum. Morbi dignissim justo in orci gravida at laoreet dui tempus. Duis ac libero mi, non venenatis felis. Aliquam lectus ipsum, congue et gravida vel, gravida et elit." },

        { name: "Hilton Head", header: "Duke Tip Rebrand", html5url: "0123456789", flashurl: "anemail@me.com", type : "website", screenshot : "hilton-head.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales odio nec justo semper tristique. Donec iaculis sollicitudin est. Nulla pulvinar risus eget ante vehicula at venenatis sem rutrum. Morbi dignissim justo in orci gravida at laoreet dui tempus. Duis ac libero mi, non venenatis felis. Aliquam lectus ipsum, congue et gravida vel, gravida et elit." },

        { name: "Onemba", header: "Duke Tip Rebrand", html5url: "0123456789", flashurl: "anemail@me.com", type : "website", screenshot : "onemba.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales odio nec justo semper tristique. Donec iaculis sollicitudin est. Nulla pulvinar risus eget ante vehicula at venenatis sem rutrum. Morbi dignissim justo in orci gravida at laoreet dui tempus. Duis ac libero mi, non venenatis felis. Aliquam lectus ipsum, congue et gravida vel, gravida et elit." },

        { name: "Ikaati", header: "Duke Tip Rebrand", html5url: "0123456789", flashurl: "anemail@me.com", type : "website", screenshot : "ikaati.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales odio nec justo semper tristique. Donec iaculis sollicitudin est. Nulla pulvinar risus eget ante vehicula at venenatis sem rutrum. Morbi dignissim justo in orci gravida at laoreet dui tempus. Duis ac libero mi, non venenatis felis. Aliquam lectus ipsum, congue et gravida vel, gravida et elit." },

        { name: "Best Buy", header: "Duke Tip Rebrand", html5url: "0123456789", flashurl: "anemail@me.com", type : "website", screenshot : "bestbuy.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales odio nec justo semper tristique. Donec iaculis sollicitudin est. Nulla pulvinar risus eget ante vehicula at venenatis sem rutrum. Morbi dignissim justo in orci gravida at laoreet dui tempus. Duis ac libero mi, non venenatis felis. Aliquam lectus ipsum, congue et gravida vel, gravida et elit." },

        { name: "Best Buy Video", header: "Duke Tip Rebrand", html5url: "0123456789", flashurl: "anemail@me.com", type : "video",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales odio nec justo semper tristique. Donec iaculis sollicitudin est. Nulla pulvinar risus eget ante vehicula at venenatis sem rutrum. Morbi dignissim justo in orci gravida at laoreet dui tempus. Duis ac libero mi, non venenatis felis. Aliquam lectus ipsum, congue et gravida vel, gravida et elit." },

        { name: "Ikaati Video", header: "Duke Tip Rebrand", html5url: "0123456789", flashurl: "anemail@me.com", type : "video",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales odio nec justo semper tristique. Donec iaculis sollicitudin est. Nulla pulvinar risus eget ante vehicula at venenatis sem rutrum. Morbi dignissim justo in orci gravida at laoreet dui tempus. Duis ac libero mi, non venenatis felis. Aliquam lectus ipsum, congue et gravida vel, gravida et elit." },

        { name: "Best Buy Video 2", header: "Duke Tip Rebrand", html5url: "0123456789", flashurl: "anemail@me.com", type : "video",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales odio nec justo semper tristique. Donec iaculis sollicitudin est. Nulla pulvinar risus eget ante vehicula at venenatis sem rutrum. Morbi dignissim justo in orci gravida at laoreet dui tempus. Duis ac libero mi, non venenatis felis. Aliquam lectus ipsum, congue et gravida vel, gravida et elit." },

        { name: "Ikaati Video 2", header: "Duke Tip Rebrand", html5url: "0123456789", flashurl: "anemail@me.com", type : "video",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales odio nec justo semper tristique. Donec iaculis sollicitudin est. Nulla pulvinar risus eget ante vehicula at venenatis sem rutrum. Morbi dignissim justo in orci gravida at laoreet dui tempus. Duis ac libero mi, non venenatis felis. Aliquam lectus ipsum, congue et gravida vel, gravida et elit." },

        { name: "Best Buy Animation", header: "Duke Tip Rebrand", html5url: "0123456789", flashurl: "anemail@me.com", type : "animation",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales odio nec justo semper tristique. Donec iaculis sollicitudin est. Nulla pulvinar risus eget ante vehicula at venenatis sem rutrum. Morbi dignissim justo in orci gravida at laoreet dui tempus. Duis ac libero mi, non venenatis felis. Aliquam lectus ipsum, congue et gravida vel, gravida et elit." },

        { name: "Best Buy Mobile", header: "Duke Tip Rebrand", html5url: "0123456789", flashurl: "anemail@me.com", type : "mobile",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales odio nec justo semper tristique. Donec iaculis sollicitudin est. Nulla pulvinar risus eget ante vehicula at venenatis sem rutrum. Morbi dignissim justo in orci gravida at laoreet dui tempus. Duis ac libero mi, non venenatis felis. Aliquam lectus ipsum, congue et gravida vel, gravida et elit." },
    ];

    var people = [
        { name: "Tim McCracken", role: "Founder Digital Director", email: "anemail@me.com",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales odio nec justo semper tristique. Donec iaculis sollicitudin est. Nulla pulvinar risus eget ante vehicula at venenatis sem rutrum. Morbi dignissim justo in orci gravida at laoreet dui tempus. Duis ac libero mi, non venenatis felis. Aliquam lectus ipsum, congue et gravida vel, gravida et elit." },

        { name: "Rocky Goldsmith", role: "Digital Strategist", email: "anemail@me.com",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales odio nec justo semper tristique. Donec iaculis sollicitudin est. Nulla pulvinar risus eget ante vehicula at venenatis sem rutrum. Morbi dignissim justo in orci gravida at laoreet dui tempus. Duis ac libero mi, non venenatis felis. Aliquam lectus ipsum, congue et gravida vel, gravida et elit." },

        { name: "Clarence Bradley", role: "Writer", email: "anemail@me.com",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales odio nec justo semper tristique. Donec iaculis sollicitudin est. Nulla pulvinar risus eget ante vehicula at venenatis sem rutrum. Morbi dignissim justo in orci gravida at laoreet dui tempus. Duis ac libero mi, non venenatis felis. Aliquam lectus ipsum, congue et gravida vel, gravida et elit." },

        { name: "Chris Johnson", role: "Chris Johnson", email: "anemail@me.com",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales odio nec justo semper tristique. Donec iaculis sollicitudin est. Nulla pulvinar risus eget ante vehicula at venenatis sem rutrum. Morbi dignissim justo in orci gravida at laoreet dui tempus. Duis ac libero mi, non venenatis felis. Aliquam lectus ipsum, congue et gravida vel, gravida et elit." },

        { name: "Carter Corker", role: "Front End Programmer Javascript", email: "anemail@me.com", image: "img/team-portrait-carter-corker.png",
        description: "Torem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales odio nec justo semper tristique. Donec iaculis sollicitudin est. Nulla pulvinar risus eget ante vehicula at venenatis sem rutrum. Morbi dignissim justo in orci gravida at laoreet dui tempus. Duis ac libero mi, non venenatis felis. Aliquam lectus ipsum, congue et gravida vel, gravida et elit." },

        { name: "Nicola Games", role: "Project Manager", email: "anemail@me.com",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales odio nec justo semper tristique. Donec iaculis sollicitudin est. Nulla pulvinar risus eget ante vehicula at venenatis sem rutrum. Morbi dignissim justo in orci gravida at laoreet dui tempus. Duis ac libero mi, non venenatis felis. Aliquam lectus ipsum, congue et gravida vel, gravida et elit." },

        { name: "Michael Gerwe", role: "Designer", email: "anemail@me.com",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales odio nec justo semper tristique. Donec iaculis sollicitudin est. Nulla pulvinar risus eget ante vehicula at venenatis sem rutrum. Morbi dignissim justo in orci gravida at laoreet dui tempus. Duis ac libero mi, non venenatis felis. Aliquam lectus ipsum, congue et gravida vel, gravida et elit." },

        { name: "Niki Forte", role: "Designer Illustrator", email: "anemail@me.com",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales odio nec justo semper tristique. Donec iaculis sollicitudin est. Nulla pulvinar risus eget ante vehicula at venenatis sem rutrum. Morbi dignissim justo in orci gravida at laoreet dui tempus. Duis ac libero mi, non venenatis felis. Aliquam lectus ipsum, congue et gravida vel, gravida et elit." },

        ];

    var WorkItem = Backbone.Model.extend({
    	defaults:{screenshot:"screenshot-placeholder.png"},
        initialize:function (){
            var screenshotPath = "img/work/";
            if(this.get("screenshot") != "screenshot-placeholder.png"){
                screenshotPath += this.get("type") + "/";
            }
            screenshotPath += this.get("screenshot");
            this.set({screenshot:screenshotPath});
        }
    });

    var WorkItemList = Backbone.Collection.extend({
    	model: WorkItem
    });

    var WorkItemView = Backbone.View.extend({
        className: "workitem",
        template: $("#workItemTemplate").html(),

        render: function (){
            var tmpl = _.template(this.template);
            this.$el.html(tmpl(this.model.toJSON()));
            return this;
        }
    });

    var WorkView = Backbone.View.extend({
    	el: $(".container.work .workitems"),
    	currentItemName:"",

    	initialize: function () {
	        this.collection = new WorkItemList(workitems);
	        
	        this.collection.on("reset", this.render, this);
	        this.showWorkItemByName("");
	    },

	    render: function () {
	        var that = this;
	        _.each(this.collection.models, function (item) {
	            that.renderItem(item);
	        }, this);
	    },

	    renderItem: function (item) {
	        var workItemView = new WorkItemView({
	            model: item
	        });
	        this.$el.html(workItemView.render().el);
	    },

	    showWorkItemByName: function (itemName, workView){
        	if (itemName === "") {
				this.currentItemName = this.collection.models[0].get("name");
		    }
		    else {
		    	this.currentItemName = itemName;
		    }

		    this.collection.reset(workitems, { silent: true });
		 	var currentItemName = this.currentItemName,
	            filtered = _.filter(this.collection.models, function (item) {
	            return item.get("name") === currentItemName;
	        });
	 
	        this.collection.reset(filtered);
            workNavView.updateActiveItem(this.currentItemName);
        }
    });

    var WorkCategory = Backbone.Model.extend({

    });

    var WorkCategoryList = Backbone.Collection.extend({
    	model: WorkCategory
    });

    var WorkCategoryView = Backbone.View.extend({
		className: "category",
        template: $("#workNavTemplate").html(),

        render: function (){
            var tmpl = _.template(this.template);
            this.$el.html(tmpl(this.model.toJSON()));
            return this;
        }
    });

    var WorkNavItemView = Backbone.View.extend({
    	className: "navitem",
    	template: $("#workNavItemTemplate").html(),
    	render: function () {
    		var tmpl = _.template(this.template);
            this.$el.html(tmpl(this.model.toJSON()));
            //console.log(this.model);
            this.$el.attr("title",this.model.get("name"));
            return this;
    	}
    });

    var WorkNavView = Backbone.View.extend({
    	el: $(".container.work .navigation"),
    	types:[],
    	currentItemName:"",

    	initialize: function () {
	        this.collection = new WorkItemList(workitems);
	        this.types = this.getTypes();
	        //console.log(this.types);
	        this.render();
	    },

	    render: function () {
	        var that = this;

	        _.each(this.types.models, function (type) {
	            filtered = _.filter(that.collection.models, function (item) {
	            	return (item.get("type")) ? item.get("type").toLowerCase() === type.get("type") : false;
	        	});

	            that.renderCategory(type, filtered);
	        }, this);
	    },

	    renderCategory: function (item, models) {
	        var workCategoryView = new WorkCategoryView({
	            model:item
	        });
	        
	        this.$el.append(workCategoryView.render().el);

	        var navgroup = $("<div>")
	        _.each(models, function (item){
	        	var workNavItemView = new WorkNavItemView({
	        		model:item
	        	});

	        	navgroup.append(workNavItemView.render().el);
	        });

	        this.$el.append(navgroup);
	    },

    	getTypes: function () {
    		var typeCounter = 0;
    		var myTypes = [];
    		var types = _.uniq(this.collection.pluck("type"), false, function (type) {
		        return type;
		    });
		    for(var x in types){

                if(types[x] != undefined && types[x] != "undefined"){
                    typeCounter++;
                    var typeObject = {"type": types[x].toLowerCase(), number:typeCounter, "title":types[x]};
                    myTypes.push(typeObject);
                }
		    	
		    }
		    myTypes = new WorkCategoryList(myTypes);
    		return myTypes;
		},



    	events: {
            "click .container.work .navitem": "showWorkItemByName"
        },

        showWorkItemByName: function (e){
            var item = $(e.target);
            itemName = item.html().trim();
		    if(workView){
		    	workView.showWorkItemByName(itemName);
		    }
        },

        updateActiveItem: function(itemName){
            $(".container.work .navigation div .navitem").removeClass("active");
            $(".container.work .navigation div .navitem[title='" + itemName + "']").addClass("active");
        }

    });

    var workNavView = new WorkNavView();
    var workView = new WorkView();
    $(".container.work .content .navigation").accordion({ header: '.category', autoHeight:false, icons:false });


    var TeamMember = Backbone.Model.extend({
    	defaults:{image:"img/team-portrait-placeholder.png"}
    });

    var TeamMemberList = Backbone.Collection.extend({
    	model: TeamMember
    });

    var TeamMemberView = Backbone.View.extend({
    	className:"teammember",
    	template: $("#teamMemberTemplate").html(),

        render: function (){
            var tmpl = _.template(this.template);
            this.$el.html(tmpl(this.model.toJSON()));
            return this;
        }
    });

    var TeamMembersView = Backbone.View.extend({
    	el: $(".container.team .teammembers"),
    	currentItemName:"",

    	initialize: function () {
	        this.collection = new TeamMemberList(people);
	        
	        this.collection.on("reset", this.render, this);
	        this.showTeamMemberByName("");
	    },

	    render: function () {
	        var that = this;
	        _.each(this.collection.models, function (item) {
	            that.renderItem(item);
	        }, this);
	    },

	    renderItem: function (item) {
	        var teamMemberView = new TeamMemberView({
	            model: item
	        });
	        this.$el.html(teamMemberView.render().el);
	    },

	    showTeamMemberByName: function (itemName){

        	if (itemName === "") {
				this.currentItemName = this.collection.models[0].get("name");
		    }
		    else {
		    	this.currentItemName = itemName;
		    }

		    this.collection.reset(people, { silent: true });
		 	var currentItemName = this.currentItemName,
	            filtered = _.filter(this.collection.models, function (item) {
	            return item.get("name") === currentItemName;
	        });
            teamMemberNav.updateActiveItem(this.currentItemName);
	            
	 
	        this.collection.reset(filtered);
        }
    });

    var TeamMemberNavItemView = Backbone.View.extend({
    	tagName:"div",
        className:"navitem",
    	template: $("#teamMemberNavItemTemplate").html(),

        render: function (){
            var tmpl = _.template(this.template);
            this.$el.html(tmpl(this.model.toJSON()));
            this.$el.attr("membername", this.model.get("name"));
            return this;
        }
    });

    var TeamMemberNav = Backbone.View.extend({
    	el: $(".container.team .navigation"),

    	initialize: function () {
	        this.collection = new TeamMemberList(people);
	        this.render();
	    },

	    render: function () {
	        var that = this;
	        _.each(this.collection.models, function (type) {
	            that.renderTeamNavItem(type, filtered);
	        });
	    },

	    renderTeamNavItem: function (item, models) {
	        var teamMemberNavItemView = new TeamMemberNavItemView({
	            model:item
	        });
	        
	        this.$el.append(teamMemberNavItemView.render().el);
	    },

	    events: {
            "click .container.team .navitem": "clickHandler"
        },

        clickHandler: function (e){
		    var itemName = $(e.target).html().trim();
		    if(teamMembersView){
		    	teamMembersView.showTeamMemberByName(itemName);
		    }
        },

        updateActiveItem: function(itemName){
            $(".container.team .navigation .navitem").removeClass("active");
            $(".container.team .navigation .navitem[membername='" + itemName + "']").addClass("active");
        }
    });

	 var teamMemberNav = new TeamMemberNav();
	 var teamMembersView = new TeamMembersView();

/*var typeCounter = 0;
		    var myTypes =  _.uniq(this.collection.pluck("type"), false, function (type) {
		    	typeCounter++;
		    	var typeObject = {"type": type.toLowerCase(), number:typeCounter}
		        return typeObject;
		    });

		    return myTypes;*/
 
} (jQuery));




