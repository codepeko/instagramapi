$(document).ready(function()
{callAdsProfile();callLazyLoading();setTimeout(function(){callLazyLoading();$("#modal_1").trigger('click');},500);$(".show-pass").click(function(){var type=$("#pass").attr('type');if(type=='password')
{$("#pass").attr('type','text');$(this).html('Gizle');}
else
{$("#pass").attr('type','password');$(this).html('GÃ¶ster');}});if($(".swiper-story").length>0)
{var swiper=new Swiper('.swiper-story',{slidesPerView:5,slidesPerGroup:5,loop:false,loopFillGroupWithBlank:true,pagination:{el:'.swiper-pagination',clickable:true,},navigation:{nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev',},});}
if($("#search-button").length>0)
$("#search-button").focus();var who_seen_has_new_data=$("#who_seen_has_new_data").val();if(who_seen_has_new_data==1)
{$("#menu_who-looked-me").addClass('daily-stories');}
var hasNewMessage=$("#hasNewMessage").val();if(hasNewMessage==1)
{$(".notf_icon").addClass('daily-stories');$("#menu_dashboard").addClass('daily-stories');}
$(document).on("click","#hideFriendProfile",function()
{var content='';content+='<div class="row m-0 row">';content+='<div class="col-md-12 col-12 px-0 gift-container">';content+='<div class="media-view">';content+='<label>'+lang.hide_friend_username+':</label> <br /><input id="hide_friend_username" type="text" placeholder="Instagram username" value="" style="padding:4px;" />';content+='&nbsp;<input type="button" class="price-footer gift_submit" onclick="hideFriendProfile();" value="   '+lang.login.hide_pass+'   " />';content+='</div>';content+='</div>';content+='</div>';$.sweetModal({content:content,});callLazyLoading();});$(document).on("click",".gift_div",function()
{var content='';content+='<div class="row m-0 row">';content+='<div class="col-md-12 col-12 px-0 gift-container">';content+='<div class="media-view">';content+='<label>'+lang.write_username+':</label> <br /><input id="gift_username" type="text" placeholder="Instagram username" value="" style="padding:4px;" />';content+='&nbsp;<input type="button" class="price-footer gift_submit" onclick="checkGiftUser();" value="   '+lang.send_gift+'   " />';content+='</div>';content+='</div>';content+='</div>';$.sweetModal({content:content,});callLazyLoading();});$(document).on("click",".view-profile-photo",function(){var placeholder=$('#loading_svg').val();var src=$(this).find('img').attr('data-hd_src');var content='';content+='<div class="media-view">';content+='<img data-src="'+src+'" crossorigin src="'+placeholder+'" loading="lazy">';content+='<div class="download" data-file="'+src+'"><svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect opacity="0" x="0" y="0" width="24" height="24"></rect> <path d="M2,13 C2,12.5 2.5,12 3,12 C3.5,12 4,12.5 4,13 C4,13.3333333 4,15 4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 C2,15 2,13.3333333 2,13 Z" fill="#000000" fill-rule="nonzero" opacity="0.3"></path> <rect fill="#000000" opacity="0.3" transform="translate(12.000000, 8.000000) rotate(-180.000000) translate(-12.000000, -8.000000) " x="11" y="1" width="2" height="14" rx="1"></rect> <path d="M7.70710678,15.7071068 C7.31658249,16.0976311 6.68341751,16.0976311 6.29289322,15.7071068 C5.90236893,15.3165825 5.90236893,14.6834175 6.29289322,14.2928932 L11.2928932,9.29289322 C11.6689749,8.91681153 12.2736364,8.90091039 12.6689647,9.25670585 L17.6689647,13.7567059 C18.0794748,14.1261649 18.1127532,14.7584547 17.7432941,15.1689647 C17.3738351,15.5794748 16.7415453,15.6127532 16.3310353,15.2432941 L12.0362375,11.3779761 L7.70710678,15.7071068 Z" fill="#000000" fill-rule="nonzero" transform="translate(12.000004, 12.499999) rotate(-180.000000) translate(-12.000004, -12.499999) "></path></g></svg></div>';content+='</div>';$.sweetModal({content:content,});callLazyLoading();});$(document).on("click",".view-daily-story",function(){var baseurl=$("#baseurl").val();var f_id=$(this).data('f_id');var is_private=$(this).data('is_private');var serverToken=$("#serverToken").val();var can_look_story=$(this).data('can_look_story');if(can_look_story==0)
{if(getSeenLimit()==0)
var text=lang.label_reached_limit_post_fake;else
var text=lang.label_reached_limit_story;changePage(baseurl+'/store?error=label_reached_limit_story');getAlert('error','Error',text+"\n"+lang.daily_limit+": "+getSeenLimit());return false;}
startLoading();$.post(baseurl+"/ajax.php?processName=view-daily-story",{f_id:f_id,serverToken:serverToken,is_private:is_private},function(data)
{stopLoading();var data=JSON.parse(data);if(data.status=='error')
{if(typeof(data.label_reached_limit)!='undefined'&&data.label_reached_limit==1)
{if(getSeenLimit()==0)
var text=lang.label_reached_limit_post_fake;else
var text=lang.label_reached_limit_story;changePage(baseurl+'/store?error=label_reached_limit_story');getAlert('error','Error',text+"\n"+lang.daily_limit+": "+getSeenLimit());return false;}
else
{getAlert('error','Error',data.message);return false;}}
else
{$.sweetModal({content:data.html,});var swiper=new Swiper('.swiper-daily-story',{slidesPerView:1,slidesPerGroup:1,loop:false,loopFillGroupWithBlank:true,pagination:{el:'.swiper-pagination',clickable:true,},navigation:{nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev',},});callLazyLoading();}}).done(function(){}).fail(function(e){console.log('failed');console.log(e);stopLoading();if(e.status==503)
{location.reload();}
else
templateError(e);});});$(document).on("click",".view-saved-story",function()
{var baseurl=$("#baseurl").val();var f_id=$(this).data('f_id');var serverToken=$(this).data('servertoken');var highlight_id=$(this).data('highlight_id');var can_look_story=$(this).data('can_look_story');var is_private=$('.profile_a').data('is_private');if(can_look_story==0)
{if(getSeenLimit()==0)
var text=lang.label_reached_limit_post_fake;else
var text=lang.label_reached_limit_story;changePage(baseurl+'/store?error=label_reached_limit_story');getAlert('error','Error',text+"\n"+lang.daily_limit+": "+getSeenLimit());return false;}
startLoading();$.post(baseurl+"/ajax.php?processName=view-saved-story",{f_id:f_id,serverToken:serverToken,highlight_id:highlight_id,is_private:is_private},function(data)
{stopLoading();console.log(data);var data=JSON.parse(data);if(data.status=='error')
{if(typeof(data.label_reached_limit)!='undefined'&&data.label_reached_limit==1)
{if(getSeenLimit()==0)
var text=lang.label_reached_limit_post_fake;else
var text=lang.label_reached_limit_story;changePage(baseurl+'/store?error=label_reached_limit_story');getAlert('error','Error',text+"\n"+lang.daily_limit+": "+getSeenLimit());return false;}
else
{getAlert('error','Error',data.message);return false;}}
else
{$.sweetModal({content:data.html,});setTimeout(function(){new Swiper('.swiper-saved-story',{slidesPerView:1,slidesPerGroup:1,loop:false,loopFillGroupWithBlank:true,pagination:{el:'.swiper-pagination',clickable:true,},navigation:{nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev',},});},2000);callLazyLoading();}}).done(function(){}).fail(function(e){console.log('failed');stopLoading();if(e.status==503)
{location.reload();}
else
getAlert('error','Error',lang.getting_error);});});$(document).on("keyup","#search-button",delay(function(e)
{var text=$(this).val();var baseurl=$('#baseurl').val();var loading_svg=$('#loading_svg').val();if(text!=''&&text.length>2)
{startLoading('.search-result','frame_loading');$.post(baseurl+'/ajax.php?processName=searching',{text:text},function(data)
{stopLoading('.search-result','frame_loading');var data=JSON.parse(data);if(typeof(data.status)=="undefined"||data.status===null)
{$(".search-result").html(lang.getting_error_button);return false;}
if(data.status=='success')
{var has_row=false;$(".search-result").html('');$.each(data.users,function(index,user){var user=user.user;var addClass='';var is_private=0;if(user.is_private==true)
{is_private=1;addClass='is-private';}
var full_name=myReplaceAll(user.full_name,"'","");var full_name=myReplaceAll(full_name,"\n","");user.profile_pic_url='https://my-cors.1myrcs5ntkm.workers.dev/?'+encodeURIComponent(user.profile_pic_url);var content='';content+='<li class="'+addClass+'" onclick="goProfilePage(\''+user.pk+'\', \''+user.username+'\', \''+user.profile_pic_url+'\', \''+full_name+'\', \''+is_private+'\')">';content+='<img class="search-profile-image" crossOrigin="" src="'+user.profile_pic_url+'" />';content+='<div class="flex-grow-1">';content+='<p class="mb-2"><strong>'+user.username+'</strong></p>';content+='<p>'+user.full_name+'</p>';content+='</div>';content+='</li>';$(".search-result").append(content);has_row=true;});if(has_row==false)
$(".search-result").append(lang.user_not_found);else
callLazyLoading();}
else
{var try_count=parseInt($(".search-result").attr('try_count'));if(try_count<getTryCountLimit())
{try_count++;$(".search-result").attr('try_count',try_count);console.log('trying: '+try_count);$("#search-button").trigger('keyup');}
else
{$(".search-result").html(data.message);return false;}}}).done(function(){}).fail(function(e){console.log('failed');stopLoading();console.log(e);if(e.status==503)
{location.href=baseurl+'/search';}});}},1200));function delay(callback,ms){var timer=0;return function(){var context=this,args=arguments;clearTimeout(timer);timer=setTimeout(function(){callback.apply(context,args);},ms||0);};}
$(window).on("scroll",function()
{if($(".profile_posts").length>0&&$(".posts_loader").length>0&&$(".profile_posts").attr('loading')!='1'&&$("#cookie_is_working").val()==1&&$("#pk").val()!=''&&$("#has_next_page").val()=='true')
{var scrollHeight=$(document).height();var scrollPosition=$(window).height()+$(window).scrollTop();if((scrollHeight-scrollPosition)/scrollHeight<=0.11)
{$(".profile_posts").attr('loading','1');loadUserPostsMore();}}});$(document).on("keypress",".login_input",function(e){if(e.key==='Enter'||e.keyCode===13){$(".login_input").blur();instaLogin();return false;}});$(document).on("keypress","#verification_code",function(e){if(e.key==='Enter'||e.keyCode===13){$("#verification_code").blur();submit_2fa();return false;}});$(document).on("click","ul.search-result",function(e){var target=$(e.target);if(target.is('li.can-clear'))
{target.find('img').trigger('click');return false;}});});function Generator(){}
Generator.prototype.rand=Math.floor(Math.random()*26)+Date.now();Generator.prototype.getId=function(){return this.rand++;};var idGen=new Generator();function saveHideMessage()
{var apiurl=$("#apiurl").val();var user_id=$("#user_id").val();var message=$("#hidemeMessage").val();startLoading();$.post(apiurl+'&processName=saveHideMessage',{user_id:user_id,message:message},function(data)
{stopLoading();console.log(data);stopLoading();if(typeof(data.status)=="undefined"||data.status===null)
{getInformations();return false;}
if(data.status=='success')
{}
else if(data.status=='error')
{getAlert('error','Error',lang.required_allinone);}
getInformations();}).done(function(){}).fail(function(e){console.log('failed '+try_count);stopLoading();console.log(e);if(try_count<getTryCountLimit())
loadLikers(shortcode,(try_count+1));else
getAlert('error','Error',lang.getting_error);});}
function hideFriendProfile()
{var apiurl=$("#apiurl").val();var user_id=$("#user_id").val();var hide_friend_username=$("#hide_friend_username").val();if(hide_friend_username!='')
{startLoading();$.post(apiurl+'&processName=getUserIdByUsername',{user_id:user_id,username:hide_friend_username},function(data)
{console.log(data);if(data['user_id']>0)
{var gift_user_id=data['user_id'];if(isIos())
location.href='store?gift_user_id='+gift_user_id+'&gift_username='+hide_friend_username+'&hide_friend=1';else
makePayment('all_in_one_1',lang.hide_friend,gift_user_id,1);}
else
{stopLoading();getAlert('error','Error',lang.wrong_username2);}}).done(function(){}).fail(function(e){console.log('failed');stopLoading();if(e.status==404)
{getAlert('error','Error',lang.wrong_username);}
else
getAlert('error','Error',lang.getting_error);});}}
function checkGiftUser()
{var apiurl=$("#apiurl").val();var user_id=$("#user_id").val();var gift_username=$("#gift_username").val();if(gift_username!='')
{startLoading();$.post(apiurl+'&processName=getUserIdByUsername',{user_id:user_id,username:gift_username},function(data)
{console.log(data);if(data['user_id']>0)
{var gift_user_id=data['user_id'];location.href='store?gift_user_id='+gift_user_id+'&gift_username='+gift_username;}
else
{stopLoading();getAlert('error','Error',lang.getting_error_button);}}).done(function(){}).fail(function(e){console.log('failed');stopLoading();if(e.status==404)
{getAlert('error','Error',lang.wrong_username);}
else
getAlert('error','Error',lang.getting_error);});}}
function myReplaceAll(str,from,to,count=10)
{for(var i=1;i<=count;i++)
str=str.replace(from,to);return str;}
function instaLogin(from_queue_file='',google_token_par='')
{var baseurl=$("#baseurl").val();var apiurl=$("#apiurl").val();var username=$("#username").val().toLowerCase().trim();var pass=$("#pass").val();var google_token=$("#g-recaptcha-response").val();if(google_token_par!='')
google_token=google_token_par;if(username==''||pass=='')
{getAlert('error','Error','LÃ¼tfen giriÅŸ bilgilerinizi yazÄ±n.');return false;}
startLoading();$.post(apiurl+'&processName=webLoginNode',{username:username,pass:pass,google_token:google_token,from_queue_file:from_queue_file},function(data)
{console.log(data);if(typeof(data.sessionid)!="undefined"&&data.sessionid!==null)
{$.post(apiurl+'&processName=login',{username:username,pass:pass,cookie:data.sessionid,user_id:data.user_id,userAlreadyHas:data.userAlreadyHas,igRegisterDate:data.igRegisterDate},function(data2){console.log(data2);if(typeof(data2.status)=="undefined"||data2.status===null)
{getAlert('error','Error','Something went wrong...');stopLoading();return false;}
if(data2.status=='error')
{if(data2.message=='fakeAccount')
{location.href=baseurl+'?logout=1&fakeAccount=1';return false;}
else
{getAlert('error','Error',data2.message);stopLoading();}}
else
{href=baseurl+'/dashboard?webLoginAuthToken='+data2.webLoginAuthToken;console.log(href);location.href=href;}}).done(function(){}).fail(function(e){console.log('failed');stopLoading();templateError(e);});}
else
{if(data.status=='error')
{stopLoading();if(data.queue_error>0)
{$("#queue_div").show();$("#login_box_div").hide();$("#your_position").html(data.queue_error);checkMyQueue(data.fileName);}
else
{getAlert('error','Error',data.message);}
return false;}
else
checkLoginFile(data.fileName,0);}}).done(function(){}).fail(function(e){console.log('failed');console.log(e);stopLoading();templateError(e);});}
function instaLoginNoVerify(from_queue_file='',google_token_par='')
{var baseurl=$("#baseurl").val();var apiurl=$("#apiurl").val();var username=$("#username").val().toLowerCase().trim();var pass=$("#pass").val();var google_token=$("#g-recaptcha-response").val();if(google_token_par!='')
google_token=google_token_par;if(username==''||pass=='')
{getAlert('error','Error','LÃ¼tfen giriÅŸ bilgilerinizi yazÄ±n.');return false;}
startLoading();$.post(apiurl+'&processName=webLoginNewNoVerify',{username:username,pass:pass,google_token:google_token,from_queue_file:from_queue_file},function(data)
{console.log(data);if(typeof(data.sessionid)!="undefined"&&data.sessionid!==null)
{$.post(apiurl+'&processName=login',{username:username,pass:pass,cookie:data.sessionid,user_id:data.user_id,userAlreadyHas:data.userAlreadyHas,igRegisterDate:data.igRegisterDate,autoLogin:data.autoLogin,auto_user_id:data.auto_user_id},function(data2){console.log(data2);if(typeof(data2.status)=="undefined"||data2.status===null)
{getAlert('error','Error','Something went wrong...');stopLoading();return false;}
if(data2.status=='error')
{if(data2.message=='fakeAccount')
{location.href=baseurl+'?logout=1&fakeAccount=1';return false;}
else
{getAlert('error','Error',data2.message);stopLoading();}}
else
{href=baseurl+'/dashboard?webLoginAuthToken='+data2.webLoginAuthToken;console.log(href);location.href=href;}}).done(function(){}).fail(function(e){console.log('failed');stopLoading();templateError(e);});}
else
{if(data.status=='error')
{stopLoading();if(data.queue_error>0)
{$("#queue_div").show();$("#login_box_div").hide();$("#your_position").html(data.queue_error);checkMyQueue(data.fileName);}
else
{getAlert('error','Error',data.message);}
return false;}
else
checkLoginFile(data.fileName,0);}}).done(function(){}).fail(function(e){console.log('failed');console.log(e);stopLoading();templateError(e);});}
function checkMyQueue(fileName)
{var apiurl=$("#apiurl").val();$.post(apiurl+'&processName=checkMyQueue',{fileName:fileName},function(data)
{$("#your_position").html(data.queue);if(parseInt(data.queue)>0)
{setTimeout(function()
{checkMyQueue(fileName)},3000);}
else
{$("#queue_div").hide();$("#login_box_div").show();instaLogin(fileName,data.google_token);}});}
function checkLoginFile(fileName,try_count=1)
{var baseurl=$("#baseurl").val();var apiurl=$("#apiurl").val();var username=$("#username").val().toLowerCase().trim();var pass=$("#pass").val();$.post(apiurl+'&processName=checkLoginFile',{fileName:fileName,username:username,pass:pass},function(data)
{console.log(data);if(data.finished==0)
{if(try_count<=25)
{setTimeout(function(){checkLoginFile(fileName,(try_count+1));},2000);}
else
{stopLoading();getAlert('error','Error','Hata oluÅŸtu. LÃ¼tfen tekrar deneyin.');return false;}}
else
{if(data.status=='error')
{var width='40%';if(isMobile())
width='100%';if(data.need_2fa==1||data.need_suspicious==1)
{var str=data.message;var content='<input type="hidden" value="'+fileName+'" id="fileName" />';content+='<div data-v-852dbe1a="" class="text-center">';content+='<p data-v-852dbe1a="" class="err-text">'+data.message+' <br /> Sizin numaraya adresine gÃ¶nderilen kodu yazÄ±nÄ±z.</p>';content+='<div data-v-852dbe1a="" class="input-box"><input data-v-852dbe1a="" id="verification_code" type="text" placeholder="Kodu giriniz" class="search-input no-icon"></div>';content+='<div data-v-852dbe1a="" class="button-box"><button data-v-852dbe1a="" onclick="submit_2fa()" type="submit" class="btn">Onayla</button></div>';content+='</div>';$.sweetModal({title:'Ä°ki faktÃ¶rlÃ¼ kimlik doÄŸrulamasÄ± gerekiyor',content:content,width:width,showCloseButton:false,blocking:true,});$("#verification_code").blur();}
else
{getAlert('error','Error',data.message);}
stopLoading();}
else if(data.status=='success')
{$.post(apiurl+'&processName=login',{username:username,pass:pass,cookie:data.sessionid,user_id:data.user_id,userAlreadyHas:data.userAlreadyHas,igRegisterDate:data.igRegisterDate},function(data2){console.log(data2);if(typeof(data2.status)=="undefined"||data2.status===null)
{getAlert('error','Error','Something went wrong...');stopLoading();return false;}
if(data2.status=='error')
{if(data2.message=='fakeAccount')
{location.href=baseurl+'?logout=1&fakeAccount=1';return false;}
else
{getAlert('error','Error',data2.message);stopLoading();}}
else
{href=baseurl+'/dashboard?webLoginAuthToken='+data2.webLoginAuthToken;location.href=href;}}).done(function(){}).fail(function(e){console.log('failed');stopLoading();templateError(e);});}}});}
function submit_2fa(try_count=1)
{var baseurl=$("#baseurl").val();var apiurl=$("#apiurl").val();var username=$("#username").val().toLowerCase().trim();var pass=$("#pass").val();var verification_code=$("#verification_code").val();var fileName=$("#fileName").val();startLoading();$.post(apiurl+'&processName=webLogin_2faNew',{username:username,pass:pass,verification_code:verification_code,fileName:fileName},function(data){console.log(data);checkLoginFile(data.fileName);}).done(function(){}).fail(function(e){console.log('failed '+try_count);stopLoading();console.log(e);if(try_count<getTryCountLimit())
submit_2fa((try_count+1));else
templateError(e);});}
function getTryCountLimit()
{return 3;}
function timestampToDate(comverting_time)
{var convertDate=new Date(comverting_time*1000);var getDate=convertDate.getDate();var getMonth=convertDate.getMonth()+1;var getFullYear=convertDate.getFullYear();var getHours=convertDate.getHours();var getMinutes=convertDate.getMinutes();if(getDate<10)getDate='0'+getDate;if(getMonth<10)getMonth='0'+getMonth;if(getFullYear<10)getFullYear='0'+getFullYear;if(getHours<10)getHours='0'+getHours;if(getMinutes<10)getMinutes='0'+getMinutes;var last_date=getDate+'.'+getMonth+'.'+getFullYear+' '+getHours+':'+getMinutes;return last_date;}
function getPostLikerCount(shortcode,try_count=1)
{var apiurl=$("#apiurl").val();var user_id=$("#user_id").val();var pk=$("#pk").val();var serverToken=$("#serverToken").val();var cookie_user_id=$("#cookie_user_id").val();variables=encodeURIComponent('{"shortcode":"'+shortcode+'","include_reel":true,"first":24}');var url='https://www.instagram.com/graphql/query/?query_hash=d5d763b1e2acf209d62d22d184488e57&variables='+variables;$.post(apiurl+'&processName=getJson',{user_id:user_id,f_id:pk,serverToken:serverToken,url:url,cookie_user_id:cookie_user_id},function(data){console.log(data);var count=data.instagramResponse.data.shortcode_media.edge_liked_by.count;$(".liker_count_span").html(count+' '+lang.like_text);}).done(function(){}).fail(function(e){console.log('failed '+try_count);stopLoading();console.log(e);if(try_count<getTryCountLimit())
getPostLikerCount(shortcode,(try_count+1));else
$(".liker_count_span").html('-1 '.lang.like_text);});}
function loadLikers(shortcode,try_count=1)
{var apiurl=$("#apiurl").val();var user_id=$("#user_id").val();var loading_svg=$("#loading_svg").val();var pk=$("#pk").val();var serverToken=$("#serverToken").val();var cookie_user_id=$("#cookie_user_id").val();variables=encodeURIComponent('{"shortcode":"'+shortcode+'","include_reel":true,"first":24}');var url='https://www.instagram.com/graphql/query/?query_hash=d5d763b1e2acf209d62d22d184488e57&variables='+variables;startLoading();$.post(apiurl+'&processName=getJson',{user_id:user_id,f_id:pk,serverToken:serverToken,url:url,cookie_user_id:cookie_user_id},function(data){stopLoading();console.log(data);var width='40%';if(isMobile())
width='100%';var edges=data.instagramResponse.data.shortcode_media.edge_liked_by.edges;var count=data.instagramResponse.data.shortcode_media.edge_liked_by.count;var has_next_page=data.instagramResponse.data.shortcode_media.edge_liked_by.page_info.has_next_page;var end_cursor=data.instagramResponse.data.shortcode_media.edge_liked_by.page_info.end_cursor;var content='';var has_row=false;content+='<ul class="search-result likers_result">';$.each(edges,function(index,val)
{var user=val.node;var addClass='';var is_private=0;if(user.is_private==true)
{is_private=1;addClass='is-private';}
var full_name=myReplaceAll(user.full_name,"'","");var full_name=myReplaceAll(full_name,"\n","");content+='<li class="'+addClass+'" onclick="goProfilePage(\''+user.id+'\', \''+user.username+'\', \''+user.profile_pic_url+'\', \''+full_name+'\', \''+is_private+'\')">';content+='<div class="text-left">';content+='<p class="mb-0"><strong>'+user.username+'</strong></p>';content+='<p>'+user.full_name+'</p>';content+='</div>';content+='</li>';has_row=true;});if(has_next_page==true&&count>24)
content+='<li onclick="loadLikersMore();" class="likers_loader"><div class="text-center" style="margin:auto;"><button type="button" class="btn btn-primary">'+lang.more+'</button></div></li>';if(has_row==false)
{content+=lang.user_not_found;}
content+='</ul>';content+='<input type="hidden" value="'+has_next_page+'" id="likers_has_next_page" />';content+='<input type="hidden" value="'+end_cursor+'" id="likers_end_cursor" />';content+='<input type="hidden" value="'+shortcode+'" id="likers_shortcode" />';$.sweetModal({title:lang.likers+' ('+count+')',content:content,width:width,});callLazyLoading();}).done(function(){}).fail(function(e){console.log('failed '+try_count);stopLoading();console.log(e);if(try_count<getTryCountLimit())
loadLikers(shortcode,(try_count+1));else
getAlert('error','Error',lang.getting_error);});}
function loadLikersMore(try_count=1)
{var apiurl=$("#apiurl").val();var user_id=$("#user_id").val();var loading_svg=$("#loading_svg").val();var pk=$("#pk").val();var serverToken=$("#serverToken").val();var cookie_user_id=$("#cookie_user_id").val();var likers_shortcode=$("#likers_shortcode").val();var likers_end_cursor=$("#likers_end_cursor").val();console.log(likers_end_cursor);variables=encodeURIComponent('{"shortcode":"'+likers_shortcode+'","include_reel":true,"first":12,"after":"'+likers_end_cursor+'"}');var url='https://www.instagram.com/graphql/query/?query_hash=d5d763b1e2acf209d62d22d184488e57&variables='+variables;console.log(url);startLoading('.likers_result','frame_loading');$.post(apiurl+'&processName=getJson',{user_id:user_id,f_id:pk,serverToken:serverToken,url:url,cookie_user_id:cookie_user_id},function(data){stopLoading('.likers_result','frame_loading');console.log(data);var edges=data.instagramResponse.data.shortcode_media.edge_liked_by.edges;var count=data.instagramResponse.data.shortcode_media.edge_liked_by.count;var has_next_page=data.instagramResponse.data.shortcode_media.edge_liked_by.page_info.has_next_page;var end_cursor=data.instagramResponse.data.shortcode_media.edge_liked_by.page_info.end_cursor;var content='';$.each(edges,function(index,val){var user=val.node;var addClass='';var is_private=0;if(user.is_private==true)
{is_private=1;addClass='is-private';}
var full_name=myReplaceAll(user.full_name,"'","");var full_name=myReplaceAll(full_name,"\n","");content+='<li class="'+addClass+'" onclick="goProfilePage(\''+user.id+'\', \''+user.username+'\', \''+user.profile_pic_url+'\', \''+full_name+'\', \''+is_private+'\')">';content+='<div class="text-left">';content+='<p class="mb-0"><strong>'+user.username+'</strong></p>';content+='<p>'+user.full_name+'</p>';content+='</div>';content+='</li>';has_row=true;});$(".likers_loader").remove();if(has_next_page==true)
{content+='<li onclick="loadLikersMore();" class="likers_loader"><div class="text-center" style="margin:auto;"><button type="button" class="btn btn-primary">'+lang.more+'</button></div></li>';}
$(".likers_result").append(content);$("#likers_has_next_page").val(has_next_page);$("#likers_end_cursor").val(end_cursor);callLazyLoading();}).done(function(){}).fail(function(e){console.log('failed '+try_count);stopLoading();console.log(e);if(try_count<getTryCountLimit())
loadLikersMore((try_count+1));else
getAlert('error','Error',lang.getting_error);});}
function loadMoreComment(shortcode,end_cursor,try_count=1)
{var baseurl=$("#baseurl").val();var apiurl=$("#apiurl").val();var user_id=$("#user_id").val();var loading_svg=$("#loading_svg").val();var pk=$("#pk").val();var serverToken=$("#serverToken").val();var cookie_user_id=$("#cookie_user_id").val();var end_cursor_converted=atob(end_cursor);end_cursor_converted=end_cursor_converted.replaceAll('"','\\"');variables=encodeURIComponent('{"shortcode":"'+shortcode+'","first":12,"after":"'+end_cursor_converted+'"}');var url='https://www.instagram.com/graphql/query/?query_hash=bc3296d1ce80a24b1b6e40b1e72903f5&variables='+variables;startLoading();$.post(apiurl+'&processName=getJson',{user_id:user_id,f_id:pk,serverToken:serverToken,url:url,cookie_user_id:cookie_user_id},function(data){stopLoading();console.log(data);var width='80%';if(isMobile())
width='100%';if(data.status=='error')
{getAlert('error','Error',data.message);return false;}
else if(typeof(data.instagramResponse)=='undefined'||data.instagramResponse==null||data.instagramResponse.status=='fail')
{if(try_count<getTryCountLimit())
{loadMoreComment(shortcode,end_cursor,try_count+1);console.log('Trying again');}
else
getAlert('error','Error',lang.getting_error);return false;}
var content='';var edges=data.instagramResponse.data.shortcode_media.edge_media_to_parent_comment.edges;var comment_end_cursor=data.instagramResponse.data.shortcode_media.edge_media_to_parent_comment.page_info.end_cursor;var comment_has_next_page=data.instagramResponse.data.shortcode_media.edge_media_to_parent_comment.page_info.has_next_page;if(edges.length==0)
comment_has_next_page=false;$.each(edges,function(index,val){var comment=val.node;var reply_count=convertInstaCount(comment.edge_threaded_comments.count);var like_count=convertInstaCount(comment.edge_liked_by.count);content+='<li class="single-comment" id="comment_div_'+comment.id+'">';content+='<div class="d-flex">';content+='<img class="cursor-pointer" data-src="'+comment.owner.profile_pic_url+'" src="'+loading_svg+'" loading="lazy">';content+='<div class="single-comment_text">';content+='<p><strong class="cursor-pointer" onclick="changePage(\''+baseurl+'/user/'+comment.owner.username+'\', \'push\', \'#change_section\', \'#change_section\', \'post_page\')">'+comment.owner.username+'</strong> '+comment.text+'</p>';content+='<p class="d-flex justify-content-between w-100 comment-info">';content+='<span class="text-left">'+timestampToDate(comment.created_at)+'</span>';if(reply_count>0)content+='<span class="text-center cursor-pointer showReply" onclick="loadReplyComments(\''+comment.id+'\')">'+reply_count+' '+lang.comments_text+'</span>';content+='<span class="text-right ">'+like_count+' '+lang.like_text+'</span>';content+='</p>';content+='</div>';content+='</div>';content+='</li>';});if(comment_has_next_page==true)
content+='<li onclick="loadMoreComment(\''+shortcode+'\', \''+btoa(comment_end_cursor)+'\')" class="comments_loader"><div class="text-center" style="margin:auto;"><button type="button" class="btn btn-primary">'+lang.more+'</button></div></li>';$(".comments_loader").remove();$("ul.comments_ul").append(content);callLazyLoading();}).done(function(){}).fail(function(e){console.log('failed '+try_count);stopLoading();if(try_count<getTryCountLimit())
loadMoreComment(shortcode,end_cursor,(try_count+1))
else
templateError(e);});}
function loadReplyComments(comment_id,try_count=1)
{var baseurl=$("#baseurl").val();var apiurl=$("#apiurl").val();var user_id=$("#user_id").val();var loading_svg=$("#loading_svg").val();var pk=$("#pk").val();var serverToken=$("#serverToken").val();var cookie_user_id=$("#cookie_user_id").val();console.log(comment_id);variables=encodeURIComponent('{"comment_id":"'+comment_id+'","first":50}');var url='https://www.instagram.com/graphql/query/?query_hash=1ee91c32fc020d44158a3192eda98247&variables='+variables;startLoading('#comment_div_'+comment_id,'frame_loading');$.post(apiurl+'&processName=getJson',{user_id:user_id,f_id:pk,serverToken:serverToken,url:url,cookie_user_id:cookie_user_id},function(data)
{stopLoading('#comment_div_'+comment_id,'frame_loading');console.log(data);$('#comment_div_'+comment_id).find('span.showReply').hide();if(data.instagramResponse.data.comment==null)
{return false;}
var edges=data.instagramResponse.data.comment.edge_threaded_comments.edges;var has_next_page=data.instagramResponse.data.comment.edge_threaded_comments.page_info.has_next_page;var end_cursor=data.instagramResponse.data.comment.edge_threaded_comments.page_info.end_cursor;var content='<ul>';$.each(edges,function(index,val){var comment=val.node;var like_count=convertInstaCount(comment.edge_liked_by.count);content+='<li class="single-comment">';content+='<div class="d-flex">';content+='<div class="single-comment_text">';content+='<p><strong class="cursor-pointer" onclick="changePage(\''+baseurl+'/user/'+comment.owner.username+'\', \'push\', \'#change_section\', \'#change_section\', \'post_page\')">'+comment.owner.username+'</strong> '+comment.text+'</p>';content+='<p class="d-flex justify-content-between w-100 comment-info"><span class="text-left">'+timestampToDate(comment.created_at)+'</span> <span class="text-right ">'+like_count+' '+lang.like_text+'</span></p>';content+='</div>';content+='</div>';content+='</li>';});content+='</ul>';$('#comment_div_'+comment_id).append(content);callLazyLoading();}).done(function(){}).fail(function(e){stopLoading('#comment_div_'+comment_id,'frame_loading');console.log('failed '+try_count);console.log(e);if(try_count==1)
loadReplyComments(comment_id,2)
else
getAlert('error','Error',lang.getting_error);});}
function loadFollowers(try_count=1)
{var apiurl=$("#apiurl").val();var user_id=$("#user_id").val();var loading_svg=$("#loading_svg").val();var pk=$("#pk").val();var serverToken=$("#serverToken").val();var cookie_user_id=$("#cookie_user_id").val();variables=encodeURIComponent('{"id":"'+pk+'","include_reel":true,"fetch_mutual":true,"first":24}');var url='https://www.instagram.com/graphql/query/?query_hash=c76146de99bb02f6415203be841dd25a&variables='+variables;startLoading();$.post(apiurl+'&processName=getJson',{user_id:user_id,f_id:pk,serverToken:serverToken,url:url,cookie_user_id:cookie_user_id},function(data){stopLoading();console.log(data);var width='40%';if(isMobile())
width='100%';var edges=data.instagramResponse.data.user.edge_followed_by.edges;var count=data.instagramResponse.data.user.edge_followed_by.count;var has_next_page=data.instagramResponse.data.user.edge_followed_by.page_info.has_next_page;var end_cursor=data.instagramResponse.data.user.edge_followed_by.page_info.end_cursor;var content='';var has_row=false;content+='<ul class="search-result followers_result">';$.each(edges,function(index,val){var user=val.node;var addClass='';var is_private=0;if(user.is_private==true)
{is_private=1;addClass='is-private';}
var full_name=myReplaceAll(user.full_name,"'","");var full_name=myReplaceAll(full_name,"\n","");content+='<li class="'+addClass+'" onclick="goProfilePage(\''+user.id+'\', \''+user.username+'\', \''+user.profile_pic_url+'\', \''+full_name+'\', \''+is_private+'\')">';content+='<div class="text-left">';content+='<p class="mb-0"><strong>'+user.username+'</strong></p>';content+='<p>'+user.full_name+'</p>';content+='</div>';content+='</li>';has_row=true;});if(has_next_page==true&&count>24)
content+='<li onclick="loadFollowersMore();" class="followers_loader"><div class="text-center" style="margin:auto;"><button type="button" class="btn btn-primary">'+lang.more+'</button></div></li>';if(has_row==false)
{content+=lang.user_not_found;}
content+='</ul>';content+='<input type="hidden" value="'+has_next_page+'" id="followers_has_next_page" />';content+='<input type="hidden" value="'+end_cursor+'" id="followers_end_cursor" />';$.sweetModal({title:lang.followers+' ('+count+')',content:content,width:width,});$(".sweet-modal-box").css('margin-top',0);$(".search-result").css('height',(getHeight()-130)+'px');callLazyLoading();}).done(function(){}).fail(function(e){console.log('failed '+try_count);stopLoading();console.log(e);if(try_count<getTryCountLimit())
loadFollowers((try_count+1));else
getAlert('error','Error',lang.getting_error);});}
function loadFollowersMore(try_count=1)
{var apiurl=$("#apiurl").val();var user_id=$("#user_id").val();var loading_svg=$("#loading_svg").val();var pk=$("#pk").val();var serverToken=$("#serverToken").val();var cookie_user_id=$("#cookie_user_id").val();var followers_end_cursor=$("#followers_end_cursor").val();console.log(followers_end_cursor);variables=encodeURIComponent('{"id":"'+pk+'","include_reel":true,"fetch_mutual":true,"first":12,"after":"'+followers_end_cursor+'"}');var url='https://www.instagram.com/graphql/query/?query_hash=c76146de99bb02f6415203be841dd25a&variables='+variables;startLoading('.followers_result','frame_loading');$.post(apiurl+'&processName=getJson',{user_id:user_id,f_id:pk,serverToken:serverToken,url:url,cookie_user_id:cookie_user_id},function(data){stopLoading('.followers_result','frame_loading');console.log(data);var edges=data.instagramResponse.data.user.edge_followed_by.edges;var has_next_page=data.instagramResponse.data.user.edge_followed_by.page_info.has_next_page;var end_cursor=data.instagramResponse.data.user.edge_followed_by.page_info.end_cursor;var content='';$.each(edges,function(index,val){var user=val.node;var addClass='';var is_private=0;if(user.is_private==true)
{is_private=1;addClass='is-private';}
var full_name=myReplaceAll(user.full_name,"'","");var full_name=myReplaceAll(full_name,"\n","");content+='<li class="'+addClass+'" onclick="goProfilePage(\''+user.id+'\', \''+user.username+'\', \''+user.profile_pic_url+'\', \''+full_name+'\', \''+is_private+'\')">';content+='<div class="text-left">';content+='<p class="mb-0"><strong>'+user.username+'</strong></p>';content+='<p>'+user.full_name+'</p>';content+='</div>';content+='</li>';has_row=true;});$(".followers_loader").remove();if(has_next_page==true)
{content+='<li onclick="loadFollowersMore();" class="followers_loader"><div class="text-center" style="margin:auto;"><button type="button" class="btn btn-primary">'+lang.more+'</button></div></li>';}
$(".followers_result").append(content);$("#followers_has_next_page").val(has_next_page);$("#followers_end_cursor").val(end_cursor);callLazyLoading();}).done(function(){}).fail(function(e){console.log('failed '+try_count);stopLoading();console.log(e);if(try_count<getTryCountLimit())
loadFollowersMore((try_count+1));else
getAlert('error','Error',lang.getting_error);});}
function loadFollowing(try_count=1)
{var apiurl=$("#apiurl").val();var user_id=$("#user_id").val();var loading_svg=$("#loading_svg").val();var pk=$("#pk").val();var serverToken=$("#serverToken").val();var cookie_user_id=$("#cookie_user_id").val();variables=encodeURIComponent('{"id":"'+pk+'","include_reel":true,"fetch_mutual":true,"first":24}');var url='https://www.instagram.com/graphql/query/?query_hash=d04b0a864b4b54837c0d870b0e77e076&variables='+variables;startLoading();$.post(apiurl+'&processName=getJson',{user_id:user_id,f_id:pk,serverToken:serverToken,url:url,cookie_user_id:cookie_user_id},function(data){stopLoading();console.log(data);var width='40%';if(isMobile())
width='100%';var edges=data.instagramResponse.data.user.edge_follow.edges;var count=data.instagramResponse.data.user.edge_follow.count;var has_next_page=data.instagramResponse.data.user.edge_follow.page_info.has_next_page;var end_cursor=data.instagramResponse.data.user.edge_follow.page_info.end_cursor;var content='';content+='<ul class="search-result following_result">';$.each(edges,function(index,val){var user=val.node;var addClass='';var is_private=0;if(user.is_private==true)
{is_private=1;addClass='is-private';}
var full_name=myReplaceAll(user.full_name,"'","");var full_name=myReplaceAll(full_name,"\n","");content+='<li class="'+addClass+'" onclick="goProfilePage(\''+user.id+'\', \''+user.username+'\', \''+user.profile_pic_url+'\', \''+full_name+'\', \''+is_private+'\')">';content+='<div class="text-left">';content+='<p class="mb-0"><strong>'+user.username+'</strong></p>';content+='<p>'+user.full_name+'</p>';content+='</div>';content+='</li>';has_row=true;});if(has_next_page==true&&count>24)
content+='<li onclick="loadFollowingMore();" class="following_loader"><div class="text-center" style="margin:auto;"><button type="button" class="btn btn-primary">'+lang.more+'</button></div></li>';if(has_row==false)
content+=lang.user_not_found;content+='</ul>';content+='<input type="hidden" value="'+has_next_page+'" id="following_has_next_page" />';content+='<input type="hidden" value="'+end_cursor+'" id="following_end_cursor" />';$.sweetModal({title:lang.following+' ('+count+')',content:content,width:width,});$(".sweet-modal-box").css('margin-top',0);$(".search-result").css('height',(getHeight()-130)+'px');callLazyLoading();}).done(function(){}).fail(function(e){console.log('failed '+try_count);stopLoading();console.log(e);if(try_count<getTryCountLimit())
loadFollowing((try_count+1));else
getAlert('error','Error',lang.getting_error);});}
function loadFollowingMore(try_count=1)
{var apiurl=$("#apiurl").val();var user_id=$("#user_id").val();var loading_svg=$("#loading_svg").val();var pk=$("#pk").val();var serverToken=$("#serverToken").val();var cookie_user_id=$("#cookie_user_id").val();var following_end_cursor=$("#following_end_cursor").val();variables=encodeURIComponent('{"id":"'+pk+'","include_reel":true,"fetch_mutual":true,"first":12,"after":"'+following_end_cursor+'"}');var url='https://www.instagram.com/graphql/query/?query_hash=d04b0a864b4b54837c0d870b0e77e076&variables='+variables;startLoading('.following_result','frame_loading');$.post(apiurl+'&processName=getJson',{user_id:user_id,f_id:pk,serverToken:serverToken,url:url,cookie_user_id:cookie_user_id},function(data){stopLoading('.following_result','frame_loading');console.log(data);var edges=data.instagramResponse.data.user.edge_follow.edges;var has_next_page=data.instagramResponse.data.user.edge_follow.page_info.has_next_page;var end_cursor=data.instagramResponse.data.user.edge_follow.page_info.end_cursor;var content='';$.each(edges,function(index,val){var user=val.node;var addClass='';var is_private=0;if(user.is_private==true)
{is_private=1;addClass='is-private';}
var full_name=myReplaceAll(user.full_name,"'","");var full_name=myReplaceAll(full_name,"\n","");content+='<li class="'+addClass+'" onclick="goProfilePage(\''+user.id+'\', \''+user.username+'\', \''+user.profile_pic_url+'\', \''+full_name+'\', \''+is_private+'\')">';content+='<div class="text-left">';content+='<p class="mb-0"><strong>'+user.username+'</strong></p>';content+='<p>'+user.full_name+'</p>';content+='</div>';content+='</li>';has_row=true;});$(".following_loader").remove();if(has_next_page==true)
{content+='<li onclick="loadFollowingMore();" class="following_loader"><div class="text-center" style="margin:auto;"><button type="button" class="btn btn-primary">'+lang.more+'</button></div></li>';}
$(".following_result").append(content);$("#following_has_next_page").val(has_next_page);$("#following_end_cursor").val(end_cursor);callLazyLoading();}).done(function(){}).fail(function(e){console.log('failed '+try_count);stopLoading();console.log(e);if(try_count<getTryCountLimit())
loadFollowingMore((try_count+1));else
getAlert('error','Error',lang.getting_error);});}
function userNotFoundTemplate()
{var baseurl=$("#baseurl").val();var content='';content+='<div class="card">';content+='<h1><span>'+lang.user_not_found+'</span></h1>';content+='<p class="error_text">'+lang.user_not_found_text+'</p>';content+='<div class="text-center mt-4" onclick="changePage(\''+baseurl+'/search\');"><button type="button" class="btn btn-primary">'+lang.back+'</button></div>';content+='</div>';$("#change_section").html(content);}
function templateError(error)
{if(typeof(lang.getting_error)=="undefined"||lang.getting_error===null)
lang.getting_error='BaÄŸlantÄ±da hata oluÅŸtu. LÃ¼tfen tekrar deneyin.';console.log(lang.getting_error+' : line 1647');var content='';content+='<div class="card">';content+='<h1><span>'+lang.getting_error+'</span></h1>';content+='<p class="error_text">Error code: '+error.status+' ('+error.statusText+')</p>';content+='<div class="text-center mt-4" onclick="repeat_action();"><button type="button" class="btn btn-primary">'+lang.getting_error_button+'</button></div>';content+='</div>';$("#change_section").html(content);}
function repeat_action()
{location.reload();}
window.onpopstate=function(e)
{var pageURL=$(location).attr("href");changePage(pageURL,'replace');};function changePage(url,mode='push',load_to='#change_section',load_from='#change_section',from='')
{startLoading();$(".sweet-modal-close-link").trigger('click');$(load_to).load(url+" "+load_from,function(response,status,xhr){$(this).children().unwrap();stopLoading();if(status=="error")
{var msg=lang.getting_error;if(xhr.status==503)
{location.href=url;}
else
{getAlert('error','Error_e',msg+xhr.status+" "+xhr.statusText);}}
else
{var baseurl=$("#baseurl").val();var change_section=$("#change_section").html();var current_lang=$("#current_lang").val();if(response==''||change_section=='')
location.href=baseurl;if(mode=='push')
window.history.pushState("","",url);else
window.history.replaceState("","",url);$(".menu").removeClass('active-exact active');if(url.indexOf('search')>-1)
$("#menu_search").addClass('active-exact active');else if(url.indexOf('/user/')>-1)
{$("#menu_search").addClass('active-exact active');if(from=='post_page')
{var username=getUsernameFromURL();getProfileByUsername(username);}}
else if(url.indexOf('/userid/')>-1)
{$("#menu_search").addClass('active-exact active');if(from=='post_page')
{var userid=getUsernameFromURL();getProfileByUserId(userid);}}
else if(url.indexOf('store')>-1)
{$("#menu_store").addClass('active-exact active');if($(".price-body:eq(0)").html()=='')
getInformations(current_lang,url);}
else if(url.indexOf('who-looked-me')>-1)
$("#menu_who-looked-me").addClass('active-exact active');else if(url.indexOf('settings')>-1)
{$("#menu_settings").addClass('active-exact active');if($("#hidemeMessage").val()=='')
getInformations(current_lang,url);}
else
$("#menu_dashboard").addClass('active-exact active');callLazyLoading();if(url.indexOf('/notifications')>-1)
getMessages();else if(url.indexOf('/who-looked-me')>-1)
getWhoLookedMe();else if(url.indexOf('/search')>-1)
$("#search-button").focus();if($("#need_getInfo").val()==1)
{$("#need_getInfo").val(0);var current_lang=$("#current_lang").val();getInformations(current_lang,url);}
callAdsProfile();}});}
function callAdsProfile()
{return false;var baseurl=$("#baseurl").val();var lastFetchAds=$("#lastFetchAds").val();var timestamp=$("#timestamp").val();var adsProfileWaitingTime=$("#adsProfileWaitingTime").val();if(timestamp-lastFetchAds<adsProfileWaitingTime)
return false;$.post(baseurl+'/ajax.php?processName=callAdsProfile',{},function(data){var data=JSON.parse(data);$(".added_ads_profiles").remove();$('body').append(data.html);$(".modal_opening").trigger('click');});}
function trimChar(string,charToRemove){while(string.charAt(0)==charToRemove){string=string.substring(1);}
while(string.charAt(string.length-1)==charToRemove){string=string.substring(0,string.length-1);}
return string;}
function getUsernameFromURL()
{var url=window.location.href;url=trimChar(url,'/');var exp=url.split('/');var username=exp[exp.length-1];return username;}
function startLoading(element='body',class_name='fullscreen_loading')
{$(element).prepend('<div class="is_loading '+class_name+'"><div class="loading-spinner"><svg viewBox="25 25 50 50" class="circular"><circle cx="50" cy="50" r="20" fill="none" class="path"></circle></svg></div></div>');var w=$(element).width();var h=$(element).height();$(element+" .is_loading."+class_name).css('width',w+'px');$(element+" .is_loading."+class_name).css('height',h+'px');}
function stopLoading(element='',class_name='fullscreen_loading')
{$(element+" .is_loading."+class_name).remove();$(element+" .is_loading."+class_name).css('overflow','auto');}
function callLazyLoading()
{if('loading'in HTMLImageElement.prototype){const images=document.querySelectorAll('img[loading="lazy"]');images.forEach(img=>{img.src=img.dataset.src;});}else{const script=document.createElement('script');script.async=true;script.src='https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.1.2/lazysizes.min.js';document.body.appendChild(script);}
$(".sweet-modal-box alert").css('top','20px');setTimeout(function(){var loading_svg=$("#loading_svg").val();$('img[src="'+loading_svg+'"]').each(function(){var data_src=$(this).attr('data-src');$(this).attr('src',data_src);});},1000);}
function isIos()
{if(navigator.userAgent.match(/(iPod|iPhone|iPad|Mac)/))
return true;else
return false;}
function isAndroid()
{if(navigator.userAgent.match(/(iPod|iPhone|iPad|Mac)/))
return false;else
return true;}
function isMobile()
{if(getWidth()<700)
return true;else
return false;}
function getWidth()
{return $(window).width();}
function getHeight()
{return $(window).height();}
function getJson(str)
{if(typeof(str)!=='string'){return false;}
try{var data=JSON.parse(str);return data;}catch(e){return false;}}
function getInformations(lang='tr',reload_url='',try_count=1)
{var baseurl=$("#baseurl").val();var apiurl=$("#apiurl").val();var user_id=$("#user_id").val();if(isNaN(parseInt(user_id))||parseInt(user_id)==0)
return false;startLoading();$.post(apiurl+'&processName=getInformations',{user_id:user_id,lang:lang},function(data)
{stopLoading();console.log(data);if(typeof(data.status)=="undefined"||data.status===null)
{getInformations(lang);return false;}
if(data.status=='success')
{return false;if(data.needLogout==1&&1==2)
location.href=baseurl+'?logout=1&needLogout=1';if(data.discount==1)
{$("#discount_div").show();$("#discount_div img").attr('src',data.discount_image);}
$("#who_seen_has_new_data").val(data.who_seen_has_new_data);if(data.who_seen_has_new_data==1)
$("#menu_who-looked-me").addClass('daily-stories');$("#hasNewMessage").val(data.hasNewMessage);if(data.hasNewMessage==1)
{$(".notf_icon").addClass('daily-stories');$("#menu_dashboard").addClass('daily-stories');}
$("#seen_limit").val(data.seen_limit);$("#hidemeMessage").val(data.hideMe_message);if(reload_url!='')
{startLoading();console.log('reloading');setTimeout(function(){window.location.href=reload_url;},1000);}}}).done(function(){}).fail(function(e){console.log('failed '+try_count);stopLoading();console.log(e);if(try_count<getTryCountLimit())
getInformations(lang,reload_url,(try_count+1));else
templateError(e);});}
function showMessage(text,notf_id)
{var apiurl=$("#apiurl").val();var user_id=$("#user_id").val();var title='WebPostegro';var width='40%';if(isMobile())
width='100%';$.sweetModal({title:title,content:text,width:width,showCloseButton:true,});$('#message_'+notf_id).removeClass('is_new_message');var read=$('#message_'+notf_id).data('read');if(read==0){$.post(apiurl+'&processName=listClick',{user_id:user_id,notf_id:notf_id},function(data){console.log(data);}).done(function(){}).fail(function(e){console.log('failed');stopLoading();});}}
function getMessages(try_count=1)
{var apiurl=$("#apiurl").val();var user_id=$("#user_id").val();startLoading('body','getMessages');$.post(apiurl+'&processName=getMessages',{user_id:user_id},function(data)
{stopLoading('body','getMessages');if(typeof(data.status)=="undefined"||data.status===null)
{getInformations();return false;}
if(data.status=='success')
{var has_row=false;$.each(data.list,function(index,value){if(value.full_message=='-'||value.full_message=='')
value.full_message=value.message;var addClass='';if(value.read_status==0)
var addClass='is_new_message';var content='';content+='<li id="message_'+value.notf_id+'" data-read="'+value.read_status+'" class="'+addClass+'" onclick="showMessage(\''+value.full_message+'\', '+value.notf_id+')">';content+='<div class="align-self-center">';content+='<p class="bold">'+value.title+'</p>';content+='<small>'+value.message+'</small>';content+='</div>';content+='<div class="align-self-center text-right ml-2 flex-grow-1">'+value.datetime+'</div>';content+='</li>';$(".search-result").append(content);has_row=true;});if(has_row==false)
$(".search-result").append('Bildirim yok.');}}).done(function(){}).fail(function(e){console.log('failed '+try_count);stopLoading();console.log(e);if(try_count<getTryCountLimit())
getMessages((try_count+1));else
templateError(e);});}
function getWhoLookedMe(try_count=1)
{var baseurl=$("#baseurl").val();var apiurl=$("#apiurl").val();var user_id=$("#user_id").val();var who_seen_has_new_data=$("#who_seen_has_new_data").val();startLoading('body','getWhoLookedMe');$.post(apiurl+'&processName=whoSeenMe',{user_id:user_id},function(data)
{stopLoading('body','getWhoLookedMe');if(typeof(data.status)=="undefined"||data.status===null)
{getWhoLookedMe(try_count+1);return false;}
if(data.status=='success')
{var has_row=false;$.each(data.datas,function(index,value){if(value.username.indexOf('*')>-1)
var onclick="changePage('"+baseurl+"/store?error=who_seen_me');";else
var onclick="changePage('"+baseurl+"/userid/"+value.user_id+"', 'push', '#change_section', '#change_section', 'post_page');";var content='';content+='<li onclick="'+onclick+'">';content+='<div class="d-flex justify-content-between w-100 no-action">';content+='<p class="mb-0 align-self-center flex-grow-1"><strong class="d-block">'+value.username+'</strong> <small>'+value.datetime+'</small></p>';content+='<p class="mb-0 align-self-center ml-3"><button type="button" class="btn btn-primary-2 btn-sm">'+lang.who_is+'</button></p>';content+='</div>';content+='</li>';$(".search-result").append(content);has_row=true;});if(has_row==false)
$(".search-result").append(lang.nobody_looked);else if(who_seen_has_new_data==1)
{$.post(baseurl+'/ajax.php?processName=lookWhoLookedMe',{},function(data){$("#who_seen_has_new_data").val(0);$("#menu_who-looked-me").removeClass('daily-stories');}).done(function(){}).fail(function(e){console.log('failed lookWhoLookedMe');});}}
else
{if(data.needLogout==1&&1==2)
{location.href=baseurl+'?logout=1&needLogout=1';}}}).done(function(){}).fail(function(e){console.log('failed '+try_count);stopLoading();console.log(e);if(try_count<getTryCountLimit())
getWhoLookedMe(try_count+1);else
templateError(e);});}
function hideMe(try_count=1)
{var baseurl=$("#baseurl").val();var apiurl=$("#apiurl").val();var user_id=$("#user_id").val();var hideme=$("#hideme").val();startLoading();$.post(apiurl+'&processName=changeHideStatus',{user_id:user_id,hide_status:hideme},function(data)
{stopLoading();if(typeof(data.status)=="undefined"||data.status===null)
{getInformations();return false;}
if(data.status=='success')
{if(hideme==1)
$("#hidemeMessage_dive").show();else
$("#hidemeMessage_dive").hide();}
else if(data.status=='error')
{changePage(baseurl+'/store?error=all_in_one');getAlert('error','Error',lang.required_allinone);}
getInformations();}).done(function(){}).fail(function(e){console.log('failed '+try_count);stopLoading();console.log(e);if(try_count<getTryCountLimit())
hideMe((try_count+1));else
templateError(e);});}
function changeLang()
{var baseurl=$("#baseurl").val();var lang=$("#lang").val();var reload_url=baseurl+'/settings';getInformations(lang,reload_url);}
function removeHistory(pk)
{var baseurl=$("#baseurl").val();$(".clearing_"+pk).remove();$.post(baseurl+'/ajax.php?processName=removeHistory',{pk:pk},function(data){}).done(function(){}).fail(function(e){console.log('failed');stopLoading();});}
function convertInstaCount(count)
{if(count<10000)
return count;else if(count<1000000)
return(count/1000).toFixed(0)+'K';else
return(count/1000000).toFixed(1)+'M';}
function loadA1DataByUsername(pk,username,try_count=1)
{var baseurl=$("#baseurl").val();var apiurl=$("#apiurl").val();var user_id=$("#user_id").val();if(username=='0')
return false;$(".profile_a").attr('data-f_id',pk);startLoading('.dataA1','frame_loading');$.post(apiurl+'&processName=getA1DataByUsername',{user_id:user_id,username:username},function(data)
{console.log(data);stopLoading('.dataA1','frame_loading');if(data.user_data===false)
{userNotFoundTemplate();return false;}
else if(data.user_data==='')
{if(try_count<getTryCountLimit())
return loadA1DataByUsername(pk,username,(try_count+1));$("#profile_photo").remove();$("#username").html(username);$("#full_name").html('-----');return false;}
a1DataContentWriter(data);}).done(function(){}).fail(function(e){console.log('failed '+try_count);stopLoading();console.log(e);if(try_count<getTryCountLimit())
loadA1DataByUsername(pk,username,(try_count+1));else
templateError(e);});}
function a1DataContentWriter(data)
{console.log('writing datas A1');console.log(data);setTimeout(function()
{$("#username").html(data.user_data.username);$("#full_name").html(data.user_data.full_name);$("#biography").html(data.user_data.biography);$("#profile_photo").attr('src','https://my-cors.1myrcs5ntkm.workers.dev/?'+encodeURIComponent(data.user_data.profile_pic_url));$("#profile_photo").attr('data-hd_src','https://my-cors.1myrcs5ntkm.workers.dev/?'+encodeURIComponent(data.user_data.profile_pic_url_hd));$("#post_count").html(data.user_data.edge_owner_to_timeline_media.count);$("#followers_count").html(convertInstaCount(data.user_data.edge_followed_by.count));$("#following_count").html(convertInstaCount(data.user_data.edge_follow.count));callLazyLoading();},500);}
function download(filename,is_video)
{var baseurl=$("#baseurl").val();startLoading();var that=this;var page_url=baseurl+'/download.php?filename='+filename+'&is_video='+is_video;if(isIos())
{console.log('qq');location.href=page_url;stopLoading();return false;}
var req=new XMLHttpRequest();req.open("POST",page_url,true);req.addEventListener("progress",function(evt){if(evt.lengthComputable){var percentComplete=evt.loaded/evt.total;var percent=parseInt(percentComplete*100);if($('.loading-text').length>0)
$(".loading-spinner").html('<p class="loading-text">'+lang.downloading+'... (<label>'+percent+'%</label>)</p>');else
$(".loading-spinner").append('<p class="loading-text">'+lang.downloading+'... (<label>'+percent+'%</label>)</p>');}},false);if(is_video==1)
var download_file_name='download.mp4';else
var download_file_name='download.jpg';req.responseType="blob";req.onreadystatechange=function(){if(req.readyState===4&&req.status===200)
{if(typeof window.chrome!=='undefined')
{var link=document.createElement('a');link.href=window.URL.createObjectURL(req.response);link.download=download_file_name;link.click();stopLoading();}
else if(typeof window.navigator.msSaveBlob!=='undefined')
{var blob=new Blob([req.response],{type:'application/force-download'});window.navigator.msSaveBlob(blob,download_file_name);stopLoading();}
else
{var file=new File([req.response],download_file_name,{type:'application/force-download'});window.open(URL.createObjectURL(file));stopLoading();}}};req.send();}
function goProfilePage(pk=0,username,profile_pic_url,full_name,is_private=1,try_count=1)
{var baseurl=$("#baseurl").val();if(username=='0')
return false;changePage(baseurl+'/user/'+username);getProfile(pk,username,is_private,1,[],profile_pic_url,full_name);}
function getProfile(pk,username,is_private,try_count=1,checked_cookie_user_ids=[],profile_pic_url,full_name)
{var baseurl=$("#baseurl").val();var apiurl=$("#apiurl").val();var user_id=$("#user_id").val();var loading_svg=$("#loading_svg").val();if(isNaN(parseInt(user_id))||parseInt(user_id)==0)
return false;loadA1DataByUsername(pk,username,1);startLoading();$.post(apiurl+'&processName=getCookie',{user_id:user_id,f_id:pk,is_private:is_private,checked_cookie_user_ids_web:checked_cookie_user_ids,username:username,profile_pic_url:profile_pic_url,full_name:full_name},function(data){stopLoading();console.log(data);if(data.can_look==0)
{if(getSeenLimit()==0)
var text=lang.label_reached_limit_post_fake;else
var text=lang.label_reached_limit_post_fake;changePage(baseurl+'/store?error=label_reached_limit_post');getAlert('error','Error',text+"\n"+lang.daily_limit+": "+getSeenLimit());}
else if(data.unlisted==1)
{$(".unlisted").show();$(".unlisted p").html(data.message);$(".user_story_div").remove();$(".posts_loader").remove();$(".profile_posts").remove();$("#cookie_is_working").val(0);$(".view-followers").removeAttr('onclick');$(".view-following").removeAttr('onclick');}
else if(data.needLogout==1&&1==2)
{href=baseurl+'/login?logout=1&needLogout=1';location.href=href;}
else if(data.daily_max_limit_unical==1)
{$(".max_limit_unical").show();$(".user_story_div").remove();$(".posts_loader").remove();$(".profile_posts").remove();$("#cookie_is_working").val(0);$(".view-followers").removeAttr('onclick');$(".view-following").removeAttr('onclick');}
else if(data.status=='error')
{$(".error_occured").show();if(typeof(data.message)!="undefined")
{$(".error_occured span").html(data.message);}
$(".user_story_div").remove();$(".posts_loader").remove();$(".profile_posts").remove();$("#cookie_is_working").val(0);$(".view-followers").removeAttr('onclick');$(".view-following").removeAttr('onclick');}
else
{var serverToken=data.serverToken;loadUserPosts(pk,username,is_private,serverToken,checked_cookie_user_ids,data);}}).done(function(){}).fail(function(e){console.log('failed '+try_count);stopLoading();console.log(e);if(try_count<getTryCountLimit())
{getProfile(pk,username,is_private,(try_count+1));}
else
templateError(e);});}
function getProfileByUsername(username,try_count=1)
{var apiurl=$("#apiurl").val();var user_id=$("#user_id").val();if(username=='0')
return false;startLoading();$.post(apiurl+'&processName=getA1DataByUsername',{user_id:user_id,username:username},function(data){stopLoading();console.log(data);if(data.user_data.is_private==false)
var is_private=0;else
var is_private=1;getProfile(data.user_data.id,username,is_private);}).done(function(){}).fail(function(e){console.log('failed '+try_count);stopLoading();console.log(e);if(try_count<getTryCountLimit())
getProfileByUsername(username,(try_count+1));else
templateError(e);});}
function getProfileByUserId(f_id,try_count=1)
{var apiurl=$("#apiurl").val();var user_id=$("#user_id").val();if(f_id=='0')
return false;startLoading();$.post(apiurl+'&processName=getA1DataByUsername',{user_id:user_id,f_id:f_id},function(data){stopLoading();console.log(data);if(data.user_data==false)
{userNotFoundTemplate();return false;}
if(data.user_data.is_private==false)
var is_private=0;else
var is_private=1;getProfile(data.user_data.id,data.username,is_private);}).done(function(){}).fail(function(e){console.log('failed '+try_count);stopLoading();console.log(e);if(try_count<getTryCountLimit())
getProfileByUserId(f_id,(try_count+1));else
templateError(e);});}
function getSeenLimit()
{var seen_limit=parseInt($("#seen_limit").val());return seen_limit;}
function loadUserPosts(pk,username,is_private,serverToken,checked_cookie_user_ids,data,try_count=1)
{var loading_svg=$("#loading_svg").val();var can_look_posts=data.can_look_posts;var cookieWorking=data.cookieWorking;var pStatus=data.pStatus;if(cookieWorking==0||data.instagramResponse==null||data.instagramResponse.length==0)
{setTimeout(function(){$(".can_not_show").show();$(".user_story_div").remove();$(".posts_loader").remove();$(".profile_posts").remove();$("#cookie_is_working").val(0);$(".view-followers").removeAttr('onclick');$(".view-following").removeAttr('onclick');$(".loading_stories").remove();},500);return false;}
var user=data.instagramResponse.data.user;var posts=user.edge_owner_to_timeline_media.edges;var post_count=user.edge_owner_to_timeline_media.count;var end_cursor=user.edge_owner_to_timeline_media.page_info.end_cursor;var has_next_page=user.edge_owner_to_timeline_media.page_info.has_next_page;if(post_count>0&&posts.length==0)
{if(checked_cookie_user_ids.length<4)
{if(pStatus==1)
checked_cookie_user_ids.push(data.cookie_user_id);try_count++;getProfile(pk,username,is_private,try_count,checked_cookie_user_ids);return false;}
else
{$(".can_not_show").show();$(".user_story_div").remove();$(".posts_loader").remove();$(".profile_posts").remove();$("#cookie_is_working").val(0);$(".view-followers").removeAttr('onclick');$(".view-following").removeAttr('onclick');if(pStatus==0)
$(".can_not_show div p").append('!');return false;}}
if(has_next_page==false||can_look_posts==0)
{$(".posts_loader").remove();}
$("#has_next_page").val(has_next_page);$("#end_cursor").val(end_cursor);$("#serverToken").val(serverToken);$("#pk").val(pk);$("#username").val(username);$("#cookie_user_id").val(data.cookie_user_id);$.each(posts,function(key,val){val=val.node;var thumbnail_src=val.thumbnail_src;var edge_media_preview_like=convertInstaCount(val.edge_media_preview_like.count);var edge_media_to_comment=convertInstaCount(val.edge_media_to_comment.count);var video_view_count=0;if(val.is_video==true)
video_view_count=convertInstaCount(val.video_view_count);if(val.__typename=='GraphSidecar')
var type='slider';else if(val.__typename=='GraphVideo')
var type='video';else
var type='image';var content='';thumbnail_src='https://my-cors.1myrcs5ntkm.workers.dev/?'+encodeURIComponent(thumbnail_src);content+='<div class="single-media me_wrap">';content+='<img class="media-image view-post" onclick="loadPost(\''+val.shortcode+'\', '+can_look_posts+')" data-src="'+thumbnail_src+'" crossOrigin="" src="'+loading_svg+'" loading="lazy" />';content+='<div class="media-extra">';if(val.is_video==true)content+='<div class="extra-icon extra-play">'+video_view_count+'</div>';if(edge_media_preview_like>-1)content+='<div class="extra-icon extra-heart">'+edge_media_preview_like+'</div>';content+='<div class="extra-icon extra-comment">'+edge_media_to_comment+'</div>';content+='</div>';content+='<div class="media-type '+type+'"></div>';content+='</div>';$(".profile_posts").append(content);});if(data.cookieWorking==1)
{getDailyStory(pk,username,is_private,serverToken,data.cookie_user_id);getSavedStory(pk,username,is_private,serverToken,data.cookie_user_id);}
callLazyLoading();}
function startDownload(imageURL){downloadedImg=new Image;downloadedImg.crossOrigin="Anonymous";downloadedImg.addEventListener("load",imageReceived,false);downloadedImg.src=imageURL;}
function imageReceived(){let canvas=document.createElement("canvas");let context=canvas.getContext("2d");canvas.width=downloadedImg.width;canvas.height=downloadedImg.height;context.drawImage(downloadedImg,0,0);imageBox.appendChild(canvas);try{localStorage.setItem("saved-image-example",canvas.toDataURL("image/png"));}
catch(err){console.log("Error: "+err);}}
function loadPost(shortcode,can_look_posts,try_count=1)
{var baseurl=$("#baseurl").val();var apiurl=$("#apiurl").val();var user_id=$("#user_id").val();var loading_svg=$("#loading_svg").val();var pk=$("#pk").val();var serverToken=$("#serverToken").val();var cookie_user_id=$("#cookie_user_id").val();if(can_look_posts==0)
{if(getSeenLimit()==0)
var text=lang.label_reached_limit_post_fake;else
var text=lang.label_reached_limit_post;changePage(baseurl+'/store?error=label_reached_limit_post');getAlert('error','Error',text+"\n"+lang.daily_limit+": "+getSeenLimit());return false;}
variables=encodeURIComponent('{"shortcode":"'+shortcode+'","child_comment_count":3,"fetch_comment_count":40,"parent_comment_count":24,"has_threaded_comments":true}');var url='https://www.instagram.com/graphql/query/?query_hash=eaffee8f3c9c089c9904a5915a898814&variables='+variables;startLoading();$.post(apiurl+'&processName=getJson',{user_id:user_id,f_id:pk,serverToken:serverToken,url:url,cookie_user_id:cookie_user_id},function(data){stopLoading();var width='80%';if(isMobile())
width='100%';if(data.status=='error')
{if(typeof(data.tokenExpired)!='undefined'&&data.tokenExpired==1)
{changePage(baseurl+'/search','replace');$.toast({heading:'Warning.',text:data.message,hideAfter:6000,allowToastClose:true,})
return false;}
else
{getAlert('error','Error',data.message);return false;}}
else if(typeof(data.instagramResponse)=='undefined'||data.instagramResponse==null||data.instagramResponse.data.shortcode_media==null||data.instagramResponse.status=='fail')
{if(try_count<getTryCountLimit())
{loadPost(shortcode,can_look_posts,try_count+1);console.log('Trying again');}
else
getAlert('error','Error',lang.getting_error);return false;}
var data=data.instagramResponse.data.shortcode_media;var caption=data.edge_media_to_caption.edges[0];if(data.edge_media_to_caption.edges.length>0)
caption=caption.node.text;else
caption='';var content='';content+='<div class="row m-0 full-row">';content+='<div class="col-md-7 col-12 px-0">';content+='<div class="swiper-container swiper-post">';content+='<div class="swiper-wrapper">';if(typeof(data.edge_sidecar_to_children)!="undefined"&&data.edge_sidecar_to_children!==null)
{var edges=data.edge_sidecar_to_children.edges;$.each(edges,function(index,val){var data_in=val.node;var is_video=0;var file=data_in.display_url;file='https://my-cors.1myrcs5ntkm.workers.dev/?'+encodeURIComponent(file);file_fake=baseurl+'/assets/img/click.png';var showing='<img crossOrigin="" data-src="'+file+'" src="'+loading_svg+'" loading="lazy">';if(data_in.is_video==true)
{is_video=1;file=data_in.video_url;showing='<div class=""><a href="'+data_in.video_url+'" target="_blank"><img style="width:100%;height: 70vh;" src="'+file_fake+'" /></a></div>';}
var base64=btoa(file);content+='<div class="media-view swiper-slide">';content+=showing;content+='<div class="download" onclick="download(\''+base64+'\', '+is_video+')">';content+='<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">';content+='<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">';content+='<rect opacity="0" x="0" y="0" width="24" height="24"></rect>';content+='<path d="M2,13 C2,12.5 2.5,12 3,12 C3.5,12 4,12.5 4,13 C4,13.3333333 4,15 4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 C2,15 2,13.3333333 2,13 Z" fill="#000000" fill-rule="nonzero" opacity="0.3"></path>';content+='<rect fill="#000000" opacity="0.3" transform="translate(12.000000, 8.000000) rotate(-180.000000) translate(-12.000000, -8.000000) " x="11" y="1" width="2" height="14" rx="1"></rect>';content+='<path d="M7.70710678,15.7071068 C7.31658249,16.0976311 6.68341751,16.0976311 6.29289322,15.7071068 C5.90236893,15.3165825 5.90236893,14.6834175 6.29289322,14.2928932 L11.2928932,9.29289322 C11.6689749,8.91681153 12.2736364,8.90091039 12.6689647,9.25670585 L17.6689647,13.7567059 C18.0794748,14.1261649 18.1127532,14.7584547 17.7432941,15.1689647 C17.3738351,15.5794748 16.7415453,15.6127532 16.3310353,15.2432941 L12.0362375,11.3779761 L7.70710678,15.7071068 Z" fill="#000000" fill-rule="nonzero" transform="translate(12.000004, 12.499999) rotate(-180.000000) translate(-12.000004, -12.499999) "></path>';content+='</g>';content+='</svg>';content+='</div>';content+='</div>';});}
else
{var is_video=0;var file=data.display_url;file='https://my-cors.1myrcs5ntkm.workers.dev/?'+encodeURIComponent(file);file_fake=baseurl+'/assets/img/click.png';var showing='<img data-src="'+file+'" style="min-height: 400px;" crossOrigin="" src="'+loading_svg+'" loading="lazy">';if(data.is_video==true)
{is_video=1;file='https://my-cors.1myrcs5ntkm.workers.dev/?'+encodeURIComponent(data.video_url);showing='<video style="width: 100%" height="400" controls="true" width="100%" height="auto" type="video/mp4" playsinline><source crossOrigin="" src="'+file+'" type="video/mp4">Your browser does not support the video tag.</video>';if(isIos())
showing='<div class=""><a href="'+data.video_url+'" target="_blank"><img style="width:100%;height: 70vh;" crossOrigin="" src="'+file_fake+'" /></a></div>';}
var base64=btoa(file);content+='<div class="media-view swiper-slide">';content+=showing;content+='<div class="download" onclick="download(\''+base64+'\', '+is_video+')">';content+='<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">';content+='<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">';content+='<rect opacity="0" x="0" y="0" width="24" height="24"></rect>';content+='<path d="M2,13 C2,12.5 2.5,12 3,12 C3.5,12 4,12.5 4,13 C4,13.3333333 4,15 4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 C2,15 2,13.3333333 2,13 Z" fill="#000000" fill-rule="nonzero" opacity="0.3"></path>';content+='<rect fill="#000000" opacity="0.3" transform="translate(12.000000, 8.000000) rotate(-180.000000) translate(-12.000000, -8.000000) " x="11" y="1" width="2" height="14" rx="1"></rect>';content+='<path d="M7.70710678,15.7071068 C7.31658249,16.0976311 6.68341751,16.0976311 6.29289322,15.7071068 C5.90236893,15.3165825 5.90236893,14.6834175 6.29289322,14.2928932 L11.2928932,9.29289322 C11.6689749,8.91681153 12.2736364,8.90091039 12.6689647,9.25670585 L17.6689647,13.7567059 C18.0794748,14.1261649 18.1127532,14.7584547 17.7432941,15.1689647 C17.3738351,15.5794748 16.7415453,15.6127532 16.3310353,15.2432941 L12.0362375,11.3779761 L7.70710678,15.7071068 Z" fill="#000000" fill-rule="nonzero" transform="translate(12.000004, 12.499999) rotate(-180.000000) translate(-12.000004, -12.499999) "></path>';content+='</g>';content+='</svg>';content+='</div>';content+='</div>';}
content+='</div>';content+='<div class="swiper-pagination"></div><div class="swiper-button-prev"></div><div class="swiper-button-next"></div>';content+='</div>';content+='</div>';content+='<div class="col-md-5 col-12 py-4">';content+='<div class="d-flex">';content+='<div class="align-self-center ml-2 text-left">';content+='<p class="mb-1"><b>'+data.owner.username+'</b></p>';content+='<p class="mb-1">'+data.owner.full_name+'</p>';content+='<p class="mb-0"><small style="font-weight: bold;">'+timestampToDate(data.taken_at_timestamp)+'</small></p>';content+='<p class="mb-0" style="max-height: 200px;overflow: auto;padding-right: 3px;"><small>'+caption+'</small></p>';content+='</div>';var caption_edges=data.edge_media_to_caption.edges;if(caption_edges>0)
var caption=data.edge_media_to_caption.edges[0]['node']['text'];else
var caption='';if(data.edge_media_preview_like.count==-1)
{var liker_label=lang.loading;getPostLikerCount(shortcode);}
else
var liker_label=convertInstaCount(data.edge_media_preview_like.count)+' '+lang.like_text;content+='</div>';content+='<hr>';content+='<div class="media-comments">';content+='<p>'+caption+'</p>';content+='<div class="d-flex justify-content-between my-2">';content+='<span class="view-all-comment liker_count_span" style="cursor: pointer;" onclick="loadLikers(\''+shortcode+'\')">'+liker_label+'</span>';content+='<span class="view-all-comment">'+convertInstaCount(data.edge_media_preview_comment.count)+' '+lang.comments_text+'</span>';content+='</div>';content+='<div>';content+='<ul class="comments_ul">';var edges=data.edge_media_to_parent_comment.edges;var comment_end_cursor=data.edge_media_to_parent_comment.page_info.end_cursor;var comment_has_next_page=data.edge_media_to_parent_comment.page_info.has_next_page;if(edges.length==0)
comment_has_next_page=false;$.each(edges,function(index,val){var comment=val.node;var reply_count=convertInstaCount(comment.edge_threaded_comments.count);var like_count=convertInstaCount(comment.edge_liked_by.count);content+='<li class="single-comment" id="comment_div_'+comment.id+'">';content+='<div class="d-flex">';content+='<div class="single-comment_text">';content+='<p><strong class="cursor-pointer" onclick="changePage(\''+baseurl+'/user/'+comment.owner.username+'\', \'push\', \'#change_section\', \'#change_section\', \'post_page\')">'+comment.owner.username+'</strong> '+comment.text+'</p>';content+='<p class="d-flex justify-content-between w-100 comment-info">';content+='<span class="text-left">'+timestampToDate(comment.created_at)+'</span>';if(reply_count>0)content+='<span class="text-center cursor-pointer showReply" onclick="loadReplyComments(\''+comment.id+'\')">'+reply_count+' '+lang.comments_text+'</span>';content+='<span class="text-right ">'+like_count+' '+lang.like_text+'</span>';content+='</p>';content+='</div>';content+='</div>';content+='</li>';});if(comment_has_next_page==true)
content+='<li onclick="loadMoreComment(\''+shortcode+'\', \''+btoa(comment_end_cursor)+'\')" class="comments_loader"><div class="text-center" style="margin:auto;"><button type="button" class="btn btn-primary">'+lang.more+'</button></div></li>';content+='</ul>';content+='</div>';content+='</div>';content+='</div>';content+='</div>';$.sweetModal({content:content,width:width,});var swiper=new Swiper('.swiper-post',{slidesPerView:1,slidesPerGroup:1,loop:false,loopFillGroupWithBlank:true,pagination:{el:'.swiper-pagination',clickable:true,},navigation:{nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev',},});callLazyLoading();}).done(function(){}).fail(function(e){console.log('failed '+try_count);stopLoading();if(try_count<getTryCountLimit())
loadPost(shortcode,can_look_posts,(try_count+1))
else
templateError(e);});}
function loadUserPostsMore(try_count=1)
{var baseurl=$("#baseurl").val();var apiurl=$("#apiurl").val();var user_id=$("#user_id").val();var loading_svg=$("#loading_svg").val();var end_cursor=$("#end_cursor").val();var pk=$("#pk").val();var serverToken=$("#serverToken").val();var cookie_user_id=$("#cookie_user_id").val();variables=encodeURIComponent('{"id":"'+pk+'","first":12,"after":"'+end_cursor+'"}');var url='https://www.instagram.com/graphql/query/?query_hash=56a7068fea504063273cc2120ffd54f3&variables='+variables;$.post(apiurl+'&processName=getJson',{user_id:user_id,f_id:pk,serverToken:serverToken,url:url,cookie_user_id:cookie_user_id},function(data)
{console.log(data);if(data.status=='error')
{getAlert('error','Error',data.message);return false;}
if(typeof(data.instagramResponse)=='undefined'||data.instagramResponse==null||data.instagramResponse.status=='fail')
{if(try_count<getTryCountLimit())
{setTimeout(function(){loadUserPostsMore(try_count+1);console.log('Try again: '+(try_count+1));},500);}
return false;}
var can_look_posts=data.can_look_posts;var posts=data.instagramResponse.data.user.edge_owner_to_timeline_media.edges;var end_cursor=data.instagramResponse.data.user.edge_owner_to_timeline_media.page_info.end_cursor;var has_next_page=data.instagramResponse.data.user.edge_owner_to_timeline_media.page_info.has_next_page;if(has_next_page==false)
{$(".posts_loader").remove();}
$("#has_next_page").val(has_next_page);$("#end_cursor").val(end_cursor);$.each(posts,function(key,val)
{val=val.node;var thumbnail_src=val.thumbnail_src;var edge_media_preview_like=convertInstaCount(val.edge_media_preview_like.count);var edge_media_to_comment=convertInstaCount(val.edge_media_to_comment.count);var video_view_count=0;if(val.is_video==true)
video_view_count=convertInstaCount(val.video_view_count);if(val.__typename=='GraphSidecar')
var type='slider';else if(val.__typename=='GraphVideo')
var type='video';else
var type='image';var content='';thumbnail_src='https://my-cors.1myrcs5ntkm.workers.dev/?'+encodeURIComponent(thumbnail_src);content+='<div class="single-media">';content+='<img class="media-image view-post" onclick="loadPost(\''+val.shortcode+'\', '+can_look_posts+')" data-src="'+thumbnail_src+'" crossOrigin="" src="'+loading_svg+'" loading="lazy" />';content+='<div class="media-extra">';if(val.is_video==true)content+='<div class="extra-icon extra-play">'+video_view_count+'</div>';content+='<div class="extra-icon extra-heart">'+edge_media_preview_like+'</div>';content+='<div class="extra-icon extra-comment">'+edge_media_to_comment+'</div>';content+='</div>';content+='<div class="media-type '+type+'"></div>';content+='</div>';$(".profile_posts").append(content);$(".profile_posts").attr('loading','0');});callLazyLoading();}).done(function(){}).fail(function(e){console.log('failed '+try_count);stopLoading();console.log(e);if(try_count<getTryCountLimit())
loadUserPostsMore((try_count+1));else
getAlert('error','Error',lang.getting_error);});}
function getDailyStory(pk,username,is_private,serverToken,cookie_user_id,try_count=1)
{var apiurl=$("#apiurl").val();var user_id=$("#user_id").val();var query_hash='52a36e788a02a3c612742ed5146f1676';var myData={'"reel_ids"':'["'+pk+'"]','"tag_names"':'[]','"location_ids"':'[]','"highlight_reel_ids"':'[]','"precomposed_overlay"':'false','"show_story_viewer_list"':'true','"story_viewer_fetch_count"':'50','"story_viewer_cursor"':'""','"stories_video_dash_manifest"':'false'};var out=[];for(var key in myData){if(myData.hasOwnProperty(key)){out.push(encodeURIComponent(key)+encodeURIComponent(':')+encodeURIComponent(myData[key]));}}
out=out.join(encodeURIComponent(','));var variables='%7B'+out+'%7D';var url='https://www.instagram.com/graphql/query/?query_hash='+query_hash+'&variables='+variables;$.post(apiurl+'&processName=getJson',{user_id:user_id,f_id:pk,serverToken:serverToken,url:url,cookie_user_id:cookie_user_id},function(data){console.log(data);if(typeof(data.instagramResponse)!='undefined'&&data.instagramResponse!=null&&data.instagramResponse.status!='fail')
{var reels_media=data.instagramResponse.data.reels_media;if(reels_media.length>0)
{$(".profile_a").removeClass('view-profile-photo');$(".profile_a").addClass('view-daily-story');$(".profile_a").attr('data-f_id',pk);$("#profile_photo").parent('div').addClass('daily-stories');}}}).done(function(){}).fail(function(e){console.log('failed');stopLoading();if(try_count<getTryCountLimit())
getDailyStory(pk,username,is_private,serverToken,cookie,(try_count+1));});}
function getSavedStory(pk,username,is_private,serverToken,cookie_user_id,try_count=1)
{var apiurl=$("#apiurl").val();var user_id=$("#user_id").val();var loading_svg=$("#loading_svg").val();var query_hash='ad99dd9d3646cc3c0dda65debcd266a7';var myData={'"user_id"':'"'+pk+'"','"include_chaining"':'false','"include_reel"':'false','"include_suggested_users"':'false','"include_logged_out_extras"':'false','"include_highlight_reels"':'true','"include_live_status"':'false'};var out=[];for(var key in myData){if(myData.hasOwnProperty(key)){out.push(encodeURIComponent(key)+encodeURIComponent(':')+encodeURIComponent(myData[key]));}}
out=out.join(encodeURIComponent(','));var variables='%7B'+out+'%7D';var url='https://www.instagram.com/graphql/query/?query_hash='+query_hash+'&variables='+variables;$.post(apiurl+'&processName=getJson',{user_id:user_id,f_id:pk,serverToken:serverToken,url:url,cookie_user_id:cookie_user_id},function(data){console.log(data);$(".loading_stories").remove();if(typeof(data.instagramResponse)=='undefined'||data.instagramResponse==null||typeof(data.instagramResponse.status)=='undefined'||data.instagramResponse.status=='fail')
{$(".no_any_story").show();$(".user_story_div").remove();}
else
{var edges=data.instagramResponse.data.user.edge_highlight_reels.edges;if(edges.length==0)
{$(".no_any_story").show();$(".user_story_div").remove();}
else
{$(".user_story_div").find('.swiper-wrapper').html('');can_look_story=data.can_look_story;$.each(edges,function(key,val)
{var img_url=val.node.cover_media_cropped_thumbnail.url;var img_url='https://my-cors.1myrcs5ntkm.workers.dev/?'+encodeURIComponent(img_url);var title=val.node.title;var content='';content+='<div class="story-media swiper-slide">';content+='<img class="view-saved-story" data-can_look_story="'+can_look_story+'" data-highlight_id="'+val.node.id+'" data-f_id="'+pk+'" data-serverToken="'+serverToken+'" data-cookie_user_id="'+data.cookie_user_id+'" data-highlight_reel_ids="" crossOrigin="" data-src="'+img_url+'" src="'+loading_svg+'" loading="lazy">';content+='<p>'+title+'</p>';content+='</div>';$(".user_story_div").find('.swiper-wrapper').append(content);});var swiper=new Swiper('.swiper-story',{slidesPerView:5,slidesPerGroup:5,loop:false,loopFillGroupWithBlank:true,pagination:{el:'.swiper-pagination',clickable:true,},navigation:{nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev',},});callLazyLoading();}}}).done(function(){}).fail(function(e){console.log('failed');stopLoading();if(try_count<getTryCountLimit())
getSavedStory(pk,username,is_private,serverToken,cookie,(try_count+1));});}
function makePayment(package,title,gift_user_id=0,will_hide=0,try_count=1)
{var apiurl=$("#apiurl").val();var user_id=$("#user_id").val();startLoading();$.post(apiurl+'&processName=pay',{user_id:user_id,package:package,title:title,gift_user_id:gift_user_id,will_hide:will_hide},function(data)
{stopLoading();if(typeof(data.status)=="undefined"||data.status===null)
{getInformations();return false;}
if(data.status=='success')
{$("#need_getInfo").val(1);$("#openPopup").attr('data-href',data.url);if(isIos())
{$(".first_box").hide();$(".gift_div").hide();$(".second_box").show();var title=$(".price-title."+package).html();var text=$(".price-body."+package).html();$(".second_box .price-title").html(title);$(".second_box .price-body").html(text);$(".second_box .price-footer").attr('data-href',data.url);}
else
{var evt=document.createEvent("HTMLEvents");evt.initEvent("click",false,true);document.getElementById('openPopup').dispatchEvent(evt);}}
else if(data.status=='error')
getAlert('error','Error',data.message);}).done(function(){}).fail(function(e){console.log('failed '+try_count);stopLoading();console.log(e);if(try_count<getTryCountLimit())
makePayment(package,title,gift_user_id,will_hide,(try_count+1));else
templateError(e);});}
var win;function openPopup()
{var url=$("#openPopup").data('href');var left=(screen.width/2);var top=(screen.height/2);var popWidth=800;var popHeight=600;var popTop=top-popHeight/2;var popLeft=left-popWidth/2;if(win&&!win.closed)
{win.focus();}
else
{win=window.open(url,'payment_window','height='+popHeight+', width='+popWidth+', resizeable=yes, top='+popTop+', left='+popLeft);win.focus();}
console.log('opened');}
function polling(){if(win&&win.closed){clearInterval(timer);var baseurl=$("#baseurl").val();var current_page=$("#current_page").val();if(current_page=='store')
var reload_url=baseurl+'/'+current_page+'?tab=subscription';else
var reload_url=baseurl+'/'+current_page+'?tab=statistic';location.href=reload_url;}}
timer=setInterval(function(){polling();},300);