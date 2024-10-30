function ivrss_submit()
{
	if(document.ivrss_form.ivrss_path.value=="")
	{
		alert(ivrss_adminscripts.ivrss_path);
		document.ivrss_form.ivrss_path.focus();
		return false;
	}
	else if(document.ivrss_form.ivrss_link.value=="")
	{
		alert(ivrss_adminscripts.ivrss_link);
		document.ivrss_form.ivrss_link.focus();
		return false;
	}
	else if(document.ivrss_form.ivrss_target.value=="")
	{
		alert(ivrss_adminscripts.ivrss_target);
		document.ivrss_form.ivrss_target.focus();
		return false;
	}
	else if(document.ivrss_form.ivrss_title.value=="")
	{
		alert(ivrss_adminscripts.ivrss_title);
		document.ivrss_form.ivrss_title.focus();
		return false;
	}
	else if(document.ivrss_form.ivrss_type.value=="")
	{
		alert(ivrss_adminscripts.ivrss_type);
		document.ivrss_form.ivrss_type.focus();
		return false;
	}
	else if(document.ivrss_form.ivrss_status.value=="")
	{
		alert(ivrss_adminscripts.ivrss_status);
		document.ivrss_form.ivrss_status.focus();
		return false;
	}
	else if(document.ivrss_form.ivrss_order.value=="")
	{
		alert(ivrss_adminscripts.ivrss_order);
		document.ivrss_form.ivrss_order.focus();
		return false;
	}
	else if(isNaN(document.ivrss_form.ivrss_order.value))
	{
		alert(ivrss_adminscripts.ivrss_order);
		document.ivrss_form.ivrss_order.focus();
		return false;
	}
}

function ivrss_delete(id)
{
	if(confirm(ivrss_adminscripts.ivrss_delete))
	{
		document.frm_ivrss_display.action="options-general.php?page=image-vertical-reel-scroll-slideshow&ac=del&did="+id;
		document.frm_ivrss_display.submit();
	}
}	

function ivrss_redirect()
{
	window.location = "options-general.php?page=image-vertical-reel-scroll-slideshow";
}

function ivrss_help()
{
	window.open("http://www.gopiplus.com/work/2011/05/30/wordpress-plugin-image-vertical-reel-scroll-slideshow/");
}