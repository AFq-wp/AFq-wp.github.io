var appMaster = {
	animateScript() {
		$('.scrollpoint.sp-effect1').waypoint(function () { $(this).toggleClass('active'); $(this).toggleClass('animated fadeInLeft');}, { offset: '100%' });
		$('.scrollpoint.sp-effect2').waypoint(function () { $(this).toggleClass('active'); $(this).toggleClass('animated fadeInRight'); }, { offset: '100%' });
		$('.scrollpoint.sp-effect3').waypoint(function () { $(this).toggleClass('active'); $(this).toggleClass('animated fadeInDown'); }, { offset: '100%' });
		$('.scrollpoint.sp-effect4').waypoint(function () { $(this).toggleClass('active'); $(this).toggleClass('animated fadeIn'); }, { offset: '100%' });
		$('.scrollpoint.sp-effect5').waypoint(function () { $(this).toggleClass('active'); $(this).toggleClass('animated fadeInUp'); }, { offset: '100%' });
		$('.scrollpoint.sp-effect6').waypoint(function () { $(this).toggleClass('active'); $(this).toggleClass('animated tada'); }, { offset: '100%' });
	}
};

$(document).ready(() => {
	// 延迟等待大红门效果结束
	setTimeout(() => {
		appMaster.animateScript();
	}, 500)
});
